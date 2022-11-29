import React, { useState, useEffect } from "react";
import "./App.css";
import {
  votingResults,
  votingResultsValues,
} from "./datasets/votingResults.js";
import RenderLineChart from "./components/RenderLineChart";
import RenderPieChart from "./components/RenderPieChart";
import TurnoutChart from "./components/TurnoutChart";

function App() {
  return (
    <div className="App">
      <RenderLineChart data={votingResults} values={votingResultsValues} />
      <RenderPieChart data={votingResults} values={votingResultsValues} />
      <TurnoutChart />
    </div>
  );
}

export default App;
