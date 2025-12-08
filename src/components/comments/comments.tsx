import { useEffect } from "react";
import CommentForm from "./comment-form";
import CommentCard, { CommentCardSkeleton } from "./comment-card";
import { useSelector } from "react-redux";
import { commentsSelector } from "@/lib/features/comment/comment.slice";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { getComments } from "@/lib/features/comment/comment.thunks";
import SortComments from "./sort-comments";
import PaginationControls from "./pagination-comments";

const Comments = () => {
    const dispatch = useAppDispatch()
    const { comments, isLoading } = useSelector(commentsSelector)
    console.log(comments)
    useEffect(() => {
        dispatch(getComments({}))
    }, [dispatch])
    return (
        <div>
            <CommentForm />
            <SortComments />
            <div className="comment-container">
                {isLoading ? (
                    <>
                        {Array.from({ length: 5 }).map((_, i) => (
                            <CommentCardSkeleton key={i} />
                        ))}
                    </>
                ) : (
                    comments?.map((comment) => (
                        <CommentCard key={comment._id} comment={comment} />
                    ))
                )}


                {comments && comments.length === 0 && (
                    <p className="text-center py-10 text-gray-500 italic">
                        Be the first to leave a comment!
                    </p>
                )}
            </div>
            <PaginationControls />
        </div>
    )
}

export default Comments;