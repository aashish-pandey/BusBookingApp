import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user", 
    initialState: {
        email: '',
        password: '',
    },
    reducers: {
        setUser(state, action){
            state = action.payload;
            return state;
        }
    }
})

export default userSlice.reducer;
export const {setUser} = userSlice.actions;