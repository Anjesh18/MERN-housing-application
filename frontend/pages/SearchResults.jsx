import HouseCard from '@/components/shared/HouseCard'
import axios from 'axios'
import { MoveLeft, Store } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function SearchResults() {
    const {keyword}=useSelector(store=>store.house)
    const [data,setData]=useState([])
    useEffect(()=>{
        const fetchData=async()=>{
            const response=await axios.get(`http://localhost:9000/api/houses/get?q=${keyword}`)
            if(response.data.success==true){
                console.log("success")
                setData(response.data.results)
            }

        }
        fetchData()
    },[])
    const navigate=useNavigate()
  return (
    <div>
        <button onClick={()=>navigate('/')}><MoveLeft/></button>
     {data.map((item)=><HouseCard item={item} key={item?._id}/>)}
    </div>
  )
}
