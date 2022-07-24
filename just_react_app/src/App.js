import React from 'react';
import  {Route, Routes} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import DishList from './components/DishList/DishList'
import './App.css';

function App() {
  return (
    <Routes>
    <Route element={<Layout/>}>
    <Route path="/" element={<DishList/>}/>
    {/* <Route path="/" element={<AddContact/>}/> */}
    {/* <Route path="/" element={<EditContact/>}/> */}
    </Route>
  </Routes>
  );
}

export default App; 
