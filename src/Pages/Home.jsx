
import { IoHomeOutline } from "react-icons/io5";
import { useDisclosure } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import NoProject from "../Components/NoProject";
import Usermodal from "../Components/Modals/usermodal";
import { UPDATE_USER } from "../Redux/actionTypes";
import { FetchAllProject } from "../Redux/data_functionns";
import RenderProjects from "../Components/RenderProjects";
import TopNavbar from "../Components/TopNavbar";


export default function Home() {
  const { isOpen , onOpen, onClose } = useDisclosure()
  const projects= useSelector((store)=>store.project)
  const dispatch = useDispatch()
  
  // to set userdata from local to store 
  useEffect(()=>{
    let userData=JSON.parse(localStorage.getItem('user'))||{username:'',email:''};
    if(!userData.email||!userData.username){
      onOpen()
    }else{
      dispatch({type:UPDATE_USER,payload:userData})
    }
  },[])

  // to fetch all projects 
  useEffect(()=>{
    if(!projects.length){ dispatch(FetchAllProject) }
  },[])


  return (
    <main className='px-10 py-7 '>

      {/* top navbar */}
      <TopNavbar/>
      
      <div>
        <button className=' py-1 px-3 ml-[9vw] mt-[25px] rounded-[20px] border-[2px] flex gap-2 items-center justify-center text-black text-[21px]'><IoHomeOutline size={'29px'} color='black'/> Back to Home</button>
         
         {/* if project length is 0 the showing no projects com. else render all projects */}
         {projects.length==0 ?<NoProject />:
         <RenderProjects
          projects={projects}/>}
      </div>

      {/* modal to take user name and email */}
      <Usermodal isOpen={isOpen} onClose={onClose}/>
    </main>
  )
}
