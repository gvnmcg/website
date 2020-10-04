/**
 * attempt to making a scalable App using the
 * table html tags
 *
 *
 */
const TabTable = () => {
  const fretdots = ["_", "_", ".", "_", ".", "_", ".", "_", ".", "_", "_", "."];

  return (
    <table>
      <tbody>
        <tr>
          <th>|</th>
          <th>O</th>
          {fretdots.map((d) => (
            <th>{d}</th>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

const TabTableRow = (startNote) => {
  const strRep = [];

  return (
    <tr>
      <td>
        <button>+</button>
      </td>
      <td>
        <button>-</button>
      </td>
      {strRep.map()}
    </tr>
  );
};
