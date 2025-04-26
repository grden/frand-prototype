import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mainCategories } from '../types/types';

export const CategoryGrid = () => {
    const navigate = useNavigate();
    const [showAllCategories, setShowAllCategories] = useState(false);


    const displayedCategories = showAllCategories
        ? mainCategories
        : mainCategories.slice(0, 8);

    const handleCategoryClick = (categoryId) => {
        navigate(`/category/${categoryId}`);
    };
    return (
        <>
            {/* Category Grid */}
            <div className="grid grid-cols-4 gap-3 mb-4">
                {displayedCategories.map(category => (
                    <button
                        key={category.id}
                        onClick={() => handleCategoryClick(category.id)}
                        className="flex flex-col items-center justify-center p-2 bg-white rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors"
                    >
                        <span className="text-2xl mb-2">{category.emoji}</span>
                        <span className="text-sm font-medium">{category.name}</span>
                    </button>
                ))}
            </div>

            {/* See All Button */}
            {!showAllCategories && (
                <button
                    onClick={() => setShowAllCategories(true)}
                    className="w-full py-3 text-gray-500 font-medium rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors"
                >
                    전체 보기
                </button>
            )}
        </>
    );
};