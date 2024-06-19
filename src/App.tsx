import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Counter from './components/Counter/Counter';
import TodoList from './components/TodoList/TodoList';
import FormValidation from './components/FormValidation/FormValidation';
import SearchFunctionality from './components/SearchFunctionality/SearchFunctionality';
import ImageUpload from './components/ImageUpload/ImageUpload';
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
          <Route path="/task3" element={<FormValidation />} />
          <Route path="/task4" element={<SearchFunctionality />} />
          <Route path="/task5" element={<ImageUpload />} />
          {/* Add routes for other tasks here */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
