import React from "react";
import dashboardIcon from "../Images/dashboard-icon.png";
import peopleIcon from "../Images/people-icon.png";
import attendanceIcon from "../Images/attendance-icon.png";
import workforceIcon from "../Images/workforce-icon.png";
import performanceIcon from "../Images/performance-icon.png";
import payrollIcon from "../Images/payroll-icon.png";
import assetsIcon from "../Images/assets-icon.png";
import settingsIcon from "../Images/settings-icon.png";
import helpCenterIcon from "../Images/help-center-icon.png";
import logoutIcon from "../Images/logout-icon.png";
import logo from "../Images/white-logo.png";
import "./styles/Employees.css";

const Dashboard = ({ menu, setMenu }) => {
  return (
    <div>
      {menu ? (
        <div id="left">
          <div>
            <img src={logo} />
          </div>
          <div className="mt2">
            <img src={dashboardIcon} />
            <p>Dashboard</p>
          </div>
          <div>
            <img src={peopleIcon} />
            <p>People</p>
          </div>
          <div>
            <img src={attendanceIcon} />
            <p>Attendance</p>
          </div>
          <div>
            <img src={workforceIcon} />
            <p>Workforce</p>
          </div>
          <div>
            <img src={performanceIcon} />
            <p>Performance</p>
          </div>
          <div>
            <img src={payrollIcon} />
            <p>Payroll</p>
          </div>
          <div>
            <img src={assetsIcon} />
            <p>Assets</p>
          </div>
          <div className="mt">
            <img src={settingsIcon} />
            <p class="align-item-center">Settings</p>
          </div>
          <div>
            <img src={helpCenterIcon} />
            <p>Help center</p>
          </div>
          <div>
            <img src={logoutIcon} />
            <p>Logout</p>
          </div>
        </div>
      ) : (
        <div id="left1">
          <div>
            <img src={logo} />
          </div>
          <div className="mt2">
            <img src={dashboardIcon} />
          </div>
          <div>
            <img src={peopleIcon} />
          </div>
          <div>
            <img src={attendanceIcon} />
          </div>
          <div>
            <img src={workforceIcon} />
          </div>
          <div>
            <img src={performanceIcon} />
          </div>
          <div>
            <img src={payrollIcon} />
          </div>
          <div>
            <img src={assetsIcon} />
          </div>
          <div>
            <img src={settingsIcon} />
          </div>
          <div>
            <img src={helpCenterIcon} />
          </div>
          <div>
            <img src={logoutIcon} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
