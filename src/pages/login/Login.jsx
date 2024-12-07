import  { useContext, useState } from 'react'
import style from '../login/login.module.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import Swal from 'sweetalert2';
import { config } from '../../App';
import { jwtDecode } from 'jwt-decode';
import { userContext } from '../../ctx/contextProvider.jsx';
import { loginContext } from '../../ctx/loginProvider.jsx';
import Cookies from 'js-cookie'

const Login = () => {
  const {userName,setUserName}=useContext(userContext);
  const {logIn,setLogIn}=useContext(loginContext);
  const [formData,setFormData] =useState({email:'',password:''});
  const navigation=useNavigate();
  console.log(userName)
  console.log(logIn)
async  function handelSubmit(event) {
event.preventDefault();
try{
  const req= await   axios.post('https://5778-41-46-25-30.ngrok-free.app/login',formData,config)
 
  if(req.status===201){
    let token=req.data.access_token
    const decoded = jwtDecode(token);
    setUserName(decoded.sub.username)
    Cookies.set('token', token, { expires: 0.25 })
    Swal.fire({
         icon: "success",
         title: req.data.message,
         
         
       });
       setLogIn((prev)=>!prev)
       navigation('/Home')
    
     }else{
       throw new Error(req.data.message)
     }
     
  }catch(error){
   if (error.response) {
     Swal.fire({
       icon: "error",
       title: "Oops...",
       text: error.response.data.message,
     }); 
   }
   
 }
  }
  const handleChange = (e) => {
    setFormData((prev)=>{
      return {...prev, [e.target.name]:e.target.value}
    });
  }
  return (
    <div className={style.card}>
        <div className={style.content}>
        <h1>Login</h1>
      <form onSubmit={handelSubmit}>
        <input type='email' placeholder='Username' name='email' onChange={handleChange} required/>
        <input type='password' placeholder='Password' name='password' onChange={handleChange} minLength={8}/>
        <button type='submit' className={style.btn1}>Login</button>
        
      </form>
      <Link className={style.link} to='/regester'>Regester</Link>
      </div>
    </div>
  )
}

export default Login