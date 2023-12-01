import { AddPodcastFunc, AddProject } from "../../Redux/data_functionns";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function AddPodcast({ isOpen, onClose }) {
  const [warning,setWarning]=useState('')
  const [podcastData,setPodcastData] = useState({})
  const dispatch= useDispatch()
  const Project = useSelector((store)=>store.singleProject)
  const toast = useToast()

  // function to show toast
  function showToast(message,status='success') {
    toast({
        position:'top',
        title: message,
        status: status,
        duration: 5000,
        isClosable: true,
      })
  }


function handleSubmit() {
  if(!podcastData.name){
    setWarning('Podcast name is required')
  }
  else if(!podcastData.description){
    setWarning('Podcast description is required')
  }else{
    // closing modal
    onClose()
    // adding poadcast 
    dispatch(AddPodcastFunc(Project._id,podcastData,showToast))
  }
}

  return (
    <div>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW={"800px"}>
          <div className=" p-[20px] text-[20px] flex flex-col gap-3 ">
            <h4 className="font-bold text-[30px]">Create Podcast</h4>
            <div className="flex flex-col gap-3">
              <label htmlFor="projectName">Name :</label>
              <Input
                type="text"
                fontSize={"20px"}
                placeholder="Type here"
                height={"40px"}
                onChange={(e)=>setPodcastData((prev)=>({...prev,"name":e.target.value}))}
              />
              <label htmlFor="projectName">Description :</label>
              <Textarea
                type="text"
                fontSize={"20px"}
                placeholder="Type here"
                height={"50px"}
                onChange={(e)=>setPodcastData((prev)=>({...prev,"description":e.target.value}))}
              />
              <p className={`text-red-600 opacity-${warning?80:0}`}>{warning}</p>
            </div>
            <div className=" flex gap-5 justify-end">
              <button onClick={handleSubmit} className="bg-purple-500 text-white py-[10px] px-[20px] rounded-[10px]">Create</button>
            </div>
          </div>
        </ModalContent>
      </Modal>
    </div>
  );
}


export default AddPodcast
