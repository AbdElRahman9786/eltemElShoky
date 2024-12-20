
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
          <li><Link to='/AccountInfo'>AccountInfo</Link></li>
          <li><Link to='/Recomndation'>Recomndation</Link></li>
          <li><Link to='/questioner'>questioner</Link></li>
          <li><button>start for free</button></li>
        </ul>
      
    </div>
  )
}
