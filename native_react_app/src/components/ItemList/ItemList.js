import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import FooterBar from '../FooterBar/FooterBar';
import HeaderBar from '../HeaderBar/HeaderBar';
import ScrollWindow from '../ScrollWindow/ScrollWindow';


const  ItemList=({ navigation }) =>{
  return (
      <>
    <View style={{ flex: 1
    //  alignItems: 'center', justifyContent: 'center'
      }}>
    <HeaderBar/>
    <ScrollWindow/>


      
      <FooterBar/>
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