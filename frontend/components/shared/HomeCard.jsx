import React from "react";

import ImageCarousel from "./ImageCarousel";
import { Button } from "../ui/button";

export default function HomeCard({item}) {
  return (
    <div className="m-7 px-4  rounded-2xl shadow-2xl flex flex-col ">
      <div className="w-full">
        <ImageCarousel />
      </div>
      <div className="px-5 py-4 flex flex-col gap-3">
        <div className="flex flex-row justify-between mt-3">
          <h1 className='font-bold text-2xl'>{item?.propertyName}</h1>
          <p className='text-xl'>Rs. {item?.price}/-</p>
        </div>
        <p>{item?.bhkType} {item?.type} {item?.houseType}</p>
        <p className="text-lg">{item?.furnished}</p>
        <p className='text-sm'>{item?.location}</p>
      </div>
      <Button className='mb-5'>View details</Button>
    </div>
  );
}
