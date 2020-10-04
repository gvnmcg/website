import React from "react";
import "./style/CBT.css";

let cbtExampleObj = {
  event: "bday",
  thought: "wow, fun",
  emotion: "happy",
  resolve: "I love birthdays",
};

let cbtExampleLs = [
  {
    event: "",
    thought: "",
    emotion: "",
    resolve: "",
  },
  cbtExampleObj,
];

/**
 * CBT App
 * purpose - Allow user to write events of
 *           CBT items and save them to a list
 * - Displays all user CBT events in a Table.
 * - Displays 4 text fields.
 * - Puts input into new CBT event.
 */
const CBTApp = () => {
  const [cbtLs, setCBTLs] = React.useState(cbtExampleLs);

  const addCBT = (newCBT) => {
    setCBTLs([newCBT, ...cbtLs]);
  };

  return (
    <div className="CBTApp">
      <DisplayCBTTable ls={cbtLs} />
      <CBTFields handleClick={addCBT} />
    </div>
  );
};

/**
 * - Displays all user CBT events in a Table.
 *
 * @param obj
 */
const DisplayCBTTable = (obj) => (
  <div className="DisplayCBTTable">
    <table>
      <tbody>
        <tr>
          <th>Event</th>
          <th>Thought</th>
          <th>Emotion</th>
          <th>Resolve</th>
        </tr>
        {obj.ls.map((cbt, n) => (
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
 * @param handleClick
 */
const CBTFields = ({ handleClick }) => {
  const [cbt, setValue] = React.useState({
    event: "",
    thought: "",
    emotion: "",
    resolve: "",
  });

  const setCBT = (field) => (e) =>
    setValue({ ...cbt, [field]: e.target.value });

  return (
    <div className="CBTFields">
      <table>
        <tbody>
          <tr>
            <th>Event</th>
            <th>Thought</th>
            <th>Emotion</th>
            <th>Resolve</th>
          </tr>
          <tr>
            <td>
              <input onChange={setCBT("event")}></input>
              ->
            </td>
            <td>
              <input onChange={setCBT("thought")}></input>
              ->
            </td>
            <td>
              <input onChange={setCBT("emotion")}></input>
              ->
            </td>
            <td>
              <input onChange={setCBT("resolve")}></input>
            </td>
          </tr>
        </tbody>
      </table>
      <button onClick={() => handleClick(cbt)}>send</button>
    </div>
  );
};

export default CBTApp;
