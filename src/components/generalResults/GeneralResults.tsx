import { useEffect, useState } from "react";
import { GeneralResultsData, getData } from "./getGeneralResults";
import ChartContainer from "../charts/ChartContainer";

import CustomPieChart from "../charts/CustomPieChart";
import SwitchData from "../charts/SwitchData";
import { IDataFilter } from "../../interfaces";
import Tabs from "../charts/Tabs";
import CustomBarChart from "../charts/CustomBarChart";
import Text from "../Text";
import resultsMD from "./results.md";

const GeneralResults = () => {
    //Filters
    const filter: IDataFilter[] = [
        { name: "Seats percent", key: "seatsPercent", unit: "%" },
        { name: "Seats total", key: "seatsTotal", unit: "" },
    ];
    const [selectedData, setSelectedData] = useState(filter[0]);

    //Get data
    const [results, setResults] = useState<GeneralResultsData[]>([]);

    useEffect(() => {
        getData().then((data: GeneralResultsData[]) => setResults(data));
    }, []);

    //chart Type
    const [chartType, setChartType] = useState("pie");

    return (
        <div id="general-results">
            <ChartContainer
                title="Results - EU"
                tabs={
                    <Tabs
                        chartTypes={["pie", "bar"]}
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
                {chartType === "bar" && (
                    <CustomBarChart
                        data={results}
                        selectedData={selectedData}
                    />
                )}

                {chartType === "pie" && (
                    <CustomPieChart
                        data={results}
                        selectedData={selectedData}
                    />
                )}
            </ChartContainer>
            <Text mdFile={resultsMD} />
        </div>
    );
};

export default GeneralResults;
