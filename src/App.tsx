import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Counter from './components/Counter/Counter';
import TodoList from './components/TodoList/TodoList'; 
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="container">
        <Dashboard />
        <Routes>
          <Route path="/" element={<div />} />
          <Route path="/task1" element={<Counter />} />
          <Route path="/task2" element={<TodoList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
