import React from "react";
import { imagePath } from "../../../custom.config";
import { ISkill2 } from "../../../typescript/interfaces/skill.interface";


const Skill: React.FC<ISkill2> = (props) => {
  return (
    <div className="card-body">
      <div className="media align-items-center">
        <div className="avatar">
          <img src={imagePath+"/logos/"+props?.img} className="h-100" alt="" />
        </div>
        <div className="media-body ms-3">
          <h6 className="mb-0 fw-normal">{props?.title}</h6>
          <p className="text-muted mb-0 fs-13">{props?.exp}</p>
        </div>
      </div>
    </div>
  )
}

Skill.displayName = "Skill";
export default Skill;