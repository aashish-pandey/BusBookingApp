import { configureStore } from "@reduxjs/toolkit";

//custom files
import  pageSlice  from "./slices/pageSlice";

const store = configureStore({
    reducer:{
        page: pageSlice,
    },
})

export default store;