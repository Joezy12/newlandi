import landi from '../../public/landiPurple.png';
import { NavLink } from 'react-router-dom';


function Navbar() {
    return (
        <div className="navbar">
           <div className="logo">
           <img src={landi} />
           </div>
           <div className="nav-links">
           <NavLink to="." className="nav-link"> <p>HOME</p></NavLink>
           <NavLink to="about" className="nav-link"><p>ABOUT US</p></NavLink>  
             <p>LISTING <i className="bi-chevron-down"></i></p>
             <p>CONTACT US</p>
             <p className='sign-up'>Sign Up</p>
             <button>Login</button>
           </div>
        </div>
    )
}

export default Navbar;