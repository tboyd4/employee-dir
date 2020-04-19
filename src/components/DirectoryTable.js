import React from "react";

function DirectoryTable(props) {
  // bring in employee data as props here. 
  // will loop through employee data and display below

  let arrayOfEmployees = props.employeeData.employees
  console.log(arrayOfEmployees);
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Employee ID#</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Job Title</th>
          <th scope="col">Department</th>
          <th scope="col">Phone Ext.</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>
      {arrayOfEmployees.map(employee => (
          <tr>
            <th scope="row">{employee.id}</th>
            <td>{employee.firstName}</td>
            <td>{employee.lastName}</td>
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

export default DirectoryTable;
