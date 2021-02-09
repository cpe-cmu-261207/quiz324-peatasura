//a component for rendering person table

export default function ItemTable(props) {
  return (
    <div>
      <table className="table is-bordered mb-3">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Age</th>
          </tr>
          <tr>
            <td>{props.name}</td>
            <td>{props.gender}</td>
            <td>{props.age}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
