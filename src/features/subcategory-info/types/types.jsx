export const subcategoryDatabase = {
    "franchise-coffee": {
        name: "프랜차이즈 커피",
        emoji: "☕",
        storeCount: 9720,
        storeChange: "+310",
        chart: {
            '3m': {
                labels: ['2월', '5월'],
                data: [9380, 9720]
            },
            '1y': {
                labels: ['5월', '8월', '11월', '2월', '5월'],
                data: [8350, 9380, 9550, 9650, 9720]
            },
            '5y': {
                labels: ['2021', '2022', '2023', '2024', '2025'],
                data: [6200, 7000, 7800, 8600, 9720]
            }
        },
        aiSummary: {
            status: "성장세",
            points: [
                "최근 3년간 연평균 15% 성장을 보이는 안정적인 업종입니다.",
                "비대면 주문 및 배달 서비스 확대로 신규 고객층이 증가했습니다.",
                "상위 5개 브랜드가 전체 시장의 70%를 차지하고 있으며 집중화가 심화되고 있습니다."
            ]
        },
        marketInsights: {
            averageInitialInvestment: {
                min: 100000000,
                max: 200000000
            },
            averageRevenue: 95000000,
            averageProfitMargin: 20,
            industryAvgProfitMargin: 15,
            breakEvenTime: "평균 15개월"
        },
        trends: [
            {
                year: "2023",
                openings: 1500,
                closures: 750
            },
            {
                year: "2022",
                openings: 1400,
                closures: 720
            },
            {
                year: "2021",
                openings: 1300,
                closures: 680
            }
        ],
        topBrands: [
            {
                name: "스타벅스",
                storeCount: 1580,
                change: "+120"
            },
            {
                name: "투썸플레이스",
                storeCount: 1280,
                change: "+85"
            },
            {
                name: "이디야커피",
                storeCount: 2450,
                change: "+230"
            },
            {
                name: "커피빈",
                storeCount: 320,
                change: "-12"
            },
            {
                name: "할리스커피",
                storeCount: 560,
                change: "+38"
            }
        ],
        news: [
            {
                type: "호재",
                date: "2024-05-12",
                title: "커피 프랜차이즈, 모바일 주문 시스템 도입으로 매출 증가"
            },
            {
                type: "소식",
                date: "2024-04-25",
                title: "대형 커피 프랜차이즈, 해외 진출 본격화"
            },
            {
                type: "악재",
                date: "2024-04-10",
                title: "원두 가격 상승으로 인한 메뉴 가격 인상 예정"
            }
        ]
    },
    "malatang": {
        name: "마라탕",
        emoji: "🍲",
        storeCount: 6842,
        storeChange: "+124",
        chart: {
            '3m': {
                labels: ['2월', '5월'],
                data: [6680, 6842]
            },
            '1y': {
                labels: ['5월', '8월', '11월', '2월', '5월'],
                data: [6100, 6180, 6650, 6680, 6842]
            },
            '5y': {
                labels: ['2021', '2022', '2023', '2024', '2025'],
                data: [3500, 4300, 5200, 6000, 6842]
            }
        },
        aiSummary: {
            status: "성장세",
            points: [
                "최근 5년간 연평균 20% 성장으로 빠르게 확장 중인 업종입니다.",
                "특히 20-30대 소비층의 꾸준한 수요가 시장 성장을 주도하고 있습니다.",
                "초기 투자 대비 회수 기간이 타 외식업종보다 짧은 편입니다."
            ]
        },
        marketInsights: {
            averageInitialInvestment: {
                min: 70000000,
                max: 120000000
            },
            averageRevenue: 95000000,
            averageProfitMargin: 22,
            industryAvgProfitMargin: 16,
            breakEvenTime: "평균 10개월"
        },
        trends: [
            {
                year: "2023",
                openings: 1200,
                closures: 680
            },
            {
                year: "2022",
                openings: 980,
                closures: 520
            },
            {
                year: "2021",
                openings: 850,
                closures: 450
            }
        ],
        topBrands: [
            {
                name: "홍마라탕",
                storeCount: 480,
                change: "+45"
            },
            {
                name: "취향마라탕",
                storeCount: 350,
                change: "+38"
            },
            {
                name: "마라하오",
                storeCount: 420,
                change: "+32"
            },
            {
                name: "웨이마라",
                storeCount: 280,
                change: "+18"
            },
            {
                name: "마라공방",
                storeCount: 310,
                change: "-5"
            }
        ],
        news: [
            {
                type: "호재",
                date: "2024-05-05",
                title: "마라탕 시장, 코로나 이후 급속 성장 계속"
            },
            {
                type: "소식",
                date: "2024-04-20",
                title: "마라탕 프랜차이즈, 한국인 입맛에 맞는 새로운 레시피 개발 중"
            },
            {
                type: "악재",
                date: "2024-04-02",
                title: "일부 마라탕 원재료 가격 상승으로 원가 부담 증가"
            }
        ]
    }
};
