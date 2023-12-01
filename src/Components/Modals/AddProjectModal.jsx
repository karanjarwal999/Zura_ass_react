import { AddProject } from "../../Redux/data_functionns";
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
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

function AddProjectModal({ isOpen, onClose }) {
  const [warning,setWarning]=useState('')
  const [projectData,setProjectData] = useState('')
  const dispatch= useDispatch()
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
  if(!projectData){
    setWarning('Project name is required')
  }else{
    onClose()
    // adding project to store and mongodb
    let message = dispatch(AddProject({name:projectData},showToast))
  }
}

  return (
    <div>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW={"800px"}>
          <div className=" p-[30px] text-[25px] flex flex-col gap-5 ">
            <h4 className="font-bold text-[35px]">Create Project</h4>
            <div className="flex flex-col gap-3">
              <label htmlFor="projectName">Enter Project Name :</label>
              <Input
                type="text"
                fontSize={"20px"}
                placeholder="Type here"
                height={"50px"}
                onChange={(e)=>setProjectData(e.target.value)}
              />
              <p className={`text-red-600 opacity-${warning?80:0}`}>{warning}</p>
            </div>
            <div className=" flex gap-5 justify-end">
              <button onClick={onClose} className="text-red-600">Cancel</button>
              <button onClick={handleSubmit} className="bg-purple-500 text-white py-[10px] px-[20px] rounded-[10px]">Create</button>
            </div>
          </div>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default AddProjectModal;