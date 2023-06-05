import { FC, useEffect, useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { setMD } from "./helpers/fetchData";

import "./App.scss";

import Layout from "./components/Layout";
import GeneralResults from "./components/generalResults/GeneralResults";
import PolishResults from "./components/polishResults/PolishResults";
import Turnout from "./components/turnout/Turnout";

import introMD from "./texts/intro.md";

import Text from "./components/Text";
import About from "./components/About";

const App: FC = () => {
    return (
        <Layout>
            <Text mdFile={introMD} />
            <GeneralResults />
            <Turnout />
            <PolishResults />
            <About />
        </Layout>
    );
};

export default App;
