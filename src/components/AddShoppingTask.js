import React, { useState } from 'react';
import axios from 'axios';

const API_URL = "http://localhost:5005";

export default function AddShoppingTask( { listId, refreshList } ) {

  const [task, setTask] = useState('');
  const [items, setItems] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    /////////////////////////////////////////////////
    // Convert the comma-separated string to an array
    const itemsArray = items.split(',').map(item => item.trim());

    // Create an object representing the body of the POST request
    const requestBody = { task, items: itemsArray, isComplete };

    axios.post(`${API_URL}/shopping-tasks`, requestBody)
    .then((response) => {
       // Reset the state to clear the inputs
       setTask('');
       setItems('');
       setIsComplete(false);

       // Invoke the callback function coming through the props from the ProjectDetailsPage, to refresh the project details
       refreshList();
    })
    .catch((err) => console.log(err));

  };

  return (
    <div>
      <h3>Add New Task</h3>

      <form onSubmit={handleSubmit}>
      <label>Task:</label>
      <input type='text' name='task' value={task} onChange={(e) => setTask(e.target.value)} />

      <label>Items:</label>
      <input type='text' name='items' value={items} onChange={(e) => setItems(e.target.value)} />

      <label>Complete</label>
      <input type='checkbox' name='isComplete' value={isComplete} onChange={(e) => setIsComplete(e.target.value)} />

      <button type='submit'>Add Task</button>


      </form>
    </div>
  )
}
