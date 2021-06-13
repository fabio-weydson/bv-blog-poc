import React from 'react';
import SidebarSkeleton from '../skeleton/sidebar-skeleton';

const Sidebar = (props) => {  
    return (<div className="w-5/12">
                <div className="px-8">
                    <h1 className="mb-4 text-xl font-bold text-gray-700">Autores</h1>
                    {(props.isLoading == true && !props.users.length) && (
                        <SidebarSkeleton/>
                    ) }
                    {(props.isLoading == false &&  props.users.length > 0) && ( 
                        <div className="flex flex-col max-w-sm px-6 py-4 mx-auto bg-white rounded-lg shadow-md">
                            <ul className="-mx-4">
                                {(props.users?.map((user,key) => 
                                <li className="flex items-center mb-2" key={key}><img
                                        src={"http://lorempixel.com/80/80/people/"+user?.id}
                                        alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full"/>
                                    <p>
                                        <a href="#" className="mx-1 font-bold text-gray-700 hover:underline">{user?.name}</a><br/>
                                        {/* <span className="text-sm font-light text-gray-700">0 artigos</span> */}
                                    </p>
                                </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
        </div>);
}

export default Sidebar;