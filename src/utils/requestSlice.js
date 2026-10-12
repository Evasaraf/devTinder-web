import { createSlice } from "@reduxjs/toolkit";
const requestSlice =  createSlice({
    name: "requests",
    initialState: null,
    reducers:{
        addRequets: (state, action) => action.payload,
    }  
})
export const { addRequets } = requestSlice.actions;
export default requestSlice.reducer;