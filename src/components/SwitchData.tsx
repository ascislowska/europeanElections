import React from "react";
interface Props {
  selectedData: string;
  setSelectedData: any;
  values: string[];
}
const SwitchData = ({ selectedData, setSelectedData, values }: Props) => {
  const changeData = (value: string) => {
    setSelectedData(value);
  };

  return (
    <div className="buttons-container">
      <h3>Choose data</h3>
      {values.map((value) => {
        return (
          <button
            key={value}
            onClick={() => changeData(value)}
            className={selectedData === value ? "active" : ""}
          >
            {value}
          </button>
        );
      })}
    </div>
  );
};

export default SwitchData;
