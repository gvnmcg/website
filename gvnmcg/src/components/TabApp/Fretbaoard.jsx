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

const scaleNotes = [0, 1, 2, 3, 4, 5];

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

// const stringState = {
//   tuned: tuningState.tuning[2],
//   str: tuningState.strs[2],
//   omitted: tuningState.omit[2],
// };

const tuningState = {
  tuning: [16, 23, 31, 38, 45, 52],
  strs: [0, 1, 2, 3, 4, 5],
  omit: [true, true, false, true, true, true],
};
const songKeyState = {
  enabled: false,
  useKey: true,
  scale: [0, 2, 4, 5, 7, 9, 11],
  omited: [true, true, false, true, true, true],
};
const bigState = {
  tuning: tuningState,
  songKey: songKeyState,
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
  const [state, setState] = React.useState(bigState);

  //ACTIONS
  const enableKey = () => {
    setState({
      songKeyState: {
        enabled: !state.songKey.enabled,
        ...state.songKeyState,
      },
      ...state,
    });
  };
  const toggleScaleNote = (sclNote) => {};
  const shiftScale = () => {};
  const turnPeg = () => {};
  const omitStr = () => {};
  console.log(state)

  //render App
  let keyConOn = state.songKey.enabled;
  return (
    <div className="TabApp">
    <button onClick={enableKey()}>enable?</button>
      {keyConOn ? (
        <KeyControls
          enableKey={enableKey}
          toggleScaleNote={toggleScaleNote}
          shiftScale={shiftScale}
        />
      ) : (
        <p>nah</p>
      )}
      <Fretboard turnPeg={turnPeg} omitStr={omitStr} />
    </div>
  );
};

const KeyControls = ({ toggleScaleNote, shiftScale }) => {
  return (
    <div>
      {scaleNotes.map((n) => (
        <div>
          {n}
          <button onClick={toggleScaleNote(n)}></button>
        </div>
      ))}
    </div>
  );
};

/**
 * purpose - create set of strings.
 */
const Fretboard = ({ turnPeg, omitStr }) => {
  return (
    <div>
      {initState.strs.map((n) => (
        <DisplayGuitarString key={n} strN={n} />
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

export default FretboardApp;
