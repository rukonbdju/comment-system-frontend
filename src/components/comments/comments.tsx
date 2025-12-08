import { useEffect } from "react";
import CommentForm from "./comment-form";
import FilterComments from "./filter-comments";
import CommentCard from "./comment-card";
import { useSelector } from "react-redux";
import { commentsSelector } from "@/lib/features/comment/comment.slice";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { getComments } from "@/lib/features/comment/comment.thunks";

const Comments = () => {
    const dispatch = useAppDispatch()
    const { comments } = useSelector(commentsSelector)
    console.log(comments)
    useEffect(() => {
        dispatch(getComments())
    }, [dispatch])
    return (
        <div>
            <CommentForm />
            <FilterComments />
            <div className="comment-container">
                {comments?.map((comment, index) => (
                    <CommentCard key={index} comment={comment} />
                ))}

                {comments && comments.length === 0 && (
                    <p className="text-center py-10 text-gray-500 italic">
                        Be the first to leave a comment!
                    </p>
                )}
            </div>
        </div>
    )
}

export default Comments;