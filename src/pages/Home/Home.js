import React, { Fragment } from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

const Hello = (props) => {
  return <div>{props.children}</div>;
};

export const Home = (props) => {
  const data = {
    x: "bibek",
  };
  return (
    <>
      <div>Home</div>

      <Link to="/contact-us">
        <p>Move to contact us</p>
      </Link>

      <p>{props.location.pathname}</p>

      <Hello data={data}>
        <p>Hello</p>
      </Hello>
    </>
  );
};
