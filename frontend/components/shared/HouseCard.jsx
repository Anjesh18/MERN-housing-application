import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
} from "../ui/carousel";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

export default function HouseCard({ item }) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-6 shadow-2xl rounded-2xl mx-auto max-w-6xl my-11 ">
      <Carousel className="">
        <CarouselContent>
          {item?.pictures?.map((pic) => (
            <CarouselItem>
              <img
                className="w-[1100px] h-[250px] mx-auto"
                src={pic}
                alt="picture"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="px-11 py-7 flex flex-col gap-5 ">
        <div className="flex flex-row justify-between ">
          <h1 className="text-3xl font-extrabold ">{item?.propertyName}</h1>
          <p className="text-xl"> {item?.furnished}</p>
        </div>
        <div className="flex flex-row justify-between">
          <p className="text-xl font-bold">Rs.{item?.price}/-</p>
          <p className="text-xl">
            {item?.bhkType} {item?.type} {item?.houseType}
          </p>
        </div>
        <span> {item?.location}</span>
        <Button onClick={() => navigate(`/description/${item._id}`)}>
          View details
        </Button>
      </div>
    </div>
  );
}
