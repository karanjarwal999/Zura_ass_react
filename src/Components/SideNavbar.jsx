import React, { useEffect, useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { TbCircleNumber1,TbCircleNumber2,TbCircleNumber3,TbCircleNumber4 } from "react-icons/tb";
import HorizontalLocater from "./HorizontalLocater";
import { Link, useLocation, useNavigate } from "react-router-dom";


function SideNavbar({ children }) {
  const navigate=useNavigate()
  let location = useLocation()
  console.log(location.pathname)


  return (
    <div className="flex">
      <div className="w-[400px] bg-[#F3E8FF] min-h-[100vh] p-[20px] flex flex-col justify-between">
        <nav className="text-[18px]">
          <h1  onClick={()=>navigate('/')} className="cursor-pointer flex gap-2 text-[#7E22CE] text-[36px] font-extrabold">
            <svg
              width="53"
              height="53"
              viewBox="0 0 53 53"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M37.4727 46.8739L29.8109 43.043C27.6752 41.9862 25.1873 41.9862 23.0517 43.043L15.3678 46.8739C8.80679 50.1544 1.87148 43.087 5.3061 36.592L7.11149 33.2014C7.35367 32.7171 7.74998 32.3428 8.23435 32.1446L36.0857 19.617C37.2306 19.1106 38.5736 19.573 39.146 20.6738L47.5344 36.614C50.9691 43.087 44.0338 50.1544 37.4727 46.8739Z"
                fill="#7E22CE"
              />
              <path
                opacity="0.4"
                d="M34.3463 16.9308L16.1163 25.1431C14.0688 26.0678 11.9992 23.8661 13.056 21.8846L19.7491 9.18088C22.5893 3.78675 30.2952 3.78675 33.1354 9.18088L35.4912 13.6723C36.1076 14.8832 35.6013 16.3584 34.3463 16.9308Z"
                fill="#7E22CE"
              />
            </svg>
            LAMA.
          </h1>
          <p className="py-2 my-2">Podcast Uplode Flow</p>
          <Link to={"/Uplode"} id={(location.pathname=='/Uplode'|| location.pathname=='/Transcript')?"active":'notActive'} className="flex gap-4 items-center py-3 px-3" ><TbCircleNumber1  size={"25px"} />Projects</Link>
          <Link to={"/Widget_Configurations"} id={location.pathname=='/Widget_Configurations'?"active":'notActive'} className="flex gap-4 items-center py-3 px-3" ><TbCircleNumber2 size={"25px"} />Widget Configurations</Link>
          <Link to={"#"} className="cursor-not-allowed flex gap-4 items-center py-3 px-3 bg-gray-100 rounded-[50px]" ><TbCircleNumber3 size={"25px"} />Deployment</Link>
          <Link to={"#"} className="cursor-not-allowed flex gap-4 items-center py-3 px-3 border-b-2 border-gray-300" ><TbCircleNumber4 size={"25px"} /> Pricing</Link>
        </nav>
        <Link to={"/Account"} id={location.pathname=='/Account'?"active":'notActive'}
          className=" flex gap-4 p-[10px] border-t-2 border-gray-300 items-center text-[18px]">
          <IoSettingsOutline size={"25px"} /> Settings
        </Link>
      </div>
      <main className="p-[40px] flex-1">
        <HorizontalLocater/>
        {children}</main>
    </div>
  );
}

export default SideNavbar;