import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

export function useContent() {
  const [contents, useContent] = useState([]);
  function refresh(){
    const response = axios
      .get(`${BACKEND_URL}/api/v1/content`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        useContent(response.data.content);
      });
  }
  
  useEffect(() => {
    refresh()
   let interval= setInterval(() => {
         refresh()
    }, 3*1000);
    return ()=>{
      clearInterval(interval)
    }
  
  }, []);
  return contents;
}
