import React from 'react';

const SidebarSkeleton = () => {  
  return <div className="flex flex-col max-w-sm px-6 py-4 mx-auto bg-white rounded-lg shadow-md animate-pulse">
          <ul className="-mx-4">
              <li className="flex items-center mb-2">
                  <div className="object-cover w-10 h-10 mx-4 rounded-full bg-gray-200"></div>
                  <p className="w-2/5 h-5 rounded-full bg-gray-200"></p>
              </li>
              <li className="flex items-center mb-2">
                  <div className="object-cover w-10 h-10 mx-4 rounded-full bg-gray-200"></div>
                  <p className="w-3/5 h-5 rounded-full bg-gray-200"></p>
              </li>
              <li className="flex items-center mb-2">
                  <div className="object-cover w-10 h-10 mx-4 rounded-full bg-gray-200"></div>
                  <p className="w-2/5 h-5 rounded-full bg-gray-200"></p>
              </li>
          </ul>
      </div>;
}

export default SidebarSkeleton;