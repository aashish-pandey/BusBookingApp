import { createSlice } from "@reduxjs/toolkit";

const tripSearchSlice = createSlice({
    name: "tripSearch",
    initialState: {
        from: "",
        to: "",
        date: ""
    },
    reducers: {
        setTripSearch(state, action){
            state = action.payload;
            return state;
        }
    }
})

export default tripSearchSlice.reducer;
export const {setTripSearch} = tripSearchSlice.actions

