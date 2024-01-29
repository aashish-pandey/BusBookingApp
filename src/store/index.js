import { configureStore } from "@reduxjs/toolkit";

//custom files
import  pageSlice  from "./slices/pageSlice";
import userSlice from "./slices/userSlice";
import loginSlice from "./slices/loginSlice";
import journeyInfoSlice from "./slices/journeyInfoSlice";
import tripSearchSlice from "./slices/tripSearchSlice";

const store = configureStore({
    reducer:{
        page: pageSlice,
        user: userSlice,
        loginStatus: loginSlice,
        journeyInfo: journeyInfoSlice,
        tripSearch: tripSearchSlice,
    },
})

export default store;