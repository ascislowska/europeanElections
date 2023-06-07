import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from "recharts";
import { colors } from "../../consts/colors";
import { IDataFilter } from "../../interfaces";
import CustomTooltip from "./CustomTooltip";
type Props = {
    data: any[];
    dataFilter: IDataFilter[];
    dataType: IDataFilter;
};
const CustomLineChart = ({ data, dataFilter, dataType }: Props) => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop
                            offset="5%"
                            stopColor="hsl(14, 100%, 53%) "
                            stopOpacity={1}
                        />
                        <stop
                            offset="95%"
                            stopColor="hsl(14, 100%, 53%)"
                            stopOpacity={0.5}
                        />
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop
                            offset="5%"
                            stopColor={colors[1]}
                            stopOpacity={1}
                        />
                        <stop
                            offset="95%"
                            stopColor=" 	hsl(44, 100%, 77%)"
                            stopOpacity={0.7}
                        />
                    </linearGradient>
                </defs>
                <Area
                    type="monotone"
                    dataKey="percent"
                    stroke="hsl(14, 100%, 53%)"
                    fillOpacity={1}
                    strokeWidth={2}
                    fill="url(#colorUv)"
                />
                {dataFilter.map((item: IDataFilter, index: number) => {
                    return (
                        <Area
                            key={item.key}
                            type="monotone"
                            dataKey={item.key}
                            stroke=" 	hsl(44, 100%, 77%)"
                            strokeWidth={2}
                            fillOpacity={0.5}
                            fill="url(#colorPv)"
                        />
                    );
                })}
                <XAxis dataKey="year" style={{ fontFamily: "Jost" }} />
                <YAxis width={30} />
                <CartesianGrid vertical={false} />
                <Tooltip content={<CustomTooltip selectedData={dataType} />} />
            </AreaChart>
        </ResponsiveContainer>
    );
};

export default CustomLineChart;
