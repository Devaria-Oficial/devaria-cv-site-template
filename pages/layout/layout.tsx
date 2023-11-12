import React from 'react'
import AppHead from "./head";
import { init, AosOptions } from 'aos';
interface ILayout {
  children: JSX.Element;
  props: any;
}
const AOSOption: AosOptions = {
  disable: "tablet",
  offset: -80,
  duration: 400,
  easing: 'linear',
  delay: 0,
  once: true
}
const Layout: React.FC<ILayout> = ({ children, props }) => {
  React.useEffect(() => {
    init(AOSOption);
  }, [])

  return (
    <>
      <AppHead title={props?.title} />
      {children}
    </>
  );
}

export default Layout;