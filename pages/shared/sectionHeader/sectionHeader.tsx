import React from "react";

interface ISectionHeader {
  children: JSX.Element;
  className?: string;
  center?: boolean;
}
const SectionHeader: React.FC<ISectionHeader> = ({children, className, center}) => {
  return (
    <div className={`section-title${className ? " "+className : ''}${center ? ' text-center' : ''}`}>
      <h2 className="h3">{children}</h2>
    </div>
  )
}

SectionHeader.displayName = "Section Header Component"
export default SectionHeader;