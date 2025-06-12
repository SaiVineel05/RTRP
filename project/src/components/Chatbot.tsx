import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Bot, User } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: Message = {
        id: Date.now().toString(),
        text: t('chatbot.welcome'),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen, t]);

  const generateAdvancedBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Greeting responses
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('namaste') || lowerMessage.includes('नमस्ते')) {
      return "Hello! I'm your personal financial assistant. I can help you with banking, investments, loans, government schemes, and financial planning. What would you like to know today?";
    }

    // Banking related responses
    if (lowerMessage.includes('bank') || lowerMessage.includes('account') || lowerMessage.includes('बैंक') || lowerMessage.includes('खाता')) {
      if (lowerMessage.includes('open') || lowerMessage.includes('create')) {
        return "To open a bank account, you'll need:\n\n📋 Required Documents:\n• Aadhaar Card (mandatory)\n• PAN Card (for amounts >₹50,000)\n• Address proof (utility bill/rent agreement)\n• Recent photographs\n• Initial deposit (₹500-₹1000)\n\n🏦 Best Banks for Rural Areas:\n• State Bank of India\n• Bank of Baroda\n• Punjab National Bank\n\n💡 Tip: Look for zero-balance accounts like Jan Dhan Yojana!";
      }
      if (lowerMessage.includes('digital') || lowerMessage.includes('online')) {
        return "Digital banking is safe and convenient! Here's how to get started:\n\n📱 Popular Apps:\n• Google Pay, PhonePe, Paytm\n• Your bank's official app\n\n🔐 Safety Tips:\n• Never share OTP with anyone\n• Use only official apps\n• Check transaction details carefully\n• Set spending limits\n\n✅ Benefits: 24/7 access, instant transfers, bill payments, and cashback offers!";
      }
      return "Banking services I can help with:\n• Opening new accounts\n• Digital banking setup\n• ATM usage guidance\n• Understanding bank statements\n• Choosing the right bank\n\nWhat specific banking question do you have?";
    }
    
    // Investment related responses
    if (lowerMessage.includes('invest') || lowerMessage.includes('sip') || lowerMessage.includes('mutual fund') || lowerMessage.includes('निवेश')) {
      if (lowerMessage.includes('start') || lowerMessage.includes('begin')) {
        return "Great decision to start investing! Here's your beginner's roadmap:\n\n🎯 Step 1: Emergency Fund\nSave 6 months of expenses first\n\n💰 Step 2: Start SIP\n• Begin with ₹500-1000/month\n• Choose diversified equity funds\n• Use our SIP calculator\n\n📈 Step 3: Increase Gradually\n• Increase SIP by 10-15% annually\n• Add debt funds for stability\n\n⏰ Best Time: Start NOW! Time in market beats timing the market.";
      }
      if (lowerMessage.includes('sip')) {
        return "SIP (Systematic Investment Plan) is perfect for beginners!\n\n✨ Benefits:\n• Start with just ₹500/month\n• Rupee cost averaging\n• Disciplined investing\n• Power of compounding\n\n📊 Example:\n₹5,000/month for 15 years at 12% returns = ₹50+ lakhs!\n\n🎯 Best SIP Funds:\n• Large cap funds (stable)\n• Multi-cap funds (balanced)\n• ELSS funds (tax saving)\n\nUse our SIP calculator to see your potential returns!";
      }
      return "Investment guidance I provide:\n• SIP planning and selection\n• Mutual fund recommendations\n• Risk assessment\n• Portfolio diversification\n• Tax-saving investments (ELSS)\n\nWhat's your investment goal and timeline?";
    }
    
    // Loan related responses
    if (lowerMessage.includes('loan') || lowerMessage.includes('emi') || lowerMessage.includes('credit') || lowerMessage.includes('लोन')) {
      if (lowerMessage.includes('personal') || lowerMessage.includes('home') || lowerMessage.includes('car')) {
        return "Loan guidance for smart borrowing:\n\n🏠 Home Loan:\n• Lowest interest rates (6.5-8.5%)\n• Longest tenure (up to 30 years)\n• Tax benefits available\n\n🚗 Car Loan:\n• 7-9% interest rates\n• Up to 7 years tenure\n• Compare bank vs dealer financing\n\n💳 Personal Loan:\n• Higher rates (10-15%)\n• Use only for emergencies\n• Shorter tenure (1-5 years)\n\n💡 Golden Rule: Keep total EMIs under 40% of monthly income!";
      }
      if (lowerMessage.includes('credit score') || lowerMessage.includes('cibil')) {
        return "Credit Score is crucial for loan approval!\n\n📊 Score Ranges:\n• 750-900: Excellent (best rates)\n• 650-749: Good (decent rates)\n• 550-649: Fair (higher rates)\n• Below 550: Poor (difficult approval)\n\n🔧 How to Improve:\n• Pay all bills on time\n• Keep credit utilization <30%\n• Don't close old credit cards\n• Check report annually\n• Avoid multiple loan applications\n\n📱 Check Free: CIBIL, Experian, Equifax websites";
      }
      return "Loan assistance I provide:\n• EMI calculations\n• Interest rate comparisons\n• Credit score improvement\n• Loan eligibility assessment\n• Documentation guidance\n\nWhat type of loan are you considering?";
    }
    
    // Government schemes
    if (lowerMessage.includes('scheme') || lowerMessage.includes('government') || lowerMessage.includes('pm-kisan') || lowerMessage.includes('योजना')) {
      if (lowerMessage.includes('farmer') || lowerMessage.includes('agriculture') || lowerMessage.includes('pm-kisan')) {
        return "🌾 Top Government Schemes for Farmers:\n\n💰 PM-KISAN:\n• ₹6,000/year direct benefit\n• For all landholding farmers\n• Apply online or at CSC\n\n🚜 PM-KUSUM:\n• Solar pump subsidies\n• Up to 90% subsidy\n• Reduces electricity costs\n\n🌱 Soil Health Card:\n• Free soil testing\n• Fertilizer recommendations\n• Increases crop yield\n\n📱 Apply through: PM-KISAN portal, CSC centers, or bank branches";
      }
      if (lowerMessage.includes('health') || lowerMessage.includes('ayushman')) {
        return "🏥 Health Schemes for Rural Families:\n\n💊 Ayushman Bharat:\n• ₹5 lakh health insurance\n• Covers 50 crore people\n• Cashless treatment\n• 1,400+ procedures covered\n\n👶 Janani Suraksha Yojana:\n• Cash assistance for delivery\n• ₹1,400 in rural areas\n• Promotes institutional delivery\n\n🔍 Check Eligibility:\n• Visit nearest PHC\n• Use Ayushman Bharat app\n• Call 14555 helpline";
      }
      return "Popular Government Schemes:\n• PM-KISAN (₹6,000/year for farmers)\n• Ayushman Bharat (₹5 lakh health cover)\n• MGNREGA (100 days work guarantee)\n• PM Awas Yojana (housing assistance)\n• Sukanya Samriddhi (girl child savings)\n\nWhich scheme interests you most?";
    }
    
    // Savings related
    if (lowerMessage.includes('save') || lowerMessage.includes('saving') || lowerMessage.includes('बचत')) {
      if (lowerMessage.includes('emergency') || lowerMessage.includes('fund')) {
        return "Emergency Fund is your financial safety net!\n\n🎯 Target Amount:\n• 6 months of monthly expenses\n• Keep in liquid investments\n• Easily accessible\n\n💰 Where to Keep:\n• Savings account (instant access)\n• Liquid mutual funds (better returns)\n• Fixed deposits (stable but locked)\n\n📈 Building Strategy:\n• Start with ₹500/month\n• Automate transfers\n• Use windfalls (bonus, gifts)\n• Don't touch unless emergency!";
      }
      return "Smart Saving Strategies:\n\n📊 50-30-20 Rule:\n• 50% for needs (rent, food)\n• 30% for wants (entertainment)\n• 20% for savings & investments\n\n🏦 Best Saving Options:\n• High-yield savings accounts\n• Fixed deposits for goals\n• PPF for long-term (15 years)\n• ELSS for tax saving\n\n💡 Pro Tip: Automate your savings - pay yourself first!";
    }
    
    // Digital payments
    if (lowerMessage.includes('upi') || lowerMessage.includes('digital') || lowerMessage.includes('payment') || lowerMessage.includes('gpay')) {
      return "🚀 Digital Payments Made Easy!\n\n📱 Popular UPI Apps:\n• Google Pay (GPay)\n• PhonePe\n• Paytm\n• BHIM (government app)\n\n🔧 Setup Process:\n1. Download official app\n2. Verify mobile number\n3. Add bank account\n4. Set UPI PIN\n5. Start transacting!\n\n🛡️ Safety Tips:\n• Never share UPI PIN/OTP\n• Verify recipient before sending\n• Check transaction limits\n• Use only trusted WiFi\n\n💰 Benefits: Instant transfers, bill payments, merchant payments, and cashback!";
    }

    // Tax related
    if (lowerMessage.includes('tax') || lowerMessage.includes('income tax') || lowerMessage.includes('कर')) {
      return "💰 Tax Saving Made Simple!\n\n📋 Section 80C (₹1.5 lakh limit):\n• ELSS mutual funds\n• PPF (15-year lock-in)\n• Life insurance premiums\n• Home loan principal\n\n🏥 Section 80D (Health Insurance):\n• ₹25,000 for self/family\n• ₹50,000 for senior parents\n\n📚 Section 80E (Education Loan):\n• Full interest deduction\n• No upper limit\n\n💡 Best Strategy: Start ELSS SIP for tax saving + wealth creation!";
    }

    // Insurance related
    if (lowerMessage.includes('insurance') || lowerMessage.includes('बीमा')) {
      return "🛡️ Essential Insurance for Financial Security:\n\n❤️ Life Insurance:\n• Term insurance (cheapest)\n• 10-15x annual income coverage\n• Online policies are cheaper\n\n🏥 Health Insurance:\n• Minimum ₹5 lakh coverage\n• Family floater plans\n• Check hospital network\n\n🚗 Vehicle Insurance:\n• Third-party mandatory\n• Comprehensive recommended\n• Compare online for best rates\n\n🌾 Crop Insurance:\n• PM Fasal Bima Yojana\n• Protects against crop loss\n• Low premium, high coverage";
    }

    // Retirement planning
    if (lowerMessage.includes('retirement') || lowerMessage.includes('pension') || lowerMessage.includes('old age')) {
      return "🏖️ Retirement Planning Essentials:\n\n🎯 Target Corpus:\n• 25-30x annual expenses\n• Start early for compound magic\n• Review and adjust regularly\n\n💰 Best Retirement Options:\n• PPF (tax-free returns)\n• ELSS mutual funds\n• NPS (National Pension System)\n• Equity mutual funds\n\n📊 Example:\n₹10,000/month SIP for 30 years at 12% = ₹3+ crores!\n\n⏰ Golden Rule: Start NOW, even with small amounts!";
    }

    // Financial goals
    if (lowerMessage.includes('goal') || lowerMessage.includes('planning') || lowerMessage.includes('future')) {
      return "🎯 Smart Financial Goal Planning:\n\n📝 Types of Goals:\n• Short-term (1-3 years): Emergency fund, vacation\n• Medium-term (3-7 years): Car, house down payment\n• Long-term (7+ years): Retirement, children's education\n\n💡 SMART Goals Framework:\n• Specific: Clear target amount\n• Measurable: Track progress\n• Achievable: Realistic timeline\n• Relevant: Important to you\n• Time-bound: Set deadline\n\n🔧 Tools to Use:\n• Our SIP calculator\n• Goal-based mutual funds\n• Systematic planning";
    }

    // Default comprehensive response
    return "🤖 I'm your comprehensive financial assistant! I can help with:\n\n🏦 Banking: Account opening, digital banking, ATM usage\n💰 Investments: SIP planning, mutual funds, portfolio advice\n🏠 Loans: EMI calculations, credit scores, loan types\n🎯 Government Schemes: PM-KISAN, Ayushman Bharat, MGNREGA\n💳 Digital Payments: UPI setup, safety tips, best apps\n📊 Financial Planning: Goals, retirement, tax saving\n🛡️ Insurance: Life, health, vehicle coverage\n\nJust ask me anything about money management, and I'll provide detailed, actionable advice! What would you like to explore?";
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate more realistic AI response time
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateAdvancedBotResponse(inputText),
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500 + Math.random() * 1000); // 1.5-2.5 seconds for more realistic feel
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full shadow-xl hover:shadow-2xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center z-50 hover:scale-110 animate-pulse"
      >
        {isOpen ? <X className="w-7 h-7" /> : <MessageCircle className="w-7 h-7" />}
      </button>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col z-40 animate-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-t-2xl flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center animate-bounce">
              <Bot className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg">{t('chatbot.title')}</h3>
              <p className="text-xs text-blue-100 flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                Online & Ready to Help
              </p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start space-x-3 max-w-[85%] ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${message.sender === 'user' ? 'bg-blue-600' : 'bg-gradient-to-r from-green-400 to-green-500'}`}>
                    {message.sender === 'user' ? (
                      <User className="w-4 h-4 text-white" />
                    ) : (
                      <Bot className="w-4 h-4 text-white" />
                    )}
                  </div>
                  <div
                    className={`px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                      message.sender === 'user'
                        ? 'bg-blue-600 text-white rounded-br-md'
                        : 'bg-white text-gray-800 shadow-md border border-gray-100 rounded-bl-md'
                    }`}
                  >
                    <div className="whitespace-pre-line">{message.text}</div>
                    <div className={`text-xs mt-2 ${message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'}`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-3 max-w-[85%]">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-white px-4 py-3 rounded-2xl rounded-bl-md shadow-md border border-gray-100">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200 bg-white rounded-b-2xl">
            <div className="flex space-x-3">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={t('chatbot.placeholder')}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm bg-gray-50"
                disabled={isTyping}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim() || isTyping}
                className="px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center min-w-[50px]"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              💡 Ask about banking, investments, loans, schemes & more!
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;