import React from 'react'
import { Carousel, CarouselContent, CarouselItem} from '../ui/carousel'
export default function ImageCarousel() {
    const arr=[1,2,3,4,5,67,98]
  return (
    <div className='  mt-6'>
       <Carousel>
        <CarouselContent>
            {arr.map((item)=>(
                <CarouselItem><img className='mx-auto w-[500px] h-[150px] px-2' src='https://res.cloudinary.com/dgnmc58mq/image/upload/v1732955748/sq1rhavg5vdouq1gdmk5.png'/></CarouselItem>
            ))}
            
        </CarouselContent>
        
      </Carousel>
    </div>
  )
}
