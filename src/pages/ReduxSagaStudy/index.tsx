import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseAsync, decreaseAsync } from "../../store/actions/count";

function ReduxSagaStudy() {
  const number = useSelector((state: any) => state.counter);
  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(increaseAsync());
  };
  const onDecrease = () => {
    dispatch(decreaseAsync());
  };

  return (
    <div>
      <h2>Count {number}</h2>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </div>
  );
}

export default ReduxSagaStudy;
