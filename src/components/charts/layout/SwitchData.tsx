import React from "react";
import { IDataFilter } from "../../../interfaces";
interface Props {
    selectedData: IDataFilter;
    setSelectedData: any;
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
                                    ? "button is-primary is-active"
                                    : "button is-primary is-outlined "
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
