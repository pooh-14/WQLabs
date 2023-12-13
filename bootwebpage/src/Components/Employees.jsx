import React, { useState } from "react";
import exportIcon from "../Images/export-icon.png";
import importIcon from "../Images/import-icon.png";
import editEmployeeIcon from "../Images/edit-employee-icon.png";
import "./styles/Employees.css";
import Dashboard from "./Dashboard";
import Navbar from "./Navbar";

const Employees = () => {
  const [menu, setMenu] = useState(true);

  return (
    <div id="screen2">
      <Dashboard menu={menu} setMenu={setMenu} />
      <div id="right">
        <Navbar menu={menu} setMenu={setMenu}  />
        <div id="righttwo">
          <div class="container containerr d-flex">
            <p class="me-auto p-2 ps-3">Employees</p>

            <div class="input-group r22 me-3">
              <input class="form-control rip " placeholder="Search..." />
              <i class="bi bi-search input-group-text ri"></i>
            </div>

            <img class="bg-success border border-success" src={exportIcon} />
            <img class="border border-secondary" src={importIcon} />
            <button class="btn btn-outline-secondary me-3">Add Employee</button>
          </div>
          <div id="righttwo1" class="table-responsive-md">
            <table class="table table-hover ">
              <thead>
                <tr>
                  <th scope="col">Sr. No.</th>
                  <th scope="col">Employee ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Manager</th>
                  <th scope="col">Department</th>
                  <th scope="col">Designation</th>
                  <th scope="col">Status</th>
                  <th scope="col">Activity</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>#ZC2975</td>
                  <td>John Doe</td>
                  <td>Teri Dactyl</td>
                  <td>Sales</td>
                  <td>Sales Lead</td>
                  <td>Full Time</td>
                  <td>
                    <button class="butt work  ">Working</button>
                  </td>
                  <td>
                    <img src={editEmployeeIcon} />
                  </td>
                </tr>

                <tr>
                  <td>2</td>
                  <td>#ZC2975</td>
                  <td>Maureen Biologist</td>
                  <td>Bess Twishes</td>
                  <td>UI/UX Design</td>
                  <td>UX Engineer</td>
                  <td>Full Time</td>
                  <td>
                    <button class="butt ab ">Absent</button>
                  </td>
                  <td>
                    <img src={editEmployeeIcon} />
                  </td>
                </tr>

                <tr>
                  <td>3</td>
                  <td>#ZC2975</td>
                  <td>Allie Grater</td>
                  <td>Rod Knee</td>
                  <td>Quality Assurance</td>
                  <td>Quality Analyst</td>
                  <td>Full Time</td>
                  <td>
                    <button class="butt vac  ">Vacation</button>
                  </td>
                  <td>
                    <img src={editEmployeeIcon} />
                  </td>
                </tr>

                <tr>
                  <td>4</td>
                  <td>#ZC2975</td>
                  <td>Constance Noring</td>
                  <td>John Doe</td>
                  <td>Sales</td>
                  <td>Executive</td>
                  <td>Full Time</td>
                  <td>
                    <button class="butt remote  ">Remote</button>
                  </td>
                  <td>
                    <img src={editEmployeeIcon} />
                  </td>
                </tr>

                <tr>
                  <td>5</td>
                  <td>#ZC2975</td>
                  <td>Lynn O'Leeum</td>
                  <td>Rodha Report</td>
                  <td>Technology</td>
                  <td>SDE</td>
                  <td>Part-Time</td>
                  <td>
                    <button class="butt work  ">Working</button>
                  </td>
                  <td>
                    <img src={editEmployeeIcon} />
                  </td>
                </tr>

                <tr>
                  <td>6</td>
                  <td>#ZC2975</td>
                  <td>Issabelle Ringing</td>
                  <td>Rodha Report</td>
                  <td>Technology</td>
                  <td>SDE</td>
                  <td>Intern</td>
                  <td>
                    <button class="butt ab ">Absent</button>
                  </td>
                  <td>
                    <img src={editEmployeeIcon} />
                  </td>
                </tr>

                <tr>
                  <td>7</td>
                  <td>#ZC2975</td>
                  <td>Rodha Report</td>
                  <td>Fran Tick</td>
                  <td>Technology</td>
                  <td>Tech Lead</td>
                  <td>Part-Time</td>
                  <td>
                    <button class="butt vac  ">Vacation</button>
                  </td>
                  <td>
                    <img src={editEmployeeIcon} />
                  </td>
                </tr>

                <tr>
                  <td>8</td>
                  <td>#ZC2975</td>
                  <td>Bess Twishes</td>
                  <td>Wiley Waites</td>
                  <td>UI/UX Design</td>
                  <td>UX Lead</td>
                  <td>Intern</td>
                  <td>
                    <button class="butt remote  ">Remote</button>
                  </td>
                  <td>
                    <img src={editEmployeeIcon} />
                  </td>
                </tr>

                <tr>
                  <td>9</td>
                  <td>#ZC2975</td>
                  <td>Ben Drover</td>
                  <td>Rodha Report</td>
                  <td>Technology</td>
                  <td>SDE</td>
                  <td>Intern</td>
                  <td>
                    <button class="butt work  ">Working</button>
                  </td>
                  <td>
                    <img src={editEmployeeIcon} />
                  </td>
                </tr>

                <tr>
                  <td>10</td>
                  <td>#ZC2975</td>
                  <td>Anne Ortha</td>
                  <td>Annie Versaree</td>
                  <td>Operations</td>
                  <td>Coordinator</td>
                  <td>Part-Time</td>
                  <td>
                    <button class="butt work  ">Working</button>
                  </td>
                  <td>
                    <img src={editEmployeeIcon} />
                  </td>
                </tr>

                <tr>
                  <td>11</td>
                  <td>#ZC2975</td>
                  <td>Dee Zynah</td>
                  <td>Rodha Report</td>
                  <td>Technology</td>
                  <td>SDE</td>
                  <td>Intern</td>
                  <td>
                    <button class="butt work  ">Working</button>
                  </td>
                  <td>
                    <img src={editEmployeeIcon} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div id="righttwo2">
            <div>
              <p>
                showing <b>1</b> to <b>11</b> out of <b>267</b> Employees
              </p>
            </div>
            <div className=" page">
              <i class="bi bi-chevron-left bg-secondary"></i>
              <p>1</p>
              <p>2</p>
              <p>3</p>
              <p>4</p>
              <i class="bi bi-chevron-right bg-success"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employees;
