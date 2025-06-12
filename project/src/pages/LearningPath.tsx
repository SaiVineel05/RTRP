import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Play, CheckCircle, Clock, BookOpen, ArrowLeft, ArrowRight, Award } from 'lucide-react';

interface LearningStep {
  id: number;
  title: string;
  description: string;
  videoId: string;
  duration: string;
  content: string;
  completed: boolean;
}

interface Module {
  id: number;
  title: string;
  description: string;
  totalSteps: number;
  estimatedTime: string;
  steps: LearningStep[];
}

const LearningPath: React.FC = () => {
  const { moduleId } = useParams<{ moduleId: string }>();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  const userId = 'currentUser'; // Replace with actual user ID from auth or context

  const modules: Module[] = [
    {
      id: 1,
      title: 'Banking Basics',
      description: 'Learn about different types of bank accounts, how to open an account, and basic banking services.',
      totalSteps: 8,
      estimatedTime: '45 mins',
      steps: [
        {
          id: 1,
          title: 'Introduction to Banking',
          description: 'Understanding what banks are and why they are important for financial security.',
          videoId: 'fTTGALaRZoc',
          duration: '5 mins',
          content: `
            <h3>What is Banking?</h3>
            <p>Banking is the business of accepting deposits from the public and creating credit. Banks are financial institutions that provide various financial services to individuals, businesses, and governments.</p>
            
            <h4>Why is Banking Important?</h4>
            <ul>
              <li><strong>Safety:</strong> Your money is safer in a bank than at home</li>
              <li><strong>Growth:</strong> Banks pay interest on your deposits</li>
              <li><strong>Convenience:</strong> Easy access to your money through ATMs and digital banking</li>
              <li><strong>Credit:</strong> Banks provide loans when you need them</li>
            </ul>

            <h4>Types of Banks in India:</h4>
            <ul>
              <li><strong>Public Sector Banks:</strong> SBI, Bank of Baroda, PNB</li>
              <li><strong>Private Sector Banks:</strong> HDFC, ICICI, Axis Bank</li>
              <li><strong>Regional Rural Banks:</strong> Focused on rural areas</li>
              <li><strong>Cooperative Banks:</strong> Community-based banking</li>
            </ul>
          `,
          completed: false
        },
        {
          id: 2,
          title: 'Types of Bank Accounts',
          description: 'Learn about savings accounts, current accounts, and fixed deposits.',
          videoId: 'O4-MtfawzAY',
          duration: '6 mins',
          content: `
            <h3>Different Types of Bank Accounts</h3>
            
            <h4>1. Savings Account</h4>
            <p>Perfect for individuals to save money and earn interest.</p>
            <ul>
              <li>Minimum balance: ₹500 - ₹10,000</li>
              <li>Interest rate: 3-4% per annum</li>
              <li>Limited transactions per month</li>
              <li>Best for: Regular savings and emergency funds</li>
            </ul>

            <h4>2. Current Account</h4>
            <p>Designed for businesses and frequent transactions.</p>
            <ul>
              <li>No limit on transactions</li>
              <li>Higher minimum balance requirement</li>
              <li>No interest earned</li>
              <li>Best for: Business operations</li>
            </ul>

            <h4>3. Fixed Deposit (FD)</h4>
            <p>Lock your money for a fixed period to earn higher interest.</p>
            <ul>
              <li>Higher interest rates: 5-7% per annum</li>
              <li>Fixed tenure: 7 days to 10 years</li>
              <li>Penalty for early withdrawal</li>
              <li>Best for: Long-term savings goals</li>
            </ul>

            <h4>4. Recurring Deposit (RD)</h4>
            <p>Save a fixed amount every month for a specific period.</p>
            <ul>
              <li>Monthly deposits: ₹100 onwards</li>
              <li>Tenure: 6 months to 10 years</li>
              <li>Interest similar to FD</li>
              <li>Best for: Building saving habits</li>
            </ul>
          `,
          completed: false
        },
        {
          id: 3,
          title: 'How to Open a Bank Account',
          description: 'Step-by-step process to open your first bank account.',
          videoId: '5IHq3CBzDnc',
          duration: '8 mins',
          content: `
            <h3>Opening Your First Bank Account</h3>
            
            <h4>Required Documents:</h4>
            <ul>
              <li><strong>Identity Proof:</strong> Aadhaar Card, PAN Card, Voter ID</li>
              <li><strong>Address Proof:</strong> Aadhaar Card, Utility Bill, Rent Agreement</li>
              <li><strong>Photographs:</strong> 2-3 recent passport size photos</li>
              <li><strong>Initial Deposit:</strong> As per bank's requirement</li>
            </ul>

            <h4>Step-by-Step Process:</h4>
            <ol>
              <li><strong>Choose a Bank:</strong> Research banks near your location</li>
              <li><strong>Visit Branch:</strong> Go to the nearest branch</li>
              <li><strong>Fill Form:</strong> Complete the account opening form</li>
              <li><strong>Submit Documents:</strong> Provide all required documents</li>
              <li><strong>Initial Deposit:</strong> Make the minimum required deposit</li>
              <li><strong>Verification:</strong> Bank will verify your details</li>
              <li><strong>Account Activation:</strong> Receive your account number and debit card</li>
            </ol>

            <h4>Tips for Choosing the Right Bank:</h4>
            <ul>
              <li>Check branch and ATM network in your area</li>
              <li>Compare minimum balance requirements</li>
              <li>Look for digital banking facilities</li>
              <li>Consider customer service quality</li>
            </ul>
          `,
          completed: false
        },
        {
          id: 4,
          title: 'Understanding ATM Services',
          description: 'Learn how to use ATMs safely and effectively.',
          videoId: 'NwcO2O_Gv9M',
          duration: '5 mins',
          content: `
            <h3>ATM Services and Safety</h3>
            
            <h4>What is an ATM?</h4>
            <p>Automated Teller Machine (ATM) allows you to perform basic banking transactions without visiting a bank branch.</p>

            <h4>ATM Services Available:</h4>
            <ul>
              <li><strong>Cash Withdrawal:</strong> Get cash 24/7</li>
              <li><strong>Balance Inquiry:</strong> Check your account balance</li>
              <li><strong>Mini Statement:</strong> Get last 5-10 transactions</li>
              <li><strong>PIN Change:</strong> Change your ATM PIN</li>
              <li><strong>Fund Transfer:</strong> Transfer money between accounts</li>
            </ul>

            <h4>ATM Safety Tips:</h4>
            <ul>
              <li>Always cover your PIN while entering</li>
              <li>Check for any suspicious devices on the ATM</li>
              <li>Count your cash before leaving</li>
              <li>Keep your transaction receipt</li>
              <li>Report any issues immediately</li>
              <li>Use ATMs in well-lit, secure locations</li>
            </ul>

            <h4>ATM Charges:</h4>
            <ul>
              <li>Own bank ATMs: Usually free (3-5 transactions/month)</li>
              <li>Other bank ATMs: ₹20-21 per transaction after free limit</li>
              <li>Non-metro areas: More free transactions available</li>
            </ul>
          `,
          completed: false
        },
        {
          id: 5,
          title: 'Reading Bank Statements',
          description: 'Understand your bank statements and track your finances.',
          videoId: 'AIh2MYj_qsM',
          duration: '6 mins',
          content: `
            <h3>Understanding Your Bank Statement</h3>
            
            <h4>What is a Bank Statement?</h4>
            <p>A bank statement is a document that shows all transactions in your account over a specific period, usually monthly.</p>

            <h4>Key Information in Bank Statements:</h4>
            <ul>
              <li><strong>Account Details:</strong> Account number, name, address</li>
              <li><strong>Statement Period:</strong> From and to dates</li>
              <li><strong>Opening Balance:</strong> Balance at the start of the period</li>
              <li><strong>Closing Balance:</strong> Balance at the end of the period</li>
              <li><strong>Transaction Details:</strong> All debits and credits</li>
            </ul>

            <h4>Types of Transactions:</h4>
            <ul>
              <li><strong>Credit (CR):</strong> Money added to your account</li>
              <li><strong>Debit (DR):</strong> Money taken from your account</li>
              <li><strong>Interest Credit:</strong> Interest earned on your balance</li>
              <li><strong>Charges:</strong> Bank fees and charges</li>
            </ul>

            <h4>Why Review Bank Statements?</h4>
            <ul>
              <li>Track your spending patterns</li>
              <li>Identify unauthorized transactions</li>
              <li>Plan your budget better</li>
              <li>Maintain financial records</li>
            </ul>
          `,
          completed: false
        },
        {
          id: 6,
          title: 'Digital Banking Basics',
          description: 'Introduction to online and mobile banking services.',
          videoId: 'zvPyqN-FEPQ',
          duration: '7 mins',
          content: `
            <h3>Digital Banking Revolution</h3>
            
            <h4>What is Digital Banking?</h4>
            <p>Digital banking allows you to perform banking transactions through internet and mobile applications without visiting a branch.</p>

            <h4>Types of Digital Banking:</h4>
            <ul>
              <li><strong>Internet Banking:</strong> Banking through website on computer</li>
              <li><strong>Mobile Banking:</strong> Banking through mobile apps</li>
              <li><strong>UPI Payments:</strong> Instant money transfers</li>
              <li><strong>Digital Wallets:</strong> Store money digitally</li>
            </ul>

            <h4>Benefits of Digital Banking:</h4>
            <ul>
              <li>24/7 availability</li>
              <li>No need to visit branches</li>
              <li>Instant transactions</li>
              <li>Lower transaction costs</li>
              <li>Real-time notifications</li>
              <li>Easy bill payments</li>
            </ul>

            <h4>Getting Started with Digital Banking:</h4>
            <ol>
              <li>Visit your bank branch to activate digital banking</li>
              <li>Download your bank's official mobile app</li>
              <li>Register with your account details</li>
              <li>Set up login credentials</li>
              <li>Start with small transactions</li>
            </ol>
          `,
          completed: false
        },
        {
          id: 7,
          title: 'Banking Security and Fraud Prevention',
          description: 'Learn how to protect yourself from banking frauds.',
          videoId: 'sMDg7ld1tZU',
          duration: '8 mins',
          content: `
            <h3>Banking Security Best Practices</h3>
            
            <h4>Common Banking Frauds:</h4>
            <ul>
              <li><strong>Phishing:</strong> Fake emails/SMS asking for details</li>
              <li><strong>ATM Skimming:</strong> Devices that steal card information</li>
              <li><strong>Phone Frauds:</strong> Fake calls asking for OTP/PIN</li>
              <li><strong>Fake Websites:</strong> Duplicate banking websites</li>
            </ul>

            <h4>How to Stay Safe:</h4>
            <ul>
              <li><strong>Never share:</strong> PIN, OTP, passwords with anyone</li>
              <li><strong>Banks never ask:</strong> For sensitive information over phone/email</li>
              <li><strong>Use official apps:</strong> Download only from official app stores</li>
              <li><strong>Check URLs:</strong> Ensure you're on the official website</li>
              <li><strong>Log out completely:</strong> After online banking sessions</li>
            </ul>

            <h4>What to Do if Fraud Occurs:</h4>
            <ol>
              <li>Immediately contact your bank</li>
              <li>Block your cards and accounts</li>
              <li>File a complaint with cyber crime cell</li>
              <li>Keep all transaction records</li>
              <li>Monitor your accounts regularly</li>
            </ol>

            <h4>Red Flags to Watch For:</h4>
            <ul>
              <li>Urgent requests for personal information</li>
              <li>Offers that seem to be too good to be true</li>
              <li>Pressure to act immediately</li>
              <li>Requests to download unknown software</li>
            </ul>
          `,
          completed: false
        },
        {
          id: 8,
          title: 'Banking for Rural Communities',
          description: 'Special banking services and schemes for rural areas.',
          videoId: 'FvA3Li63TGk',
          duration: '6 mins',
          content: `
            <h3>Banking Services for Rural India</h3>
            
            <h4>Government Initiatives:</h4>
            <ul>
              <li><strong>Jan Dhan Yojana:</strong> Zero balance accounts for all</li>
              <li><strong>Business Correspondents:</strong> Banking services in villages</li>
              <li><strong>Regional Rural Banks:</strong> Specialized rural banking</li>
              <li><strong>Self Help Groups:</strong> Community-based financial services</li>
            </ul>

            <h4>Special Rural Banking Services:</h4>
            <ul>
              <li><strong>Kisan Credit Cards:</strong> Easy credit for farmers</li>
              <li><strong>Crop Insurance:</strong> Protection against crop losses</li>
              <li><strong>Micro Finance:</strong> Small loans for rural entrepreneurs</li>
              <li><strong>Mobile Banking Vans:</strong> Banking services at your doorstep</li>
            </ul>

            <h4>Benefits for Rural Customers:</h4>
            <ul>
              <li>Lower minimum balance requirements</li>
              <li>More free ATM transactions</li>
              <li>Simplified account opening process</li>
              <li>Local language support</li>
              <li>Flexible documentation requirements</li>
            </ul>

            <h4>How to Access Rural Banking:</h4>
            <ol>
              <li>Visit nearest bank branch or Business Correspondent</li>
              <li>Inquire about rural-specific schemes</li>
              <li>Join local Self Help Groups</li>
              <li>Use mobile banking services</li>
              <li>Participate in financial literacy programs</li>
            </ol>
          `,
          completed: false
        }
      ]
    },
    {
      id: 2,
      title: 'Saving Strategies',
      description: 'Discover effective ways to save money, set financial goals, and build an emergency fund.',
      totalSteps: 10,
      estimatedTime: '60 mins',
      steps: [
        {
          id: 1,
          title: 'Why Save Money?',
          description: 'Understanding the importance of saving for financial security.',
          videoId: 'JqYoLQXO7j4',
          duration: '5 mins',
          content: `
            <h3>The Power of Saving</h3>
            <p>Saving money is one of the most fundamental financial habits that can transform your life and provide security for your future.</p>
            
            <h4>Why is Saving Important?</h4>
            <ul>
              <li><strong>Emergency Protection:</strong> Handle unexpected expenses without debt</li>
              <li><strong>Financial Freedom:</strong> Reduce dependence on others</li>
              <li><strong>Goal Achievement:</strong> Buy things you want without borrowing</li>
              <li><strong>Peace of Mind:</strong> Sleep better knowing you have money saved</li>
              <li><strong>Investment Opportunities:</strong> Use savings to grow wealth</li>
            </ul>

            <h4>The Cost of Not Saving:</h4>
            <ul>
              <li>Forced to borrow money at high interest rates</li>
              <li>Unable to take advantage of opportunities</li>
              <li>Constant financial stress and worry</li>
              <li>Dependence on others during emergencies</li>
            </ul>

            <h4>Saving vs. Investing:</h4>
            <ul>
              <li><strong>Saving:</strong> Keeping money safe for short-term needs</li>
              <li><strong>Investing:</strong> Growing money for long-term goals</li>
              <li>Both are important for financial health</li>
            </ul>
          `,
          completed: false
        },
        {
          id: 2,
          title: 'Setting Financial Goals',
          description: 'Learn how to set SMART financial goals to guide your saving efforts.',
          videoId: '3b1g4j5k6l7',
          duration: '7 mins',
          content: `
            <h3>Setting SMART Financial Goals</h3>
            <p>Financial goals give you a clear direction for your saving efforts and help you stay motivated.</p>
            
            <h4>What are SMART Goals?</h4>
            <ul>
              <li><strong>S:</strong> Specific - Clear and well-defined</li>
              <li><strong>M:</strong> Measurable - Track progress easily</li>
              <li><strong>A:</strong> Achievable - Realistic and attainable</li>
              <li><strong>R:</strong> Relevant - Aligned with your values</li>
              <li><strong>T:</strong> Time-bound - Set a deadline for achievement</li>
            </ul>

            <h4>Examples of SMART Financial Goals:</h4>
            <ul>
              <li>Save ₹50,000 for a vacation in 12 months</li>
              <li>Build an emergency fund of ₹1,00,000 in 2 years</li>
              <li>Pay off ₹30,000 credit card debt in 6 months</li>
              <li>Save ₹10,000 every month for a new car in 3 years</li>
            </ul>

            <h4>Steps to Set Your Financial Goals:</h4>
            <ol>
              <li>Identify what you want to achieve financially</li>
              <li>Make your goals specific and measurable</li>
              <li>Ensure they are realistic and relevant to you</li>
              <li>Set a timeline for each goal</li>
              <li>Write down your goals and review them regularly</li>
            </ol>

            <h4>The Importance of Tracking Progress:</h4>
            <ul>
              <li>Stay motivated by seeing how far you've come</li>
              <li>Adjust your plans if you're falling behind</li>
              <li>Acknowledge small wins along the way</li>
            </ul>
          `,
          completed: false
        },
        {
      id: 3,
      title: 'Emergency Fund',
      description: 'Understand the importance of emergency savings and how to build it.',
      videoId: 'YB1Syuk0pUE',
      duration: '6 mins',
      content: `
      <h3>Building an Emergency Fund</h3>

      <h4>What is an Emergency Fund?</h4>
      <p>An emergency fund is money saved to cover urgent and unexpected expenses, like medical bills, job loss, or home repairs.</p>
    
      <h4>Why It Matters:</h4>
      <ul>
        <li>Avoids borrowing during crises</li>
        <li>Reduces financial stress</li>
        <li>Gives peace of mind and independence</li>
      </ul>

      <h4>How Much Should You Save?</h4>
      <ul>
        <li>Start with ₹5,000–₹10,000</li>
        <li>Eventually aim for 3–6 months of essential expenses</li>
      </ul>
    
      <h4>Where to Keep It:</h4>
      <ul>
        <li>In a separate savings account</li>
        <li>Somewhere accessible but not used for daily spending</li>
      </ul>

      <h4>Tips to Grow Your Fund:</h4>
      <ul>
        <li>Save a fixed amount each month</li>
        <li>Use bonuses or gifts to boost it</li>
        <li>Avoid spending from it unless necessary</li>
      </ul>
      `,
      completed: false
    },
           {
  id: 4,
  title: 'Saving Habits',
  description: 'Develop daily habits that help you save consistently.',
  videoId: '5N4n9oLkJWQ',
  duration: '5 mins',
  content: `
    <h3>Building Good Saving Habits</h3>

    <h4>Why Habits Matter:</h4>
    <p>Small daily choices can lead to big savings over time. Good habits help you save without stress or sacrifice.</p>

    <h4>Simple Saving Habits:</h4>
    <ul>
      <li>Save before you spend – treat saving like a fixed expense</li>
      <li>Use a piggy bank or mobile wallet to store small amounts</li>
      <li>Track your spending weekly</li>
      <li>Avoid impulse purchases</li>
    </ul>

    <h4>Make Saving a Routine:</h4>
    <ul>
      <li>Save a set amount on payday</li>
      <li>Set savings reminders or use automatic apps</li>
      <li>Reward yourself for reaching small milestones</li>
    </ul>

    <h4>Bonus Tip:</h4>
    <p>Even ₹10 saved daily adds up to ₹3,000+ a year. Start small, stay consistent.</p>
  `,
  completed: false
}
      ]
    }
    // Add more modules...
  ];

  const getProgressKey = (moduleId: number) => `user-${userId}-module-${moduleId}-progress`;

  const currentModule = modules.find(m => m.id === parseInt(moduleId || '1')) || modules[0];

  useEffect(() => {
    // Load progress from localStorage for the current user
    const savedProgress = localStorage.getItem(getProgressKey(currentModule.id));
    if (savedProgress) {
      const progressData = JSON.parse(savedProgress);
      setProgress(progressData.progress);
      setCurrentStep(progressData.currentStep);

      // Update completed status for steps
      currentModule.steps.forEach((step, index) => {
        step.completed = index < progressData.currentStep;
      });
      setProgress(calculateProgress());
    } else {
      // If no progress, reset to zero for new user
      setProgress(0);
      setCurrentStep(0);
      currentModule.steps.forEach((step) => {
        step.completed = false;
      });
    }
  }, [currentModule.id, userId]);

  const calculateProgress = () => {
    const completedSteps = currentModule.steps.filter(step => step.completed).length;
    return Math.round((completedSteps / currentModule.totalSteps) * 100);
  };

  const markStepComplete = () => {
    // Mark current step as completed
    currentModule.steps[currentStep].completed = true;

    // Calculate progress based on completed steps
    const newProgress = calculateProgress();
    setProgress(newProgress);

    // Save progress to localStorage for the current user
    const progressData = {
      progress: newProgress,
      currentStep: currentStep + 1,
      completedSteps: currentModule.steps.filter(step => step.completed).length
    };
    localStorage.setItem(getProgressKey(currentModule.id), JSON.stringify(progressData));

    // Move to next step
    if (currentStep < currentModule.totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const goToStep = (stepIndex: number) => {
    setCurrentStep(stepIndex);
  };

  const currentStepData = currentModule.steps[currentStep];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate('/financial-literacy')}
                className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Modules</span>
              </button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{currentModule.title}</h1>
                <p className="text-gray-600">{currentModule.description}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500">Progress</div>
              <div className="text-2xl font-bold text-blue-600">{progress}%</div>
            </div>
          </div>
            
          {/* Progress Bar */}
          <div className="mt-4">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Step Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Learning Steps</h3>
              <div className="space-y-3">
                {currentModule.steps.map((step, index) => (
                  <button
                    key={step.id}
                    onClick={() => goToStep(index)}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      index === currentStep
                        ? 'bg-blue-100 border-2 border-blue-500'
                        : index < currentStep
                        ? 'bg-green-50 border border-green-200'
                        : 'bg-gray-50 border border-gray-200 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                        step.completed
                          ? 'bg-green-500 text-white'
                          : index === currentStep
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-300 text-gray-600'
                      }`}>
                        {step.completed ? <CheckCircle className="w-4 h-4" /> : index + 1}
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-sm">{step.title}</div>
                        <div className="text-xs text-gray-500 flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {step.duration}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Step Header */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold">{currentStepData.title}</h2>
                    <p className="text-blue-100 mt-1">{currentStepData.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-blue-100 text-sm">Step {currentStep + 1} of {currentModule.totalSteps}</div>
                    <div className="text-white font-semibold">{currentStepData.duration}</div>
                  </div>
                </div>
              </div>

              {/* Video Player */}
              <div className="p-6">
                <div className="aspect-video bg-gray-900 rounded-lg mb-6 relative overflow-hidden">
                  <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${currentStepData.videoId}`}
                  title={currentStepData.title}
                  frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                   allowFullScreen
                   className="rounded-lg"
                  ></iframe>
                  {/*<div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 hover:bg-opacity-30 transition-all cursor-pointer">
                    <Play className="w-16 h-16 text-white opacity-80" />
                  </div>*/}
                </div>

                {/* Content */}
                <div className="prose max-w-none">
                  <div 
                    dangerouslySetInnerHTML={{ __html: currentStepData.content }}
                    className="text-gray-700 leading-relaxed"
                  />
                </div>

                
                {/* Navigation */}
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
                  <button
                    onClick={() => currentStep > 0 && goToStep(currentStep - 1)}
                    disabled={currentStep === 0}
                    className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Previous</span>
                  </button>

                  <button
                    onClick={markStepComplete}
                    className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    {currentStepData.completed ? (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        <span>Completed</span>
                      </>
                    ) : (
                      <>
                        <span>Mark Complete</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

                {/* Completion Message */}
                {progress === 100 && (
                  <div className="mt-6 p-6 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Award className="w-8 h-8 text-green-600" />
                      <div>
                        <h3 className="text-lg font-bold text-green-900">Congratulations!</h3>
                        <p className="text-green-700">You have successfully completed the {currentModule.title} module. You're now ready to apply this knowledge in your financial journey!</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningPath;