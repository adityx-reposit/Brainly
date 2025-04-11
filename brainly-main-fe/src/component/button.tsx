import { ReactElement } from "react";

type Variants ="primary"| "secondary"
export interface ButtonProps {
    variant:"primary"| "secondary";
    size:"sm"| "md"|"lg";
    text:string;
    startIcon?:ReactElement;
    endIcon?:ReactElement;
    onClick?:()=>void
}



const defaultStyle="rounded-md p-4 flex"
const variantStyles={
    "primary": "bg-[#4643dd] text-white",
    "secondary":"bg-[#b9c9f3] text-white"
}

const sizeStyle={
    "sm":"py-1 px-2 rounded-sm",
    "md":"py-2 px-6 rounded-md",
    "lg":"py-4 px-7 rounded xl"
}

export const Button =(props:ButtonProps)=>{

    

  return( 
    
   <button onClick={onClick} className={`${variantStyles[props.variant]} ${defaultStyle} ${sizeStyle[props.size]}`}>
    <div className="flex">
    {props.startIcon? <div className="pr-2">{props.startIcon}</div>: null} <div className="pr-2">{props.text}</div> <div className="mt-1">{props.endIcon}</div> 
    </div>
    </button>

  )


}
