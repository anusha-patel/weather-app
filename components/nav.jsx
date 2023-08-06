import React, { useState } from 'react';
import Settings from './settings';

function Nav() {
  const [expanded, setExpanded] = useState(false);

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="flex-shrink-0">
                <h1 className=' text-white mx-10 px-2 py-2 text-2xl rounded-sm  hover:text-gray-700 hover:bg-white'>Daily updates</h1>
            </a>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline">
                {/* <a href="#home" className="px-3 py-2 rounded-md text-xl font-medium text-white bg-gray-900 duration-200">Home</a> */}
                {/* <a href="#weather" className="ml-4 px-3 py-2 rounded-md text-xl font-medium text-gray-300 duration-200 hover:text-white hover:bg-gray-700 ">Weather</a> */}
                {/* <a href="#currency" className="ml-4 px-3 py-2 rounded-md text-xl font-medium text-gray-300 duration-200 hover:text-white hover:bg-gray-700 ">Currency</a> */}
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={toggleNavbar} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white">
              <svg className="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={expanded ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
              </svg>
            </button>
          </div>
          <div>
          {/* <Settings/> */}

          </div>
        </div>
      </div>
      
      {/* for mobile view */}
      <div className={`${expanded ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#home" className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900">Home</a>
          <a href="#weather" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Weather</a>
          <a href="#currency" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Currency</a>
          
        </div>
      </div>
    </nav>
  );
}

export default Nav;
