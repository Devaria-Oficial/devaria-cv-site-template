import React from 'react';
import type { NextPage } from 'next'
import Header from './components/navbar/navbar';
import { Element } from 'react-scroll';
import Home from './components/home/home';
import AboutUs from './components/about/about';
import Services from './components/services/service';
import Resume from './components/resume/resume';
import ContactUs from './components/contactus/contactus';
const navs = [{
  hash: 'home',
  text: 'Home'
}, {
  hash: 'about',
  text: 'Sobre'
}, {
  hash: 'services',
  text: 'Especialidades'
}, {
  hash: 'resume',
  text: 'Resumo'
}, {
  hash: 'contact',
  text: 'Contato'
}]

const Index: NextPage<any> = () => {
  React.useEffect(() => {
    document.body.setAttribute("layout-type", "vertical-layout");
    document.body.setAttribute("default-theme", "teal");
    return () => {
      document.body.removeAttribute("layout-type");
      document.body.removeAttribute("default-theme");
    }
  }, [])
  return (
    <div className="wrapper p-0">
      <Header navs={navs} />
      <div className="content">
        <Element name="home">
          <Home />
        </Element>
        <Element name="about">
          <AboutUs />
        </Element>
        <Element name="services">
          <Services className="bg-light" />
        </Element>
        <Element name="resume">
          <Resume />
        </Element>
        <Element name="contact">
          <ContactUs />
        </Element>
      </div>
    </div>
  )
}

export default Index
