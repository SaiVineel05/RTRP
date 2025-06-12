import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Play, CheckCircle, Clock, Users, Star, ArrowRight, Award } from 'lucide-react';

const FinancialLiteracy: React.FC = () => {
  const [moduleProgress, setModuleProgress] = useState<{[key: number]: number}>({});

  const userId = 'currentUser'; // Use the same logic as in LearningPath.tsx

  const modules = [
    {
      id: 1,
      title: 'Banking Basics',
      description: 'Learn about different types of bank accounts, how to open an account, and basic banking services.',
      duration: '45 mins',
      difficulty: 'Beginner',
      lessons: 8,
      icon: '🏦',
      topics: ['Types of Bank Accounts', 'Opening a Bank Account', 'ATM Usage', 'Bank Statements']
    },
    {
      id: 2,
      title: 'Saving Strategies',
      description: 'Discover effective ways to save money, set financial goals, and build an emergency fund.',
      duration: '60 mins',
      difficulty: 'Beginner',
      lessons: 4,
      icon: '💰',
      topics: ['Why Save Money?', 'Setting Savings Goals', 'Emergency Fund', 'Saving Habits']
    },
    {
      id: 3,
      title: 'Investment Fundamentals',
      description: 'Understanding basics of investments, risk management, and growing your money.',
      duration: '90 mins',
      difficulty: 'Intermediate',
      lessons: 12,
      icon: '📈',
      topics: ['What is Investment?', 'Types of Investments', 'Risk vs Return', 'Portfolio Basics']
    },
    {
      id: 4,
      title: 'Digital Payments',
      description: 'Learn about UPI, mobile banking, and safe digital transaction practices.',
      duration: '50 mins',
      difficulty: 'Beginner',
      lessons: 9,
      icon: '📱',
      topics: ['UPI Basics', 'Mobile Banking', 'Online Safety', 'QR Code Payments']
    },
    {
      id: 5,
      title: 'Credit & Loans',
      description: 'Understanding credit scores, loan types, and responsible borrowing practices.',
      duration: '75 mins',
      difficulty: 'Intermediate',
      lessons: 11,
      icon: '💳',
      topics: ['Credit Score', 'Types of Loans', 'Interest Rates', 'Loan Application Process']
    },
    {
      id: 6,
      title: 'Insurance Basics',
      description: 'Learn about different types of insurance and their importance for financial security.',
      duration: '55 mins',
      difficulty: 'Beginner',
      lessons: 8,
      icon: '🛡️',
      topics: ['Life Insurance', 'Health Insurance', 'Crop Insurance', 'Choosing Insurance']
    }
  ];

  useEffect(() => {
    // Load progress for all modules from localStorage
    const progress: {[key: number]: number} = {};
    modules.forEach(module => {
      const savedProgress = localStorage.getItem(`user-${userId}-module-${module.id}-progress`);
      if (savedProgress) {
        const progressData = JSON.parse(savedProgress);
        progress[module.id] = progressData.progress || 0;
      } else {
        progress[module.id] = 0;
      }
    });
    setModuleProgress(progress);
  }, [modules, userId]);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleContinueLearning = (moduleId: number) => {
    // Open in new tab
    window.open(`/learning-path/${moduleId}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Financial Literacy</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master the fundamentals of personal finance through our comprehensive, easy-to-understand modules designed for rural communities.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="flex justify-center mb-3">
              <BookOpen className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">6</h3>
            <p className="text-gray-600">Learning Modules</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="flex justify-center mb-3">
              <Play className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">58</h3>
            <p className="text-gray-600">Video Lessons</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="flex justify-center mb-3">
              <Users className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">2,500+</h3>
            <p className="text-gray-600">Active Learners</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="flex justify-center mb-3">
              <Star className="w-8 h-8 text-yellow-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">4.8</h3>
            <p className="text-gray-600">Average Rating</p>
          </div>
        </div>

        {/* Learning Modules */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Learning Modules</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {modules.map((module) => (
              <div
                key={module.id}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{module.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{module.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(module.difficulty)}`}>
                        {module.difficulty}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{module.description}</p>
                    
                    <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{module.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <BookOpen className="w-4 h-4" />
                        <span>{module.lessons} lessons</span>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">Progress</span>
                        <span className="text-sm text-gray-500">{moduleProgress[module.id] || 0}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${moduleProgress[module.id] || 0}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Topics Preview */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">Topics Covered:</h4>
                      <ul className="space-y-2">
                        {module.topics.map((topic, index) => (
                          <li key={index} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-sm text-gray-700">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3">
                      <button
                        onClick={() => handleContinueLearning(module.id)}
                        className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                      >
                        <Play className="w-4 h-4" />
                        <span>{moduleProgress[module.id] > 0 ? 'Continue' : 'Start'} Learning</span>
                      </button>
                      <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                        Preview
                      </button>
                    </div>

                    {/* Completion Badge */}
                    {moduleProgress[module.id] === 100 && (
                      <div className="mt-4 flex items-center space-x-2 p-3 bg-green-50 border border-green-200 rounded-lg">
                        <Award className="w-5 h-5 text-green-600" />
                        <span className="text-sm font-medium text-green-800">Module Completed!</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Resources */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Additional Learning Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">📚 Study Materials</h3>
              <p className="text-gray-600 mb-4">Download PDFs and guides in your local language</p>
              <button className="text-blue-600 hover:text-blue-800 font-medium">Access Materials</button>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">🎯 Practice Quizzes</h3>
              <p className="text-gray-600 mb-4">Test your knowledge with interactive quizzes</p>
              <button className="text-blue-600 hover:text-blue-800 font-medium">Take Quiz</button>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">👥 Community Support</h3>
              <p className="text-gray-600 mb-4">Get help from peers and financial experts</p>
              <button className="text-blue-600 hover:text-blue-800 font-medium">Join Community</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialLiteracy;