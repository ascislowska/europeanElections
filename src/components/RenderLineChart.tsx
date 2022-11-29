import React, { useState } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import SwitchData from "./SwitchData";
interface Props {
  data: any;
  values: string[];
}
const RenderLineChart = ({ data, values }: Props) => {
  const [selectedData, setSelectedData] = useState("result");

  return (
    <div className="dataSet-container">
      <h2>Elections' results</h2>
      <SwitchData
        selectedData={selectedData}
        setSelectedData={setSelectedData}
        values={values}
      />
      <div className="chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 20, left: 50, bottom: 10, right: 20 }}
          >
            <Line dataKey={selectedData} type="monotone" stroke="tomato" />
            <CartesianGrid stroke="#ccc" strokeDasharray="15 5" />
            <XAxis
              dataKey="party"
              tick={{ stroke: "tomato", fontWeight: "200" }}
            />
            <YAxis />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RenderLineChart;
