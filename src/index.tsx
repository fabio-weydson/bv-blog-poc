import React, { useState, useEffect }  from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import './styles/styles.css';
import BlogFeed from './components/blog/blog-feed';
import Sidebar from './components/sidebar/sidebar';

const App = () => { 

    const[ users, setUsers] = useState(false)
    const[ isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/users').then(result => {
            setUsers(result.data);
            setIsLoaded(true)
        })
    },[])

        return (<div className="bg-gray-50 h-full">
                    <nav className="px-6 py-4 bg-white shadow mb-20">
                        <div className="container flex flex-col mx-auto md:flex-row md:items-center md:justify-between">
                            <div className="flex items-center justify-between">
                                <div>
                                    <a href="#" className="text-xl font-bold text-blue-500 md:text-2xl">Meu blog</a>
                                </div>
                                <div>
                                    <button type="button" className="block text-gray-800 hover:text-gray-600 focus:text-gray-600 focus:outline-none md:hidden">
                                        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                            <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
                                            </path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="flex-col hidden md:flex md:flex-row md:-mx-4">
                                <a href="#" className="my-1 text-gray-800 hover:text-blue-500 md:mx-4 md:my-0">Blog</a>
                                <a href="https://github.com/fabio-weydson" target="_blank" className="my-1 text-gray-800 hover:text-blue-500 md:mx-4 md:my-0">GitHub</a>
                            </div>
                        </div>
                    </nav>
                        <div className="container max-w-screen-lg flex justify-center mx-auto">
                            <BlogFeed users={users} isLoaded={isLoaded}/>
                            <Sidebar users={users} isLoaded={isLoaded}/>
                        </div>
                </div>
        )
}

ReactDOM.render(<App />, document.getElementById("root"));