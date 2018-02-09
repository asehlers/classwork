import React from "react";

// Create a new component named "Math"
// Render one Math component in the place of each "?" mark
// Math should accept 3 props
// num1, operator, and num2
// Math should return a span tag displaying the result e.g.  19 + 341 = 360

const Math = props => {
  console.log(props);
  let result = 0;
  switch (props.operator) {
    case "+":
      result = props.num1 + props.num2;
      break;
    case "-":
      result = props.num1 - props.num2;
      break;
    case "/":
      result = parseFloat(props.num1) / parseFloat(props.num2);
      break;
    case "*":
    case "x":
      result = props.num1 * props.num2;
      break;
    default:
      result = NaN;
  };
  return (
  <span>
    {props.num1} {props.operator} {props.num2} = {result}
  </span>
  // <div>
  //   <p>
  //     19 + 341 = ?
  //   </p>
  //   <p>
  //     42 - 17 = ?
  //   </p>
  //   <p>
  //     100 * 3 = ?
  //   </p>
  //   <p>
  //     96 / 4 = ?
  //   </p>
  // </div>
)};

export default Math;
