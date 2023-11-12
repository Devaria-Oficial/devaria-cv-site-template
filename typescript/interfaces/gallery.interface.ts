export interface IGallery {
  big: string;
  small: string;
  groups: string;
  title: string;
  subTitle: string;
}

export interface IFilterNav { 
  key: string; 
  text: String;
}

export enum EProjectType {
  ANGULAR = "ANGULAR",
  REACT = "REACT",
  PHOTOSHOP = "PHOTOSHOP",
  BOOTSTRAP = "BOOTSTRAP"
}

export interface IPortoflio {
  title: string;
  type: EProjectType;
  tags: string[];
  img: string;
  groups: string;
}