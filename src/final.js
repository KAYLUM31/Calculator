import "./final.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setResult } from "./redux/action";
import { useEffect } from "react";

const Display = () => {
  const dispatch = useDispatch("");
  const text3 = useSelector((state) => state.Text3);
  //const result3 = useSelector((state) => state.re);
  const o1 = useSelector((state) => state.Text);
  const o2 = useSelector((state) => state.Text2);
  const Res = useSelector((state) => state.re);

  useEffect(() => {
    if (text3 === "+") dispatch(setResult(parseFloat(o1) + parseFloat(o2)));
    else if (text3 === "-") dispatch(setResult(o1 - o2));
    else if (text3 === "*") dispatch(setResult(o1 * o2));
    else if (text3 === "/") dispatch(setResult(o1 / o2));
    else dispatch(setResult("MATH ERROR"));
  }, [text3]);
  return (
    <div className="full">
      <div className="exp">
        GIVEN EXPRESSION: {o1}
        {text3}
        {o2}
      </div>
      <div className="results">Result: {isNaN(Res) ? "MATH ERROR" : Res}</div>
      <div className="border">
        <div className="final-result">
          <Link to="/App" style={{ textDecoration: "none", color: "black" }}>
            CALCULATE AGAIN
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Display;
