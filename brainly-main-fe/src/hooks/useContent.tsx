import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

export function useContent() {
  const [contents, useContent] = useState([]);
  useEffect(() => {
    const response = axios
      .get(`${BACKEND_URL}/api/v1/content`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        useContent(response.data.contents);
      });
  }, []);
  return contents;
}
