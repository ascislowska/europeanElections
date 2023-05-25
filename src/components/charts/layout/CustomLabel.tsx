export const CustomLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    payload,
    percent,
    value,
    index,
    colors,
    dataUnit,
}: any) => {
    const RADIAN = Math.PI / 180;
    const radius = 25 + innerRadius + (outerRadius - innerRadius);
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    if (percent > 0.01) {
        return (
            <text
                x={x}
                y={y}
                textAnchor={x > cx ? "start" : "end"}
                dominantBaseline="central"
                font-weight="bold"
            >
                <tspan> {payload.shortName}</tspan>
                <tspan x={x} dy="1em" fill={colors[index % colors.length]}>
                    <tspan fontSize="1.2rem">{value}</tspan> {dataUnit}
                </tspan>
            </text>
        );
    } else return <text />;
};
