import { FC } from "react";
import "./App.scss";
import Layout from "./components/Layout";
import GeneralResults from "./components/charts/generalResults/GeneralResults";
import PolishResults from "./components/charts/polishResults/PolishResults";
import Turnout from "./components/charts/turnout/Turnout";
const App: FC = () => {
    return (
        <Layout>
            <Turnout />
            <PolishResults />
            <GeneralResults />
        </Layout>
    );
};

export default App;
