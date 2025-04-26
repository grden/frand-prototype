import { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { mainCategories } from '../../features/home/types/types';
import { franchiseList } from '../../features/franchise-selection/types/types';
import { SelectionAppBar } from '../../components/appbar/selection-appbar';
export const FranchiseSelection = () => {
    const navigate = useNavigate();
    const { categoryId, subcategoryId } = useParams();
    const [selectedFranchise, setSelectedFranchise] = useState(null);
    const [categoryData, setCategoryData] = useState({
        categoryName: '',
        categoryEmoji: '',
        subcategoryName: '',
        franchises: []
    });

    // Get category data based on ID
    const getCategoryData = (id) => {
        return mainCategories.find(category => category.id === id) || { name: id, emoji: '🏪' };
    };

    useEffect(() => {
        if (categoryId && subcategoryId) {
            const category = getCategoryData(categoryId);

            // Get franchises for the selected category and subcategory
            const franchises = franchiseList[categoryId]?.[subcategoryId] || [];

            setCategoryData({
                categoryName: category.name,
                categoryEmoji: category.emoji,
                subcategoryName: subcategoryId,
                franchises
            });
        }
    }, [categoryId, subcategoryId]);

    const handleFranchiseClick = (franchise) => {
        setSelectedFranchise(franchise);
    };

    const handleViewMarketTrend = () => {
        if (selectedFranchise) {
            navigate(`/franchise/${categoryId}/${subcategoryId}/${selectedFranchise.id}`);
        }
    };

    // Helper function to render trend indicators
    const renderTrendIndicator = (trend, figure) => {
        switch (trend) {
            case 'up':
                return <span className="text-[#3182f6]">+ {figure}</span>;
            case 'down':
                return <span className="text-[#f04452]">- {figure}</span>;
            default:
                return <span className="text-gray-500">-</span>;
        }
    };

    return (
        <div className="flex flex-col h-full">
            <div className="p-4 flex-1 overflow-y-auto">
                {/* Top Bar */}
                <SelectionAppBar title="프랜차이즈 선택" placeholder="프랜차이즈 검색" linkTo={`/category/${categoryId}`} />

                {/* Path Indicator */}
                <div className="flex items-center mb-6 p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <span className="text-3xl mr-4">{categoryData.categoryEmoji}</span>
                    <div className="flex items-center">
                        <span className="text-lg font-bold text-gray-500">{categoryData.categoryName}</span>
                        <svg className="w-4 h-4 mx-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                        <span className="text-lg font-bold">{categoryData.subcategoryName}</span>
                    </div>
                </div>

                {/* Franchise Count */}
                <h3 className="text-sm font-medium text-gray-500 mb-3">
                    {categoryData.franchises.length}개의 프랜차이즈
                </h3>

                {/* Franchise List */}
                <div className="space-y-3 mb-6">
                    {categoryData.franchises.map((franchise) => (
                        <button
                            key={franchise.id}
                            onClick={() => handleFranchiseClick(franchise)}
                            className={`w-full flex items-center justify-between p-4 rounded-xl border ${selectedFranchise?.id === franchise.id
                                ? 'border-gray-300 bg-gray-100'
                                : 'border-gray-200 hover:bg-gray-50'
                                } transition-colors`}
                        >
                            <div className="flex flex-col items-start">
                                <span className="font-medium">{franchise.name}</span>
                                <span className="text-xs font-normal text-gray-500 mt-0">
                                    전국 {franchise.storeCount.toLocaleString()}개 매장
                                </span>
                            </div>
                            <div className="flex items-center">
                                {renderTrendIndicator(franchise.trend, franchise.figure)}
                            </div>
                        </button>
                    ))}

                    {categoryData.franchises.length === 0 && (
                        <div className="text-center py-8">
                            <p className="text-gray-500">
                                등록된 프랜차이즈가 없습니다.
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* Bottom Action Button */}
            <div className="bg-white p-4">
                <button
                    onClick={handleViewMarketTrend}
                    disabled={!selectedFranchise}
                    className={`w-full py-4 px-4 rounded-xl font-medium transition-colors ${selectedFranchise
                        ? 'bg-[#3182f6] text-white hover:bg-[#2d76e0]'
                        : 'bg-gray-100 text-gray-400 border border-gray-200 cursor-not-allowed'
                        }`}
                >
                    프랜차이즈 정보 확인
                </button>
            </div>
        </div>
    );
};

export default FranchiseSelection;
