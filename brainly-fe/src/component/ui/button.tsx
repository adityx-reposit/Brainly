import { ReactElement } from "react";

type Variants ="primary"| "secondary"
export interface ButtonProps {
    variant:"primary"| "secondary";
    size:"sm"| "md"|"lg";
    text:string;
    startIcon:ReactElement;
    endIcon:ReactElement;
    onClick:()=>void
}



const defaultStyle="rounded-md p-4 flex"
const variantStyles={
    "primary": "bg-[#4643dd] text-white",
    "secondary":"bg-[#a7f7fe] text-white"
}

const sizeStyle={
    "sm":"py-1 px-2",
    "md":"py-2 px-6",
    "lg":"py-4 px-8"
}

export const Button =(props:ButtonProps)=>{
  return( 
   <button className={`${variantStyles[props.variant]} ${defaultStyle} ${sizeStyle[props.size]}`}>{props.startIcon? <div className="pr-2">{props.startIcon}</div>: null} {props.text} {props.endIcon}</button>

  )


}
