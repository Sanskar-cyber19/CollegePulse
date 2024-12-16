"use client";

import React, { useState, useEffect } from "react";
import { useData } from "../components/data";

export default function Page(params) {
  const [activeTab, setActiveTab] = useState(0);

  const { dates , messages} = useData()

  const tabs = [
    {
      label: "Updates/ Notifications",
      content: (
        <div className="container overflow-y-scroll h-[70vh]">
          {messages.map((message, index) => (
            <div
              key={index}
              className="p-[15px] m-[10px] shadow-md rounded-lg bg-white border border-gray-200"
            >
              <p>{message.text}</p>
              <span className="font-sans text-xs italic text-right text-gray-500">
                {message.author} - {message.time} - {message.year}
              </span>
            </div>
          ))}
        </div>
      )
    },
    {
      label: "Important Dates",
      content: (
        <div className="container overflow-y-scroll h-[70vh]">
          <ul>
            {dates.map((date, index) => (
              <li key={index} className="flex border-b-2 my-[10px] mx-[10px]">
                {index + 1}. <p>{date.date} -  {date.year}  - {date.event}</p>
              </li>
            ))}
          </ul>
        </div>
      )
    }
  ];

  const tabsStyle = {
    borderBottom: '1px solid #ccc',
  };

  const tabListStyle = {
    display: 'flex',
    listStyle: 'none',
    padding: 0,
    margin: 0,
    justifyContent: 'center', // Center the tab labels horizontally
    alignItems: 'center',
  };

  const tabStyle = {
    padding: '10px 20px',
    cursor: 'pointer',
    borderBottom: '2px solid transparent',
    borderRadius: '5px',
    transition: 'all 0.3s ease',
    textAlign: 'center',
  };

  const activeTabStyle = {
    ...tabStyle,
    borderBottom: '2px solid #007bff',
    color: '#007bff',
    fontWeight: 'bold',
    backgroundColor: '#f0f8ff',
  };

  return (
    <>
      <div className="flex flex-col  min-h-screen">
        {/* Tab Navigation (Top center) */}
        <div className="w-full lg:w-full p-4 bg-white shadow-lg">
          <ul style={tabListStyle}>
            {tabs.map((tab, index) => (
              <li
                key={index}
                style={index === activeTab ? activeTabStyle : tabStyle}
                className="lg:hover:bg-blue-100 py-2 px-4 mx-[10px] rounded-t-md lg:rounded-none cursor-pointer"
                onClick={() => setActiveTab(index)}
              >
                {tab.label}
              </li>
              
            ))}
            {/* <li>{JSON.stringify(params.params.year)}</li> */}
          </ul>
        </div>

        {/* Content Section */}
        <div className="lg:w-full w-full bg-gray-50 mt-[80px] lg:mt-0 p-4 overflow-y-auto flex-grow">
          <h3 className="text-2xl font-semibold text-gray-700 pb-3 border-b-2">
            {tabs[activeTab].label}
          </h3>
          <div className="mt-4">{tabs[activeTab].content}</div>
        </div>
      </div>
    </>
  );
}
