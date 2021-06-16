import React from 'react';
import axios from 'axios';

import BlogPost from './blog-post';
import BlogPostSkeleton from '../skeleton/blog-post-skeleton';
import BlogPostPublish from './blog-post-publish';
import GlobalService from '../../services/global.service';


type MyProps = { users, isLoaded};
type MyState = { isLoaded:boolean, posts:any, newPost:any };

class BlogFeed extends React.Component<MyProps, MyState> {

    constructor(props) {
        super(props)
        this.state ={ posts:[], isLoaded:false, newPost:'' }
    }


    componentDidMount(){
         this.setState({
            posts:[],
            isLoaded:this.props.isLoaded
         });
    }  
    
    componentDidUpdate(prevProps) {
        if(this.props.isLoaded != prevProps.isLoaded) {
            this.loadPosts()
        } 
    }

    loadPosts():void{
        axios('https://jsonplaceholder.typicode.com/posts').then(result => {
            this.setState({
                posts:result.data,
                isLoaded:true})
        })
        return;
    }
    
    postPublish = (post) => {   
        this.setState({...this.state,isLoaded:false})    

        axios.post('https://jsonplaceholder.typicode.com/posts', post)
            .then((response) => {

                this.setState(prevState=>({ isLoaded:true, posts: [post, ...prevState.posts] }))  
                GlobalService.emitToast("Seu artigo foi publicado","success") 
                return response.data;

        }).catch(function (e) { console.log(e)  /* Tratamento de erro */  })
    }


    editPost = (newPost):void =>{
        window.scrollTo( 0, 0);
        this.setState({ ...this.state, newPost:newPost });
        return;
    }
   
    render(){
        return(<div className='w-full lg:w-9/12 my-10'>
                    <BlogPostPublish postPublish={this.postPublish} isLoaded={this.state.isLoaded} />
                    <div className='flex items-center w-full flex-col '>
                        <div className="flex items-center justify-between w-full mb-5">
                            <h1 className="text-xl font-bold text-gray-700 md:text-2xl">Últimos artigos</h1>
                            <div>
                                <select className="w-full border-gray-300 rounded-md shadow-sm outline-none focus:outline-none"
                                    onBlur={()=> this.setState( {posts:this.state.posts.reverse()} ) }
                                >
                                    <option>Mais Recentes</option>
                                    <option>Mais Antigos</option>
                                </select>
                            </div>
                        </div>
                        {(!this.state?.isLoaded) && 
                            <BlogPostSkeleton/>
                        }
                        {(this.state.isLoaded) && 
                        this.state.posts.map((post,key) => <BlogPost user={this.props.users.find((user)=> post.userId==user.id)} editPost={this.editPost} key={key} post={post} />)}
                       
                    </div>
            </div>)
    }
}

export default BlogFeed;