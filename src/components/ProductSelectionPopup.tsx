'use client'
import React, { useEffect, useRef } from 'react'

type Props = {
  closePopup: () => void
}

function ProductSelectionPopup({ closePopup }: Props) {
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        closePopup();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [closePopup]);

  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-10">
      <div
        ref={popupRef}
        className="relative bg-white border border-custom-gray-3 shadow-lg rounded p-6 flex flex-col"
        style={{ width: '80%', height: '80%' }}
      >
        <div className="flex justify-between flex-col md:flex-row">
          <button
            className="self-end text-custom-gray-4 md:hidden cursor-pointer"
            type="button"
            onClick={closePopup}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </button>
          <button
            type="button"
            className="hidden self-end mb-6 text-custom-gray-4 md:block cursor-pointer w-6 h-6"
            onClick={closePopup}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductSelectionPopup;
