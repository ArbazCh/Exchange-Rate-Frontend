import React, { useEffect, useState } from "react";
import { Bar } from "../bar/index.js";
import { convertService } from "../../services/convertor.service.js";
import "./index.css";

const Convertor = () => {
  const [initialState, setInitialState] = useState({
    amount: "",
    base: "",
    target: "",
    exchangeRate: "",
  });
  const [convertedAmount, setConvertedAmount] = useState("");
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
      exchangeRate: "",
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
    const result = await convertService(base, target);
    setInitialState({
      ...initialState,
      exchangeRate: result,
    });
  };

  const handleRevert = () => {
    setInitialState({
      ...initialState,
      base: target,
      target: base,
      exchangeRate: "",
    });
  };

  return (
    <>
      <Bar />
      <div className="wrapper">
        <div className="main">
          <h1>Currency Exchange</h1>
          <input
            type="number"
            id="amount"
            placeholder="Enter amount to convert"
            onChange={(e) => handleInput(e.target.value)}
          />
          {/* <br /> */}
          <input
            type="text"
            id="base"
            value={`${base}`}
            // placeholder="Please Enter the Base Currency"
            onChange={(e) => handleBase(e.target.value)}
          />
          {/* <br /> */}
          <button onClick={() => handleRevert()}>Revert</button>
          <input
            type="text"
            id="target"
            value={`${target}`}
            // placeholder="Please Enter the Target Currency"
            onChange={(e) => handleTarget(e.target.value)}
          />
          <br />
          <button id="convert-btn" onClick={() => handleConvert()}>
            Convert
          </button>
          <div className="conveted-amount">
            <h4>{`${convertedAmount}`}</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Convertor;
