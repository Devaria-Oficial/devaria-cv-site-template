import React from "react";
import { Navbar } from "react-bootstrap";
import { Link as ScrollLink } from "react-scroll";
import { INavs, INavBar } from "../../../typescript/interfaces/nav.interface";
import { imagePath } from "../../../custom.config";


const Header: React.FC<INavBar> = ({ navs, className }) => {
  const [isActive, setIsActive] = React.useState(false);
  return (
    <header className={`v-header ${className ? className : ''}`}>
      {/* navbar toggler */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setIsActive(!isActive)}>
        <span></span>
        <span></span>
        <span></span>
      </Navbar.Toggle>
      <div className={`navbar-nav ${isActive ? 'active': ""}`}>
        {/* Profile Image */}
        <figure className="profile-img mb-0">
          <img src={imagePath + "XXX.png"} className="rounded-circle mx-auto" alt="" />
        </figure>
        {/* menu */}

        <Navbar.Collapse id="navbarSupportedContent" className="">
          <ul className="nav">
            {
              navs?.map((item: INavs, idx: number) => (
                <li className="nav-item" key={idx}>
                  <ScrollLink activeClass="active" to={item.hash} className="nav-link pe-pointer" spy={true} smooth={true} offset={0} duration={500} href="#">
                    {item.text}
                  </ScrollLink>
                </li>
              ))
            }
          </ul>
        </Navbar.Collapse>
        {/* language dropdown */}
        <div className="aside-footer">
          <a href="/pdfs/resume.pdf" className="btn btn-primary" download>
            Baixar meu CV
          </a>
        </div>
      </div>
    </header>
  )
}

Header.displayName = "Nav Bar";
export default Header;