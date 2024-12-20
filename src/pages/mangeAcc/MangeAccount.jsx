import  { useEffect, useState } from 'react'
import styles from './mange.module.css'
import axios from 'axios'
import { apiUrl } from '../../utils'
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
const token=Cookies.get('token');
const config={
    headers:{
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning":'hello',
        'Authorization':`Bearer ${token}`
    }
}
const MangeAccount = () => {
   const[account,setAccount] =useState({});
    async function getAccountInfo(){
        
      
        
    }
    useEffect(()=>{
         axios.get(`${apiUrl}/account/info`,config).then((res)=>{
            setAccount((prev)=>{
                return{...prev, res}
               })
         })
    },{})

     let name=account.res.data.account.firstName;
     let email=account.res.data.account.email;
     let createdAt=account.res.data.account.createdAt
     let firstName=account.res.data.account.firstName;
     let lastName=account.res.data.account.lastName;
     let updatedAt=account.res.data.account.updatedAt;
    
  return (
    
    <div >
        <h1 className={styles.header}>Welcom {name}</h1>
        <h2>Account Information</h2>
        <div className={styles.content}>
            <div>
            <p>Email: {email}</p>
            <p>createdAt: {createdAt}</p>
            <p>FirsName: {firstName}</p>
            </div>
            <div>
            <p>LastName: {lastName}</p>
            <p>updatedAt: {updatedAt}</p>
            </div>
        </div>
<div className={styles.btns}>
<button className={styles.btn}> <Link to='/changepasswrod'>Change Password</Link></button>
</div>
        </div>
  )
}

export default MangeAccount