import { user } from "../auth/auth.types";

export interface CommentDTO {
    _id: string;
    content: string;
    user: user;
    likeCount: number;
    dislikeCount: number;
    createdAt: string;
    updatedAt: string;
}

export interface commentsState {
    comments: CommentDTO[] | null;
    isLoading: boolean;
    error: string | null;
}