import { useAppDispatch } from "@/hooks/useAppDispatch"
import { deleteComment } from "@/lib/features/comment/comment.slice"
import { baseURL } from "@/utils/base-url"
import { Trash } from "lucide-react"

const DeleteComment = ({ id }: { id: string }) => {
    const dispatch = useAppDispatch()
    const handleDelete = async () => {
        try {
            const res = await fetch(`${baseURL}/comments/${id}`, {
                method: 'DELETE',
                credentials: 'include',
            })
            const result = await res.json()
            console.log(result)
            if (result.success) {
                dispatch(deleteComment({ _id: id }))
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <button
            onClick={handleDelete}
            className={`flex items-center space-x-1.5 py-1 px-2 text-sm font-medium rounded-full transition-colors text-red-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50`}
            aria-label="Like"
        >

            <Trash className={`w-4 h-4 transition-all duration-150 text-red-600`} />
        </button>
    )
}

export default DeleteComment