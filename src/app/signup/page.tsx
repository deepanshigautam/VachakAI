'use client'

import React, { useState, useEffect } from 'react';
import { Brain, Check, Mail, Lock, User, Building, ArrowRight, Eye, EyeOff } from 'lucide-react';

const SignupPage = () => {
  // Add mounted state to prevent hydration mismatch
  const [mounted, setMounted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formStep, setFormStep] = useState(1);
  
  // Use useEffect to handle client-side mounting
  useEffect(() => {
    setMounted(true);
  }, []);

  

  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      {/* Background Effects */}
      <div className="fixed inset-0 opacity-20 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      {/* Main Container */}
      <div className="relative w-full max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Form */}
          <div className="relative">
            <div className="backdrop-blur-xl bg-black/40 p-8 rounded-2xl border border-gray-800">
              {/* Logo */}
              <div className="flex items-center space-x-3 mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg blur"></div>
                  <Brain className="h-8 w-8 text-white relative" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-gray-100 to-gray-400 text-transparent bg-clip-text">
                  VachakAI
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl font-bold text-white mb-2">Create your account</h1>
              <p className="text-gray-400 mb-8">Start your journey with VachakAI today</p>

              {/* Form Steps */}
              <div className="space-y-6">
                
                  <>
                    {/* Step 1 - Basic Info */}
                    <div className="space-y-4">
                      <div className="relative">
                        <label className="block text-gray-400 text-sm mb-2">Full Name</label>
                        <div className="relative">
                          <input
                            type="text"
                            className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 pl-10"
                            placeholder="John Doe"
                          />
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                        </div>
                      </div>

                      <div className="relative">
                        <label className="block text-gray-400 text-sm mb-2">Email</label>
                        <div className="relative">
                          <input
                            type="email"
                            className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 pl-10"
                            placeholder="you@company.com"
                          />
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                        </div>
                      </div>

                      <div className="relative">
                        <label className="block text-gray-400 text-sm mb-2">Password</label>
                        <div className="relative">
                          <input
                            type={showPassword ? "text" : "password"}
                            className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 pl-10 pr-10"
                            placeholder="••••••••"
                          />
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-400"
                          >
                            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                          </button>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => setFormStep(2)}
                      className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg px-4 py-3 flex items-center justify-center space-x-2 hover:opacity-90 transition-opacity"
                    >
                      <span>Create account</span>
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </>
                

                {/* Sign up with Google */}
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-800"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-black text-gray-400">Or continue with</span>
                  </div>
                </div>

                <button className="w-full border border-gray-800 text-white rounded-lg px-4 py-3 flex items-center justify-center space-x-2 hover:bg-gray-900 transition-colors">
                  <svg className="h-5 w-5" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="currentColor"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  <span>Sign up with Google</span>
                </button>
              </div>

              {/* Terms */}
              <p className="text-gray-400 text-sm mt-6 text-center">
                By signing up, you agree to our{" "}
                <a href="#" className="text-emerald-500 hover:underline">Terms</a> and{" "}
                <a href="#" className="text-emerald-500 hover:underline">Privacy Policy</a>
              </p>
            </div>
          </div> 
        </div>
      </div>
    </div>
  );
};

export default SignupPage;