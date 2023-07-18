import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const API_URL = "http://localhost:5005";

export default function EditShoppingList(props) {
  const [title, setTitle] = useState('');

  // Get the URL parameter `:projectId`
  const { listId } = useParams();
  const navigate = useNavigate();

  // This effect will run after the initial render and each time the projectId coming from the URL parameter `projectId` changes
  useEffect(() => {
    axios.get(`${API_URL}/shopping-lists/${listId}`)
    .then((response) => {
       /* 
          We update the state with the project data coming from the response.
          This way we set inputs to show the actual title of the list
        */
       setTitle(response.data.shoppingList.title)
    })
    .catch((error) => console.log(error));
  }, [listId]);

  const handleSubmit = (e) => {
e.preventDefault();

// Create an object representing the body of the PUT request
const requestBody = {  title };

// Make a PUT request to update the project
axios.put(`${API_URL}/shopping-lists/${listId}`, requestBody)
.then((response) => {
  // Once the request is resolved successfully and the list is updated we navigate back to the details page
  navigate(`/shopping-lists/${listId}`)
})
  };

  // Delete
  const deletelist = () => {
    // Make a DELETE request to delete the project
    axios.delete(`${API_URL}/shopping-lists/${listId}`)
    .then(() => {
       // Once the delete request is resolved successfully navigate back to the list of shopping lists.
       navigate('/shopping-lists');
    })
    .catch((err) => console.log(err));
  }

  return (
    <div>
      <h3>Edit the List</h3>

      <form onSubmit={handleSubmit}>
        <lable>Title:</lable>
        <input type='text' name='title' value={title} onChange={(e) => setTitle(e.target.value)} />

        <button type='submit'>Update the List</button>

        <button onClick={deletelist}>Delete</button>
      </form>
    </div>
  )
}
