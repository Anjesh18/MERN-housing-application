import { createSlice } from "@reduxjs/toolkit";

const houseSlice=createSlice({
    name:"house",
    initialState:{
        houses:[],
        keyword:""
    },
    reducers:{
        setHouses:(state,action)=>{
            state.houses=action.payload
        },
        setKeyword:(state,action)=>{
            state.keyword=action.payload
        }
    }
})

export const {setHouses, setKeyword}=houseSlice.actions
export default houseSlice.reducer