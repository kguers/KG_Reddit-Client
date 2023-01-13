import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/PostList/postsSlice";

export default configureStore({
    reducer: {
        posts: postsReducer,
    }
});