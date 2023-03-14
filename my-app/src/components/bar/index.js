import React from "react";
import { Link } from "react-router-dom";

export const Bar = () => {
  return (
    <div className="bar">
      <Link to="/">
        <button>Convertor</button>
      </Link>
      <Link to="/stats">
        <button>Statistics</button>
      </Link>
      <Link to="/history">
        <button>Your Conversions</button>
      </Link>
    </div>
  );
};
