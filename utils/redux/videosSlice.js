import { createSlice } from "@reduxjs/toolkit";

const videosSlice = createSlice({
    name: 'videos',
    initialState: {
        videos: null
    },
    reducers: {
        setVideos: (state,actions) => {
            state.videos = actions.payload;
        }
    }
})

export const { setVideos } = videosSlice.actions;
export default videosSlice.reducer;