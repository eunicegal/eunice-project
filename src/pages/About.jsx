import React from 'react';
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div className="bg-white">
      {/* Header Section */}
      <div className="bg-blue-50">
        <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">About Our Store</h1>
          <p className="mt-4 text-lg text-gray-600">
            Quality products and exceptional service since [2025]
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Our Story */}
        <div className="mb-16">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center mr-3">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-gray-800">Our Story</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="md:col-span-3">
              <p className="text-gray-600 mb-4">
                Welcome to Eunice Fashion. We are an online retailer specializing in Women,Men and Kids wear including accessories. 
                Founded in 2025, our mission is to provide high-quality products with exceptional customer service.
              </p>
              <p className="text-gray-600">
                What sets us apart is our commitment in 
                offering the best prices in the market. We take pride in every product we sell and every customer 
                interaction we have.
              </p>
            </div>
            <div className="md:col-span-2">
              <img 
                src={assets.about}
                alt="Our store" 
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* What We Offer */}
        <div className="mb-16">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center mr-3">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-gray-800">What We Offer</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
              <div className="flex items-center mb-2">
                <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-medium text-gray-800">Quality Products</span>
              </div>
              <p className="text-gray-600 ml-7">
                We carefully select each product in our inventory to ensure it meets our high standards.
              </p>
            </div>
            
            <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
              <div className="flex items-center mb-2">
                <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-medium text-gray-800">Fast Shipping</span>
              </div>
              <p className="text-gray-600 ml-7">
                Quick processing and reliable delivery to get your products to you when you need them.
              </p>
            </div>
            
            <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
              <div className="flex items-center mb-2">
                <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-medium text-gray-800">Customer Service</span>
              </div>
              <p className="text-gray-600 ml-7">
                Responsive support team ready to assist you with any questions or concerns.
              </p>
            </div>
            
            <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
              <div className="flex items-center mb-2">
                <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-medium text-gray-800">Secure Payments</span>
              </div>
              <p className="text-gray-600 ml-7">
                Multiple secure payment options to ensure your information is always protected.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div>
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center mr-3">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-gray-800">Get In Touch</h2>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Contact Information</h3>
                <p className="text-gray-600 mb-1">elagaeunice@gmail.com</p>
                <p className="text-gray-600">Location:Ilorin,Kwara state.</p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Business Hours</h3>
                <p className="text-gray-600 mb-1">Monday - Friday: 9 AM - 5 PM</p>
                <p className="text-gray-600">Saturday - Sunday: Closed</p>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Interested in creating an ecommerce website? <a href="/contact" className="text-blue-600 font-medium hover:underline">Contact us</a> to learn more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;