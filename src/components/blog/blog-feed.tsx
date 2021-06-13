import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios'

import BlogPost from './blog-post';
import BlogPostSkeleton from '../skeleton/blog-post-skeleton';
import BlogPostPublish from './blog-post-publish';



const BlogFeed = (props) => {            
       return(<div className='w-full lg:w-9/12 my-10'>
                    <BlogPostPublish/>
                    <div className='flex items-center w-full flex-col '>
                        <div className="flex items-center justify-between w-full mb-5">
                            <h1 className="text-xl font-bold text-gray-700 md:text-2xl">Últimos artigos</h1>
                            <div>
                                <select className="w-full border-gray-300 rounded-md shadow-sm outline-none focus:outline-none">
                                    <option>Mais Recentes</option>
                                    <option>Mais Antigos</option>
                                </select>
                            </div>
                        </div>
                        {(props.users?.length > 0) &&
                            <Get url="https://jsonplaceholder.typicode.com/posts" users={true} >
                                {(error, response, isLoading, makeRequest, axios) => {
                                    if(error) {
                                        return (<div className="my-5 items-center">Ops! Falha no carregamento: <em>{error.message}</em> <br/><button className="px-2 py-1 mt-3 font-bold text-gray-100 bg-gray-600 rounded hover:bg-gray-500" onClick={() => makeRequest({ params: { reload: true } })}>Tentar novamente</button></div>)
                                    }
                                    else if(isLoading) {
                                        return (<BlogPostSkeleton/>)
                                    }
                                    else if(response !== null) {
                                        return ( response.data.map((post,key) => <BlogPost user={props.users[post.userId-1]} key={key} post={post} /> ) )
                                    }
                                    return (<div  className="my-5">...</div>)
                                }}
                            </Get>
                        }
                    </div>
            </div>)
}

export default BlogFeed;