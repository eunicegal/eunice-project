import React, { useContext, useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';

const Product = () => {

  const {productId} = useParams();
  // console.log(productId);
  const {products,currency,addToCart} = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image,setImage] = useState('')
  const [size,setSize] = useState('')

  const fetchProductData = async ()=>{
    products.map((item)=>{
      if(item._id === productId){
        setProductData(item);
        setImage(item.image[0])
        
        return null;
      }
    })

  }

  useEffect(()=>{
    fetchProductData();
  },[productId])
  
  return productData? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
        {/* product data */}
      <div  className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

        {/* product images */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {productData.image.map((item,index)=>(
              <img onClick={()=>setImage(item)} key={index} src={item} alt="" className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'/>
            ))
            }

          </div>
          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto' src={image} alt="" />

          </div>

        </div>
        {/* product details */}

        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className='pl-2'>(122)</p>

          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
          <div className='flex flex-col gap-4 my-8'>
            <p>select size</p>
            <div className='flex gap-2'>
             {productData.sizes.map((item,index)=>(
              <button onClick={()=>setSize(item)} className={`border-2 py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500':''}`} key={index}>
                {item}
              </button>
              ))}
            </div>

          </div>
          <button onClick={()=>addToCart(productData._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'> ADD TO CART</button>
          <hr className='mt-8 sm:w-4/5' />
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>100% original product</p>
            <p>Cash on delivery is available on this product</p>
            <p>Easy return and exchange policy within 7 days.</p>

          </div>


        </div>

      </div>
      {/* description and review section */}
      <div className="mt-20 max-w-3xl mx-auto border border-gray-200 rounded-lg overflow-hidden shadow-sm">
      {/* Tab Headers */}
      <div className="flex border-b border-gray-200 bg-gray-50">
        <div className="px-6 py-3 font-medium text-gray-800 border-b-2 border-blue-500">
          Description
        </div>
        <div className="px-6 py-3 text-gray-500">
          Reviews <span className="text-xs bg-gray-200 px-2 py-1 ml-1 rounded-full">122</span>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6 space-y-4 text-gray-600">
        <p>
          An ecommerce website is an online platform that facilitates buying and selling of goods and services.
        </p>
        <p>
          Our platform offers secure payment processing, detailed product information, and reliable shipping options.
        </p>
      </div>
    </div>
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product
