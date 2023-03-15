import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./config";
const chatSlice = createSlice({
    name:'chat',
    initialState:{
     msg:[],
    },
    reducers:{
    addMsg:(state,action) =>{
        state.msg.splice(LIVE_CHAT_COUNT,1);
        state.msg.push(action.payload);
    },
    },
});

export const {addMsg} = chatSlice.actions;
export default chatSlice.reducer;