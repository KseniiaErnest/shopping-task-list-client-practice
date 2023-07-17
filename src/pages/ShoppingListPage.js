import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const API_URL = 'http://localhost:5005';


export default function ShoppingListPage() {
  const [shoppingLists, setShoppingLists] = useState([]);

  const getAllShoppingLists = () => {
    axios.get(`${API_URL}/shopping-lists`)
    .then((response) => setShoppingLists(response.data))
    .catch((err) => console.log(err));
  };

  // We set this effect will run only once, after the initial render by setting the empty dependency array - []
  useEffect(() => {
    getAllShoppingLists();
  }, [])

  return (
    <div>
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
