// import  { useEffect, useState } from 'react'
// import styles from './mange.module.css'
// import axios from 'axios'
// import { apiUrl } from '../../utils'
// import Cookies from 'js-cookie';
// import { Link } from 'react-router-dom';
// const token=Cookies.get('token');
// const config={
//     headers:{
//         "Content-Type": "application/json",
//         "ngrok-skip-browser-warning":'hello',
//         'Authorization':`Bearer ${token}`
//     }
// }
// const MangeAccount = () => {
//    const[account,setAccount] =useState({});
  
//     useEffect(()=>{
//         axios.get(`${apiUrl}/account/info`,config).then((res)=>{
//             setAccount(res.data)
//          })
//     },{})
  
//      let name=account.account.firstName;
//      let email=account.account.email;
//      let createdAt=account.account.createdAt
//      let firstName=account.account.firstName;
//      let lastName=account.account.lastName;
//      let updatedAt=account.account.updatedAt;
     
//     console.log(account.account)
//   return (
   
 
//     <div >
//         <h1 className={styles.header}>Welcom {name}</h1>
//         <h2>Account Information</h2>
//         <div className={styles.content}>
//             <div>
//             <p>Email: {email}</p>
//             <p>createdAt: {createdAt}</p>
//             <p>FirsName: {firstName}</p>
//             </div>
//             <div>
//             <p>LastName: {lastName}</p>
//             <p>updatedAt: {updatedAt}</p>
//             </div>
//         </div>
// <div className={styles.btns}>
// <button className={styles.btn}> <Link to='/changepasswrod'>Change Password</Link></button>
// <button className={styles.btn}> <Link to='/changeusername'>Change UserName</Link></button>
// </div>
//         </div>
//   )
// }

// export default MangeAccount




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
 
    useEffect(()=>{
        axios.get(`${apiUrl}/account/info`,config).then((res)=>{
            setAccount(res.data)
          
         })
    },{})
 
     
     
    console.log(account.account)
  return (
   
 
    <div >
        <h1 className={styles.header}>Welcom {account?.account?.firstName}</h1>
        <h2>Account Information</h2>
        <div className={styles.content}>
            <div>
            <p>Email: {account?.account?.email}</p>
            <p>FirsName: {account?.account?.firstName}</p>
            <p>createdAt: {account?.account?.createdAt}</p>
            
            </div>
            <div>
            <p>username: {account?.account?.username}</p>
            <p>LastName: {account?.account?.lastName}</p>
            <p>updatedAt: {account?.account?.updatedAt}</p>
            </div>
        </div>
<div className={styles.btns}>
<button className={styles.btn}> <Link to='/changepasswrod'>Change Password</Link></button>
<button className={styles.btn}> <Link to='/changeusername'>Change UserName</Link></button>
</div>
        </div>
  )
}
 
export default MangeAccount