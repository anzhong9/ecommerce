import React from "react";

export default function CommentCard(props){
    let imsrc = props.img; 
    return (
    <>
    <div className="h-[320px] relative w-[350px] p-1 mx-1">
        <div className=" text-tgrey text-2xl text-center flex justify-center w-10/12 absolute top-10 ">"{props.quote}"</div>
        <div className="absolute bottom-1 w-10/12 flex justify-center" ><img className="" src={imsrc}  ></img></div>
    </div>
    </>
    );
};