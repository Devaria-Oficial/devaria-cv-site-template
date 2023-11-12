import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { services } from "../../../typescript/data/services";
import { IServiceBox } from "../../../typescript/interfaces/service.interface";
import SectionHeader from "../../shared/sectionHeader/sectionHeader";
import ServiceBox from "./serviceBox";

const Services: React.FC<{className?:string}> = ({className}) => {
  return (
    <section className={`section pb-70 ${className ? className : ''}`}>
      <Container>
        <SectionHeader>
          <>Especialidades</>
        </SectionHeader>
        <Row>
          {
            services.map((item: IServiceBox, idx: number) => (
              <Col xl={4} md={6} key={idx} data-aos="fade-up" data-aos-duration={(idx * 100) + 400} data-aos-delay={(idx * 100) + 400} data-aos-easing="ease-out-cubic">
                <ServiceBox {...item} />
              </Col>
            ))
          }
        </Row>
      </Container>
    </section>
  )
}

Services.displayName = "Services";
export default Services;