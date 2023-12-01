import { useDisclosure } from "@chakra-ui/react"
import React from "react";
import { FiPlusCircle } from "react-icons/fi";
import AddProjectModal from "./Modals/AddProjectModal";

function NoProject() {

  // to open add project modal
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className="w-[1000px] m-auto flex flex-col gap-[15px]">
      <h2 className="text-center text-[50px] font-bold text-[#7E22CE] ">
        Create a New Project
      </h2>
      <img
        className="m-auto h-[271px] w-[405px]"
        src="/boyOnDesk.svg"
        alt="Example SVG"
      />
      <p className="text-[20px] text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in
      </p>
      <button
        onClick={onOpen}
        className="m-auto text-[30px] bg-black text-white flex items-center gap-2 rounded-[10px] py-[10px] px-[20px]"
      >
        <FiPlusCircle size={"30px"} />
        Create New Project
      </button>

      {/* add project modal */}
      <AddProjectModal isOpen={isOpen} onClose={onClose} />
    </div>
  );
}

export default NoProject;
