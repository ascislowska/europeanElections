import React, { useState, useEffect } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import FilterDatasets from "./FilterDatasets";

const RenderLineChart = () => {
  const [turnout, setTurnout] = useState([]);

  const [countries, setCountries] = useState(new Set());
  const [selectCountries, setSelectCountries] = useState(["PL"]);

  const getData = () => {
    fetch("data/turnout.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        const chartData = myJson.years
          //clear years with no data
          .filter((year: any) => year.turnoutByYear.turnoutEU !== null)
          //return object suitable for the chart
          .map((year: any) => {
            const poland = year.turnoutByYear.turnoutByCountry.find(
              (country: any) => country.countryId === "PL"
            );
            return {
              year: year.yearId,
              percent: year.turnoutByYear.turnoutEU.percent,
              poland: poland ? poland.percent : 0,
            };
          });
        setTurnout(chartData);
        //list of countries for the filter
        const countries = new Set();
        myJson.years.forEach((year: any) => {
          year.turnoutByYear.turnoutByCountry.forEach((country: any) => {
            countries.add(country.countryId);
          });
        });
        setCountries(countries);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="dataSet-container">
      <h2>European Parliament - turnout</h2>
      <FilterDatasets
        filterBySet={countries}
        setSelectFilters={setSelectCountries}
        selectFilters={selectCountries}
      />
      <div className="chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={turnout}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="percent"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
            <Area
              type="monotone"
              dataKey="poland"
              stroke="#82ca9d"
              fillOpacity={1}
              fill="url(#colorPv)"
            />
            {selectCountries.map((country: string) => {
              return (
                <Area
                  type="monotone"
                  dataKey="poland"
                  stroke="#82ca9d"
                  fillOpacity={1}
                  fill="url(#colorPv)"
                />
              );
            })}
            <XAxis dataKey="year" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RenderLineChart;
