interface Props {
    title: string;
    options?: any;
    children: any;
}

const ChartContainer = ({ title, options, children }: Props) => {
    return (
        <div className="section">
            <h2 className="title is-2 ">{title}</h2>
            <div className="columns is-align-content-stretch is-multiline">
                <div className="column is-full-tablet is-two-thirds-desktop">
                    <div className="block chart-wrapper">{children}</div>
                </div>
                <div className="column">{options}</div>
            </div>
        </div>
    );
};

export default ChartContainer;
