import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import FooterBar from '../FooterBar/FooterBar';
import HeaderBar from '../HeaderBar/HeaderBar';
import ScrollWindow from '../ScrollWindow/ScrollWindow';
import {DELIVERY} from '../../../constants';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';


const  ItemList=({ navigation }) =>{
    const {order, totalPrice, purchasable} = useSelector(state=>state.order, shallowEqual)
    const dispatch =useDispatch();
    const {dishes}= useSelector(state=>state.dishes, shallowEqual)


    
  return (
      <>
    <View style={{ flex: 1
      }}>
    <HeaderBar/>
    <ScrollWindow/>


      
      <FooterBar
          totalPrice={totalPrice===DELIVERY?0:totalPrice}
      />
    </View>
    </>
  );
}


const styles = StyleSheet.create({
    content: {
        flex:8,

    }
})

export default ItemList;