import React from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gray-50 mt-20 sm:mt-0"> {/* Added margin-top for mobile */}
      {/* Main container */}
      <div className="relative flex flex-col-reverse lg:flex-row max-w-7xl mx-auto">
        {/* Left content area */}
        <div className="w-full lg:w-2/5 px-6 py-12 lg:py-24 flex flex-col justify-center z-10">
          <span className="inline-flex items-center text-sm font-bold tracking-wider text-emerald-600 mb-4">
            <span className="h-px w-8 bg-emerald-600 mr-3"></span>
            CURATED SELECTION
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Elevate Your <br />
            <span className="italic">Style Journey</span>
          </h1>
          
          <p className="text-gray-600 text-lg mb-8 max-w-md">
            Discover our latest collection designed for those who appreciate the extraordinary.
          </p>
          
          <div className="flex flex-wrap gap-4">
          <Link 
              to="/collection" 
              className="px-8 py-3 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-md transition-all inline-block"
            >
              Explore Collection
            </Link>
            <button className="px-6 py-3 bg-transparent hover:bg-gray-100 text-gray-800 font-medium flex items-center gap-2 group transition-all">
              View Lookbook
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Right image area - redesigned to be more unique */}
        <div className="w-full lg:w-3/5 relative h-96 lg:h-auto">
          {/* Background pattern */}
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-emerald-50 to-gray-100 z-0"></div>
          
          {/* Decorative elements */}
          <div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-emerald-100 opacity-70 z-0"></div>
          <div className="absolute bottom-1/3 right-1/3 w-48 h-48 rounded-full bg-amber-100 opacity-60 z-0"></div>
          
          {/* Diagonal lines */}
          <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0">
            <div className="absolute -right-12 top-12 w-96 h-1 bg-gray-200 rotate-45"></div>
            <div className="absolute -right-12 top-24 w-96 h-1 bg-gray-200 rotate-45"></div>
            <div className="absolute -right-12 top-36 w-96 h-1 bg-gray-200 rotate-45"></div>
          </div>
          
          {/* Featured product images */}
          <div className="relative h-full w-full flex items-center justify-center z-10">
            {/* Main product image */}
            <img 
              src={assets.hero_pic} 
              alt="Featured product" 
              className="rounded-lg shadow-xl w-3/4 h-auto max-h-full object-cover z-20"
            />
            
            {/* Floating secondary product image */}
            <div className="absolute -bottom-6 right-12 w-40 h-40 rounded-lg shadow-lg overflow-hidden border-4 border-white z-30">
              <img 
                src={assets.hero_pic} 
                alt="Secondary product view" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating detail element */}
            <div className="absolute top-12 -left-4 bg-white p-3 rounded-lg shadow-lg z-30">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                <span className="text-xs font-bold text-gray-800">NEW ARRIVAL</span>
              </div>
            </div>
          </div>
          
          {/* Floating badge */}
          <div className="absolute top-1/4 right-8 transform rotate-12 bg-white px-4 py-2 rounded-md shadow-lg z-30">
            <span className="text-sm font-bold text-gray-900">Limited Edition</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;