import React from 'react';
import { Code, Palette, Rocket, ArrowRight, CheckCircle2 } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="bg-purple-600 text-white py-3 px-4 flex items-center justify-between shadow-md">
        <div className="flex items-center space-x-3">
          <Rocket className="h-6 w-6 text-white" />
          <h2 className="text-lg font-semibold">
            Working tirelessly? Rejuvenate yourself! Play a Game
          </h2>
        </div>
        <a
          href="https://shoot-game1.vercel.app/"
          className="inline-flex items-center px-4 py-2 bg-white text-purple-600 font-medium rounded-md hover:bg-gray-100 transition-colors duration-300"
        >
          Play Now
          <ArrowRight className="ml-2 h-5 w-5" />
        </a>
      </div>
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            <span className="block">Transform Your Ideas Into</span>
            <span className="block text-purple-400">Digital Reality</span>
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            From concept to deployment, we bring your vision to life with cutting-edge design and development solutions.
          </p>
          <div className="mt-10">
            <a href="#services" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-colors duration-300">
              Explore Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="py-24 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Our Services</h2>
            <p className="mt-4 text-lg text-gray-300">
              End-to-end solutions for your digital needs
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Design Service */}
            <div className="relative group">
              <div className="relative bg-gray-900 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700">
                <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                  <div className="inline-flex p-3 rounded-lg bg-purple-900 text-purple-400 group-hover:bg-purple-400 group-hover:text-purple-900 transition-colors duration-300">
                    <Palette className="h-8 w-8" />
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <h3 className="text-xl font-semibold text-white">Design</h3>
                  <p className="mt-4 text-gray-400">
                    Beautiful, intuitive designs that engage your audience and elevate your brand.
                  </p>
                  <a href="https://draw-puce.vercel.app/canvas" className="mt-6 inline-flex items-center text-purple-400 hover:text-purple-300">
                    Start Drawing Designs <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Development Service */}
            <div className="relative group">
              <div className="relative bg-gray-900 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700">
                <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                  <div className="inline-flex p-3 rounded-lg bg-purple-900 text-purple-400 group-hover:bg-purple-400 group-hover:text-purple-900 transition-colors duration-300">
                    <Code className="h-8 w-8" />
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <h3 className="text-xl font-semibold text-white">Development</h3>
                  <p className="mt-4 text-gray-400">
                    Robust, scalable applications built with modern technologies and best practices.
                  </p>
                  <a href="https://co-labai.netlify.app/port" className="mt-6 inline-flex items-center text-purple-400 hover:text-purple-300">
                    AI to build you landing pages <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Deployment Service */}
            <div className="relative group">
              <div className="relative bg-gray-900 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700">
                <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                  <div className="inline-flex p-3 rounded-lg bg-purple-900 text-purple-400 group-hover:bg-purple-400 group-hover:text-purple-900 transition-colors duration-300">
                    <Rocket className="h-8 w-8" />
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <h3 className="text-xl font-semibold text-white">Deployment</h3>
                  <p className="mt-4 text-gray-400">
                    Seamless deployment and maintenance of your applications in the cloud.
                  </p>
                  <a href="https://upload-clg.vercel.app/" className="mt-6 inline-flex items-center text-purple-400 hover:text-purple-300">
                    Built it? Now deploy <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-white">Why Choose Us?</h2>
              <p className="mt-4 text-lg text-gray-300">
                We combine creativity with technical expertise to deliver exceptional results.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  'Expert team of designers and developers',
                  'Proven track record of successful projects',
                  'Agile development methodology',
                  '24/7 support and maintenance',
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-purple-400" />
                    <span className="ml-3 text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                alt="Team collaboration"
                className="rounded-lg shadow-xl opacity-80"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">© 2025 Your Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;