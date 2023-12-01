import SideNavbar from '@/Components/SideNavbar'
import axios from 'axios'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { MdOutlineModeEdit } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { useDispatch } from 'react-redux';
import { updatePodcast } from '@/Redux/data_functionns';
import { useToast } from '@chakra-ui/react';

function Transcript() {
    const api='http://localhost:8080'
    const router = useRouter();
    let [Podcast,setPodcast]=useState({})
    let [newdes,setNewDesc]=useState("")
    const toast = useToast()
    const dispatch = useDispatch()

    function showToast(message,status='success') {
        toast({
            position:'top',
            title: message,
            status: status,
            duration: 5000,
            isClosable: true,
          })
      }

      function handleSave() {
         dispatch(updatePodcast(Podcast.id,{description:newdes},showToast))
         router.push('/project/Uplode')
      }

    async function fetchpodcast(id) {
        let res = await axios.get(`${api}/api/podcast?id=${id}`)
        let data= await res 
        data=data.data.data
        setPodcast({id:data._id,title:data.title,description:data.description})
        setNewDesc(data.description)
    }

    useEffect(() => {
        if (router.query.id) {
          fetchpodcast(router.query.id);
        }
      }, [router.isReady]);

  return (
    <SideNavbar>
    <div className='flex justify-between items-center my-10'>
        <h3 className='text-[#7E22CE] text-[30px] font-bold '>Edit Transcript</h3>
         <div className='flex gap-3'>
            <button onClick={()=>router.back()} className='rounded py-2 font-semibold px-5 text-[15px] text-[red] border-[red] border-[2px]'>Discard</button>
            { Podcast.description!==newdes ? <button onClick={handleSave} className='rounded py-2 font-semibold px-5 text-[15px] bg-black text-white '>Save & Exit</button>:null}
        </div>
    </div>
    <div className='relative border-[2px] border-purple-500 rounded-lg'>
        <span className='absolute top-[10px] left-[10px] flex gap-2 items-center text-white bg-black rounded-[20px] py-1 px-4'><MdOutlineModeEdit />Edit Mode</span>
        <span className='absolute top-[5px] right-[10px]'><CiSearch size={'20px'}  color='#7E22CE'/></span>
        <textarea rows="15" value={newdes} onChange={(e)=>setNewDesc(e.target.value)} className='w-[100%] p-[10px] pt-[50px] focus:outline-none'></textarea>
    </div>
    </SideNavbar>
  )
}

export default Transcript
