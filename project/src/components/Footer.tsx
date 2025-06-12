import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-lg">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">{t('header.title')}</h3>
                <p className="text-sm text-gray-400">{t('header.subtitle')}</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/financial-literacy" className="text-gray-400 hover:text-white transition-colors duration-200">
                  {t('header.financialLiteracy')}
                </Link>
              </li>
              <li>
                <Link to="/government-schemes" className="text-gray-400 hover:text-white transition-colors duration-200">
                  {t('header.governmentSchemes')}
                </Link>
              </li>
              <li>
                <Link to="/banking-services" className="text-gray-400 hover:text-white transition-colors duration-200">
                  {t('header.bankingServices')}
                </Link>
              </li>
              <li>
                <Link to="/calculators" className="text-gray-400 hover:text-white transition-colors duration-200">
                  {t('header.calculators')}
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-gray-400 hover:text-white transition-colors duration-200">
                  {t('header.dashboard')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.services')}</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Financial Education</li>
              <li>Banking Guidance</li>
              <li>Investment Planning</li>
              <li>Savings Strategies</li>
              <li>Government Scheme Assistance</li>
              <li>Digital Literacy</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.contact')}</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400 text-sm">contact@vittmukti.org</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400 text-sm">+91 1800-XXX-XXXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400 text-sm">Rural India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;