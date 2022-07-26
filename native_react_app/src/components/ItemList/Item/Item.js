import {View, Image,Text,StyleSheet} from 'react-native';

const Record =({itemTitle, itemImage, itemPrice, loading})=>{
    let item =  <View style={styles.item}>
                    <Image style={styles.itemImage} source={{uri:itemImage}}/>

                    <Text style={styles.itemText}>
                        {itemTitle}
                    </Text>
                    <Text style={styles.itemPrice}>
                        {itemPrice}
                    </Text>
                </View>


    return (
       record
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
export default Record;