import React, {useState, useEffect} from 'react';
import FormDish from '../FormDish/FormDish';
import './EditDish.css';
import {useNavigate,useParams} from 'react-router-dom';
import {updateDish} from '../../store/services/DishesSlice'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';


const EditDish=()=>{
    const {dishes} = useSelector(state=>state.dishes, shallowEqual)
    
    const dishId = useParams()['id'];
    const [dish, setDish]= useState(
        dishes.filter(dish=>dish.id === dishId)[0] ||
        {
        title:'', 
        price:'', 
        image:''
}
)
const dispatch =useDispatch();
    const navigate = useNavigate();
const changeDataHanlder =(e)=>{
    const {name, value } = e.target
    let copy = {...dish}
    copy[name]=value
    setDish(copy)
}
const saveHandler =(e)=>{
    e.preventDefault()
    dispatch(updateDish( dish))
    navigate('/')
}
const cancelHandler =() =>{
    navigate('/')
}
useEffect(()=>{
},[])
return (
    <>
        <div className='addDishContainer'>
            <h2> Edit Dish</h2>
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
export default EditDish;
