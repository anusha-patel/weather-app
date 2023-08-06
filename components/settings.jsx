import React, { useState } from 'react';

function settings() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="relative hidden md:block">
      <button
        className="py-2 px-4 bg-gray-500 text-white rounded-md"
        onClick={toggleDropdown} >settings</button>
      {isOpen && (
        <ul className="absolute top-full left-0 z-10 bg-white py-4 px-4 rounded-md shadow-md">
          <a href=''  onClick={handleWeather} className="hover:bg-gray-300 cursor-pointer block py-2 px-2 ">weather</a>
          <a  href="" onClick={handleCurrency} className="hover:bg-gray-300 cursor-pointer block py-2 px-2">currency</a>
        </ul>
      )}
    </div>
  );
}

export default settings;