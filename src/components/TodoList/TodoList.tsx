import React, { useState } from 'react';
import './TodoList.css';

interface TodoItem {
  id: number;
  text: string;
}

const TodoList: React.FC = () => {
  const [items, setItems] = useState<TodoItem[]>([]);
  const [newItem, setNewItem] = useState<string>('');

  const addItem = () => {
    if (newItem.trim() === '') return;

    const newItemObject: TodoItem = {
      id: Date.now(),
      text: newItem.trim(),
    };

    setItems([...items, newItemObject]);
    setNewItem('');
  };

  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className="todo-list-container">
      <h1 className="task-title">Task 2</h1>
      <h3>To-Do List</h3>
      <div className="input-container">
        <input
          type="text"
          value={newItem}
          onChange={e => setNewItem(e.target.value)}
          placeholder="Add WorkItem"
        />
        <button onClick={addItem}>Add</button>
      </div>
      <div className="items-container">
        <h3>View todo list Items:</h3>
        <ul>
          {items.map(item => (
            <li key={item.id}>
              <span>{item.text}</span>
              <button onClick={() => removeItem(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
