import React from "react";
import { useSelector } from "react-redux";
import { IServiceBox } from "../../../typescript/interfaces/service.interface";
import { IDefaultReducer } from "../../redux/store";

const ServiceBox: React.FC<IServiceBox> = (props) => {
  const {isLight} = useSelector((state: IDefaultReducer) => state.AppReducer);
  return (
    <div className={`service border-radius-2x ${!isLight ? 'bg-dark' : 'bg-white'}`}>
      <div className={`icon bg-soft-${props?.type} text-${props?.type} ${props?.iconClass ? props?.iconClass : ''}`}>
        <i className={props?.icon}></i>
      </div>
      <h5>{props?.title}</h5>
      <p>{props?.text}</p>
    </div>
  )
}

ServiceBox.displayName = "Service Box";
export default ServiceBox;