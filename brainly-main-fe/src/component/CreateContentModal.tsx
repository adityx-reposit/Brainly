import { useState, useEffect } from "react";
import CrossIcon from "../icons/crossIcon";
import InputComponent from "./input";
import { Button } from "./button";

// Modal control
export function CreateContentModal({ open, onClose }) {
  const [isVisible, setIsVisible] = useState(false);

  // Manage animation state
  useEffect(() => {
    if (open) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => setIsVisible(false), 400); // Match the duration of the transition
      return () => clearTimeout(timer);
    }
  }, [open]);

  return (
    <>
      {isVisible && (
        <div
          className={`w-screen h-screen  bg-slate-400 fixed top-0 left-0 flex justify-center items-center 
            transition-opacity duration-400 ease-in-out ${
              open ? "opacity-60" : "opacity-0"
            }`}
        >
          <div
            className={`flex flex-col justify-end p-4   transform transition-transform duration-400 ease-in-out ${
              open ? "scale-100" : "scale-0"
            }`}
          >
            <span className="bg-white py-20   rounded-md shadow-lg">
              <div className="crossIcon flex  justify-end ">
                <div onClick={onClose} className="cursor-pointer">
                  <CrossIcon />
                </div>
              </div>
              <div className="Input">
                <InputComponent placeholder={"title"} />
                <InputComponent placeholder={"link"} />
              </div>
              <div className="flex justify-center items-center mt-4 ">
                <Button variant="primary" text="submit" size="sm" />
              </div>
            </span>
          </div>
        </div>
      )}
    </>
  );
}
