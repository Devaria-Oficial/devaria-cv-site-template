import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { educationHistory, workingHistory } from "../../../typescript/data/resume";
import { codeSkills, codeSkills2 } from "../../../typescript/data/skills";
import { IExperienceBox } from "../../../typescript/interfaces/experience.interface";
import { ISkill } from "../../../typescript/interfaces/skill.interface";
import SectionHeader from "../../shared/sectionHeader/sectionHeader";
import ExperienceBox from "./experienceBox";
import Skill from "./skillBox";

let isProgressDone = false;
const Resume: React.FC = () => {
  const progressBarRef: React.MutableRefObject<Array<HTMLLIElement>> = React.useRef([]);
  React.useEffect(() => {
    const container: HTMLDivElement = (document.querySelector("#skills") as HTMLDivElement);
    const skillOffset = container?.offsetTop - container.clientHeight;
    const winScrollEvent = () => {
      if((window.scrollY > skillOffset) && !isProgressDone){
        progressBarRef.current.forEach((item: HTMLLIElement) => {
          if(item){
            const progressBarCont: HTMLDivElement | null = item.querySelector(".progress");
            if(progressBarCont){
              const percent = progressBarCont?.getAttribute("data-percentage");
              (progressBarCont.querySelector(".progress-bar") as HTMLDivElement).style.width = percent+"%";
            }
          }
        });
        isProgressDone = true;
      }
    }
    window.addEventListener("scroll", winScrollEvent);
    return () => {
      window.removeEventListener("scroll", winScrollEvent, true);
    }
  }, [progressBarRef])
  return (
    <section className="section">
      {/* Resume Section */}
      <Container>
        <SectionHeader>
          <>Resumo</>
        </SectionHeader>
        <Row className="pb-50">
          {/* Working History */}
          <Col md={6} className="mb-30">
            <ul className="timeline ms-15 ps-15">
              <li data-aos="fade-right" data-aos-duration="400" data-aos-delay="400" data-aos-easing="ease-out-cubic">
                <i className="bx bx-briefcase" aria-hidden="true"></i>
                <h2 className="timeline-title">Experiência profissional</h2>
              </li>
              {/* a work */}
              {
                workingHistory.map((item: IExperienceBox, idx: number) => (
                  <li key={idx} data-aos="fade-down" data-aos-duration={(idx * 100) + 400} data-aos-delay="400" data-aos-easing="ease-out-cubic">
                    <ExperienceBox {...item} />
                  </li>
                ))
              }
            </ul>
          </Col>
          {/* Education History */}
          <Col md={6} className="mb-30">
            <ul className="timeline ms-15 ps-15">
              <li data-aos="fade-left" data-aos-duration="500" data-aos-delay="400" data-aos-easing="ease-out-cubic">
                <i className="bx bxs-graduation" aria-hidden="true"></i>
                <h2 className="timeline-title">Histórico escolar</h2>
              </li>
              {/* a work */}
              {
                educationHistory.map((item: IExperienceBox, idx: number) => (
                  <li key={idx} data-aos="fade-down" data-aos-duration={(idx * 100) + 400} data-aos-delay="400" data-aos-easing="ease-out-cubic">
                    <ExperienceBox {...item} />
                  </li>
                ))
              }
            </ul>
          </Col>
        </Row>
        {/* Skills Section */}
        <Row id="skills">
          <Col md={6} className="ps-lg-5">
            <div className="section-title mb-30">
              <h3>Principais Conhecimentos</h3>
            </div>
            <ul className="skill-list mb-0 list-unstyled">
              {
                codeSkills.map((item: ISkill, idx: number) => (
                  <Skill {...item} key={idx} progressBarRef={progressBarRef}/>
                ))
              }
            </ul>
          </Col>
          <Col md={6} className="ps-lg-5">
            <div className="section-title mb-30">
              <h3>Demais conhecimentos</h3>
            </div>
            <ul className="skill-list mb-0 list-unstyled">
              {
                codeSkills2.map((item: ISkill, idx: number) => (
                  <Skill {...item} key={idx} progressBarRef={progressBarRef}/>
                ))
              }
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

Resume.displayName = "Resume";
export default Resume;