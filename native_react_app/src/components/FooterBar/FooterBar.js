import React, {useState} from 'react';
import {View, Text,StyleSheet} from 'react-native'


const Footer=()=>{
    return (
        <>
            <View style= {styles.footer}>
    <Text>
                    This is Footer
    </Text>
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
        alignItems: 'center'
    }
})
export default Footer;