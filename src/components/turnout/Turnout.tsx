import { useState, FC, useEffect } from "react";
import ChartContainer from "../charts/ChartContainer";
import FilterDatasets from "../charts/FilterDatasets";

import CustomLineChart from "../charts/CustomLineChart";
import Text from "../Text";
import { getData } from "./getTurnoutData";
import { IDataFilter } from "../../interfaces";
import { ITurnout } from "./getTurnoutData";
import turnoutMD from "./turnout.md";

const Turnout: FC = () => {
    //for filtering
    const [countries, setCountries] = useState<IDataFilter[]>([]);
    const [selectedCountries, setSelectedCountries] = useState<IDataFilter[]>([
        { name: "Poland", key: "PL" },
    ]);
    //GET DATA
    const [turnout, setTurnout] = useState<ITurnout[]>([]);

    useEffect(() => {
        getData().then((data) => {
            const [turnoutData, countriesList] = data;
            setTurnout(turnoutData);
            setCountries(countriesList);
        });
    }, []);

    return (
        <div id="turnout">
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
                    dataFilter={selectedCountries}
                    dataType={{ name: "percent", key: "percent", unit: "%" }}
                />
            </ChartContainer>
            <Text mdFile={turnoutMD} />
        </div>
    );
};

export default Turnout;
