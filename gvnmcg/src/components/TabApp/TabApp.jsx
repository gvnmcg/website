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

const notes = ["C", "-", "D", "-", "E", "F", "-", "G", "-", "A", "-", "B"];

// const standardTuning = [16, 23, 31, 38, 45, 52];

// const scaleNotes = [0, 1, 2, 3, 4, 5];

const initState = {
  tuning: [16, 23, 31, 38, 45, 52],
  strs: [0, 1, 2, 3, 4, 5],
  omit: [true, true, false, true, true, true],
  songKey: {
    useKey: true,
    scale: [0, 2, 4, 5, 7, 9, 11],
    omited: [true, true, false, true, true, true],
  },
};

const tuningState = {
  tuning: [16, 23, 31, 38, 45, 52],
  strs: [0, 1, 2, 3, 4, 5],
  omit: [true, true, false, true, true, true],
};

// const stringState = {
//   tuned: tuningState.tuning[2],
//   str: tuningState.strs[2],
//   omitted: tuningState.omit[2],
// };

// const songKeyState = {
//   useKey: true,
//   scale: [0, 2, 4, 5, 7, 9, 11],
//   omited: [true, true, false, true, true, true],
// };

// const bigState = {
//   tuning: tuningState,
//   songKey: songKeyState,
// };

// const iota = (n) => [...Array(n).keys()];

/**
 * [[[[[[[[[[[[[[[[[[[[[[[[[[[[TabApp]]]]]]]]]]]]]]]]]]]]]]]]]]]]
 * purpose - display an editable representation of the
 *           guitar fretboard.
 *
 * ## Gonna need styling help (library, sketch, flexbox?,
 *    actual fretboard image)
 */
const TabApp = () => {
  // const [state, setState] = React.useState(initState);

  // const adjustKey = (scaleN) => {};

  //render App
  return (
    <div className="TabApp">
      {/* <KeyControls adjustKey={adjustKey} /> */}
      {initState.strs.map((n) => (
        <DisplayGuitarString key={n} strN={n} />
      ))}
    </div>
  );
};

// const KeyControls = ({ adjustKey }) => {
//   // const [state, setState] = React.useState(songKeyState);
//   return (
//     <div>
//       {scaleNotes.map((n) => (
//         <button onClick={adjustKey(n)}></button>
//       ))}
//     </div>
//   );
// };

/**
 * purpose - create tunable string row using state
 *
 * -  func: create row that can be edited. Takes (string number)
 * -  -  func: edit row given a tune direction. Takes (guitar peg turn)
 * -  display buttons
 * -  display representation
 *
 */
const DisplayGuitarString = ({ strN }) => {
  //tuning state
  const [state, setState] = React.useState(tuningState);

  let tuneNote = state.tuning[strN];

  //adjust tuning
  const tune = (turn) => {
    let newTuning = state.tuning;
    newTuning[strN] = tuneNote + turn;
    setState({ ...state, tuning: newTuning });
  };

  //adjust strings omitted
  const flipOmit = (strN) => {
    let newOmit = state.omit;
    newOmit[strN] = !newOmit[strN];
    setState({ ...state, omit: newOmit });
  };

  let omitted = state.omit[strN];
  //render row
  //uses: strN, tune, flipOmit, ommited
  return (
    <div key={strN}>
      <button onClick={() => flipOmit(strN)}>{omitted ? "O" : "X"}</button>
      <button onClick={() => tune(1)}>+</button>
      <button onClick={() => tune(-1)}>-</button>
      <span>{omitted ? strString(tuneNote) : blankString}</span>
    </div>
  );
};

const blankString = "-|---|---|---|---|---|---|---|---|---|---|---|--";

/**
 * represent string
 * - omit scale notes
 * @param {midi number rep} note
 */
const strString = (note) => {
  let rep = "";

  for (let i = 0; i < 12; i++) {
    rep += "-|-";
    rep += notes[(note + i) % 12];
  }

  return rep;
};

export default TabApp;
