import React, { useState } from "react";
import { Row, Button } from "reactstrap";
import PropTypes from "prop-types";

const obj = {
  x: "akjdks",
  y: "akjdks",
  a: "akjdks",
  b: "akjdks",
  c: "akjdks",
};

const { a, b, c } = obj;

export const FunctionsExample = (props) => {
  //state var     updatefunction
  const [counter, setCounter] = useState(10);
  return (
    <div>
      <h2>{counter}</h2>
      <p>{props.data.name}</p>
      <img src={props.data.pic} />
      <p>{props.data.access}</p>
      <Button
        color="primary "
        onClick={(e) => {
          setCounter(20);
        }}
      >
        {props.title}
      </Button>
    </div>
  );
};

// FunctionsExample.propTypes = {
//   title: PropTypes.string,
//   data: PropTypes.shape({
//     name: PropTypes.string,
//     pic: PropTypes.string.isRequired,
//   }),
// };

export default FunctionsExample;
