import React, { useContext } from 'react'
import './Cart.css';

import { StoreContext } from './../../context/StoreContext';
import { useNavigate } from 'react-router-dom';
const Cart = () => {
  const {cartItem, food_list, removeCartItem, getTotalCartAmount,url} = useContext(StoreContext)
  const navigate = useNavigate()
  return (
    <div className='cart' >
      <div className="cart-item">
        <div className="cart-item-title">
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr/>
        <br/>
        {food_list.map((item,index) => {
          if(cartItem[item._id]>0){
            return(
              <div className='cart-item-title cart-items-item' key={index}>
                <img src={url + '/images/' + item.image} alt=''/>
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItem[item._id]}</p>
                <p>${item.price*cartItem[item._id]}</p>
                <p onClick={() => removeCartItem(item._id)} className='cross'>x</p>
              </div>
            )
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-detail">
              <p>Subtotal</p>
              <p>{getTotalCartAmount()}</p>
            </div>
            <hr/>
            <div className="cart-total-detail">
              <p>Delivery Free</p>
              <p>{getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
              <p>Total</p>
              <p>{getTotalCartAmount()===0?0:getTotalCartAmount()+2}</p>
            </div>
          </div>
          <button onClick={() => navigate('/place')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, Enter it here</p>
            <div className="cart-promocode-input">
              <input type='text' placeholder='promo code'/>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
