import HouseCard from '@/components/shared/HouseCard'
import Navbar from '@/components/shared/Navbar'
import { setHouses } from '@/redux/HouseSlice'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Browse() {
    const {houses}=useSelector(store=>store.house)
    const dispatch=useDispatch()
    useEffect(()=>{
        const fetchData=async()=>{
            const response=await axios.get('http://localhost:9000/api/houses/getHouses', {withCredentials:true})
            if(response.data.success==true){
                console.log("success")
                dispatch(setHouses(response.data.houses))
            }
        }
        fetchData()
    },[])
  return (
    <div>
      <Navbar/>
      <div>
    {houses.map((item)=><HouseCard key={item._id} item={item}/>)}
      </div>
    </div>
  )
}
