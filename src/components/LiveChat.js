import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ChatMsg from "./ChatMsg";
import { addMsg } from "../utils/chatSlice";
import { generate, makerandomMsg } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState();
  const dispatch = useDispatch();
  const chatMessage = useSelector((store) => store.chat.msg);
  useEffect(() => {
    const i = setInterval(() => {

      // console.log('Api pollung');
      dispatch(
        addMsg({
          name: generate(),
          msg: makerandomMsg(20),
        })
      );
    }, 500);

    return () => clearInterval(i);
  }, []);

  return (
    <>
    <div className="w-full h-[400px] p-2 ml-2 border  border-gray-600 bg-slate-100 rounded-lg flex flex-col-reverse overflow-y-scroll">
       {
       
       chatMessage.map((c, i) => (
        <ChatMsg name={c.name} msg={c.msg} key={i} />
      ))
      
      } 
      {/* <ChatMsg name = 'risjika' msg= 'heumx'/> */}
      
    </div>
    <form className="w-full  p-2 ml-2 border border-black"    
    onSubmit={(e) => {e.preventDefault();
      dispatch(addMsg({
        name:'Rishika',
        msg:liveMessage,
      }))   
    
    }}>
      <input className="w-96" type='text'
      value={liveMessage}
      onChange = {(e)=> {setLiveMessage(e.target.value)}
     
    }
      
      />
      <button className="px-2 m-2 bg-green-300">Send</button>
    </form>
    </>
  );
};

export default LiveChat;
