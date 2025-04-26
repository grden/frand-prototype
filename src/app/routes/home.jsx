import { SearchBar } from '../../features/home/components/search-bar';
import { GradientBanner } from '../../features/home/components/banner';
import { CategoryGrid } from '../../features/home/components/category-grid';

export const Home = () => {


    return (
        <div className="flex flex-col h-full">
            <div className="p-4 flex-1 overflow-y-auto">
                {/* Header */}
                <div className="mb-4">
                    <h1 className="text-2xl font-bold mb-1">프랜드</h1>
                </div>

                <SearchBar />
                <GradientBanner />

                {/* Category Title */}
                <h2 className="text-lg font-semibold mb-3">대분류 업종</h2>

                <CategoryGrid />
            </div>
        </div>
    );
};

export default Home;