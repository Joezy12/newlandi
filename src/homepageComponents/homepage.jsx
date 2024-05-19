import Toplabel from "./toplabel";
import HeroSection from "./heroSection";
import Banner from "./banner";
import AboutSection from "./aboutSection";
import VideoSection from "./videoSection";
import InvestmentOption from "./investmentOptions";
import OurValues from "./ourValuesSection";
import Testimonials from "./testimonialSection";


function Homepage() {
    return (
        <div className="homepage">
           <HeroSection />
           <Banner />
           <AboutSection />
           <VideoSection />
           <InvestmentOption />
           <OurValues />
           <Testimonials />
        </div>
    )
}

export default Homepage;