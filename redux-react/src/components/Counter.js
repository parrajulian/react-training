import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../redux/actions/counterActions";

const Counter = props => {
  console.log(props);

  const increment = () => {
    props.increment();
  };

  const decrement = () => {
    props.decrement();
  };
  return (
    <div>
      <button onClick={props.increment}> + </button> <button onClick={props.decrement}> - </button>
      <h1>{props.counter}</h1>
      <p>{props.name}</p>
    </div>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement())
  };
};
const mapStateToProps = state => {
  return {
    name: state.user.name,
    counter: state.counter
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
