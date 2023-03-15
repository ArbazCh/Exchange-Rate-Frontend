import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../button";
import "./index.css";

export const Bar = () => {
  return (
    <div className="bar">
      <Link to="/">
        <Button button={"Convertor"} />
      </Link>
      <Link to="/stats">
        <Button button={"Statistics"} />
      </Link>
      <Link to="/history">
        <Button button={"Your Conversions"} />
      </Link>
    </div>
  );
};
