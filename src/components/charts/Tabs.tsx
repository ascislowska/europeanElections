interface Props {
    chartTypes: string[];
    selectedChartType: string;
    setSelectedChartType: (type: string) => void;
}
const Tabs = ({
    chartTypes,
    selectedChartType,
    setSelectedChartType,
}: Props) => {
    return (
        <div className="tabs">
            <ul>
                {chartTypes.map((type) => (
                    <li
                        key={type}
                        className={
                            type === selectedChartType ? "is-active" : ""
                        }
                        onClick={() => setSelectedChartType(type)}
                    >
                        <a> {type} chart</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Tabs;
