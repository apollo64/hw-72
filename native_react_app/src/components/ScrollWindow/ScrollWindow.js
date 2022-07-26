import React, {useEffect} from 'react';
import  {View,Text, StyleSheet, FlatList} from 'react-native';
import Item from '../ItemList/Item/Item';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';
// import {fetchRecords} from '../../store/services/recordSlice';
// import Spinnerist from '../UI/Spinnerist/Spinnerist';

const ScrollWindow =()=>{
    // const {items, loading, error} = useSelector(state=>state, shallowEqual)
    const dispatch=useDispatch()
    console.log('loading',loading)
    useEffect(()=>{
        // dispatch(fetchRecords())
    },[dispatch])
    let spinner = null;
    if (loading) {
        // spinner = <Spinnerist/>
    }
    
    
    return (
        <View style={styles.container}>
             {/* {spinner} */}
            <FlatList
            style={styles.scrollWindow}
            data= {items}
            renderItem = {({item})=>(
                <Item
                itemImage = {item.image}
                itemTitle={item.title}
                itemPrice={item.price}
                key={item.id}
                loading ={loading}
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
