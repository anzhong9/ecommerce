import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
    <div className="grid grid-cols-3 h-[39px] text-white text-xs bg-tgrey w-full">
      <div className='' content='+'></div>
    <div className=''>
        <div className="flex justify-center">
            <span className='font-bold pr-1' >FREE </span>
            Luxury Jewelry Organizer
        </div>
        <div className='flex justify-center'>applied in cart</div>
    </div>
    <div className='flex mr-10 m-auto justify-end'> United States | USD $ </div>
    </div>
    <div className='grid grid-cols-3 bg-whitey h-[60px]  items-center'>
      <div className='grid grid-flow-col text-xs ml-10 justify-start items-center gap-10 text-tgrey'>
        <div  className=''>SHOP </div >
        <div  className=''>CONCEPT </div >
        <div  className=''>FAQ</div >
      </div>
      <div className='flex justify-center text-3xl italic'>ALYN</div>
      <div className='grid grid-flow-col text-xs mr-10 justify-end items-center gap-10 text-tgrey'>
        <div  className=''>ACCOUNT </div >
        <div  className=''>CART </div >
        <div  className='flex rounded-full w-8 h-8 bg-tgrey items-center text-white justify-center'>0</div >
    </div>
    </div>
    </>
  );
}
