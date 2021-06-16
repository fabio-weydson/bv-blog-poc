import React, { useState } from 'react';
import GlobalService from '../../services/global.service';

const BlogPostPublish = (props) => {
    const {id} = GlobalService.getLoggedUser();
    const [post, setPost] = useState({userId:id,title:'', body:'', image:'https://picsum.photos/536/?random=1'});

  
    return (<div className='w-full mb-4 bg-white shadow-md rounded-lg overflow-hidden mx-auto'>
                <div className="mt-2 px-2 py-3 mx-3 text-right">
                    <input type="text" data-testid="post-title" name="title" value={post.title} autoComplete="off" className={`p-4 mb-2 b-0 rounded bg-gray-50 border-gray-200 w-full outline-none focus:outline-none
                        ${!props.isLoaded ? "text-gray-200" : ""}`} 
                        disabled={(!props.isLoaded)}
                        placeholder="O que deseja compartilhar?"
                        onChange={(e)=>setPost({ ...post , title: e.target.value })} 
                    />
                    
                    <textarea data-testid="post-body" name="body" autoComplete="off" value={post.body}  className={`p-4 b-0 rounded bg-gray-50 border-gray-200	w-full resize-y outline-none focus:outline-none" 
                        ${!props.isLoaded ? "text-gray-200" : ""}`} 
                        disabled={(!props.isLoaded)}
                        placeholder="Desenvolva seu artigo" onChange={(e)=>setPost({ ...post , body: e.target.value })} >
                    </textarea>
                    
                    <button  data-testid="post-btn"
                        className={`px-2 py-1 mt-3 font-bold text-gray-100 outline-none focus:outline-none rounded post-btn
                            ${((!props.isLoaded) || (post.body.length < 3) || (!post.title.length)) ? "bg-gray-300" : "bg-blue-500"}`}
                        disabled={(!props.isLoaded) || (post.body.length < 3) || (!post.title.length)} onClick={ () => props.postPublish(post)}
                    >Publicar</button>

                </div>
            </div>);
    
}

export default BlogPostPublish;