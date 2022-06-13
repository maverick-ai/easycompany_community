import styles from "./poll.module.css";
import React, { useRef, useState } from "react";
import PollChart from "./pollchart";
function PollBox_A(props) {
  const inputdata = useRef("");
  console.log(inputdata);
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);
  const [countC, setCountC] = useState(0);
  const [toggled, setToggled] = useState(false);

  function onchangehandlerA() {
    setCountA((countA) => countA + 1);
    setToggled(true);
    console.log(props.id);
  }
  function onchangehandlerB() {
    setCountB((countB) => countB + 1);
    setToggled(true);
    console.log(countB);
  }
  function onchangehandlerC() {
    setCountC((countC) => countC + 1);
    setToggled(true);
    console.log(countC);
  }

  function onClickHandler() {
    setToggled(false);
  }

  const chartDataPoints = [
    { label: "1", value: countA },
    { label: "2", value: countB },
    { label: "3", value: countC },
  ];

  return (
    <React.Fragment>
      <div className={styles.box} id={props.id}>
        <div>
          <h1 className={styles.heading}>{props.question}</h1>
        </div>
        {!toggled && (
          <div className={styles.barsbox}>
            <div className={styles.bar}>
              <input
                className={styles.input}
                type="radio"
                id="input-1"
                name="radio-group"
                onClick={onchangehandlerA}
                ref={inputdata}
              />
              <label className={styles.labelbox} for="input-1">
                <span className={styles.label}>{props.option_A}</span>
              </label>
            </div>
            <div className={styles.bar}>
              <input
                className={styles.input}
                type="radio"
                id="input-2"
                name="radio-group"
                onClick={onchangehandlerB}
              />
              <label className={styles.labelbox} for="input-2">
                <span className={styles.label}>{props.option_B}</span>{" "}
              </label>
            </div>
            <div className={styles.bar}>
              <input
                className={styles.input}
                type="radio"
                id="input-3"
                name="radio-group"
                onClick={onchangehandlerC}
              />
              <label className={styles.labelbox} for="input-3">
                <span className={styles.label}>{props.option_C}</span>
              </label>
            </div>
          </div>
        )}
        {toggled && (
          <div
            onClick={onClickHandler}
            style={{
              marginTop: "-30px",
              marginLeft: "30px",
              marginBottom: "-20px",
            }}
          >
            <PollChart dataPoints={chartDataPoints} />
          </div>
        )}
      </div>
    </React.Fragment>
  );
}
export default PollBox_A;
