"use client"
import React, { createContext, useState, useEffect, useContext } from "react";
import data from "../admin/staff.json";
import { useRouter } from "next/navigation";

// Create the AuthContext
const AuthContext = createContext();

const initialState = {
  name: "",
  username: "",
  password: "",
};

// AuthProvider component
export const AuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(initialState);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("")
  const [loading, setLoading] = useState(false);
  const Router = useRouter()

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setAdmin(storedUser);
    }
    console.log(storedUser)
  }, []);
  useEffect(()=>{
    if(admin.username){
      localStorage.setItem("user",JSON.stringify(admin))
    }else{
      localStorage.removeItem("user");
    }
  },[admin])

  const login = (type) => {
    if(type === "teacher"){
    setLoading(true);
    try {
      const exist = data.teachers.find(
        (t) => t.username === username && t.password === password
      );
      if (exist) {
        setAdmin(exist);
        localStorage.setItem("user",JSON.stringify(exist))
        Router.push("/admin")
        setUsername("")
        setPassword("")
      } else {
        setErrorMessage("username or password is wrong...")
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }else{
    setLoading(true);
    try {
      const exist = data.students.find(
        (t) => t.username === username && t.password === password
      );
      if (exist) {
        setAdmin(exist);
        localStorage.setItem("user",JSON.stringify(exist))
        Router.push(`/${exist.year}`)
        setUsername("")
        setPassword("")
      } else {
        setErrorMessage("username or password is wrong...")
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  };
  return (
    <AuthContext.Provider
      value={{ admin, 
        username, 
        setUsername,
        password, 
        setPassword,
        loading,
        login,
        errorMessage

    }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);
