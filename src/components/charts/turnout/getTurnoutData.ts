import { IChartData, IDataFilter } from "../../../interfaces";
import countries from "../../../datasets/countries.json";
export interface Turnout {
    id: string;
    seatsTotal: string;
    seatsPercentEU: string;
}
export type TurnoutData = Turnout & IChartData;

export const getData = async () => {
    const response = await fetch("data/turnout.json");
    const json = await response.json();
    const turnout = json.years

        //clear years with no data
        .filter((year: any) => year.turnoutByYear.turnoutEU !== null)

        .map((year: any) => {
            //general voting turnout and years
            const yearData: any = {
                year: year.yearId,
                percent: year.turnoutByYear.turnoutEU.percent,
            };
            //data for each country
            year.turnoutByYear.turnoutByCountry.forEach(
                (country: { countryId: string; percent: number }) => {
                    yearData[country.countryId] = country.percent
                        ? country.percent
                        : 0;
                },
            );
            return yearData;
        });
    const countries = await getCountries(json.years);
    return [turnout, countries];
};

const getCountries = (years: []) => {
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
