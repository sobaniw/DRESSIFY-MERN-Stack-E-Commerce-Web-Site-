import React, { useContext, useMemo } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'
import Title from './Title'

const BestSeller = () => {
    const { products, currency } = useContext(ShopContext);

    const bestSellers = useMemo(() => {
        return products.filter(item => item.bestseller).slice(0, 5);
    }, [products])

    return (
        <div className="my-10">
            <div className="text-center text-3xl py-8">
                <Title text1={'BEST'} text2={'SELLERS'} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                  Discover our most loved pieces, crafted with elegance and designed to make you stand out.
                </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
                {bestSellers.map((item) => (
                    <Link key={item._id} to={`/product/${item._id}`} className="cursor-pointer">
                        <div className='overflow-hidden'>
                            <img
                                src={Array.isArray(item.image) ? item.image[0] : item.image}
                                alt={item.name}
                                className="w-full object-cover hover:scale-110 transition ease-in-out"
                            />
                        </div>
                        <p className="pt-3 pb-1 text-sm">{item.name}</p>
                        <p className="text-sm font-medium">{currency}{item.price}</p>
                    </Link>
                ))}
            </div>

        </div>
    )
}

export default BestSeller