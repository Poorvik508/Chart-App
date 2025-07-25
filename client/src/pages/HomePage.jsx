import React, { useState } from 'react'
import Sidebar from "../components/Sidebar"
import ChartContainer from "../components/ChartContainer"
import RightSidebar from "../components/RightSidebar"

const HomePage = () => {
  const [selecteduser,setselecteduser]=useState(false)
  return (
    <div className="border w-full h-screen sm:px-[15%] sm:py-[5%]">
      <div
        className={`backdrop-blur-xl border-2 border-gray-600 rounded-2xl overflow-hidden h-full grid grid-cols-1 relative ${
          selecteduser
            ? "md:grid-cols-[1fr_1.5fr_1fr] xl:grid-cols-[1fr_2fr_1fr]"
            : "md:grid-cols-2"
        }`}
      >
        <Sidebar
          selecteduser={selecteduser}
          setselecteduser={setselecteduser}
        />
        <ChartContainer
          selecteduser={selecteduser}
          setselecteduser={setselecteduser}
        />
        <RightSidebar
          selecteduser={selecteduser}
          setselecteduser={setselecteduser}
        />
      </div>
    </div>
  );
}

export default HomePage
