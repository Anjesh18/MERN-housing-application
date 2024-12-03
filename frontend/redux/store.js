import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from './AuthSlice'
import HouseSlice from './HouseSlice'
const store=configureStore({
    reducer:{
        auth:AuthSlice,
        house:HouseSlice
    }
})

export default store;
