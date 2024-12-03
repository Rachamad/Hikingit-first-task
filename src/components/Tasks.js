import React, { useState, useEffect } from "react";
import tasksData from "../data/tasks.json";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(tasksData);
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <tr key={task.id}>
            <td>{task.id}</td>
            <td>{task.title}</td>
            <td>{task.description}</td>
            <td>{task.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Tasks;
