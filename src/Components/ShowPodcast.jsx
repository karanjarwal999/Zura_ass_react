import { Table, TableContainer, Tbody, Th, Thead, Tr, useDisclosure } from "@chakra-ui/react";
import React from "react";
import AddPodcast from "./Modals/AddPodcast";
import { DeletePodcast } from "../Redux/data_functionns";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function ShowPodcast({ Project }) {
  const Navigate= useNavigate()
  const dispatch = useDispatch()
  const { isOpen, onOpen, onClose } = useDisclosure();
  const project = useSelector((store)=>store.singleProject)
  
  let uplodeOption = [
    {
      name: "Youtube Vedio",
      Link: "/icons/youtube_icon.webp",
    },
    {
      name: "Spotify Podcast",
      Link: "/icons/spotify_icon.webp",
    },
    {
      name: "RSS Feed",
      Link: "/icons/ress_icon.webp",
    },
  ];
  return (
    <div>
      <h3 className="text-[#7E22CE] font-bold text-[40px] my-4 capitalize">
        {Project.name}
      </h3>
      <div className="flex gap-5">
        {uplodeOption.map((card,ind) => (
          <div key={ind} onClick={onOpen}
            id="box-shadow"
            className="p-3 flex items-center gap-5 w-[25%] rounded-lg font-bold border-[1px] border-[gray]"
          >
            <img
              className="w-[60px] h-[50px]"
              src={card.Link}
              alt="Example SVG"
            />
            <div>
              <p>Uplode</p>
              <p>{card.name}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="my-[30px] rounded-lg bg-[#7E22CE] flex justify-between items-center py-4 px-6">
        <p className="text-white text-[20px] font-semibold">
          All files are processed! Your widget is ready to go!
        </p>
        <button className="text-[#7E22CE] bg-white py-2 px-3 font-semibold rounded-lg">
          Try it Out!
        </button>
      </div>
      <TableContainer id='box-shadow' className="border-gray-300 border-[2px] rounded-lg">
        <Table >
          <Thead >
            <Tr >
              <Th><b>Name</b></Th>
              <Th><b>Upload Date & Time</b></Th>
              <Th><b>Status</b></Th>
              <Th><b>Action</b></Th>
            </Tr>
          </Thead>
          <Tbody>
            {Project.podcast?.map((el,ind) => (
              <Tr key={ind}>
                <Th>{el.title}</Th>
                <Th>{el.time}</Th>
                <Th>Done</Th>
                <Th>
                  <button onClick={()=>Navigate(`/Transcript?id=${el._id}`)} className="py-1 px-3 border-[1px] border-gray-300">Edit</button>
                  <button onClick={()=>dispatch(DeletePodcast(project._id,el._id))} className="text-[red] py-1 px-3 border-[1px] border-gray-300 cursor-pointer">Delete</button>
                </Th>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <AddPodcast isOpen={isOpen} onClose={onClose}/>
    </div>
  );
}

export default ShowPodcast;