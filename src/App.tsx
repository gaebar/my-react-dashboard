import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import Dashboard from './components/Dashboard';
import Counter from './components/Counter';
import TasksMenu from './components/TasksMenu';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <TasksMenu />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/task1" element={<Counter />} />
          {/* Add routes for other tasks here */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
