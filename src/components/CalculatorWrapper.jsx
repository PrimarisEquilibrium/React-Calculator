import React, { useReducer } from "react";
import Label from "./Label";
import Button from "./Button";

export const actions = {
  insertNumber: "insertNumber",
  insertOperation: "insertOperation",
  evaluate: "evaluate",
  clear: "clear",
  clearOperand: "clearOperand",
  inverseSign: "inverseSign",
};


const initialState = { operand: "0", previousOperand: "0", operation: "" };
function reducer(state, action) {
  let { operand, previousOperand, operation } = state;
  
  switch (action.type) {
    case actions.insertNumber:
      if (operand == "0" && action.number != ".")
        return { ...state, operand: action.number };
      if (action.number == "." && !operand.length) return { ...state };
      if (action.number == "." && operand.includes(".")) return { ...state };

      return { ...state, operand: operand + action.number };

    case actions.insertOperation:
      if (operation) {
        return { ...state };
      }

      return {
        ...state,
        operation: action.number,
        previousOperand: operand,
        operand: initialState.operand,
      };

    case actions.evaluate:
      if (!operation) {
        return { ...state };
      }

      operand = parseFloat(operand);
      previousOperand = parseFloat(previousOperand);
      let res;

      if (state.operation === "+") {
        res = previousOperand + operand;
      } else if (state.operation === "-") {
        res = previousOperand - operand;
      } else if (state.operation === "x") {
        res = previousOperand * operand;
      } else if (state.operation === "÷") {
        res = previousOperand / operand;
      } else {
        throw new Error("Invalid operation type passed!");
      }

      return {
        ...state,
        ...initialState,
        operand: res,
      };

    case actions.clear:
      return {
        ...state,
        ...initialState,
      };
    
    case actions.clearOperand:
      return {
        ...state,
        operand: initialState.operand
      }

    case actions.inverseSign:
      return {
        ...state,
        operand: operand * -1,
      };

    default:
  }
}

function CalculatorWrapper() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="bg-black rounded-xl p-4 w-64">
        <Label state={state} />

        <Button dispatch={dispatch} />
      </div>
    </div>
  );
}

export default CalculatorWrapper;
