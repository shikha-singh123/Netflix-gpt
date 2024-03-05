import {createSlice} from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:"movies",
    initialState:{
         nowPlayingMovies:null,
         trailerView:null,

    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
         state.nowPlayingMovies=action.payload
        },
        addTrailerView:(state,action)=>{
            state.trailerView=action.payload;
        }
    }

});
export const {addNowPlayingMovies,addTrailerView}=movieSlice.actions;
export default movieSlice.reducer;