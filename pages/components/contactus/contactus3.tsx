import React from "react";
import { Row, Col } from "react-bootstrap";
import SectionHeader from "../../shared/sectionHeader/sectionHeader";
import ContactUsForm from "./contactUsForm";
import { contactDetails } from "../../../typescript/data/contact";
import { IContactDetails } from "../../../typescript/interfaces/contactus.interface";

let newContactDetails = contactDetails.slice(0, 2);
newContactDetails.push({
  head: "",
  icon: "bx bxl-linkedin",
  text: "Freelancer"
})
newContactDetails = newContactDetails.concat(contactDetails.slice(2, 4));
const ContactUs: React.FC = () => {
  return (
    <section>
      <SectionHeader className="style-3">
          <>Contact Us</>
        </SectionHeader>
        <Row>
          <Col md={8} lg={7} className="hide-in-print mb-30 mb-md-0" data-aos="fade-right" data-aos-duration="400" data-aos-delay="400" data-aos-easing="ease-out-cubic">
            <ContactUsForm fullWidth hideLabels/>
          </Col>
          <Col md={4} lg={5} className="ps-lg-5 col-print-12" data-aos="fade-left" data-aos-duration="500" data-aos-delay="400" data-aos-easing="ease-out-cubic">
            <h3 className="mb-15">Let's Talk</h3>
            <p className="mb-30">Feel free to get in touch with me. I am always open to discuss new projects.</p>
            <ul className="list-unstyled contact-list mb-0">
              {
                newContactDetails.map((item: IContactDetails, idx: number) => (
                  <li key={idx}>
                    <i className={item?.icon}></i>
                    <span dangerouslySetInnerHTML={{
                      __html: item?.text
                    }}></span>
                  </li>
                ))
              }
            </ul>
          </Col>
        </Row>
    </section>
  )
}

ContactUs.displayName = "Contact Us";
export default ContactUs;