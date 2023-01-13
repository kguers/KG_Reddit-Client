import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { subredditCall, searchCall } from "../../api/reddit";



export const loadSubreddit = createAsyncThunk(
    'posts/loadSubreddit',
    async (query) => {
        const data = await subredditCall(query);
        const json = await data.json();
        return json;
    }
);

export const loadSearch = createAsyncThunk(
    'posts/loadSubreddit',
    async (query) => {
        const data = await searchCall(query);
        const json = await data.json();
        return json;
    }
);

const postListSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        searchType: 'search', //default search type
        isLoading: false,
        hasError: false,
    },
    reducers: {
        setSearchType: (state, action) => {
            state.searchType = action.payload.type;
        }
    },
    extraReducers: {
        [loadSubreddit.pending]: (state) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [loadSearch.pending]: (state) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [loadSubreddit.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.hasError = false;
            state.posts = action.payload.data.children;
        },
        [loadSearch.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.hasError = false;
            state.posts = action.payload.data.children;
        },
        [loadSubreddit.rejected]: (state) => {
            state.isLoading = false;
            state.hasError = true;
        },
        [loadSearch.rejected]: (state) => {
            state.isLoading = false;
            state.hasError = true;
        },
        
    }
});

export const selectType = (state) => state.searchType;

export default postListSlice.reducer