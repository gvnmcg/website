import React from "react";
import "./CBT.css";

let cbtExampleObj = {
  event: "bday",
  thought: "wow, fun",
  emotion: "happy",
  resolve: "I love birthdays",
};

let cbtBlank = {
  event: "",
  thought: "",
  emotion: "",
  resolve: "",
};

// {
//   cbtBlank
//   cbtBlank.keys().map(key => cbtBlank[key])

// }

let cbtExampleLs = [cbtBlank, cbtExampleObj, cbtExampleObj];

/**
 * CBT App
 * purpose - Allow user to write a CBT of
 *           and save it to a list
 * - Displays all user CBT events in a Table.
 * - Displays 4 text fields.
 * - Saves input into new CBT event.
 */
const CBTApp = () => {
  // const [cbtLs, setCBTLs] = React.useState(cbtExampleLs);

  // //add new CBT to list (state)
  // const addCBT = (newCBT) => {
  //   setCBTLs([newCBT, ...cbtLs]);
  // };

  return (
    <div className="CBTApp">
      <DisplayCBTTable />
      <DisplayCBTControls />
    </div>
  );
};

/**
 * - Displays all user CBT events in a Table.
 *
 * @param obj
 */
const DisplayCBTTable = ({ ls }) => (
  <div className="DisplayCBTTable">
    <table>
      <tbody>
        <tr>
          <th>Event</th>
          <th>Thought</th>
          <th>Emotion</th>
          <th>Resolve</th>
        </tr>
        {ls.map((cbt, n) => (
          <tr key={n}>
            <td>{cbt.event}</td>
            <td>{cbt.thought}</td>
            <td>{cbt.emotion}</td>
            <td>{cbt.resolve}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

/**
 * - Displays 4 text fields.
 * - Puts input into new CBT event.
 *
 * @param handlePost
 */
const DisplayCBTControls = ({ handlePost }) => {
  const [cbt, setValue] = React.useState({
    event: "",
    thought: "",
    emotion: "",
    resolve: "",
  });

  const tabledataCBT = (field) => (
    <td>
      <input value={cbt[field]} onChange={setCBT(field)}></input>
      ->
    </td>
  );

  const setCBT = (field) => (e) =>
    setValue({ ...cbt, [field]: e.target.value });

  return (
    <div className="DisplayCBTControls">
      <table>
        <tbody>
          <tr>
            <th>Event</th>
            <th>Thought</th>
            <th>Emotion</th>
            <th>Resolve</th>
          </tr>
          <tr>
            {tabledataCBT("event")}
            {tabledataCBT("thought")}
            {tabledataCBT("emotion")}
            {tabledataCBT("resolve")}
          </tr>
        </tbody>
      </table>
      <button
        onClick={() => {
          handlePost(cbt);
          setValue(cbtBlank);
        }}
      >
        post it
      </button>
    </div>
  );
};

export default CBTApp;
