export interface IDataFilter {
    name: string;
    key: string;
    unit?: string;
}
export interface IChartData {
    name: string;
    id: string;
}

export interface IResults {
    id: string;
    seatsTotal: number;
    seatsPercentEU: number;
}
export interface IParty {
    candidateId: string;
    candidateType: string;
    candidateAcronym: string;
    candidateLongName: string;
    memberOfCoalition: string;
    coalitionMembers: [];
}
export interface IGroup {
    groupId: string;
    translations: Itranslation[];
}
export interface IName {
    short: string;
    long: string;
}
interface Itranslation {
    languageId: string;
    groupAcronym: string;
    groupLongName: string;
}
