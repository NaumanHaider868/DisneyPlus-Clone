import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import movieReducer from "../feature/movie/movieSlice";
import userReducer from "../feature/user/userSlice";

export default configureStore({
    reducer: {
        user: userReducer,
        movie: movieReducer
    },
    middleware: getDefaultMiddleware({
        serialinzableCheck: false,
    })
})