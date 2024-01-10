import { createSlice } from "@reduxjs/toolkit";

const journeyInfoSlice = createSlice({
    name: "journeyInfo",
    initialState: {},
    reducers: {
        setJourneyInfo(state, action){
            state = action.payload;
            return state;
        }
    }
})

export default journeyInfoSlice.reducer;
export const {setJourneyInfo} = journeyInfoSlice.actions