import { user } from "../auth/auth.types";

export interface CommentDTO {
    _id: string;
    content: string;
    user: user;
    currentUserReaction: string | null;
    likeCount: number;
    dislikeCount: number;
    createdAt: string;
    updatedAt: string;
}

export interface commentsState {
    comments: CommentDTO[] | null;
    isLoading: boolean;
    error: string | null;
    sort: string;
    totalCount: number;
    totalPages: number;
    currentPage: number;
    limit: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;

}