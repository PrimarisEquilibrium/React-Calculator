import React from "react";
import { actions } from "./CalculatorWrapper";

function DigitButton({ dispatch, children }) {
  return (
    <div
      className="btn"
      onClick={() => dispatch({ type: actions.insertNumber, number: children })}
    >
      {children}
    </div>
  );
}

export default DigitButton;
