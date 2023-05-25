import React from "react";

const CustomTooltip = ({ active, payload, label, selectedData }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">
                <p className="desc">{`${payload[0].payload.longName}`}</p>
                <p className="label">{`${payload[0].value} ${
                    selectedData.key === "votesPercent" ? "%" : "seats"
                }`}</p>
            </div>
        );

        // <p className="label">{`${label} : ${payload[0].value}`}</p>;
    }
    return null;
};

export default CustomTooltip;
