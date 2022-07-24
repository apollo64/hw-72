import React,{useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Dish from './Dish/Dish';
import './DishList.css';



const DishList=()=>{
    const stanImage = 'https://baking-academy.ru/upload/ammina.optimizer/jpg-webp/q80/upload/resize_cache/iblock/3fb/540_800_1/3fbc6a2a286120a62282e179dc29f3ed.webp'
    const [dishes , setDishes] = useState([
        {title:'peperony', price:100, id:0, image:stanImage },
        {title:'peperony', price:100, id:2, image:stanImage },
        {title:'peperony', price:100, id:3, image:stanImage },
        {title:'peperony', price:100, id:4, image:stanImage },
    ])
    const navigate = useNavigate();
    const editHandler = (id)=>{
        console.log('dish id edit', id)
        navigate('edit_dish/'+id)
    }
    const deleteHandler = (id)=>{
        console.log('dish id delete', id)
    }
    const addNewDishHandler =()=>{
        navigate('add_dish')
        console.log('dish add new')
    }
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