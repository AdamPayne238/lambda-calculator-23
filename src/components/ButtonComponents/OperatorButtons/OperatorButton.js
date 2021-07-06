import React from "react";

const OperatorButton = (props) => {
  return (
    <button className="operatorClass" onClick={() => props.addOperator(props.operator.value)}>
      {/* Ddisplay a button element rendering the data being passed down from the parent container on props */}
      {props.operator.char}
    </button>
  );
};

export default OperatorButton;
