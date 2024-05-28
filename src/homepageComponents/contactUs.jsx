



function ContactUs() {

    return (
        <div className="contact-us">
            <div className="contact-pic"></div>
            <div className="contact-info">
               <p>CONTACT US</p>
               <h1>Schedule a <br /> Visit</h1>
               <div className="contact-inputs">
                  <input type="text" placeholder="Your Name" />
                  <input type="text" placeholder="Your Email" />
                  <input type="text" placeholder="Your Phone" />
                 <textarea placeholder="Your Message"></textarea>
                 <button>Send Message</button>
               </div>
            </div>
        </div>
    )
}

    
    export default ContactUs;