import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { axiosFireBase } from '../../axiosFireBase';



const initialState = {
    formDish: {
        title:'',
        price:'',
        image:''
    },
    dishes:[],
    error:null,
    loading:false
}
export const fetchDishes =createAsyncThunk(
    'dishes/fetchDishes',
    async ()=>{
        const res = await axiosFireBase.get('dishes.json')
        return res.data
    }
)

export const addDish =createAsyncThunk(
    'dishes/addDish',
    async(newDish)=>{
        const res = await axiosFireBase.post('dishes.json', newDish) 
        return {...newDish, id:res.data.name}
    }
)
export const deleteDish =createAsyncThunk(
    'dishes/deleteDish',
    async(dishId)=>{
        await axiosFireBase.delete('dishes/'+dishId+'.json')
        return dishId
    }
)
export const updateDish=createAsyncThunk(
    'dishes/editDish',
    async (dish )=>{
        await axiosFireBase.put('dishes/'+dish.id+'.json',{title:dish.title, price:dish.price,image:dish.image})
        return dish
    }
)

const reducerDishes = createSlice({
    name:'dishes',
    initialState,
    extraReducers:{
    [fetchDishes.fulfilled]:(state, action) =>{

        state.dishes=Object.keys(action.payload).map(dishId =>( {...action.payload[dishId], id :dishId}))
    },
    [addDish.fulfilled]:(state,action)=>{
        state.dishes.push(action.payload)
    },
    [deleteDish.fulfilled]:(state, action)=>{
        console.log('delete dish action payload', action.payload)
        let copyDishes = state.dishes.filter(dish=>dish.id !== action.payload)
        state.dishes=copyDishes
    },
    [updateDish.fulfilled]: (state, action)=>{
        let oldOnes = state.dishes.filter(dish=>dish.id!==action.payload.id)
        oldOnes.push(action.payload)
        state.dishes=oldOnes
    }
    }

})


export default reducerDishes.reducer