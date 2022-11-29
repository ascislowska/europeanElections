import React, { useState } from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Tooltip,
  Label,
  LabelList,
} from "recharts";
import SwitchData from "./SwitchData";

interface Props {
  data: any;
  values: string[];
}

const RenderPieChart = ({ data, values }: Props) => {
  const [selectedData, setSelectedData] = useState("result");

  return (
    <div className="dataSet-container">
      <h2>New parlament</h2>
      <SwitchData
        selectedData={selectedData}
        setSelectedData={setSelectedData}
        values={values}
      />
      <div className="chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey={selectedData}
              nameKey={"party"}
              fill="tomato"
              label
            ></Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RenderPieChart;
