import React from "react";

export default function InspCard(props){
    let imsrc = props.img;
    let imcap = props.cap;
    
    return(
    <>
        <figure className='[h-300px] w-[300px]'>
            <img src={imsrc} alt={imcap} className='h-[290px] mb-2'/>
            <figcaption className="text-xs" >{imcap}</figcaption>
        </figure>
    </>
    );
}