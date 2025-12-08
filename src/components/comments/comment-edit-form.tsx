import { useAppDispatch } from "@/hooks/useAppDispatch";
import { updateComment } from "@/lib/features/comment/comment.slice";
import { baseURL } from "@/utils/base-url";
import { Send } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";
type PropsType = {
    id: string;
    defaultContent: string;
    setIsEditing: Dispatch<SetStateAction<boolean>>
}
const CommentEditForm = ({ id, defaultContent, setIsEditing }: PropsType) => {
    const dispatch = useAppDispatch()
    const [loading, setLoading] = useState(false)
    const [content, setContent] = useState(defaultContent);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!content.trim()) return;
        setLoading(true)
        try {
            const res = await fetch(`${baseURL}/comments/${id}`, {
                method: 'PUT',
                credentials: 'include',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ content })
            })
            const result = await res.json()
            console.log(result)
            if (result.success) {
                dispatch(updateComment(result.data))
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    };

    return (
        <div className={'mt-4 p-4 rounded-xl bg-white shadow-inner'}>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder='Write your comment here...'
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 resize-y"
                />
                <div className="flex justify-end items-center">
                    <button
                        type="submit"
                        disabled={!content.trim() || loading}
                        className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white text-sm font-semibold rounded-full hover:bg-indigo-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
                    >
                        <Send className="w-4 h-4" />
                        <span>Update Comment</span>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CommentEditForm;