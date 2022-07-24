import React, {useState, useEffect} from 'react';
import FormDish from '../FormDish/FormDish';
import './AddDish.css';
import {useNavigate} from 'react-router-dom';
import { shallowEqual, useDispatch } from 'react-redux';
import {addDish} from '../../store/services/DishesSlice';


const AddDish=()=>{
    const [dish, setDish]= useState({
        title:'', 
        price:'', 
        image:''
})

    const dispatch=useDispatch();
    const navigate = useNavigate();

const changeDataHanlder =(e)=>{
    const {name, value } = e.target
    let copy = {...dish}
    copy[name]=value
    setDish(copy)
}
const validateForm=()=>{
    const fullStatus = Object.keys(dish).filter(dishKey=>dish[dishKey].trim().length===0)
    return fullStatus.length===0;
}

const saveHandler =(e)=>{
    e.preventDefault()
    if(validateForm()){
        dispatch(addDish(dish))
        setDish({
            title:'', 
            price:'', 
            image:''
    })
    } else {
        alert('Check fields on spaces')
    }
}

const cancelHandler =() =>{
    navigate('/')
}
useEffect(()=>{
    setDish({
        title:'', 
        price:'', 
        image:''
})
},[dispatch])
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
