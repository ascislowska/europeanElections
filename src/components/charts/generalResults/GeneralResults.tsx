import { useEffect, useState } from "react";
import { GeneralResultsData, getData } from "./getGeneralResults";
import ChartContainer from "../layout/ChartContainer";

import CustomPieChart from "../layout/CustomPieChart";
import SwitchData from "../layout/SwitchData";
import { IDataFilter } from "../../../interfaces";

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

    return (
        <ChartContainer
            title="Results - EU"
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
    );
};

export default GeneralResults;
