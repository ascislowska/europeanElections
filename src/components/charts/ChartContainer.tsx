import { ReactNode } from "react";

interface Props {
    title: string;
    tabs?: ReactNode;
    options?: ReactNode;
    children: ReactNode;
}

const ChartContainer = ({ title, tabs, options, children }: Props) => {
    return (
        <div id="container">
            <h2 className="title is-2 ">{title}</h2>
            {tabs}
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
