import React, {useState} from 'react';
import {View, Text,StyleSheet, Button} from 'react-native'


const Footer=({isPurchasable, setCancelPurchase,checkOutHandler, totalPrice})=>{
    return (
        <>
            <View style= {styles.footer}>
    <Text style={styles.footerHeader}>
                    Total Price:{totalPrice}
    </Text>

<Button show={isPurchasable} closed={setCancelPurchase} onPress={checkOutHandler}>Checkout</Button>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    footer: {
        flex:1,
        display:'flex', 
        flexDirection:'row', 
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#6b03fc'
    },
    footerHeader:{
        marginLeft:3,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    }
})
export default Footer;