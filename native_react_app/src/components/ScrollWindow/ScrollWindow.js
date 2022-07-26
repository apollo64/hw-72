import React, {useEffect,useState} from 'react';
import  {View,Text, StyleSheet, FlatList} from 'react-native';
import Item from '../ItemList/Item/Item';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import {addDish} from '../../store/services/orderSlice';
import { fetchDishes } from '../../store/services/dishesSlice';



const ScrollWindow =()=>{
    const stanImage = 'https://live-production.wcms.abc-cdn.net.au/7f6f1ae13ff9c22f22479312208be855';

    const {dishes, loading, error} = useSelector(state=>state.dishes, shallowEqual)
    const {order,totalPrice, purchasable} = useSelector(state=>state.order, shallowEqual)
    const dispatch=useDispatch()

    const isPurchasable=()=>{
        console.log('is purchase')
    }


    useEffect(()=>{
        dispatch(fetchDishes())
    },[])
    let spinner = null;

    const addDishHandler =(id)=>{
        console.log('add dish')
        dispatch(addDish(id))
    }
    useEffect(()=>{
        console.log('useEffect in power')
    },[dispatch])
    
    return (
        <View style={styles.container}>
            <FlatList
            style={styles.scrollWindow}
            data= {dishes}
            renderItem = {({item})=>(
                <Item
                itemImage = {item.image}
                itemTitle={item.title}
                itemPrice={item.price}
                key={item.id}
                addHandler ={()=>{addDishHandler(item.id)}}
                />
            )}
            />
           
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
      flex: 8,
      paddingTop: 20,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent:'flex-start',
      boxSizing: 'border-box',

    },
    scrollWindow:{
      width:'100%',
      padding:10,
      marginBottom:10,
      boxSizing: 'border-box',
    }

  });
  export default ScrollWindow;
