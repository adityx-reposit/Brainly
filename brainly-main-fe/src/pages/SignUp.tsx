import { useRef, useState } from "react";
import { Button } from "../component/button";
import { BACKEND_URL } from "../config";
import axios from "axios";
import Input from "../component/input";
import { useNavigate } from "react-router-dom";



export function SignUp(){
    const usernameRef = useRef<HTMLInputElement>();
    const PasswordRef = useRef<HTMLInputElement>();
    const navigate=useNavigate();
    async function  signup(){
        const username=usernameRef.current?.value;
        console.log(usernameRef.current);
        
        const password= PasswordRef.current?.value;
        await axios.post(`${BACKEND_URL}/api/v1/signup`,{
                username,
                password
            
        })
    navigate("/signin")
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
           
            <div className="flex justify-center mt-2 items-center ">

            <Button onClick={signup} loading={Loading}  fullwidth={true} variant="primary" size="sm" text="Signup"></Button>
            </div>
        </div>
    </div>
}