import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const { products } = useContext(ShopContext);
  const [latestCollect, setLatestCollect] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('latest');
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10; // Show 10 products per page

  useEffect(() => {
    let filteredProducts = [...products];

    // Filter by search query
    if (searchQuery) {
      filteredProducts = filteredProducts.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort products
    if (sortOption === 'latest') {
      filteredProducts.sort((a, b) => b.date - a.date); // Sort by latest
    } else if (sortOption === 'oldest') {
      filteredProducts.sort((a, b) => a.date - b.date); // Sort by oldest
    } else if (sortOption === 'price-low') {
      filteredProducts.sort((a, b) => a.price - b.price); // Sort by price (low to high)
    } else if (sortOption === 'price-high') {
      filteredProducts.sort((a, b) => b.price - a.price); // Sort by price (high to low)
    }

    setLatestCollect(filteredProducts);
    setCurrentPage(1); // Reset to first page when filters change
  }, [products, searchQuery, sortOption]);

  // Get current products for the page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = latestCollect.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(latestCollect.length / productsPerPage);

  // Page navigation functions
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo(0, 0); // Scroll to top when page changes
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo(0, 0); // Scroll to top when page changes
    }
  };

  return (
    <div>
      {/* Search and Filter Section */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        {/* Search Input */}
        <div className="col-span-1 lg:col-span-2">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search"
              className="border-2 border-gray-300 rounded-md p-2 pl-10 w-full transition-all duration-200 hover:border-gray-400 focus:outline-none focus:border-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} // Update search query
            />
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width="20"
              height="20"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
              />
            </svg>
          </div>
        </div>

        {/* Sort Dropdown */}
        <div className="col-span-1">
          <select
            className="border-2 border-gray-300 rounded-md p-2 w-full transition-all duration-200 hover:border-gray-400 focus:outline-none focus:border-blue-500"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)} // Update sort option
          >
            <option value="latest">Latest</option>
            <option value="oldest">Oldest</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {currentProducts.map((item, index) => (
          <div key={index} className="transition-transform duration-300 hover:scale-105">
            <ProductItem
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          </div>
        ))}
      </div>
      
      {/* Pagination Controls */}
      {latestCollect.length > 0 && (
  <div className="mt-8 flex flex-col sm:flex-row items-center justify-between border-t border-gray-200 pt-4 gap-4">
    <div className="w-full sm:w-auto text-center sm:text-left">
      <p className="text-sm text-gray-700">
        Showing <span className="font-medium">{indexOfFirstProduct + 1}</span> to{" "}
        <span className="font-medium">
          {indexOfLastProduct > latestCollect.length ? latestCollect.length : indexOfLastProduct}
        </span>{" "}
        of <span className="font-medium">{latestCollect.length}</span> products
      </p>
    </div>
    <div className="flex justify-center sm:justify-end space-x-2 w-full sm:w-auto">
      <button
        onClick={goToPreviousPage}
        disabled={currentPage === 1}
        className={`px-3 py-1 sm:px-4 sm:py-2 text-sm border border-gray-300 rounded-md ${
          currentPage === 1
            ? "text-gray-400 cursor-not-allowed"
            : "text-gray-700 hover:bg-gray-50 transition-colors"
        }`}
      >
        Previous
      </button>
      <span className="px-3 py-1 sm:px-4 sm:py-2 text-sm border border-gray-300 rounded-md bg-gray-50 text-gray-700">
        {currentPage} of {totalPages}
      </span>
      <button
        onClick={goToNextPage}
        disabled={currentPage === totalPages}
        className={`px-3 py-1 sm:px-4 sm:py-2 text-sm border border-gray-300 rounded-md ${
          currentPage === totalPages
            ? "text-gray-400 cursor-not-allowed"
            : "text-gray-700 hover:bg-gray-50 transition-colors"
        }`}
      >
        Next
      </button>
    </div>
  </div>
)}
    </div>
  );
};

export default Collection;