import { Send } from "lucide-react";
import { useState } from "react";

const CommentForm = () => {
    const [content, setContent] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (content.trim()) {
            setContent('');
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
                        disabled={!content.trim()}
                        className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white text-sm font-semibold rounded-full hover:bg-indigo-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
                    >
                        <Send className="w-4 h-4" />
                        <span>Post Comment</span>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CommentForm;