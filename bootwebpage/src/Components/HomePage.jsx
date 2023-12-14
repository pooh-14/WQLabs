import React from "react";
import './styles/HomePage.css'

const HomePage = () => {
  return (
    <div class="border">
      <div class="row ">
        <div class="col-4 border">
          <div class="row border">
            <div class="col-6 border ">Total People</div>
            <div class="col-6 border">New Joinees</div>
          </div>
          <div class="row border">Upcoming Events</div>
        </div>
        <div class="col-4 border">
          <div class="row border">
            <div class="col-6 border">People Present</div>
            <div class="col-6 border">Remote</div>
          </div>
          <div class="row border">Who is out of office</div>
        </div>
        <div class="col-4 border">Calender</div>
      </div>

      <div class="row border">
        <div class="col-6 border">Annoucemnts</div>
        <div class="col-6">Task List</div>
      </div>
    </div>
  );
};

export default HomePage;
