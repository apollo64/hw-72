import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {axiosFireBase} from '../../axiosFireBase';


const initialState = {
    dishes:[],
    loading:false, 
    error:null
}

export const fetchDishes = createAsyncThunk(
    'dishes/fetchDishes',
    async()=>{
        const res = await axiosFireBase.get('dishes.json');
        return res.data
    }
)


const reducerDishes = createSlice({
    name:'dishes',
    initialState,
    extraReducers:{
        [fetchDishes.fulfilled]:(state, action) =>{
            state.dishes = Object.keys(action.payload).map(disheId=>({...action.payload[disheId], id:disheId}))
            state.loading= false
        },
        [fetchDishes.pending]:(state, action) =>{
            state.loading=true
        }

    }
})

export default reducerDishes.reducer;