import { fetchJson } from "../../helpers/fetchData";
import { getGroupName, getGroupsList } from "../../helpers/names";
import { IChartData, IGroup, IName } from "../../interfaces";
import GeneralResults from "./GeneralResults";

export interface IGeneralResults {
    id: string;
    seatsTotal: string;
    seatsPercentEU: string;
}
export type GeneralResultsData = IGeneralResults & IChartData;

export const getData = async (): Promise<GeneralResultsData[]> => {
    //get election results
    const results = await fetchJson("./data/eu.json");
    //get groups names from a separate source
    const groups: IGroup[] = await getGroupsList();

    //format data for chart
    const chartData: GeneralResultsData[] = results.groupDistribution.map(
        (result: IGeneralResults) => {
            //find name
            const name: IName = getGroupName(result.id, groups);
            return {
                groupId: result.id,
                seatsTotal: result.seatsTotal,
                seatsPercent: result.seatsPercentEU,
                shortName: name.short,
                name: name.long,
            };
        },
    );
    return chartData;
};
