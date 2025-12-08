import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/lib/store';
import { commentsState } from './comment.types';
import { getComments } from './comment.thunks';


const initialState: commentsState = {
    comments: null,
    isLoading: true,
    error: null,
    sort: "newest",
    totalCount: 0,
    currentPage: 0,
    hasNextPage: false,
    hasPrevPage: false,
    limit: 10,
    totalPages: 0
}

const commentSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        setPage: (state, action) => {
            state.currentPage = action.payload;
        },

        setSort: (state, action) => {
            state.sort = action.payload;
            state.currentPage = 1; // reset page on sort change
        },

        setLimit: (state, action) => {
            state.limit = action.payload;
            state.currentPage = 1;
        },

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
        // Update a comment reaction
        updateReaction: (state, action) => {
            if (!state.comments) return;

            const index = state.comments.findIndex(
                (c) => c._id === action.payload._id
            );

            if (index !== -1) {
                state.comments[index] = {
                    ...state.comments[index],
                    likeCount: action.payload.reactionType == 'like' ? state.comments[index].likeCount + 1 : state.comments[index].likeCount,
                    dislikeCount: action.payload.reactionType == 'dislike' ? state.comments[index].dislikeCount - 1 : state.comments[index].dislikeCount,
                    currentUserReaction: action.payload.reactionType
                };
            }
        },

        // ✅ Delete a comment
        deleteComment: (state, action) => {
            if (!state.comments) return;

            state.comments = state.comments.filter(
                (comment) => comment._id !== action.payload._id
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
                state.totalCount = action.payload.meta.totalCount;
                state.currentPage = action.payload.meta.currentPage;
                state.hasNextPage = action.payload.meta.hasNextPage;
                state.hasPrevPage = action.payload.meta.hasPrevPage;
                state.limit = action.payload.meta.limit;
                state.totalPages = action.payload.meta.totalPages;
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
export const {
    setComments,
    addComment,
    updateComment,
    updateReaction,
    deleteComment,
    setLimit,
    setPage,
    setSort,
} = commentSlice.actions;

const commentReducer = commentSlice.reducer;
export default commentReducer;
