import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Inbox from "./components/Inbox";

const App = () => {
  return (
    <div className="bg-[#f6f8fc] h-screen">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Inbox />
      </div>
    </div>
  );
};

export default App;
