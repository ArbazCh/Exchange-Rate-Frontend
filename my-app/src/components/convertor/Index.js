import React, { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";

const Convertor = () => {
  const [initialState, setInitialState] = useState({
    amount: null,
    base: "USD",
    target: "PKR",
    exchangeRate: null,
  });
  const [convertedAmount, setConvertedAmount] = useState(null);
  const { amount, base, target, exchangeRate } = initialState;

  useEffect(() => {
    if (exchangeRate && amount) {
      const convertedAmount = exchangeRate * amount;
      setConvertedAmount(convertedAmount);
    }
  }, [exchangeRate, amount]);

  const handleInput = (input) => {
    setInitialState({
      ...initialState,
      amount: input,
      exchangeRate: null,
    });
  };
  const handleBase = (input) => {
    setInitialState({
      ...initialState,
      base: input.toUpperCase(),
    });
  };
  const handleTarget = (input) => {
    setInitialState({
      ...initialState,
      target: input.toUpperCase(),
    });
  };
  const handleConvert = async () => {
    const { data } = await axios.get(
      `https://api.exchangerate.host/convert?from=${base}&to=${target}`
    );
    setInitialState({
      ...initialState,
      exchangeRate: data.result,
    });
  };

  return (
    <>
      <div className="wrapper">
        <div className="main">
          <h1>Currency Exchange</h1>
          <input
            type="number"
            placeholder="Enter the Value"
            onChange={(e) => handleInput(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder={`Enter the base currency like: ${base}`}
            onChange={(e) => handleBase(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder={`Enter the target currency like: ${target}`}
            onChange={(e) => handleTarget(e.target.value)}
          />
          <br />
          <button onClick={() => handleConvert()}>Convert</button>
          <button>Revert</button>
          <h3>{convertedAmount}</h3>
        </div>
      </div>
    </>
  );
};

export default Convertor;
