import { createSlice } from "@reduxjs/toolkit";

const selectedBusDetailsSlice = createSlice({
    name: "selectedBusDetails",
    initialState:{
        id: "",
        departureDate: "",
        arrivalDate: "",
        departureLocation: "",
        arrivalLocation: "",
        operator: "",
        departureTime: "",


    },
    reducers:{
        setSelectedBusDetailsInfo(state, action){
            state = action.payload;
            return state;
        }
    }
})

export default selectedBusDetailsSlice.reducer;
export const {setSelectedBusDetailsInfo} = selectedBusDetailsSlice.actions