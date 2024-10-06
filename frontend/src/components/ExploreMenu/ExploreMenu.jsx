import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore Our Menu</h1>
        <p className="explore-menu-text">
        Enjoy a perfect blend of flavors and textures, crafted with the freshest ingredients for a truly satisfying meal.
        </p>
        <div className="explore-menu-list">
            {
                menu_list.map((item,index)=>{
                    return (
                        <div className="explore-ment-list-item" key={index}>
                            <img 
                            onClick={()=>setCategory((prev)=> prev===item.menu_name ?"All":item.menu_name)}
                            className={category===item.menu_name ? "Active":""}
                            src={item.menu_image} 
                            alt="" />
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })
            }
        </div>
        <hr />
        
      
    </div>
  )
}

export default ExploreMenu
