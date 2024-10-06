import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const {cartItems,food_list,removeFromCart,getTotalPrice,url} = useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <div className="cart">
      <div className="cart-item">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />

        {food_list.map((item,index)=>{
          if(cartItems[item._id]>0){
            return (
              <div>
              <div className="cart-items-title cart-items-item">
                <img src={url+'/images/'+item.image} alt="" />
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>{item.price*cartItems[item._id]}</p>
                <p className="cross" onClick={()=>removeFromCart(item._id)}>x</p>
              </div>
              <hr />
              </div>

            )
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>SubTotal</p>
              <p>{getTotalPrice()}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
              <p>DeliveryFee</p>
              <p>{2}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
              <p>Total</p>
              <p>{getTotalPrice()+2}</p>
            </div>
            <button onClick={()=>navigate('/placeOrder')}>Process to Proceed</button>
          </div>
        </div>

        <div className="cart-promocode">
          <div className="">
            <p>If you promocode enter here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder='Promocode' />
              <button>Submit</button>
            </div>
          </div> 
        </div>
      </div>
    </div>
  )
}

export default Cart
