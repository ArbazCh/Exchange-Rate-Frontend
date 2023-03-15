import React from "react";

export const Button = (props) => {
  return (
    <div>
      <button className="convert-btn">{`${props.button}`}</button>
    </div>
  );
};
