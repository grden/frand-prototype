export const categoryList = {
    coffee: {
        name: '커피',
        emoji: '☕',
        subcategories: [
            { id: 'franchise-coffee', name: '프랜차이즈 커피', storeCount: 9720, trend: 'up', figure: '8' },
            { id: 'dessert-cafe', name: '디저트 카페', storeCount: 950, trend: 'up', figure: '15' },
            { id: 'specialty-coffee', name: '스페셜티 커피', storeCount: 380, trend: 'down', figure: '6' },
            { id: 'takeout-specialty', name: '테이크아웃 전문점', storeCount: 2450, trend: 'stable', figure: '0' }
        ]
    },
    korean: {
        name: '한식',
        emoji: '🍲',
        subcategories: [
            { id: 'gukbap', name: '국밥', storeCount: 1280, trend: 'up', figure: '7' },
            { id: 'jjigae', name: '찌개', storeCount: 1950, trend: 'stable', figure: '0' },
            { id: 'korean-meat', name: '고기구이', storeCount: 1750, trend: 'up', figure: '15' },
            { id: 'hanjeongsi', name: '한정식', storeCount: 420, trend: 'down', figure: '5' }
        ]
    },
    chinese: {
        name: '중식',
        emoji: '🥢',
        subcategories: [
            { id: 'malatang', name: '마라탕', storeCount: 630, trend: 'up', figure: '10' },
            { id: 'jajangmyeon', name: '짜장면', storeCount: 1020, trend: 'up', figure: '5' },
            { id: 'dimsum', name: '딤섬', storeCount: 83, trend: 'up', figure: '5' },
            { id: 'yanggocchi', name: '양꼬치', storeCount: 160, trend: 'down', figure: '1' }
        ]
    },
    japanese: {
        name: '일식',
        emoji: '🍣',
        subcategories: [
            { id: 'ramen', name: '라멘', storeCount: 720, trend: 'up', figure: '8' },
            { id: 'sushi', name: '초밥', storeCount: 950, trend: 'down', figure: '3' },
            { id: 'tonkatsu', name: '돈까스', storeCount: 580, trend: 'stable', figure: '0' },
            { id: 'udon', name: '우동', storeCount: 430, trend: 'up', figure: '5' }
        ]
    },
    western: {
        name: '양식',
        emoji: '🍽️',
        subcategories: [
            { id: 'pasta', name: '파스타', storeCount: 920, trend: 'up', figure: '8' },
            { id: 'steak', name: '스테이크', storeCount: 540, trend: 'down', figure: '3' },
            { id: 'brunch', name: '브런치', storeCount: 780, trend: 'up', figure: '15' },
            { id: 'hamburger', name: '햄버거', storeCount: 1250, trend: 'stable', figure: '0' },
            { id: 'sandwich', name: '샌드위치', storeCount: 680, trend: 'down', figure: '5' }
        ]
    }
};