import React from "react";
import CustomerCard from "./cards/customerCard";
import QuoteCard from "./cards/QuoteCard";
import InspCard from "./cards/inspCard";



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
        <div className='w-fit flex overflow-x-scroll mt-4 px-5 flex-row gap-4'>
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
                    <QuoteCard quote="With A-Listers like Jessica Alba, Eva Longoria and Kaia,Gerber all wearing Idyl, idyl won't stay small for long." img="src\assets\quote\glamour.png" />
                    <QuoteCard quote="A classic pair of sparkling diamond studs is sure to become the new favorite pair of earrings." img="src\assets\quote\observer.png" />
                    <QuoteCard quote="The designs are beautifully minimalistic, but created with ever-evolving style in mind." img="src\assets\quote\Marie-Claire.png" />
                </div>
                <div className="flex items-center justify-center w-full" ><img src="src\assets\buttons\Button - Select slide.svg" alt="" /><img className="border-2 border-blue-950 rounded-full" src="src\assets\buttons\Button - Select slide.svg" alt="" /><img src="src\assets\buttons\Button - Select slide.svg" alt="" /><img src="src\assets\buttons\Button - Select slide.svg" alt="" /><img src="src\assets\buttons\Button - Select slide.svg" alt="" /></div>
            </div>
        </div>

    <div className='insp mt-5 w-full  h-[480px]'>
      <div className='w-full ' >
        <div className='flex '>
        <div className='flex italic 2xl:ml-[212px] justify-start text-3xl ml-[160px]' >Get Inspired</div> <div className=' flex-grow flex mr-72 justify-end' id=' slider'>slider here</div>

          {/* <Slider/> */}
        </div>
            </div>
      
        <div className="h-[400px] overflow-x-scroll mx-32 w-10/12">
            <div className='w-fit flex mt-4 px-5 flex-row gap-4'>
                <InspCard img="src\assets\insp1.png" cap="@cocobeautea" />
                <InspCard img="src\assets\insp2.png" cap="@claudiacrovato" />
                <InspCard img="src\assets\insp3.png" cap="@Adlleyy" />
                <InspCard img="src\assets\insp4.png" cap="@adelineloke" />
                <InspCard img="src\assets\insp5.png" cap="@Lorivelle" />
            </div>  
            
        </div>
            
    </div>
        <div className="h-[550px] relative w-full bg-whitey2">
            <div className="text-tgrey flex flex-col items-center justify-center">
                <div className="text-6xl mt-14 text-center leading-none h-fit w-[340px]">FUELED BY HONESTY</div>
                <div className="text-[15px] p-1 mt-3 text-center h-fit w-[290px]">Diamonds can be more than beautiful, they can be ethical too.</div>
            </div>
            <div className="absolute flex mb-[1px] bottom-0 inset-x-0 border-y-[1px] border-tgrey h-[260px]">
                <div className="flex mx-24">
                <div className="border-x-[1px] w-[320px] border-tgrey flex flex-col justify-center items-center text-center">
                    <img src="src\assets\icons\idyl_icons-website_22.10.25_b.png.png" alt="" />
                    <div className=" w-1/2 text-[15px]">Free Worldwide Shipping & 30-day Returns</div>
                </div>
                <div className="border-x-[1px] w-[320px] border-tgrey flex flex-col justify-center items-center text-center">
                    <img src="src\assets\icons\idyl_icons-website_22.10.25_b2.png.png" alt="" />
                    <div className=" w-5/12 text-[15px]">Lab-Grown Diamonds & Solid 14K Gold</div>
                </div>
                <div className="border-x-[1px] w-[320px] border-tgrey flex flex-col justify-center items-center text-center">
                    <img src="src\assets\icons\idyl_icons-website_22.10.25_b3.png.png" alt="" />
                    <div className=" w-1/2 text-[15px]">Ethical Handmade Craftsmanship</div>
                </div>
                <div className="border-x-[1px] w-[320px] border-tgrey flex flex-col justify-center items-center text-center">
                    <img src="src\assets\icons\idyl_icons-website_22.10.25_b4.png.png" alt="" />
                    <div className=" w-1/2 text-[15px]">2 Year Warranty & Diamond Certificate</div>
                </div>
                </div>
            </div>
        </div>
</>
    );
}   