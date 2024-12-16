"use client"
import { useAuth } from "@/app/components/admin"

export default function page(){
    const { login,username,password,setUsername,setPassword,errorMessage } = useAuth()
    return(
        <div className="text-center flex-col justify-items-center min-h-screen content-center">
            <div className="border-2 w-1/3 p-[40px]">
                Teacher Login Page 
                <from>
                    <div className="m-[10px]">
                        <label>Username:</label>
                        <input type="text" placeholder="Username" className="border-2 m-[10px]" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                    </div>
                    <div className="m-[10px]">
                        <label>Password:</label>
                        <input type="password" placeholder="Password" className="border-2 m-[10px]" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                    {errorMessage}
                    <button className="bg-black text-white p-[5px_30px] rounded" onClick={()=>login()}>Login</button>
                </from>
            </div>
        </div>
    )
}