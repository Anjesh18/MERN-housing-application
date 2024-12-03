import { setKeyword } from "@/redux/HouseSlice";
import { Search } from "lucide-react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate=useNavigate()
  const handleClick=()=>{
    dispatch(setKeyword(word))
    navigate('/searchResults')
  }
  const [word,setWord]=useState("")
  const dispatch=useDispatch()
  return (
    <div className="flex flex-col items-center justify-center my-16">
      <div>
        <h1 className="text-4xl text-[#6848c2]">
          Find your dream house
          <div className="my-6 text-red-600">
            <span>or post for rent. </span>
          </div>
        </h1>
      </div>
      <div className="flex w-[40%] gap-3 border border-gray-200 shadow-lg rounded-full items-center mx-auto my-10">
        <input
          type="text"
          placeholder="Search for properties or locations"
          onChange={(e)=>setWord(e.target.value)}
          className="p-4 rounded-full outline-none border-none w-full"
        />
       <button onClick={()=>handleClick()}> <Search className='mr-5 bg-gren-400'/></button>
      </div>
    </div>
  );
}
