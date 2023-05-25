import { useState, FC, useEffect } from "react";
import ChartContainer from "../layout/ChartContainer";
import FilterDatasets from "../layout/FilterDatasets";

import CustomLineChart from "../layout/CustomLineChart";
import { getData } from "./getTurnoutData";
import CustomPieChart from "../layout/CustomPieChart";
import { IDataFilter } from "../../../interfaces";

const Turnout: FC = () => {
    //for filtering
    const [countries, setCountries] = useState<IDataFilter[]>([]);
    const [selectedCountries, setSelectedCountries] = useState<IDataFilter[]>([
        { name: "Poland", key: "PL" },
    ]);
    //GET DATA
    const [turnout, setTurnout] = useState([]);

    useEffect(() => {
        getData().then((data) => {
            const [turnoutData, countriesList] = data;
            setCountries(countriesList);
            setTurnout(turnoutData);
        });
    }, []);

    return (
        <>
            <ChartContainer
                title="Voting turnout in EU elections"
                options={
                    <FilterDatasets
                        filterBy={countries}
                        setSelectedFilters={setSelectedCountries}
                        selectedFilters={selectedCountries}
                    />
                }
            >
                <CustomLineChart
                    data={turnout}
                    selectedData={selectedCountries}
                />
            </ChartContainer>
            {/* <ChartContainer
                title="Voting turnout in EU elections"
                options={
                    <FilterDatasets
                        filterBySet={countries}
                        setSelectedFilters={setSelectedCountries}
                        selectedFilters={selectedCountries}
                    />
                }
            >
                <CustomPieChart
                    data={turnout}
                    selectedData={selectedCountries}
                />
            </ChartContainer> */}
        </>
    );
};

export default Turnout;
