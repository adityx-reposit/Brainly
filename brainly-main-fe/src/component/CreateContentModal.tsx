import { useState } from "react";
import CrossIcon from "../icons/crossIcon";
import InputComponent from "./input";
import { Button } from "./button";

// Modal control
export function CreateContentModal({ open, onClose }) {
  return (
    <div>
      {open && (
        <div className="w-screen h-screen bg-slate-400 fixed top-0 left-0 opacity-60 flex justify-center items-center">
           <div className="flex flex-col justify-center ">
          <span className="bg-white opacity-100 p-4">
    
          <div className="crossIcon flex justify-end">
              <div onClick={onClose}>
                <CrossIcon/>
              </div>
          </div> 
          <div className="Input">
              <InputComponent placeholder={"title"}/>
              <InputComponent placeholder={"link"}/>
          
          </div>
          <div className="flex justify-center items-center ">
              <Button variant="primary" text="submit" size="sm"/>
          </div>
            
        
          </span>
           
           </div>
        </div>
      )}
    </div>
  );
}
