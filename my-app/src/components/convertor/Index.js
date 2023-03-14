import React, { useEffect, useState } from "react";
import { convertService } from "../../services/convertor.service.js";
import { useDispatch, useSelector } from "react-redux";
import {
  updateBase,
  updateTarget,
  toggleCurrency,
} from "../../redux/slices/convert";
import "./index.css";
const Convertor = () => {
  const dispatch = useDispatch();
  const [convertedAmount, setConvertedAmount] = useState("");
  const [history, setHistory] = useState(
    JSON.parse(localStorage.getItem("history")) || []
  );
  const { base, target } = useSelector((state) => state.convert);
  const [initialState, setInitialState] = useState({
    amount: "",
    exchangeRate: "",
  });
  const { amount, exchangeRate } = initialState;
  const handleInput = (input) => {
    setInitialState({
      ...initialState,
      amount: input,
      exchangeRate: "",
    });
  };
  const handleBase = (input) => {
    dispatch(updateBase(input));
  };
  const handleTarget = (input) => {
    dispatch(updateTarget(input));
  };
  const handleRevert = () => {
    dispatch(toggleCurrency());
  };
  useEffect(() => {
    if (exchangeRate && amount) {
      const convertedAmount = exchangeRate * amount;
      setConvertedAmount(convertedAmount);
    }
  }, [exchangeRate, amount]);

  const handleConvert = async () => {
    const response = await convertService(base, target);
    const { result } = response;
    setInitialState({
      ...initialState,
      exchangeRate: result,
    });
    const conversion = {
      amount: amount,
      base: base,
      target: target,
      rate: result,
      timestamp: new Date(),
    };
    setHistory([...history, conversion]);
  };
  useEffect(() => {
    localStorage.setItem("history", JSON.stringify(history));
  }, [history]);

  return (
    <>
      <div className="wrapper">
        <div className="main">
          <h1>Currency Exchange</h1>

          {/* Enter the Amount to Convert */}

          <input
            type="number"
            placeholder="Enter amount to convert"
            onChange={(e) => handleInput(e.target.value)}
          />

          {/* Enter Base Currency */}

          <input
            type="text"
            value={`${base}`}
            onChange={(e) => handleBase(e.target.value)}
          />

          {/* Toggle Currencies */}

          <button onClick={() => handleRevert()}>Toggle</button>

          {/* Enter Target Currency */}

          <input
            type="text"
            id="target"
            value={`${target}`}
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
