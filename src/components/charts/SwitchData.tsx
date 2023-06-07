import { IDataFilter } from "../../interfaces";
interface Props {
    selectedData: IDataFilter;
    setSelectedData: (data: IDataFilter) => void;
    values: IDataFilter[];
}
const SwitchData = ({ selectedData, setSelectedData, values }: Props) => {
    const changeData = (value: IDataFilter) => {
        setSelectedData(value);
    };

    return (
        <div className="panel switch">
            <div className="panel-heading">
                <h3 className="card-header-title">Choose data</h3>
            </div>
            <div className="card-content buttons ">
                {values.map((value) => {
                    return (
                        <button
                            key={value.key}
                            onClick={() => changeData(value)}
                            className={
                                selectedData.key === value.key
                                    ? "button is-primary is-light is-active"
                                    : "button is-primary is-light "
                            }
                        >
                            {value.name}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default SwitchData;
