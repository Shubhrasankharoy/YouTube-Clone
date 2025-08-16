import { configureStore } from "@reduxjs/toolkit";
import variableSlice from './variableSlice';
import videosSlice from './videosSlice';


const store = configureStore({
    reducer: {
        variables: variableSlice,
        videos: videosSlice
    }
})

export default store;