import { IDataFilter } from "../../interfaces";
import countries from "../../datasets/countries.json";
import { fetchJson } from "../../helpers/fetchData";

export interface ITurnout {
    year: string;
    percent: number;
    [index: string]: string | number;
}

//Interfaces for fetching data
interface year {
    yearId: string;
    turnoutByYear: {
        turnoutEU: { percent: number };
        turnoutByCountry: countryTurnout[];
    };
}
interface countryTurnout {
    countryId: string;
    status: string;
    time: string | null;
    percent: number;
}

export const getData = async (): Promise<[ITurnout[], IDataFilter[]]> => {
    const data = await fetchJson("data/turnout.json");
    const turnout = (data.years as year[])

        //clear years with no data
        .filter((year) => year.turnoutByYear.turnoutEU !== null)

        .map((year: year) => {
            //general voting turnout and years
            const yearData: ITurnout = {
                year: year.yearId,
                percent: year.turnoutByYear.turnoutEU.percent,
            };
            //data for each country
            year.turnoutByYear.turnoutByCountry.forEach(
                (country: countryTurnout) => {
                    yearData[country.countryId] = country.percent
                        ? country.percent
                        : 0;
                },
            );
            return yearData;
        });
    const countries = getCountries(data.years);
    return [turnout, countries];
};

const getCountries = (years: year[]): IDataFilter[] => {
    //create a list of unique ids
    const countriesIds = new Set<string>();
    years.forEach((year: any) => {
        year.turnoutByYear.turnoutByCountry.forEach(
            (country: { countryId: string }) => {
                countriesIds.add(country.countryId);
            },
        );
    });
    //create a list of countries
    const countriesWithNames: IDataFilter[] = [];

    Array.from(countriesIds).map((id) => {
        const countryName: string = findName(id);
        countriesWithNames.push({ name: countryName, key: id });
    });
    return countriesWithNames;
};

const findName = (id: string) => {
    const countryData = countries.countriesNames.find(
        (country: { name: string; code: string }) => country.code === id,
    );
    return countryData ? countryData.name : id;
};
