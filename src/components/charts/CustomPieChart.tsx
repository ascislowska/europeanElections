import { ResponsiveContainer, PieChart, Pie, Tooltip, Cell } from "recharts";
import { colors } from "../../consts/colors";
import { CustomLabel } from "./CustomLabel";
import { IChartData, IDataFilter } from "../../interfaces";

import CustomTooltip from "./CustomTooltip";

interface Props {
    data: IChartData[];
    selectedData: IDataFilter;
}
const CustomPieChart = ({ data, selectedData }: Props) => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <PieChart margin={{ bottom: 20 }}>
                <Pie
                    data={data}
                    dataKey={selectedData.key}
                    nameKey={"name"}
                    labelLine={false}
                    label={
                        <CustomLabel
                            colors={colors}
                            dataUnit={selectedData.unit}
                        />
                    }
                >
                    {data.map((item: any, index: number) => {
                        return (
                            <Cell
                                key={item}
                                fill={colors[index % colors.length]}
                            />
                        );
                    })}
                </Pie>
                <Tooltip
                    content={<CustomTooltip selectedData={selectedData} />}
                />
            </PieChart>
        </ResponsiveContainer>
    );
};

export default CustomPieChart;
