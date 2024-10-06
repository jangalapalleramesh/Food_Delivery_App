import React, { useEffect, useState } from 'react'
import './Add.css'
import { assets } from '../../assets/assets'
import { toast } from 'react-toastify';
import axios from 'axios';

const Add = ({url}) => {
  
  const [image,setImage] = useState(null);

  const [data,setData] = useState({
    name:"",
    description:"",
    price:"",
    category:"Salad",
  })

  const onChangeHandler = (event)=>{
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({...data,[name]:value}))
  }

  // useEffect(()=>{
  //   console.log(data);
  // },[data])

  const onSubmitHandler = async(e) => {
    e.preventDefault();
    const formData  = new FormData();
    formData.append("name",data.name);
    formData.append("description",data.description);
    formData.append("price",Number(data.price));
    formData.append("category",data.category);
    formData.append("image",image);

    const response = await axios.post(`${url}/api/food/add`,formData);
    if(response.data.success){
      setData({
        name:"",
        description:"",
        price:"",
        category:"Salad",
      })
      setImage(null);
      toast.success(response.data.message)
    }
    else{  
      toast.error(response.data.message)
    }

  }

  return (
    <div className='add'>
      <form className="flex-col" onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img src={image?URL.createObjectURL(image):assets.upload_area} alt="" />
          </label>
          <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="image" hidden required/>
        </div>
        <div className="add-product-name flex-col">
          <p>Product Name</p>
          <input onChange={onChangeHandler} value = {data.name} type="text" name='name' placeholder='add product name' />
        </div>
        <div className="add-product-description flex-col">
          <p>Product Description</p>
          <textarea onChange={onChangeHandler} value = {data.description} name="description" id="" rows='6' placeholder='write content' ></textarea>
        </div>

        <div className="add-category-price">
          <div className="product-category flex-col">
            <p>Product Category</p>
            <select name="category" id="" onChange={onChangeHandler} value={data.category}>
              <option value='Salad'>Salad</option>
              <option value='Rolls'>Rolls</option>
              <option value='Deserts'>Deserts</option>
              <option value='Sandwich'>Sandwich</option>
              <option value='Cake'>Cake</option>
              <option value='Pure Veg'>Pure Veg</option>
              <option value='Pasta'>Pasta</option>
              <option value='Noodles'>Noodles</option>
            </select>
          </div>
          <div className="product-price flex-col">
            <p>Product Price</p>
            <input onChange={onChangeHandler} value = {data.price} type="number" name='price' placeholder='$20'/>
          </div>
        </div>
        <button className='add-btn' type='submit'>ADD</button>
      </form>
      
    </div>
  )
}

export default Add
