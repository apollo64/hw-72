import React from 'react';
import  {Route, Routes} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import DishList from './components/DishList/DishList';
import AddDish from './components/AddDish/AddDish';
import EditDish from './components/EditDish/EditDish';
import './App.css';

function App() {
  return (
    <Routes>
    <Route element={<Layout/>}>
    <Route path="/" element={<DishList/>}/>
    <Route path="add_dish" element={<AddDish/>}/>
    <Route path="edit_dish/:id" element={<EditDish/>}/>
    </Route>
  </Routes>
  );
}

export default App; 
