import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { axiosFireBase } from '../../../axiosFireBase';



initialState = {
    formDish: {
        title:'',
        price:'',
        image:''
    },
    dishes:[],
    error:null,
    loading:false
}
const fetchDishes =createAsyncThunk({
    'dishes/fetchDishes',
    async ()=>{
        const res = await axiosFireBase.get('dishes.json')
        const dishes= res.data.map(dishId=>{...res.data[dishId], id:dishId})
        return res.data
    }
})

const addDish =createAsyncThunk({
    'dishes/addDish',
    async(newDish)=>{
        const res = await axiosFireBase.post('dishes.json', newDish) 
        return {...newDish, id:res.data.name}
    }
})
const deleteDish =createAsyncThunk({
    'dishes/deleteDish',
    async(dishId)=>{
        const res = await axiosFireBase.delete('dishes/'+dishId+.'json')
        return dishId
    }
})

const reducerDishes = createSlice({
    name:'dishes',
    initialState,
    exraReducers:
    [fetchDishes.fulfilled]:(state, payload) =>{
        console.log('action payload fetchDishes', action.payload)
        state=action.payload
    },
    [addDish.fulfilled]:(state,action)=>{
        console.log('add dish action payload', action.payload)
        state.push(action.payload)
    },
    [deleteDish/fulfilled]:(state, payload)=>{
        console.log('delete dish action payload', action.payload)
        let copy = state.filter(dish=>dish.id !== action.payload)
        state=copy
    },


})