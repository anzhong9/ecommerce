import React from "react";

export default function CommentCard(props){
    return (
    <>
    <div className="h-[300px] relative w-[350px] p-1 mx-1">
        <div className=" text-tgrey">"{props.quote}"</div>
        
    </div>
    </>
    );
};