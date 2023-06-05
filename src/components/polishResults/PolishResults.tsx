import { useEffect, useState } from "react";
import ChartContainer from "../charts/ChartContainer";
import { PolishResultsData, getData } from "./getPolishResults";

import CustomBarChart from "../charts/CustomBarChart";
import SwitchData from "../charts/SwitchData";
import { IDataFilter } from "../../interfaces";
import CustomPieChart from "../charts/CustomPieChart";
import Tabs from "../charts/Tabs";
import Text from "../Text";
import polishMD from "./polish.md";

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
    //chart Type
    const [chartType, setChartType] = useState("bar");
    return (
        <div id="polish-results">
            <ChartContainer
                title="Results in Poland"
                tabs={
                    <Tabs
                        chartTypes={["bar", "pie"]}
                        selectedChartType={chartType}
                        setSelectedChartType={setChartType}
                    />
                }
                options={
                    <SwitchData
                        selectedData={selectedData}
                        setSelectedData={setSelectedData}
                        values={filter}
                    />
                }
            >
                {chartType === "bar" ? (
                    <CustomBarChart
                        data={results}
                        selectedData={selectedData}
                    />
                ) : (
                    <CustomPieChart
                        data={results}
                        selectedData={selectedData}
                    />
                )}
            </ChartContainer>
            <Text mdFile={polishMD} />
        </div>
    );
};

export default PolishResults;
