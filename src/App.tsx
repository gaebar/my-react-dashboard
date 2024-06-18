import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Counter from './components/Counter/Counter';
import TasksMenu from './components/TasksMenu/TasksMenu';
import TodoList from './components/TodoList/TodoList'; 
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="container">
        <TasksMenu />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/task1" element={<Counter />} />
          <Route path="/task2" element={<TodoList />} />
          {/* Add routes for other tasks here */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
