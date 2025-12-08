import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSelector } from "react-redux";
import { useCallback, useMemo } from "react";
import { commentsSelector, setPage } from "@/lib/features/comment/comment.slice";
import { getComments } from "@/lib/features/comment/comment.thunks";
import { useAppDispatch } from "@/hooks/useAppDispatch";

const MAX_PAGES_TO_SHOW = 5;

const PaginationControls = () => {
    const dispatch = useAppDispatch();

    const {
        currentPage,
        totalPages,
        hasNextPage,
        hasPrevPage,
        limit,
        sort,
    } = useSelector(commentsSelector);

    // ✅ Safe, memoized page change
    const handlePageChange = useCallback(
        (newPage: number) => {
            if (
                newPage < 1 ||
                newPage > totalPages ||
                newPage === currentPage
            )
                return;

            dispatch(setPage(newPage));
            dispatch(getComments({ page: newPage, limit, sort }));
        },
        [dispatch, totalPages, limit, sort, currentPage]
    );

    // ✅ Smart page number generation
    const pages = useMemo<(number | string)[]>(() => {
        const result: (number | string)[] = [];

        if (totalPages <= MAX_PAGES_TO_SHOW) {
            for (let i = 1; i <= totalPages; i++) result.push(i);
            return result;
        }

        result.push(1);

        const start = Math.max(2, currentPage - 1);
        const end = Math.min(totalPages - 1, currentPage + 1);

        if (start > 2) result.push("start-dots");

        for (let i = start; i <= end; i++) result.push(i);

        if (end < totalPages - 1) result.push("end-dots");

        result.push(totalPages);

        return result;
    }, [currentPage, totalPages]);

    if (totalPages <= 1) return null;

    return (
        <div className="flex justify-center items-center space-x-2 mt-8 py-3 border-t border-gray-200">
            {/* ✅ Previous */}
            <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={!hasPrevPage}
                className="p-2 rounded-full text-gray-600 hover:bg-gray-100 disabled:opacity-50 transition-colors"
                aria-label="Previous page"
            >
                <ChevronLeft className="w-5 h-5" />
            </button>

            {/* ✅ Page Numbers */}
            {pages.map((p, index) =>
                typeof p === "number" ? (
                    <button
                        key={p}
                        onClick={() => handlePageChange(p)}
                        className={`px-3 py-1 text-sm font-medium rounded-lg transition-colors 
              ${currentPage === p
                                ? "bg-indigo-600 text-white shadow-md"
                                : "text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                            }`}
                        aria-current={currentPage === p ? "page" : undefined}
                    >
                        {p}
                    </button>
                ) : (
                    <span
                        key={`${p}-${index}`}
                        className="px-2 text-gray-500 select-none"
                    >
                        ...
                    </span>
                )
            )}

            {/* ✅ Next */}
            <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={!hasNextPage}
                className="p-2 rounded-full text-gray-600 hover:bg-gray-100 disabled:opacity-50 transition-colors"
                aria-label="Next page"
            >
                <ChevronRight className="w-5 h-5" />
            </button>
        </div>
    );
};

export default PaginationControls;
