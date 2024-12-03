import React from 'react'
import HomeCard from './HomeCard'
import { useSelector } from 'react-redux'

export default function HomeCards() {
    const {houses}=useSelector(store=>store.house)
  return (
    <div className='max-w-7xl mx-auto '>
      <h1 className='text-3xl font-bold '>Latest posted flats/houses:</h1>
      <div className=' grid grid-cols-2 max-w-7xl mx-auto'>
      {houses.slice(0,10).map((item,idx)=>(
        <HomeCard key={idx} item={item}/>
      ))}
      </div>
    </div>
  )
}
