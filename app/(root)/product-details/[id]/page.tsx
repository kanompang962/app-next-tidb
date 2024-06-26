'use client'

import CardProduct from '@/app/components/CardProduct';
import { RadioGroup } from '@headlessui/react';
import { useParams } from 'next/navigation';
import React, { useState } from 'react'

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }

const product = {
    name: 'Basic Tee 6-Pack',
    price: '$192',
    href: '#',
    breadcrumbs: [
      { id: 1, name: 'Men', href: '#' },
      { id: 2, name: 'Clothing', href: '#' },
    ],
    images: [
      {
        src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
        alt: 'Two each of gray, white, and black shirts laying flat.',
      },
      {
        src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
        alt: 'Model wearing plain black basic tee.',
      },
      {
        src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
        alt: 'Model wearing plain gray basic tee.',
      },
      {
        src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
        alt: 'Model wearing plain white basic tee.',
      },
    ],
    colors: [
      { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
      { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
      { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    ],
    sizes: [
      { name: 'XXS', inStock: false },
      { name: 'XS', inStock: true },
      { name: 'S', inStock: true },
      { name: 'M', inStock: true },
      { name: 'L', inStock: true },
      { name: 'XL', inStock: true },
      { name: '2XL', inStock: true },
      { name: '3XL', inStock: true },
    ],
    description:
      'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
    highlights: [
      'Hand cut and sewn locally',
      'Dyed with our proprietary colors',
      'Pre-washed & pre-shrunk',
      'Ultra-soft 100% cotton',
    ],
    details:
      'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}

const page = () => {
    const { id } = useParams();

    const [selectedColor, setSelectedColor] = useState(product.colors[2])
    const [selectedSize, setSelectedSize] = useState(product.sizes[2])

    return (
        <main>
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                {/* <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2> */}
                <div className="mt-6 p-8 flex flex-col lg:flex-row justify-between border-solid rounded-lg border-2 border-gray-100">
                    <section className=' w-full lg:min-h-screen lg:min-w-[650px]'>
                        <img src={`https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-0${
                            selectedColor.name == 'Black'
                                ? 1
                                : selectedColor.name == 'White'
                                    ? 2
                                    : 3
                        }.jpg`} alt="product" className="h-full w-full object-cover object-center lg:h-full lg:w-full rounded-lg"/>
                    </section>

                    <section className='flex flex-col w-full min-h-screen lg:pl-8 gap-4'>
                        {/* title */}
                        <div className="flex items-center justify-between">
                            <p className="text-xl font-medium text-gray-900">Basic Tee</p>
                            <p className="text-xl font-medium text-gray-900">$35</p>
                        </div>
                        {/* rating */}
                        <div className="flex items-center gap-4">
                            <p>2.9</p>
                            <div className="rating rating-sm">
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400"  />
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            <a href="#" className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">117 reviews</a>
                        </div>
                        {/* color */}
                        <div className='mt-10'>
                            <h3 className="text-sm font-medium text-gray-900">Color {selectedColor.name}</h3>

                            <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-4">
                            <RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
                            <div className="flex items-center space-x-3">
                                {product.colors.map((color) => (
                                <RadioGroup.Option
                                    key={color.name}
                                    value={color}
                                    className={({ active, checked }) =>
                                    classNames(
                                        color.selectedClass,
                                        active && checked ? 'ring ring-offset-1' : '',
                                        !active && checked ? 'ring-2' : '',
                                        'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
                                    )
                                    }
                                >
                                    <RadioGroup.Label as="span" className="sr-only">
                                    {color.name}
                                    </RadioGroup.Label>
                                    <span
                                    aria-hidden="true"
                                    className={classNames(
                                        color.class,
                                        'h-8 w-8 rounded-full border border-black border-opacity-10'
                                    )}
                                    />
                                </RadioGroup.Option>
                                ))}
                            </div>
                            </RadioGroup>
                        </div>
                        {/* size */}
                        <div className="mt-10">
                            <div className="flex items-center justify-between">
                                <h3 className="text-sm font-medium text-gray-900">Size</h3>
                                <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                    Size guide
                                </a>
                            </div>

                            <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-4">
                                <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
                                <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                                    {product.sizes.map((size) => (
                                    <RadioGroup.Option
                                        key={size.name}
                                        value={size}
                                        disabled={!size.inStock}
                                        className={({ active }) =>
                                        classNames(
                                            size.inStock
                                            ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                                            : 'cursor-not-allowed bg-gray-50 text-gray-200',
                                            active ? 'ring-2 ring-indigo-500' : '',
                                            'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'
                                        )
                                        }
                                    >
                                        {({ active, checked }) => (
                                        <>
                                            <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>
                                            {size.inStock ? (
                                            <span
                                                className={classNames(
                                                active ? 'border' : 'border-2',
                                                checked ? 'border-indigo-500' : 'border-transparent',
                                                'pointer-events-none absolute -inset-px rounded-md'
                                                )}
                                                aria-hidden="true"
                                            />
                                            ) : (
                                            <span
                                                aria-hidden="true"
                                                className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                            >
                                                <svg
                                                className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                                viewBox="0 0 100 100"
                                                preserveAspectRatio="none"
                                                stroke="currentColor"
                                                >
                                                <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                                                </svg>
                                            </span>
                                            )}
                                        </>
                                        )}
                                    </RadioGroup.Option>
                                    ))}
                                </div>
                            </RadioGroup>
                        </div>
                        {/* button */}
                        <button
                            type="submit"
                            className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Add to bag
                        </button>
                        {/* description */}
                        <div className="mt-10 flex flex-col gap-4">
                            <h3 className="text-sm font-medium text-gray-900">Description</h3>
                            <p className='text-gray-400 text-sm'>The Basic tee is an honest new take on a classic. The tee uses super soft, 
                                pre-shrunk cotton for true comfort and a dependable fit. 
                                They are hand cut and sewn locally, with a special dye technique that gives each tee it's own look
                            </p>
                            <p className="text-gray-400 text-sm">
                                Looking to stock your closet? The Basic tee also comes in a 3-pack or 5-pack at a bundle discount.
                            </p>
                            <div className="divider"></div>
                        </div>
                        {/* hilight */}
                        <div className="">
                            <h3 className="text-sm font-medium text-gray-900">Highlights</h3>
                            <div className="mt-4">
                                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                                {product.highlights.map((highlight) => (
                                    <li key={highlight} className="text-gray-400">
                                        <span className="text-gray-400 text-sm">{highlight}</span>
                                    </li>
                                ))}
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    )
}

export default page