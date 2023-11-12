import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SectionHeader from "../../shared/sectionHeader/sectionHeader";
import ContactUsForm from "./contactUsForm";
import { contactDetails } from "../../../typescript/data/contact";
import { IContactDetails } from "../../../typescript/interfaces/contactus.interface";

const ContactUs: React.FC = () => {
  return (
    <section className="section">
      <Container>
        <SectionHeader>
          <>Vamos conversar?</>
        </SectionHeader>
        <Row>
          <Col md={7} className="mb-30 mb-md-0" data-aos="fade-right" data-aos-duration="400" data-aos-delay="400" data-aos-easing="ease-out-cubic">
              <ContactUsForm className="border-radius-2x shadow contact-form" btnFullWidth btnType="outline" />
          </Col>
          <Col md={5} className="ps-md-5" data-aos="fade-left" data-aos-duration="500" data-aos-delay="400" data-aos-easing="ease-out-cubic">
            <p className="mb-30">Seria uma honra entrar em contato e trocar experiência com você, por isso fique a vontade para me contactar.</p>
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
      </Container>
    </section>
  )
}

ContactUs.displayName = "Contact Us";
export default ContactUs;