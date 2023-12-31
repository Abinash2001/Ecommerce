import ProductDetailsCarousel from '@/app/components/ProductDetailsCarousel'
import RelateProduct from '@/app/components/RelateProduct'
import Wrapper from '@/app/components/Wrapper'
import React from 'react'
import { IoMdHeartEmpty } from 'react-icons/io'


const page = () => {
  return (
    <div className='w-full md:py-20'>
        <Wrapper >
            <div className='flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]'>
                {/* left column start */}
                <div className='w-full md:w--auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0'>
                  <ProductDetailsCarousel/>
                </div>
                {/* left column end */}

                {/* right column start */}
                <div className='flex-[1] py-3'>
                  
                  {/* Product title */}
                  <div className='text-[34px] font-semibold mb-2'>
                    Jordan Retro 6 G
                  </div>
                  
                  {/* Product subtitle */}
                  <div className='text-lg font-semibold mb-5'>
                    Men&apos;s Golf Shoes
                  </div>
                  
                  {/* Product price */}
                  <div className='text-lg font-semibold '>
                    MRP : $ 19600.00
                  </div>
                  <div className='text-md font-medium text-black/[0.5]'>
                    incl. of taxes
                  </div>
                  <div className='text-md font-medium text-black/[0.5] mb-20'>
                    {`(Also include all applicable duties)`}
                  </div>

                  {/* Product size range start */}
                  <div className='mb-10'>
                    {/* heading start */}
                    <div className='flex justify-between mb-2'>
                      <div className='text-md font-semibold'>
                        Select Size
                      </div>
                      <div className='text-md font-medium text-black/[0.5] cursor-pointer'>
                        Select Guide
                      </div>
                    </div>
                    {/* heading end */}

                    {/* Size Start */}
                    <div className='grid grid-cols-3 gap-2'>
                      <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                        UK 6
                      </div>
                      <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                        UK 6
                      </div>
                      <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                        UK 6
                      </div>
                      <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                        UK 6
                      </div>
                      <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                        UK 6
                      </div>
                      <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                        UK 6
                      </div>
                      <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                        UK 6
                      </div>
                      <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                        UK 6
                      </div>
                      <div className='border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] opacity-50'>
                        UK 6
                      </div>
                    </div>
                    {/* Size End */}

                    {/* Show error Start */}
                    <div className='text-red-600 mt-1'>
                      Size selection is required
                    </div>
                    {/* Show error End */}
                  </div>
                  {/* Product size range end */}

                  {/* Add to Card button start */}
                  <button className='w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75'>
                    Add to Card
                  </button>
                  {/* Add to Card button end */}

                  {/* Whishlist button start */}
                  <div className='w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10'>
                    WhishList
                    <IoMdHeartEmpty size={20}/>
                  </div>
                  {/* Whishlist button end*/}

                  <div>
                    <div className='text-lg font-bold mb-5'>
                      Product Details
                    </div>
                    <div className='text-md mb-5'>
                      sdjlbcksjdbvkdsjbvofbdlbvvjd jdofbvdebvjdbi bjodv  kjdvbjjc kdfjbv kjd vjkdfkj jf vjdf v fjv df bjdfk fdj vkdf fd dfjv kdf c kfdc
                    </div>
                    <div className='text-md mb-5'>
                      sdjlbcksjdbvkdsjbvofbdlbvvjd jdofbvdebvjdbi bjodv  kjdvbjjc kdfjbv kjd vjkdfkj jf vjdf v fjv df bjdfk fdj vkdf fd dfjv kdf c kfdc
                    </div>
                  </div>

                </div>
                {/* right column end */}
            </div>

            <RelateProduct/>

        </Wrapper>
    </div>
  )
}

export default page