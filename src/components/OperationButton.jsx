import React from "react";
import { actions } from "./CalculatorWrapper";

function OperationButton({ dispatch, children }) {
  return (
    <div
      className="btn bg-secondary"
      onClick={() =>
        dispatch({ type: actions.insertOperation, number: children })
      }
    >
      {children}
    </div>
  );
}

export default OperationButton;
