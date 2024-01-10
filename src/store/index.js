import { configureStore } from "@reduxjs/toolkit";

//custom files
import  pageSlice  from "./slices/pageSlice";
import userSlice from "./slices/userSlice";
import loginSlice from "./slices/loginSlice";
import journeyInfoSlice from "./slices/journeyInfoSlice";

const store = configureStore({
    reducer:{
        page: pageSlice,
        user: userSlice,
        loginStatus: loginSlice,
        journeyInfo: journeyInfoSlice
    },
})

export default store;