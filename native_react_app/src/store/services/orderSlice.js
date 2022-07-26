import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {axiosFireBase} from '../../axiosFireBase';
import {DELIVERY} from '../../../constants'


const initialState = {
    order:{},
    loading:false, 
    error:null,
    purchasable:true,
    totalPrice: DELIVERY
}

export const sendOrder = createAsyncThunk(
    'orders/sendOrder',
    async(order)=>{
        const res = await axiosFireBase.post('orders.json', order)
        return res.data
    }
)


const reducerOrder = createSlice({
    name:'orders',
    initialState,
    reducers:{
        addDish:(state, action) =>{
            console.log('add dish action', action)
            if (state.order.hasOwnProperty[action.payload]) {
                state.order.hasOwnProperty[action.payload]+=1
            } else {
                state.order.hasOwnProperty[action.payload]=1
            }
        },
        changePurchasable:(state,action)=>{
            console.log('action payload in purchasable', action.payload)
            state.purchasable=action.payload
        },
        removeDish:(state, action) =>{
            console.log('removeDish action', action.payload)
        }

    },
    extraReducers:{
    [sendOrder.fulfilled]:(state, action)=>{
        console.log('payload in add order', action.payload)
        return initialState
    },
}
})

export const {addDish, changePurchasable, removeDish} = reducerOrder.actions;
export default reducerOrder.reducer;
