import { useEffect, useState } from "react";
import ChartContainer from "../layout/ChartContainer";
import { PolishResultsData, getData } from "./getPolishResults";

import CustomBarChart from "../layout/CustomBarChart";
import SwitchData from "../layout/SwitchData";
import { IDataFilter } from "../../../interfaces";
import CustomPieChart from "../layout/CustomPieChart";

const PolishResults = () => {
    //Filters
    const filter: IDataFilter[] = [
        { name: "Percent of Votes", key: "votesPercent", unit: "%" },
        { name: "Seats in EP", key: "seatsTotal", unit: "" },
    ];
    const [selectedData, setSelectedData] = useState(filter[1]);

    //Get data
    const [results, setResults] = useState<PolishResultsData[]>([]);
    useEffect(() => {
        getData().then((data) => setResults(data));
    }, []);

    return (
        <>
            <ChartContainer
                title="Results in Poland"
                options={
                    <SwitchData
                        selectedData={selectedData}
                        setSelectedData={setSelectedData}
                        values={filter}
                    />
                }
            >
                <CustomBarChart data={results} selectedData={selectedData} />
            </ChartContainer>
            <ChartContainer
                title="Results in Poland"
                options={
                    <SwitchData
                        selectedData={selectedData}
                        setSelectedData={setSelectedData}
                        values={filter}
                    />
                }
            >
                <CustomPieChart data={results} selectedData={selectedData} />
            </ChartContainer>
        </>
    );
};

export default PolishResults;
