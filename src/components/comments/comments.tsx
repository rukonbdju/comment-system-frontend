import { useState } from "react";
import CommentForm from "./comment-form";
import FilterComments from "./filter-comments";
import CommentCard from "./comment-card";

export interface UserDTO {
    _id: string;
    name: string;
    email: string;
}
export interface CommentDTO {
    _id: string;
    content: string;
    user: UserDTO;
    likeCount: number;
    dislikeCount: number;
    createdAt: string;
    updatedAt: string;
}

export const initialComments: CommentDTO[] = [
    {
        _id: "65f1a8c2b4d1c9e712345670",
        content: "This is a really helpful post. Thanks for sharing!",
        user: {
            _id: "65f1a8c2b4d1c9e7a1234567",
            name: "Rukonuzzaman Rukon",
            email: "rukon@gmail.com",
        },
        likeCount: 12,
        dislikeCount: 1,
        createdAt: "2025-12-07T10:15:30.000Z",
        updatedAt: "2025-12-07T10:20:10.000Z",
    },
    {
        _id: "65f1a8c2b4d1c9e712345671",
        content: "I didn’t fully agree with this point, but good effort.",
        user: {
            _id: "65f1a8c2b4d1c9e7a1234568",
            name: "Sabbir Ahmed",
            email: "sabbir@gmail.com",
        },
        likeCount: 4,
        dislikeCount: 3,
        createdAt: "2025-12-06T11:05:20.000Z",
        updatedAt: "2025-12-06T11:10:45.000Z",
    },
    {
        _id: "65f1a8c2b4d1c9e712345674",
        content: "Can you explain this part in more detail?",
        user: {
            _id: "65f1a8c2b4d1c9e7a1234569",
            name: "Nusrat Jahan",
            email: "nusrat@gmail.com",
        },
        likeCount: 7,
        dislikeCount: 0,
        createdAt: "2025-12-06T12:30:00.000Z",
        updatedAt: "2025-12-06T12:35:25.000Z",
    },
];


const Comments = () => {
    const [comments, setComments] = useState(initialComments)
    return (
        <div>
            <CommentForm />
            <FilterComments />
            <div className="comment-container">
                {comments?.map((comment) => (
                    <CommentCard key={comment._id} comment={comment} />
                ))}

                {comments.length === 0 && (
                    <p className="text-center py-10 text-gray-500 italic">
                        Be the first to leave a comment!
                    </p>
                )}
            </div>
        </div>
    )
}

export default Comments;