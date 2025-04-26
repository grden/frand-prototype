export const franchiseDatabase = {
    coffee: {
        '프랜차이즈 커피': {
            starbucks: {
                name: '스타벅스',
                storeCount: 1500,
                storeChange: '+87',
                companyName: '스타벅스코리아(유)',
                foundingYear: 1999,
                directStores: 260,
                franchiseStores: 1240,
                industry: '커피 전문점',
                keyProducts: ['아메리카노', '프라푸치노', '샌드위치'],
                chart: {
                    '3m': {
                        labels: ['2월', '5월'],
                        data: [1456, 1500]
                    },
                    '1y': {
                        labels: ['5월', '8월', '11월', '2월', '5월'],
                        data: [1485, 1490, 1495, 1498, 1500]
                    },
                    '5y': {
                        labels: ['2021', '2022', '2023', '2024', '2025'],
                        data: [1100, 1200, 1250, 1350, 1500]
                    }
                },
                openClosures: [
                    { year: '2023', openings: 120, closures: 45 },
                    { year: '2024', openings: 150, closures: 60 },
                    { year: '2025', openings: 180, closures: 70 }
                ],
                profitability: {
                    averageRevenue: 95000000,
                    operatingMargin: 18,
                    industryAvgMargin: 15
                },
                franchiseTerms: {
                    initialFee: 35000000,
                    trainingFee: 5000000,
                    interiorCost: { min: 150000000, max: 300000000 },
                    royalty: '매출의 6.0%',
                    contractPeriod: '5년 (갱신 가능)'
                },
                aiSummary: {
                    status: '성장세',
                    points: [
                        '올해 초부터 국내 매장 수 1,500개를 돌파하며 안정적 성장세',
                        '비용 상승에도 불구하고 매출 증가율이 지속적으로 상승',
                        '신규 매장의 생존율이 업계 평균보다 25% 높음'
                    ]
                },
                news: [
                    {
                        type: '호재',
                        title: '스타벅스, 2025년 매장 100개 추가 출점 계획 발표',
                        url: '#',
                        date: '2024-05-15'
                    },
                    {
                        type: '소식',
                        title: '스타벅스, 친환경 매장 컨셉으로 리뉴얼 진행 중',
                        url: '#',
                        date: '2024-05-10'
                    },
                    {
                        type: '악재',
                        title: '원두 가격 상승으로 스타벅스 전 메뉴 가격 인상 예정',
                        url: '#',
                        date: '2024-05-03'
                    }
                ]
            },
            ediya: {
                name: '이디야',
                storeCount: 2800,
                storeChange: '+120',
                companyName: '이디야(주)',
                foundingYear: 2001,
                directStores: 15,
                franchiseStores: 2785,
                industry: '커피 전문점',
                keyProducts: ['아메리카노', '콜드브루', '베이커리'],
                chart: {
                    '3m': {
                        labels: ['2월', '5월'],
                        data: [2740, 2800]
                    },
                    '1y': {
                        labels: ['5월', '8월', '11월', '2월', '5월'],
                        data: [2680, 2700, 2720, 2740,2800]
                    },
                    '5y': {
                        labels: ['2021', '2022', '2023', '2024', '2025'],
                        data: [2000, 2200, 2350, 2550, 2800]
                    }
                },
                openClosures: [
                    { year: '2023', openings: 250, closures: 120 },
                    { year: '2024', openings: 280, closures: 150 },
                    { year: '2025', openings: 320, closures: 170 }
                ],
                profitability: {
                    averageRevenue: 75000000,
                    operatingMargin: 14,
                    industryAvgMargin: 15
                },
                franchiseTerms: {
                    initialFee: 20000000,
                    trainingFee: 3000000,
                    interiorCost: { min: 100000000, max: 200000000 },
                    royalty: '매출의 3.3%',
                    contractPeriod: '3년 (갱신 가능)'
                },
                aiSummary: {
                    status: '성장세',
                    points: [
                        '국내 최다 매장 보유 커피 프랜차이즈로 안정적 성장 지속',
                        '가맹점 수익성 개선 프로그램으로 가맹점주 만족도 상승',
                        '저렴한 가맹비용으로 진입장벽이 낮아 창업 수요 지속'
                    ]
                },
                news: [
                    {
                        type: '호재',
                        title: '이디야, 신규 가맹 조건 완화로 창업 장벽 낮춰',
                        url: '#',
                        date: '2024-05-12'
                    },
                    {
                        type: '소식',
                        title: '이디야커피, 가맹점주 간담회 개최 및 운영 개선방안 논의',
                        url: '#',
                        date: '2024-05-08'
                    },
                    {
                        type: '호재',
                        title: '이디야, 전년 대비 가맹점 수익률 15% 상승 발표',
                        url: '#',
                        date: '2024-05-01'
                    }
                ]
            },
            hollys: {
                name: '할리스',
                storeCount: 560,
                storeChange: '-23',
                companyName: '할리스(주)',
                foundingYear: 1998,
                directStores: 45,
                franchiseStores: 515,
                industry: '커피 전문점',
                keyProducts: ['아메리카노', '카페라떼', '디저트'],
                chart: {
                    '3m': {
                        labels: ['2월', '5월'],
                        data: [583, 560]
                    },
                    '1y': {
                        labels: ['5월', '8월', '11월', '2월', '5월'],
                        data: [610, 600, 590, 583, 560]
                    },
                    '5y': {
                        labels: ['2021', '2022', '2023', '2024', '2025'],
                        data: [650, 630, 620, 590, 560]
                    }
                },
                openClosures: [
                    { year: '2023', openings: 60, closures: 70 },
                    { year: '2024', openings: 50, closures: 80 },
                    { year: '2025', openings: 40, closures: 70 }
                ],
                profitability: {
                    averageRevenue: 70000000,
                    operatingMargin: 11,
                    industryAvgMargin: 15
                },
                franchiseTerms: {
                    initialFee: 25000000,
                    trainingFee: 4000000,
                    interiorCost: { min: 120000000, max: 220000000 },
                    royalty: '매출의 4.0%',
                    contractPeriod: '5년 (갱신 가능)'
                },
                aiSummary: {
                    status: '위험 신호',
                    points: [
                        '최근 3년간 지속적인 매장 수 감소 추세',
                        '임차료 상승과 경쟁 심화로 가맹점 수익성 악화',
                        '리브랜딩 전략이 가맹점 매출 증가로 이어지지 않는 상황'
                    ]
                },
                news: [
                    {
                        type: '악재',
                        title: '할리스, 연속 적자에 본사 구조조정 진행 중',
                        url: '#',
                        date: '2024-05-14'
                    },
                    {
                        type: '악재',
                        title: '할리스 가맹점 협의회, 본사 마케팅 전략 비판',
                        url: '#',
                        date: '2024-05-09'
                    },
                    {
                        type: '소식',
                        title: '할리스, 신메뉴 출시로 매출 반등 시도',
                        url: '#',
                        date: '2024-05-02'
                    }
                ]
            }
        }
    },
    chinese: {
        '마라탕': {
            meokbang: {
                name: '춘리마라탕',
                storeCount: 210,
                storeChange: '+22',
                companyName: '춘리F&B(주)',
                foundingYear: 2018,
                directStores: 5,
                franchiseStores: 205,
                industry: '중식 전문점',
                keyProducts: ['마라탕', '마라샹궈', '꿔바로우'],
                chart: {
                    '3m': {
                        labels: ['2월', '5월'],
                        data: [188, 210]
                    },
                    '1y': {
                        labels: ['5월', '8월', '11월', '2월', '5월'],
                        data: [150, 160, 170, 188, 210]
                    },
                    '5y': {
                        labels: ['2021', '2022', '2023', '2024', '2025'],
                        data: [30, 60, 100, 160, 210]
                    }
                },
                openClosures: [
                    { year: '2023', openings: 45, closures: 10 },
                    { year: '2024', openings: 70, closures: 15 },
                    { year: '2025', openings: 65, closures: 20 }
                ],
                profitability: {
                    averageRevenue: 85000000,
                    operatingMargin: 19,
                    industryAvgMargin: 16
                },
                franchiseTerms: {
                    initialFee: 15000000,
                    trainingFee: 3000000,
                    interiorCost: { min: 80000000, max: 150000000 },
                    royalty: '매출의 3.5%',
                    contractPeriod: '3년 (갱신 가능)'
                },
                aiSummary: {
                    status: '성장세',
                    points: [
                        '젊은 소비층을 중심으로 인기가 높아 급속한 성장세',
                        '마라 열풍의 지속으로 매출 증가율이 업종 평균 대비 높음',
                        '손익분기점 도달 기간이 평균 6개월로 빠른 초기 안정화'
                    ]
                },
                news: [
                    {
                        type: '호재',
                        title: '춘리마라탕, 작년 대비 매출 35% 상승 기록',
                        url: '#',
                        date: '2024-05-13'
                    },
                    {
                        type: '소식',
                        title: '춘리마라탕, 새로운 배달 전용 매장 컨셉 발표',
                        url: '#',
                        date: '2024-05-07'
                    },
                    {
                        type: '호재',
                        title: '춘리마라탕, MZ세대 선호도 조사 1위 차지',
                        url: '#',
                        date: '2024-04-28'
                    }
                ]
            }
        }
    }
};