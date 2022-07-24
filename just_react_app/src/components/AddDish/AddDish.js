import React, {useState, useEffect} from 'react';
import FormDish from '../FormDish/FormDish';
import './AddDish.css';
import {useNavigate} from 'react-router-dom';
import { shallowEqual, useDispatch } from 'react-redux';


const AddDish=()=>{
    const [dish, setDish]= useState({
        title:'', 
        price:'', 
        image:''
})
    const navigate = useNavigate();
const changeDataHanlder =(e)=>{
    const {name, value } = e.target
    console.log('name', name , 'value', value)
    let copy = {...dish}
    copy[name]=value
    setDish(copy)
}
const saveHandler =(e)=>{
    e.preventDefault()
    console.log('save')
}
const cancelHandler =() =>{
    console.log('cancel form ')
    navigate('/')
}
return (
    <>
        <div className='addDishContainer'>
            <h2>Add New Dish</h2>
            <FormDish 
                title={dish.title}
                price={dish.price}
                image={dish.image}
                changeDataHanlder={(e)=>changeDataHanlder(e)}
                saveHandler={(e)=>saveHandler(e)}
                cancelHandler={cancelHandler}
            />
        </div>
    </>
)
}
export default AddDish;
