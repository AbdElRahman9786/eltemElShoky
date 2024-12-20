
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Home from './pages/Home/Home';
import Guard from './components/Gurd';
import ChangePassword from './pages/changepassword/ChangePassword';
import Questioner from './pages/questioner/Questioner';
import QuestionerDetails from './pages/questinerDetails/QuestionerDetails';
import MangeAccount from './pages/mangeAcc/MangeAccount';
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
      <Guard>
      <Home/>
      </Guard>
      
      }/>
      <Route path='/changepasswrod' element={
        <Guard>
        <ChangePassword/>
        </Guard>
        
      }/>

      <Route path='/questioner' element={
        <Guard>
        <Questioner/>
        </Guard>
        
      }/>
      <Route path='/questioner/:id' element={
        <Guard>
        <QuestionerDetails/>
        </Guard>
        }/>

        <Route path='/AccountInfo' element={
          <Guard>
            <MangeAccount/>
          </Guard>
        }/>
      
    </Routes> 
    
    </>
  )
}

export default App
