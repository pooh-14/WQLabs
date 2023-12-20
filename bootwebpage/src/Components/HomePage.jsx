import React, { useContext } from "react";
import "./styles/HomePage.css";
import totalEmployees from "../Images/total-employee-icon.png";
import newJoinees from "../Images/new-joinees-icon.png";
import peoplePresent from "../Images/people-present-icon.png";
import remote from "../Images/remote-icon.png";
import holidayIcon from "../Images/holiday-icon.png";
import Dashboard from "./Dashboard";
import Navbar from "./Navbar";
import { AuthContext } from "./Context/AuthContext";
import "./styles/HomePage.css";

const HomePage = () => {
  const { menu, setMenu } = useContext(AuthContext);

  return (
    <div class="d-flex">
      <Dashboard menu={menu} setMenu={setMenu} />

      <div id="main">
        <Navbar menu={menu} setMenu={setMenu} />

        <div id="grid">
          <div class="row mainone justify-content-between">
            <div class="col-12 col-md-9 colum1">
              <div class="row">
                <div class="col-12 col-md chintu d-flex ">
                  <div>
                    <p>Total People</p>
                    <h4>267</h4>
                  </div>
                  <div class="or">
                    <img src={totalEmployees} />
                  </div>
                </div>
                <div class="col-12 col-md d-flex chintu">
                  <div>
                    <p>New Joinees</p>
                    <h4>14</h4>
                  </div>
                  <div class="pink">
                    <img src={newJoinees} />
                  </div>
                </div>
                <div class="col-12 col-md d-flex chintu">
                  <div>
                    <p>People Present</p>
                    <h4>192</h4>
                  </div>
                  <div class="pur">
                    <img src={peoplePresent} />
                  </div>
                </div>
                <div class="col-12 col-md d-flex chintu">
                  <div>
                    <p>Remote</p>
                    <h4>43</h4>
                  </div>
                  <div class="blue">
                    <img src={remote} />
                  </div>
                </div>
              </div>
              <div class="row justify-content-between">
                <div class="col-sm-12 col-md" id="upevents">
                  <div class="d-flex justify-content-between">
                    <p>
                      <b>Upcoming Events</b>
                    </p>
                    <p class="text-secondary">This Month</p>
                  </div>
                  <div class="d-flex ">
                    <div class="d-flex fw-medium">
                      <i class="bi bi-arrow-right-circle"></i>
                      <p>23 Jun</p>
                      <i class="bi bi-arrow-right"></i>
                    </div>
                    <div>
                      <p>Diversity Workshop.</p>
                    </div>
                  </div>

                  <div class="d-flex">
                    <div class="d-flex fw-medium">
                      <i class="bi bi-arrow-right-circle"></i>
                      <p>12 Jun</p>
                      <i class="bi bi-arrow-right"></i>
                    </div>
                    <div>
                      <p>
                        Wellness Fair: Boost your well being with fitness
                        challenges and informative sessions.
                      </p>
                    </div>
                  </div>

                  <div class="d-flex">
                    <div class="d-flex fw-medium">
                      <i class="bi bi-arrow-right-circle"></i>
                      <p>09 Jun</p>
                      <i class="bi bi-arrow-right"></i>
                    </div>
                    <div>
                      <p>
                        Team Building Retreat: Strengthen teamwork and
                        collaboration.
                      </p>
                    </div>
                  </div>

                  <div class="d-flex">
                    <div class="d-flex">
                      <i class="bi bi-arrow-right-circle"></i>
                      <p>02 Jun</p>
                      <i class="bi bi-arrow-right"></i>
                    </div>
                    <div>
                      <p>
                        Financial Planning Seminar: Gain valuable financial
                        insights.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-sm-12 col-md" id="outoffice">
                  <div>
                    <p class="m-0">
                      <b>Who is out of Office</b>
                    </p>
                  </div>
                  <div>
                    <div class="d-flex ">
                      <p class="m-0">Sick Leave</p>
                      <p class="m-0">Today</p>
                    </div>
                    <div class="d-flex ">
                      <div>
                        <img src="data:image/jpeg;base64,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" />
                      </div>
                      <div>
                        <p class="m-0 ">Toji Fushiguro</p>
                        <p class="mb-0">Senior Forntend Developer</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="d-flex ">
                      <p class="m-0">Vacation Days</p>
                      <p class="m-0">20/05/23-30/05/23</p>
                    </div>
                    <div class="d-flex ">
                      <div>
                        <img src="data:image/jpeg;base64,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" />
                      </div>
                      <div>
                        <p class="m-0">Gojo Satoru</p>
                        <p class="mb-0">Sales Team Lead</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="d-flex ">
                      <p class="m-0">Vacation Days</p>
                      <p class="m-0">16/5/23-25/05/23</p>
                    </div>
                    <div class="d-flex ">
                      <div>
                        <img src="data:image/jpeg;base64,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" />
                      </div>
                      <div>
                        <p class="m-0">Geto Suguru</p>
                        <p class="mb-0">Junior UI/UX Designer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md calender">
              <div id="cal">
                <div class="d-flex mb-0">
                  <i class="bi bi-chevron-left"></i>
                  <p>June 2023</p>
                  <i class="bi bi-chevron-right"></i>
                </div>
                <table class="mb-3 fw-medium">
                  <thead>
                    <tr>
                      <th>M</th>
                      <th>T</th>
                      <th>W</th>
                      <th>T</th>
                      <th>F</th>
                      <th>S</th>
                      <th>S</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>1</td>
                      <td>2</td>
                      <td>3</td>
                      <td>4</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>6</td>
                      <td>7</td>
                      <td>8</td>
                      <td>9</td>
                      <td>10</td>
                      <td>11</td>
                    </tr>
                    <tr>
                      <td>12</td>
                      <td>13</td>
                      <td>14</td>
                      <td>15</td>
                      <td>16</td>
                      <td>17</td>
                      <td>18</td>
                    </tr>
                    <tr>
                      <td>19</td>
                      <td>20</td>
                      <td>21</td>
                      <td>22</td>
                      <td>23</td>
                      <td>24</td>
                      <td>25</td>
                    </tr>
                    <tr>
                      <td>26</td>
                      <td>27</td>
                      <td className="circle">28</td>
                      <td>29</td>
                      <td>30</td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <div class="d-flex mt-2">
                  <p class="fw-bold">Holidays</p>
                  <p class="text-success">+Add New</p>
                </div>
                <div class="d-flex">
                  <span class="d-flex">
                    <img class="cal me-2" src={holidayIcon} />
                    <p class="m-1 fw-medium">Eid-al-Adha</p>
                  </span>
                  <p class="m-1 text-secondary">29/06/23</p>
                </div>
                

                <div class="d-flex mt-1">
                  <span class="d-flex">
                    <img class="cal me-2" src={holidayIcon} />
                    <p class="m-1 fw-medium">Dipawali</p>
                  </span>
                  <p class="m-1 text-secondary">12/11/23</p>
                </div>

                
              </div>
            </div>
          </div>


          <div class="row maintwo justify-content-between pt-0">
            <div class="col-12 col-md-9 announce  ">
              <div class="d-flex justify-content-between">
                <p class="fw-bold">Announcements</p>
                <p class="text-success">+ Add New</p>
              </div>
              <div class="d-flex mb-2">
                <div class="d-flex fw-medium">
                  <i class="bi bi-arrow-right-circle"></i>
                  <p>23 Jun</p>
                  <i class="bi bi-arrow-right"></i>
                </div>
                <div>
                  <p class="mb-0">
                    Diversity Workshop.Wellness Fair: Boost your well being with
                    fitness challenges and informative sessions.Team Building
                    Retreat: Strengthen teamwork and collaboration. Financial
                    Planning Seminar: Gain valuable financial insights.
                  </p>
                </div>
              </div>

              <div class="d-flex mb-2">
                <div class="d-flex fw-medium">
                  <i class="bi bi-arrow-right-circle"></i>
                  <p>12 Jun</p>
                  <i class="bi bi-arrow-right"></i>
                </div>
                <div>
                  <p class="mb-0">
                    Wellness Fair.Diversity Workshop.Wellness Fair: Boost your
                    well being with fitness challenges and informative
                    sessions.Team Building Retreat: Strengthen teamwork and
                    collaboration. Financial Planning Seminar: Gain valuable
                    financial insights.
                  </p>
                </div>
              </div>

              <div class="d-flex">
                <div class="d-flex fw-medium">
                  <i class="bi bi-arrow-right-circle"></i>
                  <p>09 Jun</p>
                  <i class="bi bi-arrow-right"></i>
                </div>
                <div>
                  <p class="mb-0">
                    Wellness Fair: Boost your well being with fitness challenges
                    and informative sessions.Team Building Retreat: Strengthen
                    teamwork and collaboration. Financial Planning Seminar: Gain
                    valuable financial insights.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-12 col-md" id="task">
              <div class="d-flex">
                <p class="fw-bold">Task List</p>
                <p class="text-success">+ Add New</p>
              </div>
              <div class="d-flex ">
                <i class="bi bi-arrow-right-circle"></i>
                <span class="mb-1">
                  Lorem ipsum dolor sit amet, consectetur . Eveniet fuga
                  possimus commodi fugiat voluptate?{" "}
                </span>
              </div>
              <div class="d-flex">
                <i class="bi bi-arrow-right-circle"></i>
                <span class="mb-1">
                  Temporibus deleniti suscipit aspernatur consectetur.
                </span>
              </div>
              <div class="d-flex">
                <i class="bi bi-arrow-right-circle"></i>
                <span class="text-danger mb-0">
                  <s>
                    Quisquam soluta ipsam voluptates nemo neque vitae
                    necessitatibus praesentium, temporibus deleniti suscipit
                    aspernatur.
                  </s>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
