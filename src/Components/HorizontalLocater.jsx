
import React from 'react'
import { AiOutlineHome } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";
import { CgBell } from "react-icons/cg";
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

function HorizontalLocater() {
    let location = useLocation()
    

    const Project = useSelector((store)=>store.singleProject)
    
  return (
    <div className='flex justify-between ' >
      <h3 className='flex gap-3 items-center text-[#7E22CE] text-[25px]'><AiOutlineHome size={"25px"}/> <span className='font-semibold capitalize'>{Project?.name}</span> / <span className='font-semibold'>{location.pathname.slice(1,location.pathname.length)}</span></h3>
      <div className='flex items-center gap-[10px]'><IoMdArrowDropdown /><span className='text-[15px] font-bold'>EN</span>
      <img
        className="w-[30px] h-[30px] m-auto"
        src="/language.svg"
        alt="Example SVG"
      />

      <CgBell size={"30px"} /></div>
    </div>
  )
}

export default HorizontalLocater
