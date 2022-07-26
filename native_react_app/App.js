import { StatusBar } from 'expo-status-bar';
import {NativeBaseProvider} from 'native-base';
import ItemList from './src/components/ItemList/ItemList';
import {Provider} from 'react-redux';
import reducerOrder from './src/store/services/orderSlice';
import reducerDishes from './src/store/services/dishesSlice';
import {configureStore} from '@reduxjs/toolkit';



const store = configureStore({
  reducer:{
    dishes: reducerDishes,
    order:reducerOrder
  }
})

export default function App() {
  return (
    <Provider store={store}>
    <NativeBaseProvider>
    <ItemList/>
    </NativeBaseProvider>
    </Provider>
  );
}

