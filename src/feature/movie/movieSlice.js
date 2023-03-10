import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    recommand: null,
    newDisney: null,
    original: null,
    trending: null
}

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        setMovies: (state, action) => {
            state.recommend = action.payload.recommend;
            state.original = action.payload.original;
            state.newDisney = action.payload.newDisney;
            state.trending = action.payload.trending

        }
    }
})

export const { setMovies } = movieSlice.actions;

export const selectRecommend = (state) => state.movie.recommend;
export const selectNewDisney = (state) => state.movie.newDisney;
export const selectOriginal = (state) => state.movie.original;
export const selectTrending = (state) => state.movie.trending;

export default movieSlice.reducer;