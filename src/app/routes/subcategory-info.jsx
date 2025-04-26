import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { subcategoryDatabase } from '../../features/subcategory-info/types/types';
import { ChatbotPopup } from '../../features/chatbot/components/popup';
import { ChatbotButton } from '../../features/chatbot/components/button';

// Register Chart.js components
Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const SubcategoryInfo = () => {
    const { categoryId, subcategoryId } = useParams();
    const [activeTab, setActiveTab] = useState('chart');
    const [timeRange, setTimeRange] = useState('1y');
    const [subcategoryData, setSubcategoryData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isChatbotOpen, setIsChatbotOpen] = useState(false);

    useEffect(() => {
        // Simulate API call
        setTimeout(() => {
            const data = subcategoryDatabase[subcategoryId];
            if (data) {
                setSubcategoryData(data);
            }
            setLoading(false);
        }, 600);
    }, [categoryId, subcategoryId]);

    if (loading) {
        return (
            <div className="flex flex-col h-full p-4 items-center justify-center">
                <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                <p className="mt-4 text-gray-600">정보를 불러오는 중...</p>
            </div>
        );
    }

    if (!subcategoryData) {
        return (
            <div className="flex flex-col h-full p-4">
                <div className="flex items-center mb-6">
                    <Link to={`/franchises/${categoryId}`} className="p-2 -ml-2">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                        </svg>
                    </Link>
                </div>
                <div className="flex flex-col items-center justify-center flex-1">
                    <p className="font-medium">업종 정보를 찾을 수 없습니다.</p>
                    <Link to="/" className="mt-4 font-medium px-4 py-3 text-gray-500 rounded-xl border border-gray-200 hover:bg-gray-50">홈으로 돌아가기</Link>
                </div>
            </div>
        );
    }

    // Chart configuration
    const chartData = {
        labels: subcategoryData.chart[timeRange].labels,
        datasets: [
            {
                label: '매장 수',
                data: subcategoryData.chart[timeRange].data,
                borderColor: '#3182f6',
                backgroundColor: 'rgba(49, 130, 246, 0.1)',
                tension: 0.3,
                fill: true,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        return `매장 수: ${context.raw}개`;
                    }
                }
            }
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
            },
            y: {
                beginAtZero: false,
                grid: {
                    color: 'rgba(0, 0, 0, 0.05)',
                },
            },
        },
    };

    // Calculate net change for store openings/closures
    const calculateNetChange = (openings, closures) => {
        const net = openings - closures;
        return net >= 0 ? `+${net}` : net;
    };

    // Format currency
    const formatCurrency = (amount) => {
        return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원";
    };

    // Get appropriate color for news type
    const getNewsTypeColor = (type) => {
        switch (type) {
            case '호재':
                return 'bg-[#3182f6]/10 text-[#3182f6]';
            case '악재':
                return 'bg-[#f04452]/10 text-[#f04452]';
            default:
                return 'bg-green-100 text-green-800';
        }
    };

    return (
        <div className="flex flex-col h-full">
            <div className="p-4 flex-1 overflow-y-auto pb-20">
                {/* Top Bar */}
                <div className="flex items-center mb-4">
                    <Link to={`/category/${categoryId}`} className="p-2 -ml-2">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                        </svg>
                    </Link>
                </div>

                {/* Store Count */}
                <div className="mb-6 flex items-center">
                    <span className="text-3xl mr-3">{subcategoryData.emoji}</span>
                    <div>
                        <h3 className="text-lg font-semibold">{subcategoryData.name}</h3>
                        <h1 className="text-2xl font-bold mb-1">{subcategoryData.storeCount.toLocaleString()}개</h1>
                        <div className="flex items-center">
                            <p className="text-sm text-gray-500">3개월 전보다</p>
                            <p className={`text-sm ml-1 ${subcategoryData.storeChange.startsWith('+') ? 'text-[#3182f6]' : 'text-[#f04452]'}`}>
                                {subcategoryData.storeChange}개
                            </p>
                        </div>
                    </div>
                </div>

                {/* Tab bar */}
                <div className="flex border-b border-gray-200 mb-6">
                    <button
                        className={`flex-1 py-3 font-medium text-sm ${activeTab === 'chart'
                            ? 'border-b-2 border-[#3182f6] text-[#3182f6]'
                            : 'text-gray-500'
                            }`}
                        onClick={() => setActiveTab('chart')}
                    >
                        차트
                    </button>
                    <button
                        className={`flex-1 py-3 font-medium text-sm ${activeTab === 'info'
                            ? 'border-b-2 border-[#3182f6] text-[#3182f6]'
                            : 'text-gray-500'
                            }`}
                        onClick={() => setActiveTab('info')}
                    >
                        업종 정보
                    </button>
                </div>

                {activeTab === 'chart' && (
                    <>
                        {/* Chart */}
                        <div className="h-54">
                            <Line data={chartData} options={chartOptions} />
                        </div>

                        {/* Time range selector */}
                        <div className="flex mb-8 bg-gray-100 p-1 rounded-lg">
                            <button
                                className={`flex-1 py-2 text-sm font-medium rounded-md ${timeRange === '3m' ? 'bg-white shadow-sm' : 'text-gray-500'
                                    }`}
                                onClick={() => setTimeRange('3m')}
                            >
                                3개월
                            </button>
                            <button
                                className={`flex-1 py-2 text-sm font-medium rounded-md ${timeRange === '1y' ? 'bg-white shadow-sm' : 'text-gray-500'
                                    }`}
                                onClick={() => setTimeRange('1y')}
                            >
                                1년
                            </button>
                            <button
                                className={`flex-1 py-2 text-sm font-medium rounded-md ${timeRange === '5y' ? 'bg-white shadow-sm' : 'text-gray-500'
                                    }`}
                                onClick={() => setTimeRange('5y')}
                            >
                                5년
                            </button>
                        </div>

                        {/* AI Summary */}
                        <div className="bg-gray-50 rounded-xl p-5 mb-6">
                            <div className="flex items-center mb-4">
                                <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                </svg>
                                <h3 className="text-lg font-semibold">AI 요약</h3>
                            </div>

                            <div className={`inline-block px-3 py-1 rounded-lg text-sm font-medium mb-4 ${subcategoryData.aiSummary.status === '성장세' ? 'bg-[#3182f6]/10 text-[#3182f6]' :
                                subcategoryData.aiSummary.status === '정체기' ? 'bg-green-100 text-green-800' :
                                    'bg-[#f04452]/10 text-[#f04452]'
                                }`}>
                                {subcategoryData.aiSummary.status}
                            </div>

                            <ul className="space-y-2">
                                {subcategoryData.aiSummary.points.map((point, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 mr-2"></span>
                                        <span className="text-gray-700">{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </>
                )}

                {activeTab === 'info' && (
                    <>
                        {/* Store Status */}
                        <div className="mb-8">
                            <h3 className="text-lg font-semibold mb-4">점포 현황</h3>
                            <div className="bg-white rounded-xl border border-gray-200 p-4">
                                {subcategoryData.trends.map((item, index) => (
                                    <div key={index} className="mb-4 last:mb-0">
                                        <div className="flex justify-between items-center mb-2">
                                            <p className="font-medium">{item.year}년</p>
                                            <p className={`text-sm font-medium ${parseInt(calculateNetChange(item.openings, item.closures)) >= 0 ? 'text-[#3182f6]' : 'text-[#f04452]'}`}>
                                                {calculateNetChange(item.openings, item.closures)}개
                                            </p>
                                        </div>
                                        <div className="flex h-6 w-full rounded-lg overflow-hidden">
                                            <div
                                                className="bg-[#3182f6] flex justify-center items-center text-xs text-white"
                                                style={{ width: `${(item.openings / (item.openings + item.closures)) * 100}%` }}
                                            >
                                                {item.openings}
                                            </div>
                                            <div
                                                className="bg-[#f04452] flex justify-center items-center text-xs text-white"
                                                style={{ width: `${(item.closures / (item.openings + item.closures)) * 100}%` }}
                                            >
                                                {item.closures}
                                            </div>
                                        </div>
                                        <div className="flex text-xs mt-1">
                                            <div className="flex-1">
                                                <span className="inline-block w-2 h-2 bg-[#3182f6] rounded-full mr-1"></span>
                                                신규 개점
                                            </div>
                                            <div className="flex-1 text-right">
                                                <span className="inline-block w-2 h-2 bg-[#f04452] rounded-full mr-1"></span>
                                                폐점
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Market Insights */}
                        <div className="mb-8">
                            <h3 className="text-lg font-semibold mb-4">시장 통계</h3>
                            <div className="bg-white rounded-xl border border-gray-200 p-4">
                                {/* <div className="mb-4">
                                    <p className="text-sm text-gray-500 mb-1">평균 초기 투자 비용</p>
                                    <p className="font-medium text-lg">
                                        {formatCurrency(subcategoryData.marketInsights.averageInitialInvestment.min)} ~
                                        {formatCurrency(subcategoryData.marketInsights.averageInitialInvestment.max)}
                                    </p>
                                </div> */}

                                <div className="mb-4">
                                    <p className="text-sm text-gray-500 mb-1">평균 매출 (연간)</p>
                                    <p className="font-medium text-lg">
                                        {formatCurrency(subcategoryData.marketInsights.averageRevenue)}
                                    </p>
                                </div>

                                <div className="mb-4">
                                    <div className="flex justify-between mb-1">
                                        <p className="text-sm text-gray-500">평균 영업 이익률</p>
                                        <p className="text-sm font-medium">{subcategoryData.marketInsights.averageProfitMargin}%</p>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                                        <div
                                            className="bg-[#3182f6] h-2.5 rounded-full"
                                            style={{ width: `${subcategoryData.marketInsights.averageProfitMargin * 3}%` }}
                                        ></div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between mb-1">
                                        <p className="text-sm text-gray-500">업종 평균</p>
                                        <p className="text-sm font-medium">{subcategoryData.marketInsights.industryAvgProfitMargin}%</p>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                                        <div
                                            className="bg-gray-500 h-2.5 rounded-full"
                                            style={{ width: `${subcategoryData.marketInsights.industryAvgProfitMargin * 3}%` }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Top Brands */}
                        <div className="mb-8">
                            <h3 className="text-lg font-semibold mb-4">주요 브랜드</h3>
                            <div className="bg-white rounded-xl border border-gray-200">
                                {subcategoryData.topBrands.map((brand, index) => (
                                    <div
                                        key={index}
                                        className="flex justify-between items-center p-4 border-b border-gray-100 last:border-b-0 hover:bg-gray-50"
                                    >
                                        <div>
                                            <p className="font-medium">{brand.name}</p>
                                            <p className="text-sm text-gray-500">{brand.storeCount.toLocaleString()}개 매장</p>
                                        </div>
                                        <div className={`flex items-center ${brand.change.startsWith('+') ? 'text-[#3182f6]' : 'text-[#f04452]'}`}>
                                            <span className="font-medium">{brand.change}개</span>
                                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* News Summary */}
                        {subcategoryData.news && (
                            <div className="mb-8">
                                <h3 className="text-lg font-semibold mb-4">뉴스 요약</h3>
                                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                                    {subcategoryData.news.map((newsItem, index) => (
                                        <div
                                            key={index}
                                            className="bg-white p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                                        >
                                            <div className="flex-1">
                                                <div className="flex items-center mb-2">
                                                    <span className={`inline-block px-2 py-0.5 rounded-md text-xs font-medium mr-2 ${getNewsTypeColor(newsItem.type)}`}>
                                                        {newsItem.type}
                                                    </span>
                                                    <span className="text-xs text-gray-500">{newsItem.date}</span>
                                                </div>
                                                <p className="font-medium">{newsItem.title}</p>
                                            </div>
                                            <div className="text-gray-500">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </>
                )}
            </div>

            {/* Chatbot Button and Popup */}
            <ChatbotButton onClick={() => setIsChatbotOpen(prev => !prev)} />
            <ChatbotPopup isOpen={isChatbotOpen} onClose={() => setIsChatbotOpen(false)} />
        </div>
    );
};

export default SubcategoryInfo;
