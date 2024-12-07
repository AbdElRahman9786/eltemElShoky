import { Navbar } from "../../components/Navbar/Navbar"
import style from './home.module.css'


const Home = () => {
  return (
    <div className={style.all}>
        <Navbar/>
        <div className={style.content}>
            <h1>Increase your<br/>
attractiveness<br/>
with us!</h1>
<p>AI-Powered Scent Innovations</p>
<button className={style.btn4}>TRY NOW</button>
        </div>
        
    </div>
  )
}

export default Home