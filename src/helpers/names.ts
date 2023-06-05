import { IParty, IName, IGroup } from "../interfaces";
import { fetchJson } from "./fetchData";

// POLISH PARTIES
export const getNamesList = async (countryId: string) => {
    const data = await fetchJson("data/parties.json");
    const parties = data.countries.find(
        (country: { countryId: string }) => country.countryId === countryId,
    );
    return parties.candidates;
};

export const getName = (id: string, partiesList: IParty[]): IName => {
    //find party name
    const partyIndex = partiesList.findIndex(
        (candidate: IParty) => candidate.candidateId === id,
    );
    const shortName = partiesList[partyIndex].candidateAcronym;
    const longName = partiesList[partyIndex].candidateLongName;
    const names = { short: shortName, long: longName };
    return names;
};

//EUROPEAN GROUPS

export const getGroupsList = async () => {
    const data = await fetchJson("data/groups.json");
    const groupsNames = await data.groups;
    return groupsNames;
};

export const getGroupName = (groupId: string, groupsList: IGroup[]): IName => {
    const index = groupsList.findIndex(
        (group: IGroup) => group.groupId === groupId,
    );

    const english = groupsList[index].translations.find(
        (translation) => translation.languageId === "EN",
    );
    const shortName = english ? english.groupAcronym : "";
    const longName = english ? english.groupLongName : "";

    const names = { short: shortName, long: longName };
    return names;
};
