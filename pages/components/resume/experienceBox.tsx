import React from "react";
import { IExperienceBox } from "../../../typescript/interfaces/experience.interface";

const ExperienceBox: React.FC<IExperienceBox> = (props) => {
  return (
    <>
      <h6 className="mb-0">{props?.title}</h6>
      <span>{props?.year}</span>
      <p>{props?.text}</p>
    </>
  )
}

ExperienceBox.displayName = "Experience Box";
export default ExperienceBox;