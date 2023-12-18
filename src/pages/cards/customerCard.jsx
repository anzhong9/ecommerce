import React from "react";

export default function CustomerCard(props) {
    return (
    <>
    <div className="relative text-sm card border-blueGray-900 border-2 w-[320px] h-[250px] ">
        <div className="ml-6 mt-5 flex "><figure className="flex"><img src="src\assets\icons\star.png" alt="" /><img src="src\assets\icons\star.png" alt="" /><img src="src\assets\icons\star.png" alt="" /><img src="src\assets\icons\star.png" alt="" /><img src="src\assets\icons\star.png" alt="" /></figure>
        - {props.name}
        </div>
        <div className="title ml-6 mt-5 " >{props.title}</div>
        <div className="desc ml-6 mt-2 w-5/6 font-light">{props.description}</div>
        <div className="veri absolute justify-start flex ml-6 bottom-3 text-[13px]">Verified by <img src="src\assets\icons\star.png" alt="" /> <span className="mx-1 underline font-semibold">TrustPilot</span> December 13, 2023 </div>
    </div>
    </>
    )
}