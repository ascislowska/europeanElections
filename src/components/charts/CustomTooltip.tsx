import { IDataFilter } from "../../interfaces";
import { TooltipProps } from "recharts";

interface Props extends TooltipProps<string, number> {
    selectedData: IDataFilter;
}
const CustomTooltip = ({ active, payload, selectedData }: Props) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">
                <p className="desc">{`${
                    payload[0].payload.name || selectedData.name
                }`}</p>

                <p className="label">
                    {payload[0].value}
                    {selectedData.unit}
                </p>
            </div>
        );
    }
    return null;
};

export default CustomTooltip;
