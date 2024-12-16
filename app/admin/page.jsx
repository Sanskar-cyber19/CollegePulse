"use client"
import { useEffect, useState } from "react";
import { useAuth } from "../components/admin";
import { useData } from "../components/data";
import { useRouter } from "next/navigation";

export default function page() {
  const { admin } = useAuth()
  const {year,message,setMessage,setYear,date,setDate,addDate,addMessage} = useData()
  const [activeTab, setActiveTab] = useState(0);
  const Router = useRouter()
  useEffect(()=>{
    if(!admin.name){
      alert("Requried Login")
      Router.push("/admin/login");
    }
  },[])
  const tabs = [
    {
      label: "Updates/ Notifications",
      content: (
        <div className="w-full sm:p-[70px]">
          <div className="border-2 p-[10px_20px] w-full h-fauto">
            <div>
              <h1 className="border-b-2">Teachers Portal</h1>
              <div className="h-auto">
                <div className="m-[10px]">
                  <label>
                    Name of Teacher:<b>{admin.name}</b>
                  </label>
                </div>
                <div className="m-[10px]">
                  <label>Year:</label>
                  <select className="border-2 m-[10px] p-[5px_30px]" onChange={(e)=>setYear(e.target.value)} value={year}>
                    <option value="fe">F.E</option>
                    <option value="se">S.E</option>
                    <option value="te">T.E</option>
                    <option value="be">B.E</option>
                  </select>
                </div>
                <div className="m-[10px]">
                  <label>Message or Notification</label>
                  <br />
                  <textarea className="w-full border-2 p-[10px] h-[100px]" value={message} onChange={(e)=>setMessage(e.target.value)}/>
                </div>
              </div>
              <button className="bg-black text-white p-[10px_30px] rounded center" onClick={()=>addMessage(admin.name)}>
                Send Now
              </button>
            </div>
          </div>
        </div>
      ),
    },
    {
      label: "Dates",
      content: (
        <div className="w-full sm:p-[70px]">
          <div className="border-2 p-[10px_20px] w-full h-auto">
            <div>
              <h1 className="border-b-2">Teachers Portal</h1>
              <div className="h-auto">
                <div className="m-[10px]">
                  <label>
                    Name of Teacher:<b>{admin.name}</b>
                  </label>
                </div>
                <div className="m-[10px]">
                  <label>Year:</label>
                  <select className="border-2 m-[10px] p-[5px_30px]" onChange={(e)=>setYear(e.target.value)} value={year}>
                    <option value="fe">F.E</option>
                    <option value="se">S.E</option>
                    <option value="te">T.E</option>
                    <option value="be">B.E</option>
                  </select>
                </div>
                <div className="m-[10px]">
                <label>Date: </label>
                <input type="date" className="border-2 m-[10px] p-[5px_30px]" value={date} onChange={(e)=>setDate(e.target.value)}/>
                </div>
                <div className="m-[10px]">
                  <label>Message or Notification</label>
                  <br />
                  <input className="w-full border-2 p-[10px]" value={message} onChange={(e)=>setMessage(e.target.value)}/>
                </div>
              </div>
              <button className="bg-black text-white p-[10px_30px] rounded center" onClick={()=>addDate()}>
                Send Now
              </button>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const tabsStyle = {
    borderBottom: "1px solid #ccc",
  };

  const tabListStyle = {
    display: "flex",
    listStyle: "none",
    padding: 0,
    margin: 0,
    justifyContent: "center", // Center the tab labels horizontally
    alignItems: "center",
  };

  const tabStyle = {
    padding: "10px 20px",
    cursor: "pointer",
    borderBottom: "2px solid transparent",
    borderRadius: "5px",
    transition: "all 0.3s ease",
    textAlign: "center",
  };

  const activeTabStyle = {
    ...tabStyle,
    borderBottom: "2px solid #007bff",
    color: "#007bff",
    fontWeight: "bold",
    backgroundColor: "#f0f8ff",
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
          </ul>
        </div>

        {/* Content Section */}
        <div className="lg:w-full w-full bg-gray-50 mt-[80px] lg:mt-0 p-4 overflow-y-auto flex-grow">
          <h3 className="text-2xl font-semibold text-gray-700 border-b-2">
            {tabs[activeTab].label}
          </h3>
          <div className="mt-1">{tabs[activeTab].content}</div>
        </div>
      </div>
    </>
  );
}
