import React from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import { ISkill } from "../../../typescript/interfaces/skill.interface";

interface ISkillWrapper extends ISkill {
  progressBarRef: React.MutableRefObject<Array<HTMLLIElement>>
}
const Skill: React.FC<ISkillWrapper> = (props) => {
  return (
    <li ref={(el:HTMLLIElement) => {
      props?.progressBarRef?.current.push(el)
    }} >
      <h6>{props?.title}</h6>
      <ProgressBar now={0} data-percentage={props?.percentage}/>
    </li>
  )
}

Skill.displayName = "Skill";
export default Skill;