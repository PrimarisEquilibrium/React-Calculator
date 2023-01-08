import React from "react";

function Label({ state }) {
  return (
    <div className="text-white flex flex-col justify-end items-end break-words text-3xl mr-2 mb-2 h-20 select-none">
      <div className="opacity-50 text-xl mb-2 mr-[2px]">
        {state.previousOperand} {state.operation}
      </div>
      <div>
        {state.operand}
      </div>
    </div>
  );
}

export default Label;
