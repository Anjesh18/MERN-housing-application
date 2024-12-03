import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import axios from "axios";
import { MoveLeft } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function HouseDescription() {
  const [data, setData] = useState({});
  const [postedBy, setPostedBy] = useState({});
  const [postedDate,setPostedDate]=useState('')
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://localhost:9000/api/houses/house/${id}`,
        { withCredentials: true }
      );
      if (response.data.success == true) {
        setData(response.data.house);
        setPostedBy(response.data.house.postedBy);
        setPostedDate(response.data.house.createdAt)
        console.log(response.data.house);
      }
    };
    fetchData();
  }, [id]);
  const postDate = (date) => {
    return date.split("T")[0];
  };
  const navigate=useNavigate()
  return (
   <div>
    <button className='mt-5' onClick={()=>navigate('/browse')}><MoveLeft/></button>
    <div className="mx-auto max-w-6xl my-7">
      <Carousel>
        <CarouselContent>
          {data?.pictures?.map((item) => (
            <CarouselItem>
              <img className="w-full h-[400px]" src={item} alt="picture" />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      {data?.pictures?.length > 1 ? (
        <p className="flex justify-center font-semibold text-sm my-2">
          Swipe to see more images
        </p>
      ) : (
        <></>
      )}
      
     <div className='px-11'>
     <div className="flex flex-row justify-between my-6 ">
        <p className="text-4xl font-bold ">{data.propertyName}</p>
      </div>
     <div className="flex flex-row-reverse justify-between mb-3">
        <h1 className="text-2xl font-semibold">Rs.{data?.price}/-</h1>
        <p className="text-xl font-semibold">
          {data?.bhkType} {data?.type} {data?.houseType}
        </p>
      </div>

      <p className="text-lg mb-3">Address: {data?.location}</p>
      <div className="flex flex-row justify-between text-lg mb-3 ">
        <p>Furnished: {data?.furnished}</p>
        <p>For: {data?.tenantType}</p>
      </div>
      <div className="flex flex-row justify-between text-lg mb-3 ">
        <span>Bathrooms: {data.bathrooms}</span>
        <p>Balconies: {data?.balconies}</p>
      </div>
      <div className="flex flex-row justify-between text-lg mb-3 ">
        <p>Buildup Area: {data?.buildupArea} sq km</p>
        <p>Carpet area: {data?.carpetArea} sq km</p>
      </div>

      <p className="text-lg mb-3 ">
        Security deposit: <span className="text-xl font-semibold">Rs.{data?.securityDeposit}/-</span> 
      </p>
      <p className="flex flex-row justify-between">
       <span>Posted by: {postedBy.fullname}</span> 
        <span>Posted on: {postDate(postedDate)}</span>
      </p>
     </div>
    </div>
   </div>
  );
}
