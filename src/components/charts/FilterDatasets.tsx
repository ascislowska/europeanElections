import FilterItem from "./FilterItem";
import { IDataFilter } from "../../interfaces";

interface Props {
    filterBy: IDataFilter[];
    selectedFilters: IDataFilter[];
    setSelectedFilters: (selectedFilters: IDataFilter[]) => void;
}
const FilterDatasets = ({
    filterBy,
    selectedFilters,
    setSelectedFilters,
}: Props) => {
    return (
        <div className="panel filter">
            <div className="panel-heading">
                <h3 className="card-header-title ">Show data</h3>
            </div>
            <div className="panel-block filter-checkboxes">
                {filterBy.map((filter: IDataFilter) => (
                    <FilterItem
                        key={filter.key}
                        filter={filter}
                        selectedFilters={selectedFilters}
                        setSelectedFilters={setSelectedFilters}
                    />
                ))}
            </div>
        </div>
    );
};

export default FilterDatasets;
