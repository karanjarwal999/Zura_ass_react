import { Avatar, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { FiPlusCircle } from "react-icons/fi";
import AddProjectModal from "./Modals/AddProjectModal";
import { useNavigate } from "react-router-dom";

function RenderProjects({ projects }) {
  const router= useNavigate()
  // to open add project moadal
  const { isOpen, onOpen, onClose } = useDisclosure();

  // colors for avtar fallback
  let colors = ["#7E22CE","#F8A01D","#6366F1","#F8A01D","#6366F1","#7E22CE","#7E22CE","#6366F1","#F8A01D","#7E22CE","#F8A01D","#6366F1","#F8A01D","#6366F1","#7E22CE","#7E22CE","#6366F1","#F8A01D"];

  return (
    <div className="w-[1170px] mx-auto ">
      <div className="flex justify-between items-center mb-[20px]">
        <h2 className="text-[#7E22CE] text-[60px] font-bold">Projects</h2>
        <button
          onClick={onOpen}
          className="flex items-center gap-3 bg-black text-white px-[15px] py-[7px] rounded-[10px] text-[22px]"
        >
          <FiPlusCircle size={"25px"} />
          Create New Project
        </button>
      </div>
      <div className="grid grid-cols-3 gap-[40px]">
        {projects.map((project, ind) => (
          <div onClick={()=>router(`/Uplode?id=${project._id}`)}  key={ind}
            id="box-shadow"
            className="flex gap-5 cursor-pointer items-center rounded-[10px] p-[10px] border-2 border-gray"
          >
            <Avatar
              borderRadius={10}
              fontSize="3rem"
              fontWeight={"800"}
              color={"white"}
              width={"100px"}
              height={"100px"}
              bg={colors[ind]}
              name={project.name}
              src={project.image}
            />
            <div>
              <h4 className="text-25px font-bold capitalize text-[#7E22CE]">
                {project.name}
              </h4>
              <p className="text-15px">{project.podcast.length} Episodes</p>
            </div>
          </div>
        ))}
      </div>

      {/* add project modal */}
      <AddProjectModal isOpen={isOpen} onClose={onClose} />
    </div>
  );
}

export default RenderProjects;