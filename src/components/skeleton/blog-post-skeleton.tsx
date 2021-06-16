import React from 'react';

function BlogPostSkeleton() {
        return  (<div className='w-full mb-4 bg-white shadow-md rounded-lg overflow-hidden mx-auto animate-pulse'>
                    <div className="flex flex-row mt-2 px-2 py-3 mx-3">
                        <div className="w-12 h-12 rounded-full bg-gray-200">
                        </div>
                        <div className="flex flex-col mb-2 ml-4 mt-1">
                            <div className='w-40 h-3 rounded-full bg-gray-200'></div>
                            <div className='flex w-full mt-3'>
                                <div className='mr-1 w-60 h-3 rounded-full bg-gray-200'>
                                </div> 
                            </div>
                        </div>
                    </div>
                    <div className="border-b border-gray-100"></div> 
                    <div className='mb-7 mt-6 mx-3 px-2 h-96 rounded max-w-screen-xl bg-gray-200'></div>
                    <div className='text-lg mb-2 mx-3 px-2 w-80 h-5 rounded-full bg-gray-200'></div>
                    <div className='mb-6 mx-3 px-2  max-w-screen-xl h-5 rounded-full bg-gray-200'></div>
                    
                    <div className="flex w-full border-t border-gray-100">
                    </div>
                </div>);
}
export default BlogPostSkeleton;