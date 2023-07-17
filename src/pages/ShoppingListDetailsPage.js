import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const API_URL = 'http://localhost:5005';

export default function ShoppingListDetailsPage(props) {
  const [shoppingList, setShoppingList] = useState(null);
// Get the URL parameter `:listId` 
  const { listId } = useParams();

  // Helper function that makes a GET request to the API and retrieves the list by id
  const getOneList = () => {
    axios.get(`${API_URL}/shopping-lists/${listId}`)
    .then((response) => {
      setShoppingList(response.data.shoppingList)
    })
    .catch((err) => console.log((err)));
  };

  useEffect(() => {
    getOneList();
  }, [])



  return (
    <div>
      {shoppingList && (
        <>
          <h2>{shoppingList.title}</h2>
        </>
      )}

      {shoppingList && shoppingList.tasks.map((task) => (
        <li key={task._id}>
          <h3>{task.task}</h3>
          <ul>
          {task.items.map((item, index) => (
            <li key={index}>{item}</li>
      ))}
          </ul>
          
          <h4>{task.isComplete ? 'Yes' : 'No'}</h4>
        </li>
      ))}

      <Link to='/shopping-lists'><button>Back to the Shopping Lists</button></Link>

      <Link to={`/shopping-lists/edit/${listId}`}><button>Edit List</button></Link>
    </div>
  )
}
