import {IPost} from "../../models/IPost";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {postService} from "../../services/api.service";
import {AxiosError} from "axios";

type PostSliceType = {
    posts: IPost[];
    isLoaded: boolean;
    error: string;
}

const postsInitState: PostSliceType = {
    posts: [],
    isLoaded: false,
    error: ''
}

const loadPosts = createAsyncThunk(
    'postSlice/loadPosts',
    async (_, thunkAPI) => {
        try {
            const posts = await postService.getAll();
            return thunkAPI.fulfillWithValue(posts)
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);

        }

    }
)
export const postSlice = createSlice({
    name: 'postSlice',
    initialState: postsInitState,
    reducers: {
        changeLoadState: (state, action: PayloadAction<boolean>) => {
            state.isLoaded = action.payload;
        }
    },
    extraReducers: builder =>
        builder
            .addCase(loadPosts.fulfilled, (state, action) => {
                state.posts = action.payload;
            })
            .addCase(loadPosts.rejected, (state, action) => {
                state.error = action.payload as string;
            })

});
export const postActions = {
    ...postSlice.actions,
    loadPosts
}