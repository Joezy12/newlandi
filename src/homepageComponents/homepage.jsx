import Toplabel from "./toplabel";
import HeroSection from "./heroSection";
import Banner from "./banner";
import AboutSection from "./aboutSection";
import VideoSection from "./videoSection";
import InvestmentOption from "./investmentOptions";
import OurValues from "./ourValuesSection";
import Testimonials from "./testimonialSection";
import HowItWorks from "./howItWorks";
import ContactUs from "./contactUs";


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
           <HowItWorks />
           <ContactUs />
        </div>
    )
}

export default Homepage;