import React from "react";
import EmployeeData from "../db/employee.json";

class DirectoryTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: EmployeeData, isSorted: false };
    this.onSort = this.onSort.bind(this);
    this.compare = this.compare.bind(this);
  }

  compare(a, b) {
    const nameA = a.name;
    const nameB = b.name;

    let comparison = 0;
    if (nameA > nameB) {
      comparison = 1;
    } else if (nameA < nameB) {
      comparison = -1;
    }

    if (this.state.isSorted === false) {
      return comparison;
    } else if (this.state.isSorted === true) {
      return comparison * -1;
    }
  }

  onSort(event, sortKey) {
    const newData = this.state.data;
    const isSorted = this.state.isSorted;

    newData.sort(this.compare);

    this.setState({ data: newData, isSorted: !isSorted });
  }

  render() {
    let actualData = this.state.data;
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Employee ID#</th>
            <th scope="col" onClick={() => this.onSort()}>
              Name
            </th>
            <th scope="col">Job Title</th>
            <th scope="col">Department</th>
            <th scope="col">Phone Ext.</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {actualData.map((employee) => (
            <tr>
              <th scope="row">{employee.id}</th>
              <td onClick={() => this.onSort()}>{employee.name}</td>
              <td>{employee.jobTitle}</td>
              <td>{employee.department}</td>
              <td>{employee.phoneExt}</td>
              <td>{employee.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default DirectoryTable;
