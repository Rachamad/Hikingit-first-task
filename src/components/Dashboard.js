import React, { useState } from "react";
import MenuBar from "./MenuBar";
import Tasks from "./Tasks";

const Dashboard = ({ onLogout, currentUser }) => {
  const [currentPage, setCurrentPage] = useState("Tasks");

  return (
    <div>
      <h1>Welcome, {currentUser.username}</h1>
      <MenuBar onChangePage={setCurrentPage} onLogout={onLogout} />
      {currentPage === "Tasks" && <Tasks />}
    </div>
  );
};

export default Dashboard;
