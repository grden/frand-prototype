import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { mainCategories } from '../../features/home/types/types';
import { categoryList } from '../../features/subcategory-selection/types/types';
import { SelectionAppBar } from '../../components/appbar/selection-appbar';

export const SubcategorySelection = () => {
    const navigate = useNavigate();
    const { categoryId } = useParams();
    const [selectedSubcategory, setSelectedSubcategory] = useState(null);
    const [categoryData, setCategoryData] = useState({
        name: mainCategories.find(category => category.id === categoryId).name,
        emoji: mainCategories.find(category => category.id === categoryId).emoji,
        subcategories: []
    });

    useEffect(() => {
        // Get category data based on categoryId
        if (categoryId && categoryList[categoryId]) {
            setCategoryData(categoryList[categoryId]);
        }
    }, [categoryId]);

    const handleSubcategoryClick = (subcategory) => {
        // Store both id and name for different purposes
        setSelectedSubcategory({
            id: subcategory.id,
            name: subcategory.name
        });
    };

    const handleViewMarketTrend = () => {
        if (selectedSubcategory) {
            navigate(`/subcategory/${categoryId}/${selectedSubcategory.id}`);
        }
    };

    const handleSelectFranchise = () => {
        if (selectedSubcategory) {
            navigate(`/franchises/${categoryId}/${selectedSubcategory.name}`);
        }
    };

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
                <SelectionAppBar title="소분류 업종 선택" placeholder="업종 검색" linkTo="/" />

                {/* Selected Category Indicator */}
                <div className="flex items-center mb-6 p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <span className="text-3xl mr-4">{categoryData.emoji}</span>
                    <div>
                        <h2 className="text-lg font-bold">{categoryData.name}</h2>
                    </div>
                </div>

                {/* Subcategory List */}
                {/* <div className="mb-6">
                    <h3 className="text-sm font-medium text-gray-500 mb-3">{categoryData.subcategories.length}개의 소분류 업종</h3>
                    <div className="space-y-2">
                        {categoryData.subcategories.map((subcategory) => (
                            <button
                                key={subcategory}
                                onClick={() => handleSubcategoryClick(subcategory)}
                                className={`w-full text-left p-4 rounded-xl border ${selectedSubcategory === subcategory
                                    ? 'border-gray-300 bg-gray-100'
                                    : 'border-gray-200 hover:bg-gray-50'
                                    } transition-colors`}
                            >
                                <span className="font-medium">{subcategory}</span>
                            </button>
                        ))}
                    </div>
                </div>
                 */}
                <h3 className="text-sm font-medium text-gray-500 mb-3">{categoryData.subcategories.length}개의 소분류 업종</h3>
                <div className="space-y-3 mb-6">
                    {categoryData.subcategories.map((subcategory) => (
                        <button
                            key={subcategory.id}
                            onClick={() => handleSubcategoryClick(subcategory)}
                            className={`w-full flex items-center justify-between p-4 rounded-xl border ${selectedSubcategory?.id === subcategory.id
                                ? 'border-gray-300 bg-gray-100'
                                : 'border-gray-200 hover:bg-gray-50'
                                } transition-colors`}
                        >
                            <div className="flex flex-col items-start">
                                <span className="font-medium">{subcategory.name}</span>
                                <span className="text-xs font-normal text-gray-500 mt-0">
                                    전국 {subcategory.storeCount.toLocaleString()}개 매장
                                </span>
                            </div>
                            <div className="flex items-center">
                                {renderTrendIndicator(subcategory.trend, subcategory.figure)}
                            </div>
                        </button>
                    ))}

                    {categoryData.subcategories.length === 0 && (
                        <div className="text-center py-8">
                            <p className="text-gray-500">
                                등록된 소분류 업종이 없습니다.
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* Bottom Action Buttons */}
            <div className="bg-white p-4">
                <div className="grid grid-cols-2 gap-3">
                    <button
                        onClick={handleViewMarketTrend}
                        disabled={!selectedSubcategory}
                        className={`py-4 px-4 rounded-xl font-medium transition-colors ${selectedSubcategory
                            ? 'bg-[#3182f6] text-white hover:bg-[#2d76e0]'
                            : 'bg-gray-100 text-gray-400 border border-gray-200 cursor-not-allowed'
                            }`}
                    >
                        업종 정보 확인
                    </button>
                    <button
                        onClick={handleSelectFranchise}
                        disabled={!selectedSubcategory}
                        className={`py-3 px-4 rounded-xl font-medium transition-colors ${selectedSubcategory
                            ? 'bg-[#f04452] text-white border hover:bg-[#d53c49]'
                            : 'bg-gray-100 text-gray-400 border border-gray-200 cursor-not-allowed'
                            }`}
                    >
                        프랜차이즈 선택
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SubcategorySelection;
