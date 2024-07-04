'use client'
import React, { useContext, useEffect, useState } from "react";

type Props= { }

const QuantityButton = (props:Props) => {
  const [value,setValue]=useState<number | undefined>(0);

  const selectProduct = () => {
    
};

  const removeProduct = (sellerProductId: string) => {
    
  };



  return (
    <>
      {value || value===undefined ? (
        // undefined is allowed but 0 is not allowed
        <div
          className="md:w-32 h-9 mx-2 my-2 md:my-0 flex"
        >
          <button
            type="button"
            className="h-9 w-8 bg-custom-pink flex justify-center items-center hover:cursor-pointer"
            onClick={()=>{
            if(typeof(value)=== "number")
              setValue(value-1);
          }}
          >
            <span className="text-white">-</span>
          </button>
          <div className="w-20 flex justify-center items-center ">
          <input
            type="number"
            className="w-full h-9 text-center text-custom-pink outline-none"
            onChange={(e)=>{

                if(!e.target.value){
                  setValue(undefined);
                }
                else{
                  setValue(Number(e.target.value));
                }
              }}
            value={value}
          />
        </div>
          <button
            type="button"
            className="h-9 w-8 bg-custom-pink flex justify-center items-center hover:cursor-pointer"
            onClick={() => {
              if(typeof(value)=== "number")
                setValue(value+1);
            }}
          >
            <span className="text-white">+</span>
          </button>
        </div>
        
      ) : (
        <button
          onClick={() => {
            if(typeof(value)=== "number")
              setValue(value+1);
          }}
          className="md:w-32 h-9 mx-2 my-2 md:my-0 flex border border-custom-pink bg-custom-pink text-custom-buttonText font-bold rounded-md text-xs md:text-base items-center justify-center cursor-pointer"
          type="button"
        >
          Add
        </button>
      )}
    </>
  );
};

export default QuantityButton;
