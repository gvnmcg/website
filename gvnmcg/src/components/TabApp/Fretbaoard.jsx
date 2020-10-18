import React from "react";
import "./TabApp.css";
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

// const notes = ["C", "-", "D", "-", "E", "F", "-", "G", "-", "A", "-", "B"];

// const standardTuning = [16, 23, 31, 38, 45, 52];

// const scaleNotes = [0, 1, 2, 3, 4, 5];

// const initState = {
//   tuning: [16, 23, 31, 38, 45, 52],
//   strs: [0, 1, 2, 3, 4, 5],
//   omit: [true, true, false, true, true, true],
//   songKey: {
//     useKey: true,
//     scale: [0, 2, 4, 5, 7, 9, 11],
//     omited: [true, true, false, true, true, true],
//   },
// };

// const stringState = {
//   tuned: tuningState.tuning[2],
//   str: tuningState.strs[2],
//   omitted: tuningState.omit[2],
// };

// const tuningState = {
//   tuning: [16, 23, 31, 38, 45, 52],
// };
// const songKeyState = {
//   scale: [0, 2, 4, 5, 7, 9, 11],
// };
// const bigState = {
//   tuningState: tuningState,
//   songKeyState: songKeyState,
// };

const fbState = {
  tuning: [16, 23, 31, 38, 45, 52],
  scale: [0, 2, 4, 5, 7, 9, 11],
};
// const iota = (n) => [...Array(n).keys()];

/**
 * [[[[[[[[[[[[[FretboardApp]]]]]]]]]]]]]]
 * purpose - display an editable representation of the
 *           guitar fretboard.
 *
 * ## Gonna need styling help
 */
const FretboardApp = () => {
  const [state, setState] = React.useState(fbState);

  const setScale = (newScale) => {
    console.log("setScale(", newScale ,")")
    setState({ ...state, scale: newScale });
  };

  const setTuning = (newtuning) => {
    setState({...state , tuning: newtuning });
  
  };

  return (
    <div className="TabApp" style={{ padding: "30px" }}>
      <KeyControls setScale={setScale} />

      <TuningContols tuning={state.tuning} setTuning={setTuning} />

      <DisplayGuitarStrings tuning={state.tuning} scale={state.scale} />
    </div>
  );
};

const KeyControls = ({ setScale }) => {
  let inp = "";

  return (
    <div>
      <input
        onChange={(e) => {
          inp = e.target.innerText;
        }}
      ></input>
      <button onClick={() => setScale(inp)}></button>
    </div>
  );
};

/**
 * purpose - create set of strings.
 */
const TuningContols = ({ tuning, setTuning }) => {



  const onAnyChange = (strNum, turnDir) => {
    let newTuning = tuning;
    newTuning[strNum] = newTuning[strNum] + turnDir;
    setTuning(newTuning);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <button
        onClick={() => {
          setTuning([16, 23, 31, 38, 45, 52]);
        }}
      >
        Std Tuning
      </button>

      {tuning.map((t, n) => (
          <div key={n}>
            <button onClick={() => onAnyChange(n, 1)}>+</button>
            <span>{t}</span>
            <button onClick={() => onAnyChange(n, -1)}>-</button>
          </div>
        ))}
    </div>
  );
};

/**
 * purpose - create tunable string row using state
 *
 * -  func: create row that can be edited. Takes (string number)
 * -  -  func: edit row given a tune direction. Takes (guitar peg turn)
 * -  display buttons
 * -  display representation
 *
 */
const DisplayGuitarStrings = ({ tuning , scale}) => {
  
  return (
    <div>
      {fre}
      {tuning.map((t, n) => (
        <div key={n}>{strString(tuning[n], scale)}</div>
      ))}
    </div>
  );
};

// const notes = ["C", "-", "D", "-", "E", "F", "-", "G", "-", "A", "-", "B"];
const notes = ["1", "-", "2", "-", "3", "4", "-", "5", "-", "6", "-", "7"];

// const scaleNotes = ["C", "D", "E", "F", "G", "A", "B"];
const scaleNumbers = [0, 0, 1, 0, 2, 0, 3, 4, 0, 5, 0, 6, 0, 7 ]

// const notestring  = "-|-C-|---|-D-|---|-E-|-F-|---|-G-|---|-A-|---|-B-";
// const notestring  = "-|-1-|---|-2-|---|-3-|-4-|---|-5-|---|-6-|---|-7-";
// const blankString = "-|---|---|---|---|---|---|---|---|---|---|---|---";
const fretMarkers = "-|---|---|-o-|---|-o-|---|-o-|---|-o-|---|---|-%-";

/**
 * represent string
 * - omit scale notes
 * @param {midi number rep} note
 */
const strString = (note, scale) => {
  let rep = "";

  for (let i = 0; i < 12; i++) {
    rep += "-|-";
    rep += notes[(note + i) % 12];
  }

  return rep;
};

export default FretboardApp;
