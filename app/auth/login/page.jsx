"use client";
import { useAuth } from "@/app/components/admin";

export default function page() {
  const { login, username, password, setUsername, setPassword, errorMessage } =
    useAuth();
  return (
    <div className="text-center flex-col justify-items-center min-h-screen content-center">
      <div className="border-2 sm:w-1/3 sm:p-[40px]">
      <h3 className="text-center font-sans text-3xl my-2">Student Login</h3>
          <div className="m-[10px] flex flex-col text-left">
            {/* <label className="m-[0px_10px]">Username:</label> */}
            <input
              type="text"
              placeholder="Username"
              className="border-b-2 m-[0px_10px] p-[10px]"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="m-[10px] flex flex-col text-left">
            {/* <label>Password:</label> */}
            <input
              type="password"
              placeholder="Password"
              className="border-b-2 m-[0px_10px] p-[10px]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errorMessage}
          </div>
          <button
            className="bg-black text-white p-[5px_30px] rounded sm:m-[10px]"
            onClick={() => login("student")}
          >
            Login
          </button>
      </div>
    </div>
  );
}
