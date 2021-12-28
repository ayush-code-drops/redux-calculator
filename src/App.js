import { useDispatch, useSelector } from "react-redux";
import { addCounter, reduceCounter } from "./redux/action";
import "./styles.css";

export default function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={() => dispatch(addCounter(1))}>Add</button>
      <button onClick={() => dispatch(reduceCounter(1))}>Reduce</button>
    </div>
  );
}
