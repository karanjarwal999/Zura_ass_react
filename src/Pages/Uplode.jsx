
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleProject } from "../Redux/data_functionns";
import SideNavbar from '../Components/SideNavbar'
import NOPodcast from '../Components/NOPodcast'
import ShowPodcast from '../Components/ShowPodcast'
import { useSearchParams } from "react-router-dom";

function Upload() {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  const Project = useSelector((store)=>store.singleProject)

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


  useEffect(() => {
    if (searchParams.get('id')) {
      dispatch(fetchSingleProject(searchParams.get('id')));
    }
  }, []);
  return (
    <SideNavbar>
      {/* if no prodacst for project render "nopoadcast"  else render them in form of table */}
      {Project?.podcast?.length==0?<NOPodcast/>:<ShowPodcast Project={Project}/>}
    </SideNavbar>
  );
}

export default Upload;