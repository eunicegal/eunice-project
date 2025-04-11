import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from '../components/ProductItem';
const Men = () => {
  const { products } = useContext(ShopContext);
  const [men, setMen] = useState([]);

  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('latest');

  useEffect(() => {
    let filteredMen = products.filter((item) => item.men === true); // Filter men products


    // Filter by search query
    if (searchQuery) {
      filteredMen = filteredMen.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort products
    if (sortOption === 'latest') {
      filteredMen.sort((a, b) => b.date - a.date); // Sort by latest
    } else if (sortOption === 'oldest') {
      filteredMen.sort((a, b) => a.date - b.date); // Sort by oldest
    } else if (sortOption === 'price-low') {
      filteredMen.sort((a, b) => a.price - b.price); // Sort by price (low to high)
    } else if (sortOption === 'price-high') {
      filteredMen.sort((a, b) => b.price - a.price); // Sort by price (high to low)
    }
    setMen(filteredMen);
    // setLatestCollect(filteredProducts);
  }, [products, searchQuery, sortOption]);


  // useEffect(() => {
  //   const men = products.filter((item) => (item.men === true));
  //   filteredMen(men)
  // }, [])

  return (
    <div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        {/* Search Input */}
        <div className="col-span-1 lg:col-span-2">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search"
              className="border-2 border-gray-300 rounded-md p-2 pl-10 w-full"
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
            className="border-2 border-gray-300 rounded-md p-2 w-full"
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
      <div className='my-10'>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
          {
            men.map((item, index) => (
              <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
            ))
          }
        </div>

      </div>
    </div>
  )
}

export default Men
