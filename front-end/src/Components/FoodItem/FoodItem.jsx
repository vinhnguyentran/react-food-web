import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
const FoodItem = ({id, name, price, description, image}) => {
  const {cartItem, addToCart, removeCartItem,url} = useContext(StoreContext)
  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img className='food-item-image' src={url+ '/images/'+ image} alt={name} />
        {!cartItem[id] ?
         <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white}/>
        :<div className='food-item-counter'>
            <img onClick={() => removeCartItem(id)} src={assets.remove_icon_red}/>
            <p>{cartItem[id]}</p>
            <img onClick={() => addToCart(id)} src={assets.add_icon_green}/>
          </div>}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
            <p>{name}</p>
            <img src={assets.rating_star} alt=''/>
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  )
}

export default FoodItem
