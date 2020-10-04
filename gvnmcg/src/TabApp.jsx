import React from "react";

// const noteAccidentals = [
//   "C",
//   "C#/Db",
//   "D",
//   "D#/Eb",
//   "E",
//   "F",
//   "F#/Gb",
//   "G",
//   "G#/Ab",
//   "A",
//   "A#/Bb",
//   "B",
// ];

const notes = ["C", "_", "D", "_", "E", "F", "_", "G", "_", "A", "_", "B"];

const initState = {
  tuning: [12, 17, 23, 28, 33, 38],
  scale: [0, 2, 4, 5, 7, 9, 11],
  strs: [0, 1, 2, 3, 4, 5],
};

// const iota = (n) => [...Array(n).keys()];

const TabApp = () => {
  const [state, setState] = React.useState(initState);

  //create tunable string row
  const tunerRow = (strN) => {
    //adjust tuning
    const tune = (turn) => {
      let newTuning = state.tuning;
      newTuning[strN] = state.tuning[strN] + turn;
      setState({ ...state, newTuning });
    };

    return (
      <div key={strN}>
        <button onClick={() => tune(1)}>+</button>
        <span>{state.tuning[strN]}</span>
        <button onClick={() => tune(-1)}>-</button>
        <span>{strString(strN)}</span>
      </div>
    );
  };

  return <div className="TabApp">{state.strs.map((n) => tunerRow(n))}</div>;
};

const strString = (n) => {
  let rep = "";

  for (let i = 0; i < 15; i++) {
    rep += " -|- ";
    rep += notes[(n + i) % 12];
  }

  return rep;
};

export default TabApp;
