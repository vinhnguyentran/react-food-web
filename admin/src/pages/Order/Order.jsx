import React from 'react'
import './Order.css'
import axios from 'axios'
import { toast } from 'react-toastify'
import { url_demo } from '../../Config/config'
const Order = () => {
  const [listOrder, setListOrder] = useState([])
  const fechList = async () => {
    const res = await axios.get(`${url_demo}/api/order/list`)
    if(res.data.success){
      setListOrder(res.data.data)
    }else{
      toast.error(`Error:${res.data.message}`)
    }
  }
  return (
    <div className='order'>
      <p>All Order List</p>
       <div className="order-table">
          <div className="order-table-format title">
            <b>Name Customer</b>
            <b>OrderID</b>
            <b>OrderInfo</b>
            <b>Status</b>
            <b>Action</b>
          </div>
          {listOrder.map((item, index) => {
            return(
              <div key={index} className="order-table-format">
                <b>{item.cusName }</b>
                <b>{item.orderId}</b>
                <div>
                  <b>{item.orderInfo.date}</b>
                  <b>{item.orderInfo.phone}</b>
                  <b>{item.orderInfo.info}</b>
                  <b>{item.orderInfo.date}</b>
                </div>
                <b>${item.status}</b>
                <b onClick={()=> removeFood(item._id)} className='cursor'>x</b>
              </div>
            )
          })}
       </div>
    </div>
  )
}

export default Order
