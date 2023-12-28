import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: "loginStatus",
    initialState: 'false',
    reducers: {

        setLoginStatus(state, action){
            state = action.payload;
            return state;
        }
    }
})

export default loginSlice.reducer;
export const {setLoginStatus} = loginSlice.actions;