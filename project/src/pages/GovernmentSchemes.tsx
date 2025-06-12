import React, { useState } from 'react';
import { Search, Filter, MapPin, Calendar, Users, IndianRupee, ExternalLink, CheckCircle } from 'lucide-react';

const GovernmentSchemes: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedScheme, setSelectedScheme] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'All Schemes' },
    { id: 'agriculture', name: 'Agriculture' },
    { id: 'education', name: 'Education' },
    { id: 'healthcare', name: 'Healthcare' },
    { id: 'housing', name: 'Housing' },
    { id: 'employment', name: 'Employment' },
    { id: 'finance', name: 'Financial Inclusion' }
  ];

  const schemes = [
    {
      id: 1,
      name: 'PM-KISAN',
      fullName: 'Pradhan Mantri Kisan Samman Nidhi',
      category: 'agriculture',
      benefit: '₹6,000 per year',
      description: 'Direct income support to all farmer families across the country.',
      eligibility: 'All landholding farmer families',
      documents: ['Aadhaar Card', 'Bank Account Details', 'Land Records'],
      applicationProcess: 'Online through PM-KISAN portal or CSC centers',
      status: 'active',
      beneficiaries: '11 crore farmers',
      launched: '2019'
    },
    {
      id: 2,
      name: 'MGNREGA',
      fullName: 'Mahatma Gandhi National Rural Employment Guarantee Act',
      category: 'employment',
      benefit: '100 days of work guaranteed',
      description: 'Provides livelihood security to rural households through guaranteed wage employment.',
      eligibility: 'Adult members of rural households',
      documents: ['Job Card', 'Aadhaar Card', 'Bank Account'],
      applicationProcess: 'Apply at Gram Panchayat or online',
      status: 'active',
      beneficiaries: '26 crore households',
      launched: '2005'
    },
    {
      id: 3,
      name: 'Ayushman Bharat',
      fullName: 'Pradhan Mantri Jan Arogya Yojana',
      category: 'healthcare',
      benefit: '₹5 lakh health insurance',
      description: 'Provides health insurance coverage to poor and vulnerable families.',
      eligibility: 'SECC-2011 beneficiaries and rural/urban poor families',
      documents: ['Aadhaar Card', 'Ration Card', 'SECC-2011 verification'],
      applicationProcess: 'Empaneled hospitals or through CSC centers',
      status: 'active',
      beneficiaries: '50 crore people',
      launched: '2018'
    },
    {
      id: 4,
      name: 'PM Awas Yojana',
      fullName: 'Pradhan Mantri Awas Yojana - Gramin',
      category: 'housing',
      benefit: '₹1.2-3 lakh for house construction',
      description: 'Provides financial assistance for construction of pucca houses to rural poor.',
      eligibility: 'Households without pucca house and meeting SECC-2011 criteria',
      documents: ['Aadhaar Card', 'Bank Account', 'Job Card', 'Caste Certificate'],
      applicationProcess: 'Through Gram Panchayat or online portal',
      status: 'active',
      beneficiaries: '2.95 crore houses',
      launched: '2016'
    },
    {
      id: 5,
      name: 'Sukanya Samriddhi Yojana',
      fullName: 'Sukanya Samriddhi Account',
      category: 'education',
      benefit: 'High interest savings for girl child',
      description: 'Savings scheme for girl child education and marriage expenses.',
      eligibility: 'Girl child below 10 years',
      documents: ['Birth Certificate', 'Parents Aadhaar', 'Address Proof'],
      applicationProcess: 'Post offices and authorized banks',
      status: 'active',
      beneficiaries: '3.5 crore accounts',
      launched: '2015'
    },
    {
      id: 6,
      name: 'Jan Dhan Yojana',
      fullName: 'Pradhan Mantri Jan Dhan Yojana',
      category: 'finance',
      benefit: 'Free bank account with insurance',
      description: 'Financial inclusion program providing bank accounts to unbanked population.',
      eligibility: 'All Indian citizens',
      documents: ['Aadhaar Card or any government ID', 'Address Proof'],
      applicationProcess: 'Any bank branch or CSC center',
      status: 'active',
      beneficiaries: '46 crore accounts',
      launched: '2014'
    }
  ];

  const filteredSchemes = schemes.filter(scheme => {
    const matchesSearch = scheme.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         scheme.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         scheme.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || scheme.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'agriculture': return '🌾';
      case 'education': return '📚';
      case 'healthcare': return '🏥';
      case 'housing': return '🏠';
      case 'employment': return '💼';
      case 'finance': return '💰';
      default: return '📋';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Government Schemes</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover and access various government financial aid programs, subsidies, and rural development schemes designed to support you and your family.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search schemes by name or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Filter className="h-5 w-5 text-gray-400" />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>{category.name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Schemes Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredSchemes.map((scheme) => (
            <div
              key={scheme.id}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4 mb-4">
                <div className="text-3xl">{getCategoryIcon(scheme.category)}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{scheme.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{scheme.fullName}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center space-x-1">
                      <IndianRupee className="w-4 h-4" />
                      <span>{scheme.benefit}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{scheme.beneficiaries}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{scheme.launched}</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-4">{scheme.description}</p>

              <div className="space-y-3">
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Eligibility:</h4>
                  <p className="text-sm text-gray-600">{scheme.eligibility}</p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Required Documents:</h4>
                  <div className="flex flex-wrap gap-2">
                    {scheme.documents.map((doc, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                      >
                        {doc}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">How to Apply:</h4>
                  <p className="text-sm text-gray-600">{scheme.applicationProcess}</p>
                </div>
              </div>

              <div className="mt-6 flex space-x-3">
                <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Check Eligibility</span>
                </button>
                <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 flex items-center space-x-2">
                  <ExternalLink className="w-4 h-4" />
                  <span>Apply Online</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredSchemes.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900 mb-2">No schemes found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}

        {/* Help Section */}
        <div className="mt-12 bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-8 border border-green-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Need Help Applying?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">📞 Helpline Support</h3>
              <p className="text-gray-600 mb-4">Get assistance from our dedicated support team</p>
              <button className="text-blue-600 hover:text-blue-800 font-medium">Call Now</button>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">🏢 Visit CSC Center</h3>
              <p className="text-gray-600 mb-4">Find your nearest Common Service Center</p>
              <button className="text-blue-600 hover:text-blue-800 font-medium">Find Center</button>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">📖 Application Guide</h3>
              <p className="text-gray-600 mb-4">Step-by-step guide in your local language</p>
              <button className="text-blue-600 hover:text-blue-800 font-medium">Download Guide</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GovernmentSchemes;