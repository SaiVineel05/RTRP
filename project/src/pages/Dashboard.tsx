import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { BookOpen, Award, Banknote, TrendingUp, Target, PiggyBank, Users, ArrowRight } from 'lucide-react';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const quickActions = [
    {
      icon: BookOpen,
      title: 'Continue Learning',
      description: 'Resume your financial literacy course',
      link: '/financial-literacy',
      color: 'bg-blue-500'
    },
    {
      icon: Award,
      title: 'Explore Schemes',
      description: 'Find relevant government programs',
      link: '/government-schemes',
      color: 'bg-green-500'
    },
    {
      icon: Banknote,
      title: 'Banking Help',
      description: 'Get guidance on banking services',
      link: '/banking-services',
      color: 'bg-purple-500'
    }
  ];

  const progressData = [
    { label: 'Financial Literacy', progress: 65, color: 'bg-blue-500' },
    { label: 'Government Schemes', progress: 30, color: 'bg-green-500' },
    { label: 'Banking Knowledge', progress: 45, color: 'bg-purple-500' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl p-8 text-white">
            <h1 className="text-3xl font-bold mb-2">Welcome back, {user.name}!</h1>
            <p className="text-blue-100 text-lg">
              Continue your journey towards financial freedom. You're making great progress!
            </p>
            {user.village && (
              <p className="text-blue-200 mt-2">📍 {user.village}</p>
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickActions.map((action, index) => (
              <Link
                key={index}
                to={action.link}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-lg ${action.color}`}>
                    <action.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {action.title}
                    </h3>
                    <p className="text-gray-600">{action.description}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Progress Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Your Progress</h2>
              <div className="space-y-6">
                {progressData.map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">{item.label}</span>
                      <span className="text-sm text-gray-500">{item.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`${item.color} h-2 rounded-full transition-all duration-300`}
                        style={{ width: `${item.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-lg p-6 mt-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Activity</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                  <BookOpen className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Completed: Basics of Saving</p>
                    <p className="text-xs text-gray-500">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                  <Award className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Discovered: PM-KISAN Scheme</p>
                    <p className="text-xs text-gray-500">1 day ago</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                  <Banknote className="w-5 h-5 text-purple-600" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Learned: Digital Banking Basics</p>
                    <p className="text-xs text-gray-500">3 days ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats & Goals */}
          <div className="space-y-6">
            {/* Personal Stats */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Your Stats</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-gray-700">Courses Completed</span>
                  </div>
                  <span className="text-lg font-semibold text-gray-900">12</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Target className="w-5 h-5 text-blue-500" />
                    <span className="text-sm text-gray-700">Goals Achieved</span>
                  </div>
                  <span className="text-lg font-semibold text-gray-900">8</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <PiggyBank className="w-5 h-5 text-purple-500" />
                    <span className="text-sm text-gray-700">Savings Plans</span>
                  </div>
                  <span className="text-lg font-semibold text-gray-900">3</span>
                </div>
              </div>
            </div>

            {/* Community Impact */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Community Impact</h3>
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mx-auto mb-3">
                  <Users className="w-8 h-8 text-yellow-600" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900">47</h4>
                <p className="text-sm text-gray-600">People you've helped</p>
                <p className="text-xs text-gray-500 mt-2">
                  You're making a difference in your community!
                </p>
              </div>
            </div>

            {/* Next Steps */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 border border-green-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Recommended Next Steps</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Complete Investment Basics course</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Apply for suitable schemes</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Set up digital payments</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;