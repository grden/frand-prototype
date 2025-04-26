export const SearchBar = () => {
    return (
        <div className="relative mb-6">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
            </div>
            <input
                type="text"
                className="pl-10 pr-4 py-3 w-full rounded-xl bg-gray-100 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="업종 또는 프랜차이즈 검색"
            />
        </div>
    );
};