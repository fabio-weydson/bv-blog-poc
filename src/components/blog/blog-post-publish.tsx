import React, { useState } from 'react';

const BlogPostPublish = () => {
    
    const [post, setPost] = useState({body:''});

    return <div className='w-full mb-4 bg-white shadow-md rounded-lg overflow-hidden mx-auto'>
            <div className="mt-2 px-2 py-3 mx-3 text-right">
                <textarea className="p-4 b-0 rounded bg-gray-50 border-gray-200	w-full outline-none focus:outline-none" 
                placeholder="O que deseja compartilhar?" onChange={e => setPost({ body: e.target.value })} value={post.body} ></textarea>
                <button 
                className={`px-2 py-1 mt-3 font-bold text-gray-100 rounded outline-none focus:outline-none ${(post.body.length < 3) ? "bg-gray-300" : "bg-blue-500"}`}
                disabled={post.body.length < 3}>Publicar</button>
            </div>
        </div>;
    
}

export default BlogPostPublish;