import React, { useState } from 'react';
import './TodoList.css';

interface TodoItem {
  id: number;
  text: string;
}

const TodoList: React.FC = () => {
  // State to store the list of to-do items
  const [items, setItems] = useState<TodoItem[]>([]);
  
  // State to store the current input value for a new item
  const [newItem, setNewItem] = useState<string>('');

  // Function to add a new item to the list
  const addItem = () => {
    if (newItem.trim() === '') return;

    const newItemObject: TodoItem = {
      id: Date.now(),
      text: newItem.trim(),
    };

    // Update the items state with the new item
    setItems([...items, newItemObject]);
    // Clear the input field
    setNewItem('');
  };

  // Function to remove an item from the list based on its ID
  const removeItem = (id: number) => {
    // Update the items state by filtering out the item with the given ID
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
        <h3>View To-Do List Items:</h3>
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
