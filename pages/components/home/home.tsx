import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NextLink from "next/link";

const Home: React.FC = () => {
  return (
    <section className="banner bg-soft-orange">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="banner-content">
              <h1 className="mb-30 text-uppercase" data-aos="fade-up" data-aos-duration="400" data-aos-delay="400" data-aos-easing="ease-out-cubic">XXXX</h1>
              <p className="lead mb-30" data-aos="fade-up" data-aos-duration="400" data-aos-delay="600" data-aos-easing="ease-out-cubic">XXXXXXX</p>
              <div className="socials-icons socials-grey" data-aos="fade-up" data-aos-duration="400" data-aos-delay="800" data-aos-easing="ease-out-cubic">
                <NextLink href={"XXXX"} >
                  <a rel="noopener noreferrer" target="_blank">
                    <i className="bx bxl-instagram"></i>
                  </a>
                </NextLink>
                <NextLink href={"XXXX"} passHref>
                  <a rel="noopener noreferrer" target="_blank">
                    <i className="bx bxl-github"></i>
                  </a>
                </NextLink>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

Home.displayName = "Home";
export default Home;