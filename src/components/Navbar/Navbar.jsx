
import { Link } from 'react-router-dom'
import style from '../Navbar/navbar.module.css'

export const Navbar = () => {
  return (
    <div className={style.contenair}>
          <h1>
      Perf<span>{'{'}</span> you <span>{'}'}</span>me
    </h1>
        <ul>
          <li>Home</li>
          <li>About US</li>
          <li><Link to='/changepasswrod'>Change Password</Link></li>
          <li><Link to='/questioner'>questioner</Link></li>
          <li><button>start for free</button></li>
        </ul>
      
    </div>
  )
}
