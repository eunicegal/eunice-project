import React, { useState } from 'react';
import { ShieldCheck, RefreshCw, HeadphonesIcon } from 'lucide-react';

const PolicyCard = ({ icon: Icon, title, description, color }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`relative overflow-hidden rounded-xl p-6 transition-all duration-300 ${isHovered ? 'shadow-xl' : 'shadow-md'}`}
      style={{ 
        background: `linear-gradient(135deg, ${color}15 0%, ${color}30 100%)`,
        borderLeft: `4px solid ${color}`
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`absolute top-0 right-0 w-32 h-32 rounded-full bg-white opacity-5 transform translate-x-16 -translate-y-16 transition-transform duration-300 ${isHovered ? 'scale-125' : 'scale-100'}`}></div>
      
      <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
        <div className={`p-4 rounded-full mb-4 md:mb-0 md:mr-5 transition-all duration-300`} 
          style={{ backgroundColor: `${color}20`, color: color }}>
          <Icon size={32} strokeWidth={2} />
        </div>
        
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
      
      <div className={`mt-4 overflow-hidden transition-all duration-300 ${isHovered ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}>
        <a href="#" className="inline-block text-sm font-medium mt-2" style={{ color: color }}>
          Learn more →
        </a>
      </div>
    </div>
  );
};

const OurPolicy = () => {
  const policies = [
    {
      icon: RefreshCw,
      title: "Hassle-Free Exchange",
      description: "We make exchanges easy with no questions asked within 30 days of your purchase.",
      color: "#4F46E5" // Indigo
    },
    {
      icon: ShieldCheck,
      title: "7-Day Money Back",
      description: "Not satisfied? Get a full refund within 7 days of receiving your order.",
      color: "#10B981" // Emerald
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Customer Support",
      description: "Our dedicated team is here to help you anytime, day or night.",
      color: "#F59E0B" // Amber
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Our Customer Promises</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">We're committed to providing an exceptional shopping experience with customer-friendly policies you can trust.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {policies.map((policy, index) => (
            <PolicyCard 
              key={index}
              icon={policy.icon}
              title={policy.title}
              description={policy.description}
              color={policy.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPolicy;