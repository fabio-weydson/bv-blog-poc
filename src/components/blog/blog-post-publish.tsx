import axios from 'axios';
import React, { useState } from 'react';

const BlogPostPublish = (props) => {
    const postDefault= {title:'', body:''}
    const [post, setPost] = useState(postDefault);
    const [btnDisabled, setbtnDisabled] = useState(postDefault);
    const [loading, setLoading] = useState(false);

  
    return (<div className='w-full mb-4 bg-white shadow-md rounded-lg overflow-hidden mx-auto'>
                <div className="mt-2 px-2 py-3 mx-3 text-right">
                    <input type="text" name="title" value={post.title} autoComplete="off" className={`p-4 mb-2 b-0 rounded bg-gray-50 border-gray-200 w-full outline-none focus:outline-none
                        ${loading ? "text-gray-200" : ""}`} 
                        disabled={(loading)}
                        placeholder="O que deseja compartilhar?"
                        onChange={(e)=>setPost({ ...post , title: e.target.value })} 
                    />
                    
                    <textarea name="body" autoComplete="off" value={post.body}  className={`p-4 b-0 rounded bg-gray-50 border-gray-200	w-full resize-y outline-none focus:outline-none" 
                        ${loading ? "text-gray-200" : ""}`} 
                        disabled={(loading)}
                        placeholder="Desenvolva seu artigo" onChange={(e)=>setPost({ ...post , body: e.target.value })} >
                    </textarea>
                    
                    <button 
                        className={`px-2 py-1 mt-3 font-bold text-gray-100 outline-none focus:outline-none rounded 
                            ${((loading) || (post.body.length < 3) || (!post.title.length)) ? "bg-gray-300" : "bg-blue-500"}`}
                        disabled={(loading) || (post.body.length < 3) || (!post.title.length)} onClick={ () => props.postPublish(post)}
                    >Publicar</button>

                </div>
            </div>);
    
}

export default BlogPostPublish;