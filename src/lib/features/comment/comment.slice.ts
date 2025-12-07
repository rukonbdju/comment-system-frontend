import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/lib/store';
import { commentsState } from './comment.types';
import { getComments } from './comment.thunks';


const initialState: commentsState = {
    comments: null,
    isLoading: true,
    error: null,
}

const commentSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        // ✅ Set all comments manually
        setComments: (state, action) => {
            state.comments = action.payload;
            state.isLoading = false;
            state.error = null;
        },

        // ✅ Add a new comment
        addComment: (state, action) => {
            if (state.comments) {
                state.comments.unshift(action.payload);
            } else {
                state.comments = [action.payload];
            }
        },

        // ✅ Update a comment
        updateComment: (state, action) => {
            if (!state.comments) return;

            const index = state.comments.findIndex(
                (c) => c._id === action.payload._id
            );

            if (index !== -1) {
                state.comments[index] = action.payload;
            }
        },

        // ✅ Delete a comment
        deleteComment: (state, action) => {
            if (!state.comments) return;

            state.comments = state.comments.filter(
                (comment) => comment._id !== action.payload
            );
        },

        // ✅ Clear all comments
        clearComments: (state) => {
            state.comments = null;
            state.isLoading = false;
            state.error = null;
        },
    },

    extraReducers: (builder) => {
        builder.addCase(getComments.pending, (state) => {
            state.comments = null
            state.error = null;
            state.isLoading = true;
        }).addCase(getComments.fulfilled, (state, action) => {
            if (action.payload.success) {
                state.comments = action.payload.data;
                state.isLoading = false;
                state.error = null;
            } else {
                state.comments = null
                state.isLoading = false;
                state.error = action.payload.message || 'Something went wrong';
            }
        }).addCase(getComments.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message || 'Something went wrong!';
        })
    }
})
export const commentsSelector = (state: RootState) => state.comment;
export const { } = commentSlice.actions;

const commentReducer = commentSlice.reducer;
export default commentReducer;
