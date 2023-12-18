import React from "react";

export default function Footer(){
    return(
    <>
    <div className="h-[360px] bg-white flex flex-col">
        <div className="flex w-11/12 justify-between gap-20 ml-24 text-xs mt-10 flex-row h-[100px] ">
            <div className="mx-3"><span className="font-bold">CUSTOMER CARE</span>  <ul className= "flex flex-col gap-1 mt-1" >
                <li> <a href="/">FAQ</a> </li>
                <li> <a href="/">Shipping</a> </li>
                <li> <a href="/">Returns</a> </li>
                <li> <a href="/">Contact</a> </li>
                 </ul>
            
            </div>
            <div className=""><span className="font-bold">OUR PROMISE</span>  <ul className= "flex flex-col gap-1 mt-1" >
                <li> <a href="/">Materials</a> </li>
                <li> <a href="/">Warranty</a> </li>
                <li> <a href="/">Certificate</a> </li>
                 </ul>
            </div>
            
            <div className=""><span className="font-bold"> QUESTIONS</span>  <ul className= "flex flex-col gap-1 mt-1" >
                <li> <a href="/">hello@idyl.com</a> </li>
                 </ul>
            </div>

            <div className=""><span className="font-bold">CONNECT</span>  <ul className= "flex flex-col gap-1 mt-1" >
                <li> <a href="/">idyl club</a> </li>
                <li> <a href="/">Instagram</a> </li>
                <li> <a href="/">Facebook</a> </li>
               
                 </ul>
            
            </div>
        <div className="text-xs relative flex-grow">
            <div className=" flex flex-col absolute right-32">
            <div className="font-bold"> BE IN THE KNOW </div>
            <div className="m-1" >Sign up to get the latest on products, styling and events</div>
            <div className="mt-5 font-bold relative flex">Email <button className="w-20 h-7 font-light absolute right-10 bg-tgrey text-white flex justify-center items-center">Sign Up</button></div>
            </div>
        </div>
        </div>
    <div className="flex mt-10 flex-row" > 

    <div className="mt-3 ml-28 flex flex-col " ><div className=" text-xs font-bold">SHIPPING TO</div>
        <select className="w-52 border-2 border-black rounded-md" aria-placeholder="America" >
            <option className="rounded-md hover:bg-gray-300" value="America">United States | USD $</option>
            <option className="rounded-md hover:bg-gray-300" value='new' >new option</option>
        </select>
    </div>
    <div className="flex  relative flex-grow"><div className="absolute items-center gap-1 flex text-xs align-baseline right-36" >
        4.9/5
        <img className="h-6 mx-3" src="/icons\tvector.svg" alt="" />
        BASED ON 500+ REVIEWS
        </div></div>    

    </div> 

        <div className="flex mt-10 relative ml-28 flex-col" > 
            <div className="flex text-xs gap-2 font-bold flex-row">
            <a href="/">Privacy Policy</a>
            <a href="/">Terms & Conditions</a>
            </div>
            <div className="flex gap-2 text-xs "><a href="/">Idyl 2023</a>Made by-<a href="/">Surf&Turf</a> All rights Reserved.</div>

            <div className="absolute right-32 text-3xl italic">ALYN</div>
        </div>

    </div>
    </>
    
    );
}