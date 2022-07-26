import axios from 'axios'; 


export const axiosFireBase = axios.create({
baseURL:'https://hw-72-26b1e-default-rtdb.firebaseio.com/'
})
