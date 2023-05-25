import React from "react";
import {
    ResponsiveContainer,
    BarChart,
    Tooltip,
    XAxis,
    YAxis,
    CartesianGrid,
    Bar,
    Cell,
} from "recharts";
import { IDataFilter } from "../../../interfaces";
import CustomTooltip from "./CustomTooltip";
import { colors } from "../../../consts/colors";

interface Props {
    data: any;
    selectedData: IDataFilter;
}
const CustomBarChart = ({ data, selectedData }: Props) => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
                <Tooltip
                    content={<CustomTooltip selectedData={selectedData} />}
                />
                {/* <Tooltip formatter={(label) => label + "%"} /> */}
                <XAxis dataKey="shortName"></XAxis>
                <YAxis width={30} />
                <CartesianGrid vertical={false} />
                <Bar dataKey={selectedData.key} name={selectedData.name}>
                    {data.map((item: any, index: number) => {
                        return (
                            <Cell
                                key={index}
                                fill={colors[index % colors.length]}
                            />
                        );
                    })}
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    );
};

export default CustomBarChart;
