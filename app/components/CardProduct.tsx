'use client'

import React from 'react'

interface CardProductProps {
    // className?: string;
    // img: string;
    // title: string;
    // description: string;
    handleClick?: () => void;
  }

const CardProduct = ({handleClick}:CardProductProps) => {
  return (
    <div className=" group relative cursor-pointer" onClick={handleClick}>
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
            <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="product" className="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
        </div>
        <div className="mt-4 flex justify-between">
            <div>
                <h3 className="text-sm text-gray-700">
                <p>
                    <span aria-hidden="true" className="absolute inset-0"></span>
                    Basic Tee
                </p>
                </h3>
                <p className="mt-1 text-sm text-gray-500">Black</p>
                <div className="rating rating-sm">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div>
            </div>
            <p className="text-sm font-medium text-gray-900">$35</p>
        </div>
    </div>
  )
}

export default CardProduct