'use client'
import React from 'react';
import { MessageCircle, Bot, ArrowRight, Shield, Zap, Users, Menu, X, Brain, Sparkles } from 'lucide-react';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-black">
      {/* Geometric Background Pattern */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 backdrop-blur-lg bg-black/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg blur"></div>
                <Brain className="h-10 w-10 text-white relative" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-gray-100 to-gray-400 text-transparent bg-clip-text">
                VachakAI
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#demo" className="text-gray-300 hover:text-white transition-colors">Demo</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
              <button className="px-6 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full hover:opacity-90 transition-opacity">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-lg md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <a href="#features" className="text-xl text-white">Features</a>
            <a href="#demo" className="text-xl text-white">Demo</a>
            <a href="#pricing" className="text-xl text-white">Pricing</a>
            <button className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full">
              Get Started
            </button>
          </div>
        </div>
      )}

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="pt-20 pb-32 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h1 className="text-5xl md:text-6xl font-bold">
                  <span className="block text-white">Elevate Your</span>
                  <span className="block bg-gradient-to-r from-emerald-400 to-teal-500 text-transparent bg-clip-text">
                    Conversations
                  </span>
                </h1>
                <p className="text-xl text-gray-400">
                  Experience the future of communication with VachakAI - where intelligence meets intuition.
                </p>
                <div className="flex space-x-4">
                  <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full hover:opacity-90 transition-opacity flex items-center">
                    Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                  <button className="px-8 py-4 border border-emerald-800 text-white rounded-full hover:bg-emerald-900/20 transition-colors">
                    Watch Demo
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-amber-500/20 rounded-2xl blur-2xl opacity-20"></div>
                <div className="relative bg-gray-900 rounded-2xl p-6 border border-emerald-900">
                  <div className="flex items-center space-x-4 mb-6">
                    <Brain className="h-8 w-8 text-emerald-500" />
                    <div className="h-2 w-2 bg-emerald-500 rounded-full"></div>
                    <span className="text-gray-400">Active</span>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <Brain className="h-8 w-8 text-gray-400 mt-2" />
                      <div className="bg-gray-800 rounded-lg p-4 max-w-md">
                        <p className="text-gray-100">Welcome! How can I assist you today?</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4 justify-end">
                      <div className="bg-emerald-600 rounded-lg p-4 max-w-md">
                        <p className="text-white">Can you help me with market analysis?</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Brain className="h-8 w-8 text-gray-400 mt-2" />
                      <div className="bg-gray-800 rounded-lg p-4 max-w-md">
                        <p className="text-gray-100">I'll analyze market trends and provide insights...</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gray-900/50 backdrop-blur-xl"></div>
          <div className="relative max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Intelligent Features</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Powered by advanced AI technology for meaningful conversations
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Sparkles className="h-8 w-8 text-emerald-500" />,
                  title: "Smart Analysis",
                  description: "Advanced data processing and insights"
                },
                {
                  icon: <Shield className="h-8 w-8 text-amber-500" />,
                  title: "Enterprise Security",
                  description: "End-to-end encryption and privacy"
                },
                {
                  icon: <Users className="h-8 w-8 text-teal-500" />,
                  title: "Team Collaboration",
                  description: "Seamless multi-user integration"
                }
              ].map((feature, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-amber-500/20 rounded-xl blur-xl transition-all duration-300 group-hover:opacity-100 opacity-0"></div>
                  <div className="relative p-8 rounded-xl bg-gray-900 border border-gray-800 hover:border-emerald-800 transition-colors">
                    <div className="p-3 bg-gray-800 rounded-lg inline-block mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {[
                { number: "99.9%", label: "Accuracy Rate" },
                { number: "10M+", label: "Conversations" },
                { number: "5000+", label: "Active Users" }
              ].map((stat, index) => (
                <div key={index} className="p-8">
                  <div className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-teal-500 text-transparent bg-clip-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Brain className="h-8 w-8 text-emerald-500" />
                <span className="text-xl font-bold text-white">VachakAI</span>
              </div>
              <p className="text-gray-400">
                Transforming conversations with intelligent AI solutions.
              </p>
            </div>
            {['Solutions', 'Company', 'Resources'].map((title, index) => (
              <div key={index}>
                <h4 className="text-white font-semibold mb-4">{title}</h4>
                <ul className="space-y-2">
                  {[1, 2, 3].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                        {title} Link {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2024 VachakAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;