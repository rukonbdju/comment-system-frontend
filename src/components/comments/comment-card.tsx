import { Edit, MessageSquare, ThumbsDown, ThumbsUp } from "lucide-react";
import Avatar from "../shared-components/avatar";
import formatNumberCount from "@/utils/format-number-count";
import TimeAgo from "../shared-components/time-ago";
import { baseURL } from "@/utils/base-url";
import { CommentDTO } from "@/lib/features/comment/comment.types";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { updateReaction } from "@/lib/features/comment/comment.slice";
import { useSelector } from "react-redux";
import { authSelector } from "@/lib/features/auth/auth.slice";
import { useState } from "react";
import CommentEditForm from "./comment-edit-form";
import DeleteComment from "./comment-delete";

const CommentCard = ({ comment }: { comment: CommentDTO }) => {
    const [isEditing, setIsEditing] = useState(false)
    const dispatch = useAppDispatch()
    const { user } = useSelector(authSelector)
    const handleReaction = async (reactionType: string) => {
        try {
            const res = await fetch(`${baseURL}/reactions/comment/${reactionType}`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ targetId: comment._id })
            })
            const result = await res.json()
            if (result.success) {
                dispatch(updateReaction({ _id: comment._id, reactionType: result.data.reaction.reactionType }))
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='flex mb-8'>
            {/* Avatar Container */}
            <div className="shrink-0 mr-3">
                <Avatar size={40} name={comment.user.name} />
            </div>

            {/* Content and Actions */}
            <div className="flex-1 min-w-0">
                <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-2">
                        <p className="font-semibold text-gray-900 truncate">
                            {comment.user.name}
                        </p>
                        <TimeAgo time={comment.createdAt} />
                    </div>

                    {/* Content */}
                    {
                        isEditing ? <CommentEditForm setIsEditing={setIsEditing} id={comment._id} defaultContent={comment.content} /> : <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">
                            {comment.content}
                        </p>
                    }


                    {/* Actions (Like/Dislike/Reply) */}
                    <div className={`mt-3 flex items-center`}>
                        <button
                            onClick={() => handleReaction('like')}
                            className={`flex items-center space-x-1.5 py-1 px-2 text-sm font-medium rounded-full transition-colors text-indigo-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50`}
                            aria-label="Like"
                        >
                            {
                                comment.currentUserReaction === 'like' ? <ThumbsUp fill="blue" className={`w-4 h-4 transition-all duration-150 text-indigo-600`} /> : <ThumbsUp className={`w-4 h-4 transition-all duration-150 text-indigo-600`} />
                            }

                            <span className={`transition-all duration-150`}>
                                {formatNumberCount(comment.likeCount)}
                            </span>
                        </button>
                        <button
                            onClick={() => handleReaction('dislike')}
                            className={`flex items-center space-x-1.5 py-1 px-2 text-sm font-medium rounded-full transition-colors text-indigo-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50`}
                            aria-label="Dislike"
                        >
                            {
                                comment.currentUserReaction === 'dislike' ? <ThumbsDown fill="blue" className={`w-4 h-4 transition-all duration-150 text-indigo-600`} /> : <ThumbsDown className={`w-4 h-4 transition-all duration-150 text-indigo-600`} />
                            }

                            <span className={`transition-all duration-150`}>
                                {formatNumberCount(comment.dislikeCount)}
                            </span>
                        </button>
                        <button
                            className={`flex items-center space-x-1.5 py-1 px-2 text-sm font-medium rounded-full transition-colors text-indigo-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50`}
                            aria-label="Like"
                        >
                            <MessageSquare className={`w-4 h-4 transition-all duration-150 text-indigo-600`} />
                        </button>
                        {
                            comment.user._id == user?._id && <button
                                onClick={() => setIsEditing(!isEditing)}
                                className={`flex items-center space-x-1.5 py-1 px-2 text-sm font-medium rounded-full transition-colors text-indigo-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50`}
                                aria-label="Like"
                            >

                                <Edit className={`w-4 h-4 transition-all duration-150 text-indigo-600`} />
                            </button>
                        }
                        {
                            comment.user._id == user?._id && <DeleteComment id={comment._id} />
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export const CommentCardSkeleton = () => {
    return (
        <div className="flex mb-8 animate-pulse">
            {/* Avatar Skeleton */}
            <div className="shrink-0 mr-3">
                <div className="w-10 h-10 rounded-full bg-gray-300" />
            </div>

            {/* Content Skeleton */}
            <div className="flex-1 min-w-0">
                <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-2">
                        <div className="h-4 w-32 bg-gray-300 rounded" />
                        <div className="h-3 w-20 bg-gray-200 rounded" />
                    </div>

                    {/* Content */}
                    <div className="space-y-2 mt-2">
                        <div className="h-4 w-full bg-gray-200 rounded" />
                        <div className="h-4 w-5/6 bg-gray-200 rounded" />
                        <div className="h-4 w-2/3 bg-gray-200 rounded" />
                    </div>

                    {/* Actions */}
                    <div className="mt-4 flex items-center gap-3">
                        <div className="h-7 w-16 bg-gray-200 rounded-full" />
                        <div className="h-7 w-16 bg-gray-200 rounded-full" />
                        <div className="h-7 w-10 bg-gray-200 rounded-full" />
                    </div>
                </div>
            </div>
        </div>
    );
};


export default CommentCard;