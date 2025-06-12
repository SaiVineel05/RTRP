import React, { useState } from 'react';
import { CreditCard, Smartphone, Shield, Clock, Users, CheckCircle, ArrowRight, AlertTriangle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const BankingServices: React.FC = () => {
  const [activeTab, setActiveTab] = useState('basics');
  const { t } = useLanguage();

  const tabs = [
    { id: 'basics', name: 'Banking Basics', icon: CreditCard },
    { id: 'digital', name: 'Digital Banking', icon: Smartphone },
    { id: 'safety', name: 'Safety Tips', icon: Shield }
  ];

  const bankingBasics = [
    {
      title: 'Opening a Bank Account',
      description: 'Learn how to open your first bank account with minimal documentation.',
      steps: [
        'Visit nearest bank branch with required documents',
        'Fill the account opening form',
        'Submit documents and initial deposit',
        'Receive account details and debit card'
      ],
      documents: ['Aadhaar Card', 'PAN Card (if available)', 'Address Proof', 'Photograph'],
      tips: 'Choose a bank with good rural network and low minimum balance requirements.'
    },
    {
      title: 'Types of Bank Accounts',
      description: 'Understand different types of accounts and choose the right one for you.',
      types: [
        { name: 'Savings Account', benefit: 'Earn interest on deposits', suitable: 'Regular savings' },
        { name: 'Current Account', benefit: 'No limit on transactions', suitable: 'Business purposes' },
        { name: 'Fixed Deposit', benefit: 'Higher interest rates', suitable: 'Long-term savings' },
        { name: 'Recurring Deposit', benefit: 'Monthly savings habit', suitable: 'Goal-based savings' }
      ]
    },
    {
      title: 'ATM Usage',
      description: 'Safe and effective use of ATM machines for your banking needs.',
      features: ['Cash withdrawal', 'Balance inquiry', 'Mini statement', 'PIN change'],
      safety: ['Cover PIN while entering', 'Check for suspicious devices', 'Take receipt and count cash', 'Report any issues immediately']
    }
  ];

  const digitalBanking = [
    {
      title: 'UPI Payments',
      description: 'Quick and secure digital payments using your smartphone.',
      apps: ['Google Pay', 'PhonePe', 'Paytm', 'BHIM'],
      features: ['Instant money transfer', 'QR code payments', 'Bill payments', 'Mobile recharge'],
      setup: [
        'Download UPI app from official store',
        'Register with mobile number',
        'Link bank account',
        'Set UPI PIN',
        'Start making payments'
      ]
    },
    {
      title: 'Mobile Banking',
      description: 'Access your bank account anytime, anywhere through mobile app.',
      services: ['Balance check', 'Fund transfer', 'Bill payments', 'Statement download'],
      benefits: ['24/7 availability', 'No need to visit branch', 'Real-time notifications', 'Transaction history']
    },
    {
      title: 'Internet Banking',
      description: 'Complete banking services through your computer or smartphone browser.',
      features: ['Account management', 'Online shopping', 'Investment services', 'Loan applications'],
      requirements: ['Active bank account', 'Registered mobile number', 'Email ID', 'Internet connection']
    }
  ];

  const safetyTips = [
    {
      category: 'PIN Security',
      tips: [
        'Never share your PIN with anyone',
        'Change PIN regularly',
        'Use a unique PIN that\'s not your birthdate',
        'Cover keypad while entering PIN'
      ]
    },
    {
      category: 'Online Safety',
      tips: [
        'Always use official banking apps/websites',
        'Never click on suspicious links in SMS/email',
        'Log out completely after banking',
        'Use secure internet connection'
      ]
    },
    {
      category: 'Fraud Prevention',
      tips: [
        'Banks never ask for PIN/OTP over phone',
        'Verify caller before sharing any information',
        'Report suspicious activities immediately',
        'Keep your mobile number updated with bank'
      ]
    }
  ];

  const renderBankingBasics = () => (
    <div className="space-y-8">
      {bankingBasics.map((item, index) => (
        <div key={index} className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
          <p className="text-gray-600 mb-4">{item.description}</p>
          
          {item.steps && (
            <div className="mb-4">
              <h4 className="font-semibold text-gray-900 mb-2">Steps:</h4>
              <ol className="list-decimal list-inside space-y-1">
                {item.steps.map((step, i) => (
                  <li key={i} className="text-gray-700">{step}</li>
                ))}
              </ol>
            </div>
          )}

          {item.types && (
            <div className="mb-4">
              <h4 className="font-semibold text-gray-900 mb-2">Account Types:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {item.types.map((type, i) => (
                  <div key={i} className="border border-gray-200 rounded-lg p-4">
                    <h5 className="font-medium text-gray-900">{type.name}</h5>
                    <p className="text-sm text-gray-600 mb-1">{type.benefit}</p>
                    <p className="text-xs text-blue-600">Best for: {type.suitable}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {item.documents && (
            <div className="mb-4">
              <h4 className="font-semibold text-gray-900 mb-2">Required Documents:</h4>
              <div className="flex flex-wrap gap-2">
                {item.documents.map((doc, i) => (
                  <span key={i} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                    {doc}
                  </span>
                ))}
              </div>
            </div>
          )}

          {item.features && (
            <div className="mb-4">
              <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
              <div className="grid grid-cols-2 gap-2">
                {item.features.map((feature, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {item.safety && (
            <div className="mb-4">
              <h4 className="font-semibold text-gray-900 mb-2">Safety Tips:</h4>
              <ul className="space-y-1">
                {item.safety.map((tip, i) => (
                  <li key={i} className="flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-green-500" />
                    <span className="text-gray-700">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {item.tips && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <AlertTriangle className="w-5 h-5 text-yellow-600" />
                <span className="font-medium text-yellow-800">Pro Tip:</span>
              </div>
              <p className="text-yellow-700">{item.tips}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );

  const renderDigitalBanking = () => (
    <div className="space-y-8">
      {digitalBanking.map((item, index) => (
        <div key={index} className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
          <p className="text-gray-600 mb-4">{item.description}</p>
          
          {item.apps && (
            <div className="mb-4">
              <h4 className="font-semibold text-gray-900 mb-2">Popular Apps:</h4>
              <div className="flex flex-wrap gap-2">
                {item.apps.map((app, i) => (
                  <span key={i} className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                    {app}
                  </span>
                ))}
              </div>
            </div>
          )}

          {item.setup && (
            <div className="mb-4">
              <h4 className="font-semibold text-gray-900 mb-2">Setup Process:</h4>
              <ol className="list-decimal list-inside space-y-1">
                {item.setup.map((step, i) => (
                  <li key={i} className="text-gray-700">{step}</li>
                ))}
              </ol>
            </div>
          )}

          {item.features && (
            <div className="mb-4">
              <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
              <div className="grid grid-cols-2 gap-2">
                {item.features.map((feature, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {item.services && (
            <div className="mb-4">
              <h4 className="font-semibold text-gray-900 mb-2">Available Services:</h4>
              <div className="grid grid-cols-2 gap-2">
                {item.services.map((service, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-blue-500" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {item.benefits && (
            <div className="mb-4">
              <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
              <div className="grid grid-cols-2 gap-2">
                {item.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <ArrowRight className="w-4 h-4 text-purple-500" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {item.requirements && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-900 mb-2">Requirements:</h4>
              <ul className="space-y-1">
                {item.requirements.map((req, i) => (
                  <li key={i} className="text-blue-800">• {req}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );

  const renderSafetyTips = () => (
    <div className="space-y-6">
      {safetyTips.map((category, index) => (
        <div key={index} className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">{category.category}</h3>
          <div className="space-y-3">
            {category.tips.map((tip, i) => (
              <div key={i} className="flex items-start space-x-3">
                <Shield className="w-5 h-5 text-green-500 mt-0.5" />
                <span className="text-gray-700">{tip}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
      
      <div className="bg-red-50 border border-red-200 rounded-xl p-6">
        <h3 className="text-xl font-bold text-red-900 mb-4">⚠️ Common Frauds to Avoid</h3>
        <ul className="space-y-2">
          <li className="text-red-800">• Fake calls asking for OTP or PIN</li>
          <li className="text-red-800">• Phishing emails or SMS with suspicious links</li>
          <li className="text-red-800">• Offers that seem too good to be true</li>
          <li className="text-red-800">• Pressure to share personal information urgently</li>
        </ul>
      </div>

      {/* Contact Information */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Banking Hours & Contact</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <h4 className="font-semibold text-gray-900">Branch Hours</h4>
            <p className="text-gray-600">Mon-Fri: 10 AM - 4 PM</p>
            <p className="text-gray-600">Sat: 10 AM - 2 PM</p>
          </div>
          <div className="text-center">
            <CreditCard className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <h4 className="font-semibold text-gray-900">ATM Service</h4>
            <p className="text-gray-600">24/7 Available</p>
            <p className="text-gray-600">Most locations</p>
          </div>
          <div className="text-center">
            <Smartphone className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <h4 className="font-semibold text-gray-900">Customer Care</h4>
            <p className="text-gray-600">24/7 Support</p>
            <p className="text-gray-600">1800-XXX-XXXX</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'basics': return renderBankingBasics();
      case 'digital': return renderDigitalBanking();
      case 'safety': return renderSafetyTips();
      default: return renderBankingBasics();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('bankingServices.title')}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('bankingServices.description')}
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="bg-white rounded-xl shadow-lg p-2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center justify-center space-x-2 px-4 py-3 rounded-lg font-medium transition-colors duration-200 ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  <span className="hidden sm:inline">{tab.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tab Content */}
        {renderTabContent()}
      </div>
    </div>
  );
};

export default BankingServices;