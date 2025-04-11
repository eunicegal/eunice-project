import React from 'react';
import Title from './Title';
import { assets } from '../assets/assets';
import { Link} from 'react-router-dom';

const BestSeller = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Title text1={'SHOP BY'} text2={'CATEGORY'} />
          <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-sm md:text-base">
            Explore our collections organized by category. Find the perfect styles for everyone in your family.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Women Category */}
          <div className="group block relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-80 w-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
              <img 
                src={assets.women} 
                alt="Women's Collection" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 z-20 p-6 text-white">
              <h3 className="text-2xl font-semibold mb-2">Women</h3>
              <p className="text-sm opacity-90 mb-4 line-clamp-2">
                Discover our latest women's collection featuring elegant dresses, comfortable casual wear, and stylish accessories.
              </p>
              <Link to="/women" className="bg-white text-black py-2 px-4 rounded inline-flex items-center font-medium text-sm transform group-hover:translate-x-2 transition-transform duration-300">
                Shop Now
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Men Category */}
          <div className="group block relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-80 w-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
              <img 
                src={assets.men} 
                alt="Men's Collection" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 z-20 p-6 text-white">
              <h3 className="text-2xl font-semibold mb-2">Men</h3>
              <p className="text-sm opacity-90 mb-4 line-clamp-2">
                Explore our men's collection with modern suits, casual outfits, and premium quality essentials for every occasion.
              </p>
              <Link to="/men" className="bg-white text-black py-2 px-4 rounded inline-flex items-center font-medium text-sm transform group-hover:translate-x-2 transition-transform duration-300">
                Shop Now
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Kids Category */}
          <div className="group block relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-80 w-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
              <img 
                src={assets.hero_pic} 
                alt="Kids Collection" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 z-20 p-6 text-white">
              <h3 className="text-2xl font-semibold mb-2">Kids</h3>
              <p className="text-sm opacity-90 mb-4 line-clamp-2">
                Colorful and comfortable clothing for children of all ages, designed for durability and style.
              </p>
              <Link to="/kids" className="bg-white text-black py-2 px-4 rounded inline-flex items-center font-medium text-sm transform group-hover:translate-x-2 transition-transform duration-300">
                Shop Now
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Accessories Category */}
          <div className="group block relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-80 w-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
              <img 
                src={assets.bag} 
                alt="Accessories Collection" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 z-20 p-6 text-white">
              <h3 className="text-2xl font-semibold mb-2">Accessories</h3>
              <p className="text-sm opacity-90 mb-4 line-clamp-2">
                Complete your look with our curated selection of bags, jewelry, hats, and other fashionable accessories.
              </p>
              <Link to="/acess" className="bg-white text-black py-2 px-4 rounded inline-flex items-center font-medium text-sm transform group-hover:translate-x-2 transition-transform duration-300">
                Shop Now
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSeller;