import { getGroupName, getGroupsList } from "../../../helpers/names";
import { IChartData, IGroup, IName } from "../../../interfaces";
import GeneralResults from "./GeneralResults";

export interface GeneralResults {
    id: string;
    seatsTotal: string;
    seatsPercentEU: string;
}
export type GeneralResultsData = GeneralResults & IChartData;

export const getData = async (): Promise<GeneralResultsData[]> => {
    const response = await fetch("data/eu.json");
    const json = await response.json();
    const results = json.groupDistribution;

    //get groups names from a separate source
    const groups: IGroup[] = await getGroupsList();

    //format data for chart
    const chartData: GeneralResultsData[] = results.map(
        (result: GeneralResults) => {
            //find name
            const name: IName = getGroupName(result.id, groups);
            return {
                groupId: result.id,
                seatsTotal: result.seatsTotal,
                seatsPercent: result.seatsPercentEU,
                shortName: name.short,
                longName: name.long,
            };
        },
    );
    return chartData;
};
