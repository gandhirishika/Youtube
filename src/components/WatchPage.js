import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import CommentContainer from "./CommentContainer";
import Comment from "./CommentContainer";
import LiveChat from "./LiveChat";

const WatchPage = ({ info }) => {
  const [searchParams] = useSearchParams();
  // console.log(searchParams.get("v"));

  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="flex flex-col w-full">
      <div className="px-5 m-2 flex w-full">
        <div className="">
          <iframe
            width="800"
            height="400"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="w-full p-2 ">
          <LiveChat />
        </div>
      </div>
      <CommentContainer />
    </div>
  );
};

export default WatchPage;
