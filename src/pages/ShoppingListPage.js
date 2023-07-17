import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import AddShoppingList from '../components/AddShoppingList';

const API_URL = 'http://localhost:5005';


export default function ShoppingListPage() {
  const [shoppingLists, setShoppingLists] = useState([]);

  const getAllShoppingLists = () => {
    axios.get(`${API_URL}/shopping-lists`)
    .then((response) => 
     setShoppingLists(response.data.shoppingLists))
     //The spread operator ... is used to create a new array, combining the existing shoppingLists array with the new array obtained from response.data.shoppingLists.
    .catch((err) => console.log(err));
  };


  // We set this effect will run only once, after the initial render by setting the empty dependency array - []
  useEffect(() => {
    getAllShoppingLists();
  }, [])

  return (
    <div>

    <AddShoppingList refreshShoppingList={getAllShoppingLists} />
    {/* Passing the getAllShoppingLists as a prop so the list of shopping list automatically re-fetches after creating new list ==> pass it to AddShoppingList */}

      {shoppingLists.map((oneList) => {
        return (
          <div key={oneList._id}>
            <Link to={`/shopping-lists/${oneList._id}`}>
              <h3>{oneList.title}</h3>
            </Link>
          </div>
        )
      })}
    </div>
  )
}
