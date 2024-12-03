import HeroSection from '@/components/shared/HeroSection'
import HomeCards from '@/components/shared/HomeCards'
import Navbar from '@/components/shared/Navbar'
import { setHouses } from '@/redux/HouseSlice'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export default function Home() {
  const dispatch=useDispatch()
  useEffect(()=>{
    const fetchData=async()=>{
      const response=await axios.get('http://localhost:9000/api/houses/getHouses')
      if(response.data.success==true){
        dispatch(setHouses(response.data.houses))
      }
    }
    fetchData()
  },[])
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <HomeCards/>
    </div>
  )
}
