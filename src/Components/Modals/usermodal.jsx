import { useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
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
  } from "@chakra-ui/react";
import { UPDATE_USER } from "../../Redux/actionTypes";

function Usermodal({ isOpen, onClose }) {
  const [warning, setWarning] = useState('');
  const [userData, setUserData] = useState({username:'',email:''});
  const dispatch = useDispatch();
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
    if (userData.username == "") {
      setWarning("Username can't be empty");
    } else if (userData.email == "") {
      setWarning("Email can't be empty");
    } else {

      // storing user data in store and localStorage
      dispatch({ type: UPDATE_USER, payload: userData });
      localStorage.setItem('user',JSON.stringify(userData))
      showToast("Data updated successfully");
      onClose()
    }
  }

  return (
    <div>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW={"800px"}>
          <div className=" p-[30px] text-[20px] flex flex-col justify-between ">
            <h4 className="font-bold text-[30px]">Enter Your Details </h4>
            <div className="flex flex-col gap-3">
              <label htmlFor="username">UserName :</label>
              <Input
                type="text"
                id="username"
                fontSize={"20px"}
                placeholder="Type here"
                height={"50px"}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, username: e.target.value }))
                }
              />
              <label htmlFor="email">Email :</label>
              <Input
                type="email"
                id="email"
                fontSize={"20px"}
                placeholder="Type here"
                height={"50px"}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, email: e.target.value }))
                }
              />
              <p className={`text-red-600 opacity-${warning ? 80 : 0}`}>
                {warning}
              </p>
            </div>
            <div className=" flex  justify-end">
              <button onClick={handleSubmit} className="bg-purple-500 text-white py-[10px] px-[30px] rounded-[10px]">
                Save
              </button>
            </div>
          </div>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default Usermodal;