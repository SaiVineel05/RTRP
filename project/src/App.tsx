import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import FinancialLiteracy from './pages/FinancialLiteracy';
import LearningPath from './pages/LearningPath';
import GovernmentSchemes from './pages/GovernmentSchemes';
import BankingServices from './pages/BankingServices';
import Calculators from './pages/Calculators';

function App() {
  return (
    <LanguageProvider>
      <AuthProvider>
        <Router>
          <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/financial-literacy" element={<FinancialLiteracy />} />
                <Route path="/learning-path/:moduleId" element={<LearningPath />} />
                <Route path="/government-schemes" element={<GovernmentSchemes />} />
                <Route path="/banking-services" element={<BankingServices />} />
                <Route path="/calculators" element={<Calculators />} />
              </Routes>
            </main>
            <Footer />
            <Chatbot />
          </div>
        </Router>
      </AuthProvider>
    </LanguageProvider>
  );
}

export default App;