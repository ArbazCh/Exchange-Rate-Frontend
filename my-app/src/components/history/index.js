import React, { useEffect, useState } from "react";
import "./index.css";
import { Bar } from "../bar";

export const History = () => {
  const [history, setHistory] = useState([]);
  useEffect(() => {
    const history = JSON.parse(localStorage.getItem("history"));
    setHistory(history);
  }, []);
  return (
    <>
      <Bar />
      <div className="history-table">
        <table>
          <thead>
            <tr>
              <th>Amount</th>
              <th>From</th>
              <th>To</th>
              <th>Rate</th>
              <th>Date/Time</th>
            </tr>
          </thead>
          <tbody>
            {history?.map((conversion, index) => (
              <tr key={index}>
                <td>{conversion.amount}</td>
                <td>{conversion.base}</td>
                <td>{conversion.target}</td>
                <td>{conversion.rate}</td>
                <td>{conversion.timestamp.toString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
