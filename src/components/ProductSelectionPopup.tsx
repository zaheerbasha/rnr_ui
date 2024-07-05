'use client'
import React, { useState, useEffect, useRef } from 'react';
import { DebounceInput } from 'react-debounce-input';
import { toast } from 'react-toastify';

type Props = {
  closePopup: () => void
}

function ProductSelectionPopup({ closePopup }: Props) {
  const popupRef = useRef<HTMLDivElement>(null);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [query, setQuery] = useState<string>('');

  useEffect(() => {
    if (query.length > 0) {
      const fetchSuggestions = async () => {
        try {
          // const response = await fetch(`/api/employees?query=${query}`);
          // let data = await response.json();
          const data= ["Suggestion 1", "Suggestion 2", "Suggestion 3", "Suggestion 4"];

          setSuggestions(data);
        } catch (error) {
          console.error('Error fetching suggestions:', error);
        }
      };
      fetchSuggestions();
    } else {
      setSuggestions([]);
    }
  }, [query]);

  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-10">
      <div
        ref={popupRef}
        className="relative bg-white border border-custom-gray-3 shadow-lg rounded p-6 flex flex-col"
        style={{ width: '30%', height: '50%' }}
      >
        {/* Cross Icon */}
        <button
          className="absolute top-2 right-2 text-custom-gray-4 cursor-pointer"
          type="button"
          onClick={closePopup}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        </button>

        <div className="relative mb-4">
          <label htmlFor="search" className="leading-7 text-sm text-gray-600 outline-none">Search Employee Name</label>
          <DebounceInput
            autoFocus
            type="text"
            debounceTimeout={300}
            onChange={(e) => setQuery(e.target.value)}
            id="search"
            name="search"
            value={query}
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
          {suggestions.length > 0 && (
            <ul className="absolute bg-white border border-gray-300 rounded mt-1 w-full max-h-48 overflow-y-auto z-20">
              {suggestions.length && suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                  onClick={() => {
                    setQuery(suggestion);
                    setSuggestions([]);
                  }}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="relative mb-4">
          <label htmlFor="message" className="leading-7 text-sm text-gray-600 outline-none">Citation</label>
          <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
        </div>

        <div className="flex justify-center space-x-4 ">
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 font-bold rounded-md" onClick={() => {
              closePopup();
              toast("Nomination succesful !");
          }}>Nominate</button>
        </div>
      </div>
    </div>
  );
}

export default ProductSelectionPopup;
