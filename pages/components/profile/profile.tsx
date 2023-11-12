import React from "react";
import { imagePath } from "../../../custom.config";
import {initTextAnimSlider} from '../../shared/utils/text-anim';
const ProfileSection: React.FC = () => {
  const animCont: React.MutableRefObject<HTMLDivElement | null> = React.useRef(null);
  React.useEffect(() => {
    let removeHandler: any = null;
    if(animCont.current) {
      const {resizeHandler} = initTextAnimSlider({
        textAnimHolder: animCont.current,
        animIn: 'is-visible',
        animOut: 'is-hidden',
        removeItemClass: true,
        barDelay: 800,
        barAnimationDelay: 3800,
        startCount: 1
      });
      removeHandler = resizeHandler;
      window.addEventListener('resize', removeHandler);
      window.addEventListener('orientationchange', removeHandler);
    }
    return () => {
      window.removeEventListener('resize', removeHandler);
      window.removeEventListener('orientationchange', removeHandler);
    }
  }, [animCont])
  return (
    <div className="profile-box-2 hide-in-print" data-aos="fade" data-aos-duration="400" data-aos-delay="400" data-aos-easing="ease-out-cubic">
      <figure className="profile-image mb-15">
        <img src={imagePath+"/profile.jpg"} className="img-flui rounded-circle" alt="" />
      </figure>
      {/* profile img end */}
      <div className="profile-name mb-15">
        <h2 className="name text-white">Henry Rooney</h2>
        <p data-delay="500" className="cd-headline loading-bar mx-auto fs-15" ref={animCont}>
          <span className="cd-words-wrapper" anim-items="">
            <span className="anim-item is-visible" anim-item="">UI/UX Designer</span>
            <span className="anim-item" anim-item="">Angular Developer</span>
            <span className="anim-item" anim-item="">React Native Developer</span>
          </span>
        </p>
      </div>
      {/* profile desc end */}
      <div className="text mb-30">
        <p>I’m a web developer in New York. I spend my days with my hands in many different areas of
          development.</p>
      </div>
      {/* profile short desc end */}
      <div className="mt-auto mb-15">
        <ul className="list-unstyled contact-detail mx-auto">
          <li>
            <i className="bx bx-phone me-1 text-white align-middle"></i>
            <span className="align-middle">23456 78910</span>
          </li>
          <li className="mt-1">
            <i className="bx bx-envelope me-1 text-white align-middle"></i>
            <span className="align-middle">your@example.com</span>
          </li>
        </ul>
      </div>
      {/* profile meta end */}
      <div className="socials-icons justify-content-center">
        <a href="#" className="bg-facebook">
          <i className="bx bxl-facebook"></i>
        </a>
        <a href="#" className="bg-twitter">
          <i className="bx bxl-twitter"></i>
        </a>
        <a href="#" className="bg-dribble">
          <i className="bx bxl-dribbble"></i>
        </a>
      </div>
      {/*end social-icon */}
    </div>
  )
}

ProfileSection.displayName = "Profile Section";
export default ProfileSection;