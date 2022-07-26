import React from 'react';
import {View, Image,Text,StyleSheet} from 'react-native';

const ItemDish =({itemTitle, itemImage, itemPrice, addHandler,loading})=>{
    let item =  <View onClick={addHandler} style={styles.item}>
                    <Image style={styles.itemImage} source={{uri:itemImage}}/>

                    <Text style={styles.itemText}>
                        {itemTitle}
                    </Text>
                    <Text style={styles.itemPrice}>
                        {itemPrice} KGS
                    </Text>
                </View>


    return (
       item
    )
}
const styles = StyleSheet.create({
    item:{
        flexDirection:'row',
        padding:10,
        marginBottom:10,
        marginRight:4,
        backgroundColor:'#bbb',
        alignItems: 'center',
        boxSizing: 'border-box',
    },
    itemText:{
        color:'#ffffff',
        marginLeft:3,
    },
    itemPrice:{
        color:'#ffffff',
        marginRight:3,
    },
    itemImage:{
        width: 40, 
        height: 40,
        marginRight:5,
    }
});
export default ItemDish;