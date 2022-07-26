import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import {NativeBaseProvider} from 'native-base';
import HeaderBar from './src/components/HeaderBar/HeaderBar';
import FooterBar from './src/components/FooterBar/FooterBar';
// import Item from './src/components/ItemList/Item/Item';
import ItemList from './src/components/ItemList/ItemList';


export default function App() {
  return (
    
    <NativeBaseProvider>
    {/* <HeaderBar/>   */}
    <ItemList/>
    {/* <View style={styles.container}> */}
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      {/* <StatusBar style="auto" /> */}
    {/* <Item/> */}
    {/* <Item/> */}
    {/* </View> */}

      {/* <FooterBar/> */}

    </NativeBaseProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
