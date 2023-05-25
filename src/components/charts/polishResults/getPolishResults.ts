import { getNamesList, getName } from "../../../helpers/names";
import { IChartData, IName, IParty } from "../../../interfaces";

interface PolishResults {
    id: string;
    seatsTotal: string;
    votesPercent: string;
}
export type PolishResultsData = PolishResults & IChartData;

export const getData = async (): Promise<PolishResultsData[]> => {
    const partiesList: IParty[] = await getNamesList("PL");

    const response = await fetch("data/pl.json");
    const json = await response.json();
    const results: PolishResultsData[] = json.partySummary.seatsByParty.map(
        (partyResult: PolishResults) => {
            const name: IName = getName(partyResult.id, partiesList);

            const partyData = {
                id: partyResult.id,
                seatsTotal: partyResult.seatsTotal,
                votesPercent: partyResult.votesPercent,
                shortName: name.short,
                longName: name.long,
            };

            return partyData;
        },
    );
    return results;
};
