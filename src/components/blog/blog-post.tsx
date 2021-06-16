import React from 'react';
import LazyLoad from 'react-lazyload';

function BlogPost(props) {
    
        return  (<div className='w-full mb-4 bg-white shadow-md rounded-lg overflow-hidden mx-auto'>
                    <div className="flex flex-row mt-2 px-2 py-3 mx-3">
                        <div className="w-auto h-auto rounded-full border-2 border-pink-500">
                            <img className='w-12 h-12 object-cover rounded-full shadow cursor-pointer ' alt='User avatar' src={(props.user?.picture ? props.user?.picture :"http://lorempixel.com/80/80/people/"+props.user?.id)}/>
                        </div>
                        <div className="flex flex-col mb-2 ml-4 mt-1">
                            <div className='text-gray-600 text-sm font-semibold'>{props.user?.name}</div>
                            <div className='flex w-full mt-1'>
                                <div className='text-blue-700 font-base text-xs mr-1 cursor-pointer'>
                                    {props.user?.company.name}
                                </div> 
                                <div className='text-gray-400 font-thin text-xs'>
                                    • 30 segundos atrás
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-b border-gray-100"></div> 
                    <div className='mb-7 mt-6 mx-3 bg-gray-90 h-96 rounded bg-gray-100 overflow-hidden'>
                        <LazyLoad height="100%">
                            <img alt="Post" className="rounded max-w-screen-xl w-full " src={"https://picsum.photos/536/?random="+props.post.id}/>
                        </LazyLoad>
                    </div>
                    <div className='text-gray-600 font-semibold text-lg mb-2 mx-3 px-2 uppercase'>{props.post.title}</div>
                    <div className='text-gray-500 font-thin text-sm mb-6 mx-3 px-2'>{props.post.body}</div>
                    
                    <div className="flex w-full border-t border-gray-100">
                        <div className="mt-3 mx-5 flex flex-row">
                            <div className='flex text-gray-700 font-normal text-sm rounded-md mb-2 mr-4 items-center'>Comentários:<div className="ml-1 text-gray-400 font-thin text-ms"> 30</div></div>
                            <div className='flex text-gray-700 font-normal text-sm rounded-md mb-2 mr-4 items-center'>Visuaizações: <div className="ml-1 text-gray-400 font-thin text-ms"> 10k</div></div>
                        </div>
                        <div className="mt-3 mx-5 w-full flex justify-end">
                            <div className='flex text-gray-700 font-normal text-sm rounded-md mb-2 mr-4 items-center'>
                                <button className="px-2 py-1 mt-3 font-bold text-gray-100 outline-none focus:outline-none rounded  bg-gray-300 hover:bg-blue-500"
                                    onClick={()=>props.editPost(props.post)}
                                >Editar</button>
                            </div>
                        </div>
                    </div>
                </div>);
}
export default BlogPost;