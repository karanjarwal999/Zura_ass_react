import SideNavbar from "../Components/SideNavbar";
import { uplodefile } from "../Redux/data_functionns";
import {
  Input,
  Select,
  Switch,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Image, Transformation, CloudinaryContext } from "cloudinary-react";

function Widget_Configurations() {
  const [file, setFile] = useState();
  const [color,Setcolor]=useState({primary:'#7BD568',font:'black'})
  const dispatch = useDispatch();
  const toast = useToast();
  const project = useSelector((store) => store.singleProject);
  console.log(project);

  function handleChange(e) {
    setFile(e.target.files[0]);
    // uploding image to server
    dispatch(uplodefile(e.target.files[0], project._id, showToast));
  }

  // function to show toast
  function showToast(message, status = "success") {
    toast({
      position: "top",
      title: message,
      status: status,
      duration: 5000,
      isClosable: true,
    });
  }

  return (
    <SideNavbar>
      <h3 className="text-[#7E22CE] text-[35px] font-bold my-5">
        Configuration
      </h3>

       {/* 3 tabs are created */}
      <Tabs >
        <TabList mb="1em" className="border-b-[2px] border-gray-300">
          <Tab className="font-bold">Genaral</Tab>
          <Tab className="font-bold">Display</Tab>
          <Tab className="font-bold" isDisabled>Advanced</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <form className="flex flex-col gap-2">
              <label className="font-semibold text-[25px] " htmlFor="name">
                ChatBot Name
              </label>
              <div>
                <Input type="text" id="name" placeholder="example"/>
                <p className="text-[12px]">Lorem ipsum dolor sit amet.</p>
              </div>
              <label className="font-semibold text-[25px] " htmlFor="message">
                Welcome Message
              </label>
              <div>
                <Input type="text" id="message"  placeholder="hiiii"/>
                <p className="text-[12px]">Lorem ipsum dolor sit amet.</p>
              </div>
              <label className="font-semibold text-[25px] " htmlFor="placeholder">
                Input Placeholder
              </label>
              <div>
                <Input type="text" id="placeholder" />
                <p className="text-[12px]">Lorem ipsum dolor sit amet.</p>
              </div>
            </form>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-2 gap-5 gap-x-10">
              <div>
                <label
                  className="font-semibold text-[25px]"
                  htmlFor="pamaryColor"
                >
                  Primary Color
                </label>
                <div className="flex gap-3">
                  <Input type="text" id="pamaryColor" value={color.primary} onChange={(e)=>Setcolor((prev)=>({...prev,primary:e.target.value}))}/>
                  <span style={{backgroundColor:color.primary}} className="w-[40px] h-[40px] border-[1px] border-gray-300"></span>
                </div>
                <p className="text-[12px]">Lorem ipsum dolor sit amet.</p>
              </div>

              <div>
                <label
                  className="font-semibold text-[25px]"
                  htmlFor="fontColor"
                >
                  Font Color
                </label>
                <div className="flex gap-3">
                  <Input type="text" id="fontColor" value={color.font} onChange={(e)=>Setcolor((prev)=>({...prev,font:e.target.value}))}/>
                  <span style={{backgroundColor:color.font}} className="w-[40px] h-[40px] border-[1px] border-gray-300"></span>
                </div>
                <p className="text-[12px]">Lorem ipsum dolor sit amet.</p>
              </div>

              <div>
                <label className="font-semibold text-[25px]" htmlFor="fontSize">
                  Font Size (in px)
                </label>
                <div>
                  <Input type="text" id="fontSize" placeholder="20"/>
                  <p className="text-[12px]">Lorem ipsum dolor sit amet.</p>
                </div>
              </div>

              <div>
                <label
                  className="font-semibold text-[25px]"
                  htmlFor="CharHeight"
                >
                  Chat Height (in % of total screen)
                </label>
                <div>
                  <Input type="text" id="CharHeight" placeholder="15"/>
                  <p className="text-[12px]">Lorem ipsum dolor sit amet.</p>
                </div>
              </div>

              <div className="flex justify-between items-center col-span-2">
                <div>
                  <h5 className="font-semibold text-[25px]">Show Sources</h5>
                  <p className="text-[12px]">Lorem ipsum dolor sit amet.</p>
                </div>
                <Switch size="lg" defaultChecked />
              </div>
            </div>
            <hr className="my-[30px] border-[1px] border-gray-300" />
            <h4 className="text-[#7E22CE] font-bold text-[25px] mb-3">
              Chat Icon
            </h4>
            <div className="grid grid-cols-2 gap-5 gap-x-10">
              <div>
                <label className="font-semibold text-[25px]" htmlFor="chatSize">
                  Chat Icon Size
                </label>
                <Select type="text" id="chatSize">
                  <option >X small</option>
                  <option >small</option>
                  <option >medium</option>
                  <option >large</option>
                  <option >X large</option>
                </Select>
              </div>
              <div>
                <label
                  className="font-semibold text-[25px]"
                  htmlFor="positionScreenr"
                >
                  Position on Screen
                </label>
                <Select type="text" id="positionScreenr">
                  <option >Bottom-left</option>
                  <option >Bottom-right</option>
                  <option >top-left</option>
                  <option >top-rigth</option>
                  <option >center</option>
                </Select>
              </div>
              <div>
                <label
                  className="font-semibold text-[25px]"
                  htmlFor="distanceH"
                >
                  Horizontal Distance (in px)
                </label>
                <Input type="text" id="distanceH"  placeholder="20"/>
              </div>
              <div>
                <label
                  className="font-semibold text-[25px]"
                  htmlFor="distanceB"
                >
                  Distance from Bottom (in px)
                </label>
                <Input type="text" id="distanceB" placeholder="20"/>
              </div>
              <div>
                <label
                  className="font-semibold text-[25px]"
                  htmlFor="custom-file-input"
                >
                  Chat Icon (in px)
                </label>
                <div className="flex gap-5 my-2 items-center">
                  {project.image?<img className="w-[100px] h-[100px] rounded-[100%]" src={project.image} alt="" />:<p className="w-[100px] h-[100px] rounded-[100%] bg-gray-300"></p>}
                  <div>
                    <input 
                      id="custom-file-input"
                      type="file"
                      onChange={handleChange}
                    />
                    <p className="text-[12px]">Recommended Size: 48x48px</p>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </SideNavbar>
  );
}

export default Widget_Configurations;
