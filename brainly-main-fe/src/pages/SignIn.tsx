import { useRef, useState } from "react";
import { Button } from "../component/button";
import Input from "../component/input";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Dashboard from "./dashboard";

export function SignIN(){

    const usernameRef = useRef<HTMLInputElement>();
    const PasswordRef = useRef<HTMLInputElement>();
    const navigate = useNavigate();

    async function signin() {
        setLoading(true);
        try {
          const username = usernameRef.current?.value;
          const password = PasswordRef.current?.value;
          const response = await axios.post(`${BACKEND_URL}/api/v1/signin`, {
            username,
            password,
        });
        const jwt = response.data.token;
        localStorage.setItem("token", jwt);
        navigate("/Dashboard")
        } catch (error) {
          console.error("Error during sign-in:", error);
        } finally {
          setLoading(false);
        }
      }
      
    const [Loading ,setLoading]=useState(false)
    return <div className="h-screen w-screen bg-gray-200 flex  justify-center items-center ">
        <div className= " bg-white rounded-xl border border-gray-500 min-w-48 p-16 flex-col items-center ">
           <div>

            <Input reference={usernameRef} placeholder="Enter Your Username" type="text" className="py-4 px-2"    />
           </div>
          <div>

            <Input reference={PasswordRef} placeholder="Enter Your Password" type="text" className="py-4 px-2"   />
          </div>
           
            <div className="flex justify-center mt-2 items-center">

            <Button onClick={signin} loading={Loading}  fullwidth={true} variant="primary" size="sm" text="Signin"></Button>
            </div>
        </div>
    </div>
}