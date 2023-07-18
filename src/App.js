
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ShoppingListPage from './pages/ShoppingListPage';
import ShoppingListDetailsPage from './pages/ShoppingListDetailsPage';
import EditShoppingList from './pages/EditShoppingList';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>

        <Route path='/' element={ <HomePage /> } />
        <Route path='/shopping-lists' element={ <ShoppingListPage /> } />
        <Route path='/shopping-lists/:listId' element={ <ShoppingListDetailsPage /> } />
        <Route path='/shopping-lists/edit/:listId' element={ <EditShoppingList /> } />

        
      </Routes>
    </div>
  );
}

export default App;
