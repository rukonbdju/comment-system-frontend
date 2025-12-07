const FilterComments = () => {
    return (
        <div className="flex justify-between items-center mt-8 mb-6 border-b border-gray-200 pb-3">
            <p className="text-lg font-semibold text-gray-700">
                All Comments
            </p>
            <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">Sort by:</span>
                {['Top', 'Newest'].map((option) => (
                    <button
                        key={option}
                        className={`px-3 py-1 text-sm rounded-full transition-colors font-medium 
                  ${"Newest" === option
                                ? 'bg-indigo-600 text-white shadow-md'
                                : 'bg-white text-gray-600 hover:bg-indigo-50 hover:text-indigo-600'
                            }`}
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default FilterComments;