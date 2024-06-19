import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-container">
      <h1>React Task Suite</h1>
      <div className="buttons-container">
        <Link to="/task1"><button className="task-button">Task 1</button></Link>
        <Link to="/task2"><button className="task-button">Task 2</button></Link>
        <Link to="/task3"><button className="task-button">Task 3</button></Link>
        <Link to="/task4"><button className="task-button">Task 4</button></Link>
        <Link to="/task5"><button className="task-button">Task 5</button></Link>
        <Link to="/task6"><button className="task-button">Task 6</button></Link>
        <Link to="/task7"><button className="task-button">Task 7</button></Link>
      </div>
    </div>
  );
};

export default Dashboard;
