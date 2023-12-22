import { createSlice } from "@reduxjs/toolkit";

const pageSlice = createSlice({
    name: "page",
    initialState: 'home',
    reducers: {

        showPage(state, action){
            state = action.payload;
            return state;
        }
    }
})

export default pageSlice.reducer;
export const {showPage} = pageSlice.actions;