import React, { useState } from "react";
import axios from "axios";

const API_URL = 'http://localhost:5005';


export default function AddShoppingList({refreshShoppingList}) {
  const [ title, setTitle ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = { title };
    axios.post(`${API_URL}/shopping-lists`, requestBody)
    .then((response) => {
      // Reset the state
      setTitle('');

      refreshShoppingList();
    })
    .catch((err) => console.log(err));
  }

  return (
    <div>
      <h3>Add Shopping List</h3>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <button type="submit">Create the List</button>
      </form>
    
    </div>
  )
}
