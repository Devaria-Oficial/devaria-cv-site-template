export interface INavs {
  hash: string;
  text: string;
}

export interface INavBar {
  navs: INavs[];
  className?: string;
  variant?: 'light' | 'dark'
}