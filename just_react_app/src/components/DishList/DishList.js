import React,{ useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Dish from './Dish/Dish';
import {useSelector , useDispatch, shallowEqual} from 'react-redux';
import {deleteDish, fetchDishes} from '../../store/services/DishesSlice';
import './DishList.css';



const DishList=()=>{
    const {dishes  } = useSelector(state=>state.dishes, shallowEqual)

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const editHandler = (id)=>{
        console.log('dish id edit', id)
        navigate('edit_dish/'+id)
    }
    const deleteHandler = (id)=>{
        dispatch(deleteDish(id))
    }
    const addNewDishHandler =()=>{
        navigate('add_dish')
    }

    useEffect(()=>{
        dispatch(fetchDishes())
    },[dispatch])
    return (
        <>
        <div className="dishListHeader">
        <h2 className="dishListHeadText ">Dishes</h2>
        <button onClick={addNewDishHandler}>Add new Dish</button>             
        </div>
        <div>
            {dishes.length>0?dishes.map(dish=>{
                return (<Dish
                        dish= {dish}
                        key={dish.id}
                        editHandler={()=>{editHandler(dish.id)}}
                        deleteHandler={()=>{deleteHandler(dish.id)}}
                />)
            }):<h1>There are No dishes yet</h1>}
        </div>
        </>

    )
}
export default DishList;