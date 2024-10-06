import React, {useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import './LoginPopUp.css'
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';

const LoginPopUp = ({setShowSignup}) => {
    const[currentState,setCurrentState]=useState('Sign up');
    const{url,token,setToken} = useContext(StoreContext);
    //logic for connection frontend to database 
    const [data,setData] = useState({
        name:"",
        email:"",
        password:""
    });

    const onChangeHandler = (event)=>{
        const name = event.target.name;
        const value = event.target.value;

        setData(data=>({...data,[name]:value}));

    }

    const onLogin = async(event)=>{
        event.preventDefault();
        let newUrl = url;
        if(currentState === 'Sign up'){
            newUrl+='/api/user/register';
        }
        else{
            newUrl+='/api/user/login';
        }

        const response = await axios.post(newUrl,data);
        if(response.data.success){
            setToken(response.data.token);
            localStorage.setItem("token",response.data.token);
            setShowSignup(false);
        }
        else{
            alert(response.data.message);
        }
    }

 
  return (
    <div className='login'>
        <form onSubmit={onLogin} className="login-container">
            <div className="login-container-title">
                <h2>{currentState}</h2>
                <img onClick={()=>setShowSignup(false)} src={assets.cross_icon} alt="" />
            </div>
            
        
        <div className="login-container-input">
            {currentState==='Sign up'?<input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Your Name' required/>:<></>}
            <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='your Email' required/>
            <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='password' required />
            
        </div>
        <button type='submit'>{currentState==='Sign up'?'Create Account':'Login'}</button>
        <div className="login-container-condition">
            <input type="checkbox" required/>
            <p>Check Terms and And Conditions Accept it</p>
        </div>
        {currentState==='Sign up'?<p>Already You have Account ? <span onClick={()=>setCurrentState('Login')}>Click Here</span></p>:
        <p>Create an Account ?<span onClick={()=>setCurrentState('Sign up')}>Click Here</span></p>
        }
        </form>
      
    </div>
  )
}

export default LoginPopUp
