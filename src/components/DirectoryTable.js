import React from "react";

function DirectoryTable(props) {
  // bring in employee data as props here. 
  // will loop through employee data and display below
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
        <tr>
          <th scope="row">1</th>
          <td>Tyler</td>
          <td>Boyd</td>
          <td>IT Manager</td>
          <td>IT</td>
          <td>1021</td>
          <td>tboyd@dsflooring.com</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Ethan</td>
          <td>Flaherty</td>
          <td>Production Manager</td>
          <td>Production</td>
          <td>1015</td>
          <td>eflaherty@dsflooring.com</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Marty</td>
          <td>Wilhelm</td>
          <td>Installation Manager</td>
          <td>Installation</td>
          <td>1033</td>
          <td>mwilhelm@dsflooring.com</td>
        </tr>
      </tbody>
    </table>
  );
}

export default DirectoryTable;
