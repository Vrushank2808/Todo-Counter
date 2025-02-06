import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../todoSlice/todoSlice.js";

function Counter() {
  const count = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Counter</h1>
      <div>
        <div>{count}</div> 
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </>
  );
}

export default Counter;
