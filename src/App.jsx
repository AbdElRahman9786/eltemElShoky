
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
import ChangeUserName from './pages/chamngeusername/ChangeUserName';
import AddQuestions from '../src/pages/addQuestions/AddQuestions.jsx'
import { Recomendation } from './pages/recomendation/Recomendation';
import Dashboard from './pages/dashboard/dashboard';
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
      <Route path='/changeusername' element={
        <Guard>
          <ChangeUserName/>
        </Guard>
      }/>
      <Route path='/Recomndation' element={
        <Guard>
          <Recomendation/>
        </Guard>
      }/>
      <Route path='/dashboard' element={
        <Dashboard/>
      }/>
       <Route path='/addquestions' element={
        <AddQuestions/>
      }/>
    </Routes> 
    
    </>
  )
}

export default App
