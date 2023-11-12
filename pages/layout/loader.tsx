import React from "react";
import { useSelector } from "react-redux";
import { IDefaultReducer } from "../redux/store";
import { animateValue } from "../shared/utils/progressLoader";

interface IPreloader {
  setIsShow: (flag: boolean) => void;
}

const PreLoader: React.FC<IPreloader> = ({setIsShow}) => {
  const {isLight} = useSelector((state: IDefaultReducer) => state.AppReducer);
  const loaderContainer: React.MutableRefObject<HTMLDivElement | null> = React.useRef(null);
  const hideLoader = () => {
    setIsShow(false)
  }
  React.useEffect(() => {
    if(window && loaderContainer.current) {
      animateValue(loaderContainer.current, hideLoader)
    }
  }, [loaderContainer])
  return (
    <div ref={loaderContainer} className={`preloader style-2 ${!isLight ? 'bg-dark' : 'bg-white'}`}>
      <h6 className="mb-0">Meu CV</h6>
      <div className="progress my-15">
        <div className="progress-bar theme-bg no-transition" data-percentage="0%">
        </div>
      </div>
      <div className="progress-text">
        0%
      </div>
    </div>
  )
}

PreLoader.displayName = "PreLoader";
export default PreLoader;
