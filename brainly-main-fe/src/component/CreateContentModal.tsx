import { useState, useEffect, useRef } from "react";
import CrossIcon from "../icons/crossIcon";
import InputComponent from "./input";
import { Button } from "./button";
import Input from "./input";
import axios from "axios";
import { BACKEND_URL } from "../config";

enum ContentType {
  Youtube = "youtube",
  Twitter = "twitter",
  Other="Others"
}

export function CreateContentModal({ open, onClose }) {
  const [isVisible, setIsVisible] = useState(false);
  const titleRef = useRef<HTMLInputElement>();
  const linkRef = useRef<HTMLInputElement>();
  const [type, setType] = useState(ContentType.Youtube);

  async function addContent() {
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;

    await axios.post(
      `${BACKEND_URL}/api/v1/content`,
      {
        link,
        title,
        type,
      },
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );
    onClose();
  }

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
          className={`w-screen h-screen bg-black fixed  top-0 left-0 flex justify-center items-center 
            transition-opacity duration-400 ease-in-out ${
              open ? "opacity-92" : "opacity-0"
            }
            
            `}
        >
          <div
            className={`flex flex-col justify-end p-4 transform transition-transform duration-400 ease-in ${
              open ? "scale-100" : "scale-0"
            }`}
          >
            <span className="bg-white py-20 px-30 rounded-md shadow-lg">
              <div className="crossIcon flex justify-end">
                <div onClick={onClose} className="cursor-pointer  ">
                  <CrossIcon />
                </div>
              </div>
              <div className="Input">
                <Input reference={titleRef} placeholder={"title"} />
                <Input reference={linkRef} placeholder={"link"} />
              </div>
              <div>
                <div className="flex mr-3 gap-1 justify-center items-center pb-2">
                  <h1>Type</h1>
                  <Button
                    text="Youtube"
                    variant={
                      type == ContentType.Youtube ? "primary" : "secondary"
                    }
                    onClick={() => {
                      setType(ContentType.Youtube);
                    }}
                  ></Button>
                  <Button
                    text="Twitter"
                    variant={
                      type == ContentType.Twitter ? "primary" : "secondary"
                    }
                    onClick={() => {
                      setType(ContentType.Twitter);
                    }}
                  ></Button>
                </div>
              </div>
              <div className="flex justify-center items-center mt-2">
                <Button
                  onClick={addContent}
                  variant="primary"
                  text="submit"
                  size="sm"
                />
              </div>
            </span>
          </div>
        </div>
      )}
    </>
  );
}
