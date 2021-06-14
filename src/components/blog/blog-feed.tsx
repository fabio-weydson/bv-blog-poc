import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios'

import BlogPost from './blog-post';
import BlogPostSkeleton from '../skeleton/blog-post-skeleton';
import BlogPostPublish from './blog-post-publish';


type MyProps = { users, isLoaded };
type MyState = { isLoaded:boolean, posts:any };
class BlogFeed extends React.Component<MyProps, MyState> {
    constructor(props) {
        super(props)
        this.state ={
            posts:'',
            isLoaded:false
        }
    }
    componentDidMount(){
         this.setState({
            posts:'',
            isLoaded:this.props.isLoaded
         });
    }
       
    
    componentDidUpdate(prevProps,nextProps) {
            if(this.props.isLoaded != prevProps.isLoaded) {
                    this.loadPosts()
            } 
    }

    loadPosts(){
        axios('https://jsonplaceholder.typicode.com/posts').then(result => {
            this.setState({
                posts:result.data,
                isLoaded:true})
        })
    }
    

    postPublish = (post) => {    
        this.setState({
            ...this.state,
            isLoaded:false})    
       axios.post('https://jsonplaceholder.typicode.com/posts', post)
          .then(function (response) {
            console.log(response);
          }).catch(function (error) {
            console.log(error);
          })
         /*  if(postok) {
            this.setState({
                ...this.state,
                isLoaded:false})    
          } */
    }
 
    render(){
        return(<div className='w-full lg:w-9/12 my-10'>
                    <BlogPostPublish postPublish={this.postPublish} />
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
                        {(!this.state?.isLoaded) && 
                            <BlogPostSkeleton/>
                        }
                        {(this.state.isLoaded) && 
                        this.state.posts.map((post,key) => <BlogPost user={this.props.users[post.userId-1]} key={key} post={post} />)}
                       
                    </div>
            </div>)
    }
}

export default BlogFeed;