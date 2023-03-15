import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS } from '../utils/config'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'
const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(()=>{
  getVideo();
},[]);

  const getVideo = async () =>{
    const data = await fetch (YOUTUBE_VIDEOS);
    const json = await data.json()
    console.log(json);
     setVideos(json.items)
  }
  return (
    <div className='flex flex-wrap ml-5 p-10'>
      {
        videos.map((video) =>(
          <Link to = {"/watch?v="+ video.id}>
          <VideoCard  key= {video.id} info={video} />
          </Link>
          ))}
       
    </div>
  )
}

export default VideoContainer
