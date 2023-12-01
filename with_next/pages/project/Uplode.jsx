import NOPodcast from "@/Components/NOPodcast";
import ShowPodcast from "@/Components/ShowPodcast";
import SideNavbar from "@/Components/SideNavbar";
import { fetchSingleProject } from "@/Redux/data_functionns";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function index() {
  const router = useRouter();
  const dispatch = useDispatch();

  const Project = useSelector((store)=>store.singleProject)
  console.log(Project)

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
    if (router.query.id) {
      dispatch(fetchSingleProject(router.query.id));
    }
  }, [router.isReady]);
  return (
    <SideNavbar>
      {Project?.podcast?.length==0?<NOPodcast/>:<ShowPodcast Project={Project}/>}
    </SideNavbar>
  );
}

export default index;
