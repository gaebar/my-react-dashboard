import React from 'react';
import { Link } from 'react-router-dom';

const TasksMenu: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#D4A017', padding: '10px', borderRadius: '5px' }}>
      <h2>Angular/React Task</h2>
      <div>
        <Link to="/task1"><button>Task 1</button></Link>
        <Link to="/task2"><button>Task 2</button></Link>
        <Link to="/task3"><button>Task 3</button></Link>
        <Link to="/task4"><button>Task 4</button></Link>
        <Link to="/task5"><button>Task 5</button></Link>
        <Link to="/task6"><button>Task 6</button></Link>
        <Link to="/task7"><button>Task 7</button></Link>
      </div>
    </div>
  );
};

export default TasksMenu;
