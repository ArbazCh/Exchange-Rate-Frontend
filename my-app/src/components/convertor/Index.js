// import { Icon } from "semantic-ui-react";
import React, { useEffect, useState } from "react";
import { convertService } from "../../services/convertor.service.js";
import { useDispatch, useSelector } from "react-redux";
import { updateBase, updateTarget } from "../../redux/slices/convert";
import { Toggle } from "../toggleIcon/index.js";
import { Button } from "../button/index.js";
import "./index.css";
const Convertor = () => {
  const dispatch = useDispatch();
  const [convertedAmount, setConvertedAmount] = useState("");
  const { base, target } = useSelector((state) => state.convert);
  const [initialState, setInitialState] = useState({
    amount: "",
    exchangeRate: "",
  });
  const { amount, exchangeRate } = initialState;
  const [history, setHistory] = useState(
    JSON.parse(localStorage.getItem("history")) || []
  );

  useEffect(() => {
    if (exchangeRate && amount) {
      const convertedAmount = exchangeRate * amount;
      setConvertedAmount(convertedAmount);
    }
  }, [exchangeRate, amount]);

  //store in local storage
  useEffect(() => {
    localStorage.setItem("history", JSON.stringify(history));
  }, [history]);

  //Event Handlers
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
  const handleConvert = async () => {
    const response = await convertService(base, target);
    const { result } = response;
    result
      ? setInitialState({
          ...initialState,
          exchangeRate: result,
        })
      : alert("Enter Valid Currencies");
    const conversion = {
      amount: amount,
      base: base,
      target: target,
      rate: result,
      timestamp: new Date(),
    };
    if (result) setHistory([...history, conversion]);
  };

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
          <Toggle />
          {/* Enter Target Currency */}
          <input
            type="text"
            id="target"
            value={`${target}`}
            onChange={(e) => handleTarget(e.target.value)}
          />
          <br />
          {/* Button to convert the currency */}
          <div onClick={() => handleConvert()}>
            <Button button={"Convert"} />
          </div>
          {/* Converted Amount */}
          <div className="conveted-amount">
            <h4>{`${convertedAmount}`}</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Convertor;
