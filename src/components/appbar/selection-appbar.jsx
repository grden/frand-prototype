import { useState } from 'react';
import { Link } from 'react-router-dom';

export const SelectionAppBar = ({ title, placeholder, linkTo }) => {
    const [isSearchActive, setIsSearchActive] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const toggleSearch = () => {
        setIsSearchActive(!isSearchActive);
        if (isSearchActive) {
            setSearchQuery('');
        }
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    return (
        <div className="flex items-center justify-between mb-6">
            <Link to={linkTo} className="p-2 -ml-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
            </Link>
            {isSearchActive ? (
                <div className="flex-1 mx-2">
                    <div className="relative">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={handleSearchChange}
                            placeholder={placeholder}
                            className="w-full py-1 pl-8 pr-4 rounded-lg bg-gray-100 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-all"
                            autoFocus
                        />
                        <svg className="absolute w-4 h-4 text-gray-400 left-2 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </div>
                </div>
            ) : (
                <h2 className="text-lg font-semibold ml-1">{title}</h2>
            )}
            <button className="p-2" onClick={toggleSearch}>
                {isSearchActive ? (
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                ) : (
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                )}
            </button>
        </div>
    );
};