import React, { useState } from 'react';
import { Calculator, TrendingUp, CreditCard, PiggyBank } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Calculators: React.FC = () => {
  const [activeCalculator, setActiveCalculator] = useState('sip');
  const { t } = useLanguage();

  // SIP Calculator State
  const [sipData, setSipData] = useState({
    monthlyAmount: 5000,
    annualReturn: 12,
    years: 10
  });

  // Loan Calculator State
  const [loanData, setLoanData] = useState({
    loanAmount: 500000,
    interestRate: 8.5,
    tenure: 20
  });

  // Investment Calculator State
  const [investmentData, setInvestmentData] = useState({
    initialAmount: 100000,
    monthlyContribution: 5000,
    annualReturn: 10,
    years: 15
  });

  const calculators = [
    {
      id: 'sip',
      title: t('calculators.sip.title'),
      description: t('calculators.sip.description'),
      icon: TrendingUp,
      color: 'bg-green-500'
    },
    {
      id: 'loan',
      title: t('calculators.loan.title'),
      description: t('calculators.loan.description'),
      icon: CreditCard,
      color: 'bg-red-500'
    },
    {
      id: 'investment',
      title: t('calculators.investment.title'),
      description: t('calculators.investment.description'),
      icon: PiggyBank,
      color: 'bg-purple-500'
    }
  ];

  // SIP Calculation
  const calculateSIP = () => {
    const monthlyRate = sipData.annualReturn / 100 / 12;
    const months = sipData.years * 12;
    const futureValue = sipData.monthlyAmount * (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate));
    const totalInvestment = sipData.monthlyAmount * months;
    const totalReturns = futureValue - totalInvestment;
    
    return {
      futureValue: Math.round(futureValue),
      totalInvestment: Math.round(totalInvestment),
      totalReturns: Math.round(totalReturns)
    };
  };

  // Loan EMI Calculation
  const calculateLoanEMI = () => {
    const monthlyRate = loanData.interestRate / 100 / 12;
    const months = loanData.tenure * 12;
    const emi = (loanData.loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
    const totalAmount = emi * months;
    const totalInterest = totalAmount - loanData.loanAmount;
    
    return {
      emi: Math.round(emi),
      totalAmount: Math.round(totalAmount),
      totalInterest: Math.round(totalInterest)
    };
  };

  // Investment Calculation
  const calculateInvestment = () => {
    const monthlyRate = investmentData.annualReturn / 100 / 12;
    const months = investmentData.years * 12;
    
    // Future value of initial investment
    const initialFV = investmentData.initialAmount * Math.pow(1 + monthlyRate, months);
    
    // Future value of monthly contributions
    const monthlyFV = investmentData.monthlyContribution * (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate));
    
    const totalFutureValue = initialFV + monthlyFV;
    const totalInvestment = investmentData.initialAmount + (investmentData.monthlyContribution * months);
    const totalReturns = totalFutureValue - totalInvestment;
    
    return {
      futureValue: Math.round(totalFutureValue),
      totalInvestment: Math.round(totalInvestment),
      totalReturns: Math.round(totalReturns)
    };
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const renderSIPCalculator = () => {
    const results = calculateSIP();
    
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6">SIP Parameters</h3>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Monthly Investment Amount (₹)
              </label>
              <input
                type="number"
                value={sipData.monthlyAmount}
                onChange={(e) => setSipData({...sipData, monthlyAmount: Number(e.target.value)})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Expected Annual Return (%)
              </label>
              <input
                type="number"
                step="0.1"
                value={sipData.annualReturn}
                onChange={(e) => setSipData({...sipData, annualReturn: Number(e.target.value)})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Investment Period (Years)
              </label>
              <input
                type="number"
                value={sipData.years}
                onChange={(e) => setSipData({...sipData, years: Number(e.target.value)})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6">SIP Results</h3>
          <div className="space-y-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="text-sm text-green-600 font-medium">Future Value</p>
              <p className="text-2xl font-bold text-green-700">{formatCurrency(results.futureValue)}</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-blue-600 font-medium">Total Investment</p>
              <p className="text-xl font-bold text-blue-700">{formatCurrency(results.totalInvestment)}</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <p className="text-sm text-purple-600 font-medium">Total Returns</p>
              <p className="text-xl font-bold text-purple-700">{formatCurrency(results.totalReturns)}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderLoanCalculator = () => {
    const results = calculateLoanEMI();
    
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Loan Parameters</h3>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Loan Amount (₹)
              </label>
              <input
                type="number"
                value={loanData.loanAmount}
                onChange={(e) => setLoanData({...loanData, loanAmount: Number(e.target.value)})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Interest Rate (% per annum)
              </label>
              <input
                type="number"
                step="0.1"
                value={loanData.interestRate}
                onChange={(e) => setLoanData({...loanData, interestRate: Number(e.target.value)})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Loan Tenure (Years)
              </label>
              <input
                type="number"
                value={loanData.tenure}
                onChange={(e) => setLoanData({...loanData, tenure: Number(e.target.value)})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Loan Results</h3>
          <div className="space-y-4">
            <div className="bg-red-50 p-4 rounded-lg">
              <p className="text-sm text-red-600 font-medium">Monthly EMI</p>
              <p className="text-2xl font-bold text-red-700">{formatCurrency(results.emi)}</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <p className="text-sm text-orange-600 font-medium">Total Amount Payable</p>
              <p className="text-xl font-bold text-orange-700">{formatCurrency(results.totalAmount)}</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <p className="text-sm text-yellow-600 font-medium">Total Interest</p>
              <p className="text-xl font-bold text-yellow-700">{formatCurrency(results.totalInterest)}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderInvestmentCalculator = () => {
    const results = calculateInvestment();
    
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Investment Parameters</h3>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Initial Investment (₹)
              </label>
              <input
                type="number"
                value={investmentData.initialAmount}
                onChange={(e) => setInvestmentData({...investmentData, initialAmount: Number(e.target.value)})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Monthly Contribution (₹)
              </label>
              <input
                type="number"
                value={investmentData.monthlyContribution}
                onChange={(e) => setInvestmentData({...investmentData, monthlyContribution: Number(e.target.value)})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Expected Annual Return (%)
              </label>
              <input
                type="number"
                step="0.1"
                value={investmentData.annualReturn}
                onChange={(e) => setInvestmentData({...investmentData, annualReturn: Number(e.target.value)})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Investment Period (Years)
              </label>
              <input
                type="number"
                value={investmentData.years}
                onChange={(e) => setInvestmentData({...investmentData, years: Number(e.target.value)})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Investment Results</h3>
          <div className="space-y-4">
            <div className="bg-purple-50 p-4 rounded-lg">
              <p className="text-sm text-purple-600 font-medium">Future Value</p>
              <p className="text-2xl font-bold text-purple-700">{formatCurrency(results.futureValue)}</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-blue-600 font-medium">Total Investment</p>
              <p className="text-xl font-bold text-blue-700">{formatCurrency(results.totalInvestment)}</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="text-sm text-green-600 font-medium">Total Returns</p>
              <p className="text-xl font-bold text-green-700">{formatCurrency(results.totalReturns)}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderCalculatorContent = () => {
    switch (activeCalculator) {
      case 'sip': return renderSIPCalculator();
      case 'loan': return renderLoanCalculator();
      case 'investment': return renderInvestmentCalculator();
      default: return renderSIPCalculator();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('calculators.title')}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('calculators.description')}
          </p>
        </div>

        {/* Calculator Tabs */}
        <div className="mb-8">
          <div className="bg-white rounded-xl shadow-lg p-2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              {calculators.map((calc) => (
                <button
                  key={calc.id}
                  onClick={() => setActiveCalculator(calc.id)}
                  className={`flex items-center space-x-3 px-6 py-4 rounded-lg font-medium transition-all duration-200 ${
                    activeCalculator === calc.id
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <div className={`p-2 rounded-lg ${activeCalculator === calc.id ? 'bg-blue-500' : calc.color}`}>
                    <calc.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold">{calc.title}</div>
                    <div className={`text-sm ${activeCalculator === calc.id ? 'text-blue-100' : 'text-gray-500'}`}>
                      {calc.description}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Calculator Content */}
        {renderCalculatorContent()}

        {/* Tips Section */}
        <div className="mt-12 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Financial Planning Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">💡 SIP Tips</h3>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Start early to benefit from compounding</li>
                <li>• Increase SIP amount annually by 10-15%</li>
                <li>• Choose diversified equity funds for long-term</li>
                <li>• Don't stop SIP during market downturns</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">🏦 Loan Tips</h3>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Compare interest rates from multiple banks</li>
                <li>• Maintain good credit score (750+)</li>
                <li>• Consider prepayment to reduce interest</li>
                <li>• Keep EMI under 40% of monthly income</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">📈 Investment Tips</h3>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Diversify across asset classes</li>
                <li>• Review and rebalance portfolio annually</li>
                <li>• Invest for long-term goals (5+ years)</li>
                <li>• Don't try to time the market</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculators;