import React from "react";
import DigitButton from "./DigitButton";
import { actions } from "./CalculatorWrapper";
import OperationButton from "./OperationButton";

function Button({ dispatch }) {
  return (
    <div>
      <div className="btn-row">
        <button
          className="btn bg-tertiary text-black"
          onClick={() => dispatch({ type: actions.clear })}
        >
          AC
        </button>
        <button
          className="btn bg-tertiary text-black"
          onClick={() => dispatch({ type: actions.clearOperand })}
        >
          C
        </button>
        <button
          className="btn bg-tertiary text-black"
          onClick={() => dispatch({ type: actions.inverseSign })}
        >
          +/-
        </button>
        <OperationButton dispatch={dispatch}>÷</OperationButton>
      </div>
      <div className="btn-row">
        <DigitButton dispatch={dispatch}>7</DigitButton>
        <DigitButton dispatch={dispatch}>8</DigitButton>
        <DigitButton dispatch={dispatch}>9</DigitButton>
        <OperationButton dispatch={dispatch}>x</OperationButton>
      </div>
      <div className="btn-row">
        <DigitButton dispatch={dispatch}>4</DigitButton>
        <DigitButton dispatch={dispatch}>5</DigitButton>
        <DigitButton dispatch={dispatch}>6</DigitButton>
        <OperationButton dispatch={dispatch}>-</OperationButton>
      </div>
      <div className="btn-row">
        <DigitButton dispatch={dispatch}>1</DigitButton>
        <DigitButton dispatch={dispatch}>2</DigitButton>
        <DigitButton dispatch={dispatch}>3</DigitButton>
        <OperationButton dispatch={dispatch}>+</OperationButton>
      </div>
      <div className="btn-row">
        <DigitButton dispatch={dispatch}>0</DigitButton>
        <DigitButton dispatch={dispatch}>.</DigitButton>
        <button
          className="btn bg-secondary w-[104px]"
          onClick={() => dispatch({ type: actions.evaluate })}
        >
          =
        </button>
      </div>
    </div>
  );
}

export default Button;
