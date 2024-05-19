import landi from '../../public/landiPurple.png';


function Navbar() {
    return (
        <div className="navbar">
           <div className="logo">
           <img src={landi} />
           </div>
           <div className="nav-links">
             <p>HOME</p>
             <p>ABOUT US</p>
             <p>LISTING <i className="bi-chevron-down"></i></p>
             <p>CONTACT US</p>
             <p>BLOG  <i className="bi-chevron-down"></i></p>
             <p>PAGES  <i className="bi-chevron-down"></i></p>
           </div>
        </div>
    )
}

export default Navbar;