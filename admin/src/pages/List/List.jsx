import React, { useEffect, useState } from 'react'
import './List.css'
import axios from 'axios'
import { toast } from 'react-toastify'
import { url_demo } from '../../Config/config'
const List = () => {
  const [list, setList] = useState([])
  const fechList = async () => {
    const res = await axios.get(`${url_demo}/api/food/list`)

    if(res.data.success){
      setList(res.data.data)
    }else{
      toast.error(`Error:${res.data.message}`)
    }
  }
  const removeFood = async (foodId) => {
    const res = await axios.post(`${url_demo}/api/food/remove`,{id: foodId})
    if(res.data.success){
      toast.success(res.data.message)
    }else{
      toast.error(res.data.message)
    }
    await fechList();
  }
  useEffect(()=> {
    fechList();
  },[])
  return (
    <div className='list add flex-col'>
        <p>All Food List</p>
       <div className="list-table">
          <div className="list-table-format title">
            <b>Image</b>
            <b>Name</b>
            <b>Category</b>
            <b>Price</b>
            <b>Action</b>
          </div>
          {list.map((item, index) => {
            return(
              <div key={index} className="list-table-format">
                <img src={`${url_demo}/images/` + item.image} alt=''  />
                <b>{item.name}</b>
                <b>{item.category}</b>
                <b>${item.price}</b>
                <b onClick={()=> removeFood(item._id)} className='cursor'>x</b>
              </div>
            )
          })}
       </div>
    </div>
  )
}

export default List
