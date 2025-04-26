import { useState, useRef, useEffect } from 'react';

export const ChatbotPopup = ({ isOpen, onClose }) => {
    const [messages, setMessages] = useState([
        { id: 1, text: '안녕하세요! 프랜차이즈 데이터에 관해 무엇이든 물어보세요.', isBot: true }
    ]);
    const [inputValue, setInputValue] = useState('');
    const messagesEndRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!inputValue.trim()) return;

        // Add user message
        const userMessage = { id: Date.now(), text: inputValue, isBot: false };
        setMessages(prev => [...prev, userMessage]);

        // Clear input
        setInputValue('');

        // Simulate bot response after a short delay
        setTimeout(() => {
            const botMessage = {
                id: Date.now() + 1,
                text: '죄송합니다, 현재 프로토타입 버전이라 실제 응답은 제공하지 않습니다. 추후 업데이트를 기대해 주세요!',
                isBot: true
            };
            setMessages(prev => [...prev, botMessage]);
        }, 1000);
    };

    // Scroll to bottom of messages when messages update
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    if (!isOpen) return null;

    return (
        <div className="absolute inset-0 bg-black/50 z-50 flex items-end justify-center">
            <div className="bg-white rounded-t-2xl w-full max-w-md flex flex-col h-[60vh] animate-slide-up">
                {/* Header */}
                <div className="flex justify-between items-center px-4 py-3 border-b border-gray-200">
                    <h3 className="font-semibold text-lg">프랜드 챗봇</h3>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {messages.map(message => (
                        <div
                            key={message.id}
                            className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                        >
                            <div
                                className={`max-w-[80%] p-3 rounded-lg ${message.isBot
                                    ? 'bg-gray-100 text-gray-800 rounded-tl-none'
                                    : 'bg-[#3182f6] text-white rounded-tr-none'
                                    }`}
                            >
                                {message.text}
                            </div>
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <form onSubmit={handleSubmit} className="p-4">
                    <div className="relative">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="메시지를 입력하세요..."
                            className="w-full rounded-xl py-3 pl-4 pr-12 bg-gray-100 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-all"
                        />
                        <button
                            type="submit"
                            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-500"
                            aria-label="Send message"
                        >
                            <svg className="w-5 h-5 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                            </svg>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

// Add animation to tailwind.config.js if needed
// extend: {
//   keyframes: {
//     'slide-up': {
//       '0%': { transform: 'translateY(100%)' },
//       '100%': { transform: 'translateY(0)' },
//     },
//   },
//   animation: {
//     'slide-up': 'slide-up 0.3s ease-out',
//   },
// },
