import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowRight, Users, TrendingUp, Shield, Globe, BookOpen, Banknote, Award, Calculator } from 'lucide-react';

const Home: React.FC = () => {
  const { user } = useAuth();
  const { t } = useLanguage();

  const features = [
    {
      icon: BookOpen,
      title: t('home.features.financialLiteracy.title'),
      description: t('home.features.financialLiteracy.description'),
      link: '/financial-literacy'
    },
    {
      icon: Award,
      title: t('home.features.governmentSchemes.title'),
      description: t('home.features.governmentSchemes.description'),
      link: '/government-schemes'
    },
    {
      icon: Banknote,
      title: t('home.features.bankingServices.title'),
      description: t('home.features.bankingServices.description'),
      link: '/banking-services'
    },
    {
      icon: Calculator,
      title: t('home.features.calculators.title'),
      description: t('home.features.calculators.description'),
      link: '/calculators'
    }
  ];

  const stats = [
    { icon: Users, value: '50,000+', label: t('home.stats.villages') },
    { icon: TrendingUp, value: '85%', label: t('home.stats.literacy') },
    { icon: Shield, value: '40%', label: t('home.stats.lending') },
    { icon: Globe, value: '12', label: t('home.stats.languages') }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {t('home.hero.title')}
              <span className="block text-blue-600">{t('home.hero.subtitle')}</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700 max-w-3xl mx-auto">
              {t('home.hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {user ? (
                <Link
                  to="/dashboard"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2 shadow-lg"
                >
                  <span>{t('home.hero.goToDashboard')}</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              ) : (
                <>
                  <Link
                    to="/register"
                    className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2 shadow-lg"
                  >
                    <span>{t('home.hero.getStarted')}</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    to="/financial-literacy"
                    className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 hover:text-white transition-colors duration-200"
                  >
                    {t('home.hero.learnMore')}
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <stat.icon className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('home.features.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('home.features.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-blue-100 rounded-full">
                    <feature.icon className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{feature.title}</h3>
                <p className="text-gray-600 mb-6 text-center">{feature.description}</p>
                <div className="text-center">
                  <Link
                    to={feature.link}
                    className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    <span>{t('common.explore')}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t('home.cta.title')}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {t('home.cta.description')}
          </p>
          {!user && (
            <Link
              to="/register"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 inline-flex items-center space-x-2 shadow-lg"
            >
              <span>{t('home.cta.join')}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;