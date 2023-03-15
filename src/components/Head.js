import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_API } from '../utils/config';

const Head = () => {
  const[searchQuery , setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions , setshowSuggestions] = useState(false);

  useEffect(() =>{
    
const timer  = setTimeout(() => getSearchSuggestion(),200);
return () => {
  clearTimeout(timer);
}}, [searchQuery]);


  const getSearchSuggestion =  async () => {
    const data = await fetch(YOUTUBE_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);

  } 


    const dispatch = useDispatch();

    const toggleMenuHandler = () => {
        dispatch(toggleMenu());

    };


  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
       <div className='flex col-span-1'>
        <img onClick={() => toggleMenuHandler()} className='menu h-8 cursor-pointer' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAV1BMVEX///90d3lxdHZtcHJqbW/AwcHk5eWVmJlnam1rbnCpq6yBhIb5+fnHyMng4eH29veKjI6ztLWipKV5fH6OkZLZ2tvq6+vLzMy5u7zIycnR0tLCw8OanJ7n5uYQAAACyUlEQVR4nO3di27iMBCFYcfOFodbEiBAgfd/ziXQSlvJNqkWCc3h/54gR3ac1p4xzgEAAAAAAAAAAAAAAAAoa4fVH2tWQzs13vK4qJtgT1MvjsspAfsYfGWTD7F/mG+/Da9+zv8StvtywKG2On7ffD2UAn7EVz/gE8SPfMCl7Rn6LeTXm5n1KXrnZ7mAa4U5Oopr7SHMD2KrMoTXQUz/eXPQWGdG4ZBMOFeZpNdpOk8m3Akl3CUTLoQSLt40YSeUsEsm3Agl3CQTnoW+Fudkwr3QFz/zT6LMUpNZaJw71a9+tCepT5mEKoOYHUKZNzH3Fo7OChFjeiH9crQfMR5LAZ37jLbfRR8/ywGv72JneEPR192D7dKbYReb4O0JTdwV90r/0Z76zcyaTX+afDQDAAAAAAAAAAAAYDL180P1M2D5c/yV+VqMVTmgfD2NfE2UROtasXlNvjbxIFNfmm6ZkRnC/CCKVJeOMhWm+rX6+v0W+j0zMgvNG3d26fcf6veQ6vcB6/dy6/fjv8GdCiqDmL8X4w3uNtH4J790P41zg/GttnGz7cGeqfw9UU7/ri93u68tmryvLU68r23UDquzNb+4cw8AAAAAAAAAAADAdKd5V726i+nXqm6evSD5p2UfGm/xnNv7JvQTDoFXwXKpQggP2p6cu1ivqImXcsCd5QG8C+nq2S8b+wGvEdOF+jcn61P0LubXVIsraIrPBTwqzNFRyDVZvvrBnigdcK3SnFdVdbpIWGaSZqfpRWWhuS416c8+nV2GvG1nl0gvwijTj9ALraXpYuihefWDPU2TqdcX+uKnA+o0IGbaD51rVQaxzta0i6w1mXXmRuKTWPhRMueWlf2IviruKLbG257GxqdHjSUX091r/tFm4mhYRJNb3uOmd1xM+0mr9Xzb1PY023mxt/Kn5f7Dmv3kvjUAAAAAAAAAAAAAUPUXCyx+ltjBidoAAAAASUVORK5CYII="alt="loading"/>
       
       <a href= '/'>
        <img className='logo h-8 mx-2 ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb_XTeiko8LPcXs2zYYhVBuAbdWA2m-Zv5fA&usqp=CAU"alt="loading"/>
        </a>
       </div>
       <div className='col-span-10' >
       <div> <input  
        className='w-1/2 px-10 border border-gray-500 p-2 rounded-l-full'
        placeholder='type your show' 
        type="text" 
        value = {searchQuery}
        onChange = {(e) => setSearchQuery(e.target.value)}
        onFocus = {() =>setshowSuggestions(true)}
        onBlur = {() => setshowSuggestions(false)}
        />
        <button className='border  px-5 py-2 rounded-r-full border-gray-400 bg-gray-200'> 🔍</button>
       </div>
      {showSuggestions && (
      <div className='absolute bg-white shadow-lg rounded-lg px-2 py-2 w-2/5'>
        <ul>
        {suggestions.map((s) =>(
        <li key = {s} className='py-2 shadow-sm hover:bg-slate-300'>🔍 {s}</li>))}
        </ul>
       </div>
       )}
       
       
       </div>
       <div className='col-span-1'>
        <img  src="data:image/png;base64,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"
        alt = "loading" className='h-8'/>
       </div>
    </div>
   
  )
}

export default Head
