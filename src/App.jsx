
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Home from './pages/Home/Home';
import Guard from './components/Gurd';
import ChangePassword from './pages/changepassword/ChangePassword';
import Questioner from './pages/questioner/Questioner';
import QuestionerDetails from './pages/questinerDetails/QuestionerDetails';
export const config = {
  headers: {
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning":'hello'
   
  },
};
function App() {
 

  return (
    <>
    
   <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/regester' element={<Signup/>}/>
    <Route path='/Home' element={
      
      <Home/>
      
      }/>
      <Route path='/changepasswrod' element={
        
        <ChangePassword/>
        
      }/>

      <Route path='/questioner' element={
        
        <Questioner/>
        
      }/>
      <Route path='/questioner/:id' element={<QuestionerDetails/>}/>
      
    </Routes> 
    
    </>
  )
}

export default App
