import aboutBanner from '../../public/aboutBanner.jpeg';
import AboutHero from './aboutHero';
import Team from './team';
import OurValues from '../homepageComponents/ourValuesSection';

function About() {

    const bannerPic = {
        background: `linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)), url("https://i.ibb.co/1s5Dtvj/My-Home-Krishe-Resale-3-BHK-Apartment-5-18-screenshot.png")`,
        backgroundSize: `cover`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    }

    return (
        <div className="about">
            <div className="about-banner" style={bannerPic}>
                <div className='sub-banner'>
                    <div>
                        <h1>About Us</h1>
                        <p>HOME - ABOUT US</p>
                    </div>
                </div>
            </div>
             
             <AboutHero />
             <Team />
             <OurValues />
            
        </div>
    )
}

export default About;