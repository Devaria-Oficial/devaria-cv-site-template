import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SectionHeader from "../../shared/sectionHeader/sectionHeader";
import ContactUsForm from "./contactUsForm";
import { contactDetails } from "../../../typescript/data/contact";
import { IContactDetails } from "../../../typescript/interfaces/contactus.interface";

interface IContact {
  className?: string;
  isLight: boolean;
}
const ContactUs: React.FC<IContact> = ({ className, isLight }) => {
  return (
    <section className={className}>
      <Container>
        <div className={`border-radius-2x shadow contact-form bg-${!isLight ? 'dark' : 'white'}`}>
          <SectionHeader>
            <>Get in touch</>
          </SectionHeader>
        <Row>
          <Col md={7} data-aos="fade-right" data-aos-duration="600" data-aos-delay="100" data-aos-easing="linear">
            <ContactUsForm className="" btnFullWidth btnType="outline"/>
          </Col>
          <Col md={5} className="ps-md-5" data-aos="fade-left" data-aos-duration="500" data-aos-delay="400" data-aos-easing="ease-out-cubic">
            <h3 className="mb-15">Let's Talk</h3>
            <p className="mb-30">Feel free to get in touch with me. I am always open to discuss new projects and ideas.</p>
            {
              contactDetails.map((item: IContactDetails, idx: number) => (
                <div className="media mb-15" key={idx}>
                  <div className="avatar rounded-circle theme-color theme-soft-bg me-3">
                    <i className={item?.icon}></i>
                  </div>
                  <div className="media-body">
                    <h6 className="mb-1">{item?.head}</h6>
                    <p dangerouslySetInnerHTML={{
                      __html: item?.text
                    }}></p>
                  </div>
                </div>
              ))
            }
          </Col>
        </Row>
        </div>
      </Container>
    </section>
  )
}

ContactUs.displayName = "Contact Us";
export default ContactUs;