import { ChangeEvent, useEffect, useState } from "react";
import { IDataFilter } from "../../interfaces";

interface Props {
    filter: IDataFilter;
    selectedFilters: IDataFilter[];
    setSelectedFilters: (selected: IDataFilter[]) => void;
}
const FilterItem = ({ filter, selectedFilters, setSelectedFilters }: Props) => {
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        selectedFilters.find(
            (selectedItem: IDataFilter) => selectedItem.key === filter.key,
        )
            ? setIsChecked(true)
            : setIsChecked(false);
    }, []);

    const checkItem = (e: ChangeEvent<HTMLInputElement>) => {
        if (!isChecked) {
            const newList = [...selectedFilters];
            newList.push({ name: filter.name, key: filter.key });
            setSelectedFilters(newList);
            setIsChecked(true);
            //uncheck and remove from the chart
        } else if (isChecked) {
            const newList = selectedFilters.filter(
                (element: IDataFilter) => element.key !== filter.key,
            );
            setSelectedFilters(newList);
            setIsChecked(false);
        }
    };
    return (
        <label key={filter.key} className="checkbox filter-checkbox ">
            <input
                type="checkbox"
                name={filter.name}
                checked={isChecked}
                onChange={(e) => {
                    checkItem(e);
                }}
            />{" "}
            {filter.name}
        </label>
    );
};

export default FilterItem;
