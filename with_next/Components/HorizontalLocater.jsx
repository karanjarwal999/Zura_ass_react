import { useRouter } from 'next/router'
import React from 'react'
import { AiOutlineHome } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";
import { CgBell } from "react-icons/cg";
import Image from 'next/image';
import { useSelector } from 'react-redux';

function HorizontalLocater() {
    let {pathname} = useRouter()
    pathname=pathname.split('/')

    const Project = useSelector((store)=>store.singleProject)
    
  return (
    <div className='flex justify-between ' >
      <h3 className='flex gap-3 items-center text-[#7E22CE] text-[25px]'><AiOutlineHome size={"25px"}/> <span className='font-semibold capitalize'>{Project?.name}</span> / <span className='font-semibold'>{pathname[pathname.length-1]}</span></h3>
      <div className='flex items-center gap-[10px]'><IoMdArrowDropdown /><span className='text-[15px] font-bold'>EN</span>
      <Image
        className="m-auto"
        src="/language.svg"
        alt="Example SVG"
        width={30}
        height={30}
      />

      <CgBell size={"30px"} /></div>
    </div>
  )
}

export default HorizontalLocater
