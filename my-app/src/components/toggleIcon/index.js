import React from "react";
import { toggleCurrency } from "../../redux/slices/convert";
import { useDispatch } from "react-redux";
import { Icon } from "semantic-ui-react";
import "./index.css";
export const Toggle = () => {
  const dispatch = useDispatch();
  const handleToggle = () => {
    dispatch(toggleCurrency());
  };
  return (
    <div className="toggle-icon">
      <button onClick={() => handleToggle()}>
        <Icon name="exchange" size="2x" />
      </button>
    </div>
  );
};
