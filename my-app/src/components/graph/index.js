import React, { useEffect, useState } from "react";
import { TimeSeriesService } from "../../services/timeSeries.service.js";
import { LineChart } from "../lineChart/index.js";
import { useSelector } from "react-redux";
import { getDate, getDateNDaysAgo } from "../../utils/date.js";
import "./index.css";
import { Toggle } from "../toggleIcon/index.js";

export const Graph = () => {
  const end = getDate();
  const [days, setDays] = useState("7");
  const start = getDateNDaysAgo(days);
  const [chartData, setChartData] = useState({});

  const { base, target } = useSelector((state) => state.convert);
  // const start = "2023-02-01";
  const handleSelect = (e) => {
    setDays(e.target.value);
  };
  useEffect(() => {
    const getData = async () => {
      const response = await TimeSeriesService(start, end, base, target);
      const rates = Object.values(response.rates);

      // Graph Dataset
      const chartData = {
        labels: Object.keys(response.rates),
        datasets: [
          {
            label: `${base}/${target}`,
            data: rates.map((data) => data[target]),
            backgroundColor: "rgba(75,192,192,1)",

            borderColor: "black",
            borderWidth: 2,
          },
        ],
      };
      setChartData(chartData);
    };
    getData();
  }, [start, end, base, target]);

  return (
    <>
      <div className="exchange-history">
        <select id="historyDropdown" onChange={(e) => handleSelect(e)}>
          <option value="7">Last 7 days</option>
          <option value="14">Last 14 days</option>
          <option value="30">Last 30 days</option>
        </select>

        {/* Toggle Icon */}
        <Toggle />

        {/* Line Chart   */}
        <div className="line-graph">
          {Object.keys(chartData).length !== 0 && (
            <LineChart chartData={chartData} />
          )}
        </div>
      </div>
    </>
  );
};
