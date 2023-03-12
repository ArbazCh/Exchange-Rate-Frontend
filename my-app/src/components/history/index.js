import React from "react";

export const History = () => {
  return (
    <div className="exchange-history">
      <select id="historyDropdown">
        <option value="7">Last 7 days</option>
        <option value="14">Last 14 days</option>
        <option value="30">Last 30 days</option>
      </select>
      <select id="historyDropdown">
        <option value="chart">Chart</option>
        <option value="table">Table</option>
      </select>
    </div>
  );
};
