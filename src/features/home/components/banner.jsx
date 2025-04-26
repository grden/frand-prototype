export const GradientBanner = () => {
    return (
        <div className="w-full rounded-xl mb-6 p-5 bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md">
            <h3 className="text-lg font-semibold mb-1">프랜차이즈 투자 정보</h3>
            <p className="text-sm opacity-90 mb-3">실시간 동향과 시장 분석을 확인하세요</p>
            <button
                className="px-4 py-1.5 bg-white/20 hover:bg-white/30 transition-colors rounded-lg text-sm font-medium"
            >
                최신 정보 보기
            </button>
        </div>
    );
};