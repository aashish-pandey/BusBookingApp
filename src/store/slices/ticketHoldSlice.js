import { createSlice } from "@reduxjs/toolkit";

const ticketHoldSlice = createSlice({
    name: "ticketHold",
    initialState: {
        id: "",
        ticketSrlNo: "",
        departureDate: "",
        arrivalDate: "",
        departureLocation: "",
        arrivalLocation: "",
        operator: "",
        departureTime: "",
        holdStartingTime: "",
    },
    reducers: {
        setTicketHoldInfo(state, action){
            // console.log("from reducer", action.payload)
            state=action.payload;
            return state;
        }
    }
})

export default ticketHoldSlice.reducer;
export const {setTicketHoldInfo} = ticketHoldSlice.actions