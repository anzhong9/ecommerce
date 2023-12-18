import React from "react";
import CustomerCard from "./cards/customerCard";


export default function Celeb_home() {
    return (
      <>
      <div className='Celebrities mt-5 h-[420px]'>
      <div className='w-full ' >
        <div className='flex '>
        <div className='flex italic 2xl:ml-[212px] justify-start text-3xl ml-[160px]' >Celebrities Love <span className='px-1 font-thin'>ALYN</span></div> <div className=' flex-grow flex mr-72 justify-end' id=' slider'>slider here</div>

          {/* <Slider/> */}
        </div>
            </div>
      
        <div className='w-fit flex overflow-hidden mt-4 px-4 flex-row gap-2'>
          <figure className='[h-350px]'><img src='src\assets\Mila Kunis.png' alt='Mila Kunis' className='h-[300px] mb-2'/><figcaption>Mila Kunis</figcaption></figure>
          <figure className='[h-350px]'><img src='src\assets\jessica.png' alt='jessica' className='h-[300px] mb-2'/><figcaption>Jessica Alba</figcaption></figure>
          <figure className='[h-350px]'><img src='src\assets\Ashley_Park.png' alt='Ashley_Park' className='h-[300px] mb-2'/><figcaption>Ashley Park</figcaption></figure>
          <figure className='[h-350px]'><img src='src\assets\Eva Longoria.png' alt='Eva Longoria' className='h-[300px] mb-2'/><figcaption>Eva Longoria</figcaption></figure>
          <figure className='[h-350px]'><img src='src\assets\Kaia Garber.png' alt='Kaia Garber' className='h-[300px] mb-2'/><figcaption>Kaia Garber</figcaption></figure>
          
          </div>
        </div>

        <div className="h-[700px] w-full mb-3 bg-whitey2 flex">
            <div className="h-[699px] w-[700]"><img className="h-[inherit]" src='src\assets\477_amelia-medium.jpg.png'></img></div>
            <div className="ml-16 text-tgrey">
                <div className="w-[550px] mt-20 leading-none text-[80px]">Elevate Your Elegance:</div>
                <div className="w-[600px] mt-10 leading-none text-[70px]">Discover Exquisite Craftmanship</div>
                <div className="w-[350px] mt-20 leading-none text-xs">Discover Exquisite Craftsmanship in Our Luxurious Jewelry Collection</div>

            </div>
         </div>
         <div className="h-[330px]">
         <div className='w-full ' >
        <div className='flex '>
        <div className='flex italic 2xl:ml-[212px] justify-start text-3xl ml-[160px]' >What Our Customers Have To Say </div> <div className=' flex-grow flex mr-72 justify-end' id=' slider'>slider here</div>

          {/* <Slider/> */}
        </div>
            </div>
        <div className=" overflow-x-scroll">
        <div className='w-fit flex overflow-x-scroll mt-4 px-4 flex-row gap-2'>
          <CustomerCard name='Soo' title='Sparkling' description="Sparkling! And fast delivery!" />
          <CustomerCard name='Sarina in Switzerland' title='Highly recommend!' description="Excellent customer service. Beautiful, warm,
sparkly pieces. Quick and conscientious delivery." />
          <CustomerCard name='Pam' title='Cute Packaging' description="Quality was as expected in person and
packaging was such a treat!" />
          <CustomerCard name='Ria' title='Fast response from customer service' description="Fast response from customer service" />
          <CustomerCard name='Melissa Kress' title='High jewelry is spectacular' description="The high jewelry pieces exceeded my
expectations. Now that I own these, I don't think Icould ever go back" />
          </div>
          </div>
         </div>

        <div className="h-[400px] w-full bg-whitey2">
            <div className=" mx-72 overflow-x-scroll mt-14">
                <div className="flex">
                    <QuoteCard/>

                </div>

            </div>
        </div>
      </>
    );
}