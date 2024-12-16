"use client";
import React, { createContext, useState, useEffect, useContext } from "react";
import data from "@/config/data.json";
import { useRouter } from "next/navigation";
import { useAuth } from "./admin";

// Create the AuthContext
const DataContext = createContext();

// AuthProvider component
export const DataProvider = ({ children }) => {
  const [year, setYear] = useState("fe");
  const [message, setMessage] = useState("");
  const [date, setDate] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [dates, setDates] = useState(data.date);
  const [messages, setMessages] = useState(data.message);
  const Router = useRouter();

  useEffect(() => {
    const storedDates = JSON.parse(localStorage.getItem("dates"));
    const storedMessages = JSON.parse(localStorage.getItem("messages"));
    if (storedMessages) {
      setMessages(storedMessages);
    }
    if (storedDates) {
      setDates(storedDates);
    }
    console.log(storedDates);
    console.log(storedMessages);
  }, []);
  useEffect(() => {
    if (dates) {
      localStorage.setItem("dates", JSON.stringify(dates));
    }
    if (messages) {
      localStorage.setItem("messages", JSON.stringify(messages));
    }
  }, [dates, messages]);

  const addDate = () => {
    try {
      data.date.push({ date: date, event: message, year: year });
      setDates([...dates, { date: date, event: message, year: year }]);
      alert("ok");
      Router.push(`/${year}`);
    } catch (error) {
      alert("error");
      console.log(error);
    }
  };
  const addMessage = (author) => {
    const now = new Date();
    try {
      // data.date.push({ time: `${now.getDate()} /${now.getMonth()} / ${now.getYear} ${now.getHours()}:${now.getMinutes()} `, text: message, year: year, author: author });
      setMessages([
        ...messages,
        { time: `${now.getDate()} /${now.getMonth()} / ${now.getYear()} ${now.getHours()}:${now.getMinutes()} `, text: message, year: year, author: author },
      ]);
      alert("ok");
      Router.push(`/${year}`);
    } catch (error) {
      alert("error");
      console.log(error);
    }
  };

  return (
    <DataContext.Provider
      value={{
        year,
        setYear,
        message,
        setMessage,
        date,
        setDate,
        loading,
        errorMessage,
        addDate,
        addMessage,
        dates,
        messages,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useData = () => useContext(DataContext);
