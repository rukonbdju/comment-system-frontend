import { MessageSquare, ThumbsDown, ThumbsUp } from "lucide-react";
import Avatar from "../shared-components/avatar";
import formatNumberCount from "@/utils/format-number-count";
import { CommentDTO } from "./comments";
import TimeAgo from "../shared-components/time-ago";

const CommentCard = ({ comment }: { comment: CommentDTO }) => {

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
                    <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">
                        {comment.content}
                    </p>

                    {/* Actions (Like/Dislike/Reply) */}
                    <div className={`mt-3 flex items-center space-x-1`}>
                        <button
                            className={`flex items-center space-x-1.5 py-1 px-3 text-sm font-medium rounded-full transition-colors text-indigo-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50`}
                            aria-label="Like"
                        >
                            <ThumbsUp className={`w-4 h-4 transition-all duration-150 text-indigo-600`} />

                            <span className={`transition-all duration-150`}>
                                {formatNumberCount(comment.likeCount)}
                            </span>
                        </button>
                        <button
                            className={`flex items-center space-x-1.5 py-1 px-3 text-sm font-medium rounded-full transition-colors text-indigo-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50`}
                            aria-label="Like"
                        >
                            <ThumbsDown className={`w-4 h-4 transition-all duration-150 text-indigo-600`} />

                            <span className={`transition-all duration-150`}>
                                {formatNumberCount(comment.dislikeCount)}
                            </span>
                        </button>
                        <button
                            className={`flex items-center space-x-1.5 py-1 px-3 text-sm font-medium rounded-full transition-colors text-indigo-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50`}
                            aria-label="Like"
                        >
                            <MessageSquare className={`w-4 h-4 transition-all duration-150 text-indigo-600`} />

                            <span className={`transition-all duration-150`}>
                                {formatNumberCount(0)}
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommentCard;