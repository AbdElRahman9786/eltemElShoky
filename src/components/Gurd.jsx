import { useContext, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { loginContext } from "../ctx/loginProvider";

 

export default function Guard({children}){
    
    const navigate=useNavigate();
    const {logIn}=useContext(loginContext)
    useEffect(()=>{
        
    
if(!logIn){
    navigate('/')
}
    },[])

    return children;

}