import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { title, channelTitle, thumbnails } = snippet;
  return (
    <div className="p-2 w-60 shadow-lg">
      <img className="rounded-lg" src={thumbnails.medium.url} alt="thumbnail" />
      <ul>
      <li className="font-bold py-2">{title}</li>
      <li className="font-light">{channelTitle}</li>
      <li className="font-light">{statistics.viewCount} views</li>
      </ul>
      
    </div>
    
  );
};

export default VideoCard;
