import React, { useState } from 'react';
import Index from '@/material_component/client_component';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const onChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const clearSearch = () => {
    setSearchTerm('');
    console.log("workserr")
  };

  const dispatchSearch = () => {
    // Implement your search dispatch logic here
    console.log('Search:', searchTerm);
  };

  return (
    <div className="text-gray-600 flex items-center">
      <Index.Input
        type="search"
        name="search"
        value={searchTerm}
        onChange={onChange}
        placeholder="Search..."
        className="h-10 px-5 pr-1 rounded-l-full text-sm focus:outline-none !border !border-gray-300 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 !bg-[#2F3642] text-white"
      />

      {searchTerm && (
        <span className="cursor-pointer" onClick={clearSearch}>
          {/* Customize your cross button here */}
          <svg
            className="h-5 w-5 text-white ml-2"
            fill="none"
            style={{ backgroundColor: 'red' }}
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </span>
      )}

      <Index.Button
        onClick={dispatchSearch}
        type="button"
        className="rounded-r-full bg-[#67B037] py-[11px] px-4"
      >
        Search
      </Index.Button>
    </div>
  );
};

export default SearchBar;
