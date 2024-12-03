import { createSlice } from "@reduxjs/toolkit";


const authStore=createSlice({
    name:"auth",
    initialState:{
        user: null
    },
    reducers:{
        setUser:(state,action)=>{
            state.user=action.payload
        }
    }
})

export const {setUser} = authStore.actions
export default authStore.reducer