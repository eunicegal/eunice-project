import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Mail,Lock,User,ArrowRight } from 'lucide-react';

const Login = () => {
  const [currentState, setCurrentState] = useState('Sign up');
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Animated background effect
  useEffect(() => {
    const gradient = document.querySelector('.animated-gradient');
    let angle = 0;
    
    const animation = setInterval(() => {
      if (gradient) {
        angle = (angle + 1) % 360;
        gradient.style.background = `linear-gradient(${angle}deg, #f3e7e9 0%, #e3eeff 99%)`;
      }
    }, 100);
    
    return () => clearInterval(animation);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setError('');
    setIsLoading(true);
    
    try {
      // Simulate API call with timeout
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (currentState === 'Login') {
        // Mock successful login
        console.log('User logged in:', formData.email);
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('user', JSON.stringify({email: formData.email}));
        
        toast.success('Successfully logged in! Redirecting...', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        
        setTimeout(() => navigate('/'), 2000);
      } else {
        // Mock successful signup
        console.log('New user registered:', formData);
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('user', JSON.stringify({name: formData.name, email: formData.email}));
        
        toast.success('Account created successfully! Redirecting...', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        
        setTimeout(() => navigate('/'), 2000);
      }
    } catch (err) {
      setError(err.message || 'Authentication failed');
      console.error('Authentication error:', err);
      
      toast.error('Authentication failed. Please try again.', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="animated-gradient absolute inset-0 opacity-20 z-0"></div>
      
      <div className="max-w-md w-full space-y-8 relative z-10">
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
              {currentState}
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              {currentState === 'Login' 
                ? "Sign in to access your account" 
                : "Create your account to get started"}
            </p>
          </div>
          
          <ToastContainer />
          
          <form className="space-y-6" onSubmit={onSubmitHandler}>
            {error && (
              <div className="p-3 bg-red-50 text-red-500 rounded-md text-sm">
                {error}
              </div>
            )}
            
            {currentState === 'Login' ? null : (
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="pl-10 w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-150" 
                  placeholder="Full Name" 
                  required 
                />
              </div>
            )}
            
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="pl-10 w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-150" 
                placeholder="Email address" 
                required 
              />
            </div>
            
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input 
                type="password" 
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="pl-10 w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-150" 
                placeholder="Password" 
                required 
              />
            </div>
            
            <div className="flex items-center justify-between text-sm">
              <div className="text-indigo-600 hover:text-indigo-500 cursor-pointer">
                Forgot password?
              </div>
              <div 
                className="text-indigo-600 hover:text-indigo-500 cursor-pointer flex items-center"
                onClick={() => setCurrentState(currentState === 'Login' ? 'Sign up' : 'Login')}
              >
                {currentState === 'Login' ? 'Create an account' : 'Already have an account?'}
                <ArrowRight className="ml-1 h-4 w-4" />
              </div>
            </div>
            
            <div>
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  currentState === 'Login' ? 'Sign in' : 'Create account'
                )}
              </button>
            </div>
          </form>
          
          {/* <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>
            
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 cursor-pointer">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
              </div>
              <div className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 cursor-pointer">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.1 3.7c-1.3 0-2.3.4-3.1 1.2-.8.8-1.1 1.8-1.1 3.1 0 1.2.3 2.2 1.1 3 .7.8 1.8 1.1 3.1 1.1 1.3 0 2.3-.4 3-1.1.7-.8 1.1-1.8 1.1-3s-.4-2.3-1.1-3c-.7-.8-1.7-1.2-3-1.2zm-9 11.3c0 1.1.5 2 1.5 2.8 1 .8 2.2 1.2 3.7 1.2h10.9c.2-.5.4-1.8.4-2.6 0-2.1-.3-3.7-1-4.9-.7-1.1-1.9-1.7-3.8-1.7h-1c-.6.6-1.3 1.1-2.1 1.4-.8.3-1.7.5-2.6.5-.9 0-1.7-.2-2.5-.5-.8-.3-1.5-.8-2.1-1.4h-1c-1.5 0-2.7.5-3.5 1.4-.9 1-1.3 2.4-1.3 4.3v.5h1.4z" />
                </svg>
              </div>
            </div>
          </div> */}
        </div>
        
        <p className="mt-2 text-center text-sm text-gray-600">
          By signing up, you agree to our{' '}
          <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;