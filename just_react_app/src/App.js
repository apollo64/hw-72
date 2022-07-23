import React from 'react';
import  {Route, Routes} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import ContactList from './components/ContactList/ContactList'
import './App.css';

function App() {
  return (
    <Routes>
    <Route element={<Layout/>}>
    <Route path="/" element={<ContactList/>}/>
    {/* <Route path="/" element={<AddContact/>}/> */}
    {/* <Route path="/" element={<EditContact/>}/> */}
    </Route>
  </Routes>
  );
}

export default App; 
