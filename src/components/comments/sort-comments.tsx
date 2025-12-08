import { useAppDispatch } from "@/hooks/useAppDispatch";
import { commentsSelector, setSort } from "@/lib/features/comment/comment.slice";
import { getComments } from "@/lib/features/comment/comment.thunks";
import { useSelector } from "react-redux";

const SortComments = () => {
    const dispatch = useAppDispatch();
    const { limit, sort } = useSelector(commentsSelector);

    const handleSortChange = (sort: string) => {
        dispatch(setSort(sort));
        dispatch(getComments({ page: 1, limit, sort }));
    };
    return (
        <div className="flex justify-between items-center mt-8 mb-6 border-b border-gray-200 pb-3">
            <p className="text-lg font-semibold text-gray-700">
                All Comments
            </p>
            <div className="flex items-center space-x-2">
                {['newest', 'most liked', 'most disliked'].map((option) => (
                    <button
                        onClick={() => handleSortChange(option)}
                        key={option}
                        className={`px-3 py-1 text-xs rounded-full transition-colors font-medium 
                  ${sort === option
                                ? 'bg-indigo-600 text-white shadow-md'
                                : 'bg-white text-gray-600 hover:bg-indigo-50 hover:text-indigo-600'
                            }`}
                    >
                        {option.toLocaleUpperCase()}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default SortComments;