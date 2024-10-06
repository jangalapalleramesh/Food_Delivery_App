import React, { useContext, useState } from 'react'
import './NavBar.css'
// import logo from '../../assets/logo.jpeg'
// import cart from '../../assets/cart.svg';
// import search from '../../assets/search.svg';
import { assets } from '../../assets/assets';
import {Link, useNavigate} from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext';

const NavBar = ({showSignup,setShowSignup}) => {
    const [status,setStatus] = useState('menu');
    const {getTotalPrice,token,setToken} = useContext(StoreContext);
    const navigate = useNavigate();

    const logout = ()=>{
        localStorage.removeItem("token");
        setToken("");
        navigate("/")
    }
  return (
    <div className='navbar'>
        <Link to='/'><img src={assets.logo} alt="fhjfjjf" height='50' width='70' className='logo'/></Link>
        <ul className="navbar-menu">
            
            <Link to='/' onClick={()=>setStatus('home')}className={status==='home'?'active':''}>home</Link>
            <a href='#explore-menu' onClick={()=>setStatus('menu')}className={status==='menu'?'active':''}>menu</a>
            <a href='#app-download' onClick={()=>setStatus('mobile-app')}className={status==='mobile-app'?'active':''}>mobile-app</a>
            <a href='#footer' onClick={()=>setStatus('contact')}className={status==='contact'?'active':''}>contact us</a>
        </ul>
        <div className='navbar-right'>
            <img src={assets.search_icon} alt="" />
            <div className="navbar-search">
                <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
                <div className={(getTotalPrice()>0)?"dot":""}></div>
            </div>
            {(!token)?<button onClick={()=>setShowSignup(true)}>sign up</button>:
            <div className='navbar-profile'>
                <img src={assets.profile_icon} alt="" />
                <ul className="navbar-profile-dropdown">
                    <li onClick={()=>navigate('/myorders')}><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
                    <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>LogOut</p></li>
                </ul>

            </div>
            }

        </div>

      
    </div>
  )
}

export default NavBar
