
import whiteLogo from '../../public/whiteLogo.png';


function Footer() {

    return (
        <div className="footer">
            <div className="top-footer">
                <div className="t-l-f">
                    <img src={whiteLogo} />
                    <div className='footer-write'>
                        <p>Experience the difference with Landi shares</p>
                    </div>
                    <div className='quick-links'>
                        <p>Overview</p>
                        <p>Features</p>
                        <p>Pricing</p>
                        <p>Careers</p>
                        <p>Help</p>
                        <p>Privacy</p>
                    </div>
                </div>
                <div className="t-r-f">
                    <p>Stay Up-to-Date with the Latest Rental <br /> Opportunities: Subscribe to Our Email List</p>
                    <div className='mailing'>
                        <input type="email" placeholder='Email' />
                        <button>SIGN UP</button>
                    </div>
                </div>
            </div>
            <div className='bottom-footer'>
                  <p>© 2023 Pagupone. All rights reserved.</p>
                  <p>Designed by Webkingz</p>
            </div>
        </div>
    )
}

export default Footer;