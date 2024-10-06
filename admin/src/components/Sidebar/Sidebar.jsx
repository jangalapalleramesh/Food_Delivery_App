import React from 'react'
import './Sidebar.css'
import {assets} from '../../assets/assets.js'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-options">
        <NavLink to='/add' className="sidebar-option">
          <img src={assets.add_icon} alt="" />
          <p>Add_Items</p>
        </NavLink>
        <NavLink to = '/list' className="sidebar-option">
          <img src={assets.order_icon} alt="" />
          <p>List_Items</p>
        </NavLink>
        <NavLink to = '/order' className="sidebar-option">
          <img src={assets.order_icon} alt="" />
          <p>Order_Items</p>
        </NavLink>
      </div>
      
    </div>
  )
}

export default Sidebar
