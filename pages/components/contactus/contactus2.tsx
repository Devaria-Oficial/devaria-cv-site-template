import React from "react";
import SectionHeader from "../../shared/sectionHeader/sectionHeader";
import ContactUsForm from "./contactUsForm2";
import { IClass } from "../../../typescript/interfaces/common.interface";



const ContactUs: React.FC<IClass> = ({ className }) => {
  return (
    <section className={className}>
      <SectionHeader className="style-2">
        <>Contact Us</>
      </SectionHeader>
      {/* Contact Map  */}
      <div className="contact-map border-radius-6x overflow-hidden" id="map" data-aos="fade" data-aos-duration="400" data-aos-delay="400" data-aos-easing="ease-out-cubic">
        <iframe src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=new%20delhi+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" className="border-0" allowFullScreen></iframe>
      </div>
      {/* Contact Form */}
      <div className="section-title mb-30">
        <h3 className="mb-0">Get In Touch</h3>
      </div>
      <ContactUsForm btnType="outline" />
    </section>
  )
}

ContactUs.displayName = "Contact Us";
export default ContactUs;