import React from 'react';
import Slider from '../assets/tools/Slider';
import Celeb_home from './Celeb_home';
import Footer from './Footer';


export default function Home() {
  return (
    <>
    <div className='h-[680px] relative flex flex-row  w-full mb-8'>
      <div className=' 2xl:w-[1250px]  lg:w-[899px] h-[680px] relative'> <img className='h-[680px] z-10' src='/Ray_Ono_Grace_6.png'/>
        <div className='absolute z-10 left-14 xl:w-[500px] lg:w-[403px] top-[330px]'>
          <div className=' bg-white rounded-2xl w-fit p-2 text-xs mb-3 items-center'>HOLIDAY SEASON</div>
          <div className=' italic font-thin text-white leading-[55px] mb-2 2xl:text-6xl lg:text-[51px]'>Make a Luxurious Statement.</div>
          <div className=' text-white font-thin text-[20px] leading-[30px] mb-5 2xl:text-[30px] lg:text-[25px]'>+ Get two Free Luxury Gift</div>
          <div className=' hover:bg-blue-950 hover:text-yellow-100 hover:scale-105 transition items-center flex justify-center bg-btn1 text-txwhite w-fit py-[15px] px-5 text-xs'>Shop Now</div>
        </div>
      </div>

      <div className='absolute right-0 lg:w-[605px] mr-0 h-[680px]'> <img className='h-[680px] w-full mr-0 ' src='/IMG_4679.png'/></div>
      </div>
      <div className='Collections h-[550px]'>
      <div className='w-full ' >
        <div className='flex w-[1220px] '>
          <div className='flex 2xl:ml-[212px] justify-start text-3xl ml-[160px]' >Our Collections</div> <div className=' flex-grow gap-2 h-6 flex mr-72 justify-end' id=' slider'><img src="/buttons\Button - previous slide button.png" alt="" /><img src="/buttons\Button - next slide button.png" alt="" /></div>
          {/* <Slider/> */}
        </div>
            </div>
            <div className='overflow-x-scroll mx-auto w-11/12'>
            <div className='flex overflow-hidden mt-4 mx-32 flex-row gap-12'>
          <figure className='[h-490px]'><img src='/Rectangle 5.png' alt='Earrings' className='h-[430px] mb-4'/><figcaption>Earrings</figcaption></figure>
          <figure className='[h-490px]'><img src='/Rectangle 1.png' alt='Necklaces' className='h-[430px] mb-4'/><figcaption>Necklaces</figcaption></figure>
          <figure className='[h-490px]'><img src='/Rectangle 3.png' alt='bracelets' className='h-[430px] mb-4'/><figcaption>Bracelets</figcaption></figure>
          <figure className='[h-490px]'><img src='/Rectangle 4.png' alt='Rings' className='h-[430px] mb-4'/><figcaption>Rings</figcaption></figure>
          </div>
          </div>
          </div> {/* this is the top 2 combined  */}
      <div className='bg-whitey2 flex h-[500px] w-full p-2'>
        <div className='mx-auto my-auto gap-16 flex'>
          <img src='/Frame 3.png' className='w-[270px] h-[448px]'></img>
          <img src='/Frame 4.png' className='w-[270px] h-[448px]'></img>
          <img src='/Frame 5.png' className='w-[270px] h-[448px]'></img>
          <img src='/Frame 6.png' className='w-[270px] h-[448px]'></img>
        </div>
      </div>

    <Celeb_home/>
    </>
  );
}
