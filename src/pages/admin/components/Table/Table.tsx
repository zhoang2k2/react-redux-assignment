import TableBody from "../TableBody/TableBody";
import TableHead from "../TableHead/TableHead";

function Table() {
  return (
    <>
      <h1>Danh sách Account</h1>
      <table className="table container">
        <TableHead />
        <TableBody />
      </table>
    </>
  );
}

export default Table;
