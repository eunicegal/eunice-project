import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';
import { Link } from 'react-router-dom';

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [products]);
  
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <Title text1={'LATEST'} text2={'COLLECTION'} />
          <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-sm md:text-base">
            Discover our newest fashion arrivals crafted with quality and style in mind. 
            Each piece is carefully selected to enhance your wardrobe with the latest trends 
            at affordable prices, backed by our satisfaction guarantee.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-10">
          {latestProducts.map((item, index) => (
            <ProductItem 
              key={index} 
              id={item._id} 
              image={item.image} 
              name={item.name} 
              price={item.price}
            />
          ))}
        </div>

        {/* "View All" Button */}
        <div className="mt-12 text-center">
          <Link to="/collection" className="group inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition duration-300">
            View All Products
            <svg 
              className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M14 5l7 7m0 0l-7 7m7-7H3" 
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestCollection;