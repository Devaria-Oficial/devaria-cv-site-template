import React from "react";
import { Button, Dropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { pageThemes, pageURLs } from "./settingData";
import { IPageTheme, IPageURL } from "../../../typescript/interfaces/common.interface";
import { setThemeType } from "../../redux/reducer";
import { useRouter } from "next/router";
import { liveURL } from "../../../custom.config";

const ISSERVER = typeof window === "undefined";
interface ISettings {
  setIsLight?: (flag: boolean) => void;
}
const Settings: React.FC<ISettings> = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [activeClass, setActiveClass] = React.useState(false);
  const [isLight, setIsLight] = React.useState(true);
  const addLayoutClass = (bodyElem: HTMLBodyElement) => {
    const layoutType = bodyElem.getAttribute("layout-type");
    if (layoutType) {
      layoutType.split(" ").forEach((cls: string) => {
        bodyElem.classList.add(cls);
      })
    }
  }
  //set current page
  const currentPageIndex: IPageURL | null | undefined = React.useMemo(() => {
    const url = router.pathname.split("/");
    if (url.length > 1) {
      return pageURLs.find((item: IPageURL) => item.url === (liveURL + '/'+url[1]))
    }
    return null
  }, [router])
  
  React.useEffect(() => {
    if (router.query && router.query.hasOwnProperty('dark')) {
      const isLight = router.query.dark === "true" ? false : true;
      if(typeof window !== "undefined") {
        dayLightTheme(isLight)
      }
    }
  }, [router])

  //set layout type
  React.useEffect(() => {
    const bodyElem = document.body as HTMLBodyElement;
    addLayoutClass(bodyElem);
    if (!ISSERVER) {
      setIsLight(window.localStorage.getItem("theme-light") === 'true');
      const themeType = window.localStorage.getItem("fileName") || "teal";
      bodyElem.classList.add("theme-type-" + themeType);
    }
  }, []);

  React.useEffect(() => {
    if (!isLight) {
      document.body.classList.add('theme-dark');
    }
    else {
      document.body.classList.remove('theme-dark');
    }
    dispatch(setThemeType({ isLight }));
  }, [isLight])

  //change theme color
  const changeTheme = (name: string) => {
    resetBodyClassess(name);
    localStorage.setItem("fileName", name);
  }

  //reset classes on theme change
  const resetBodyClassess = (fileName: string) => {
    const bodyElem = document.body as HTMLBodyElement;
    if (bodyElem.classList.value.length) {
      const classList = bodyElem.classList.value.split(" ");
      classList.forEach((item: string) => {
        bodyElem.classList.remove(item);
      })
      addLayoutClass(bodyElem);
      if (!isLight) {
        bodyElem.classList.add("theme-dark");
      }
      bodyElem.classList.add("theme-type-" + fileName);
    }
  }

  //change light or dark theme
  const dayLightTheme = (isLight: boolean) => {
    setIsLight(isLight);
    localStorage.setItem("theme-light", isLight.toString());
  }

  //reset default theme
  const resetThemeColor = () => {
    const themeType = document.body.getAttribute("default-theme");
    if (themeType?.length) {
      changeTheme(themeType)
    }
  }
  return (
    <div className={"demo hide-in-print" + (activeClass ? ' active' : '')}>
       {/*
      <a href="javascript:void(0)" className="settings" onClick={() => { setActiveClass(!activeClass) }}>
        <i className="bx bx-cog"></i>
      </a>
      <div className="demo-content">
        <div className="change-theme mb-15">
          <a href="javascript:void(0);" id="light-url" onClick={() => dayLightTheme(true)} className={"me-2" + (isLight ? " bg-dark text-white" : "")}>
            <i className="bx bx-sun fs-20"></i>
          </a>
          <a href="javascript:void(0);" className={!isLight ? "bg-white text-dark" : ""} id="dark-url" onClick={() => dayLightTheme(false)}>
            <i className="bx bx-moon fs-20"></i>
          </a>
        </div>
        <div className="mb-30">
          <h5>SELECT A PAGE</h5>
          <Dropdown className="setting-dropdown">
            <Dropdown.Toggle variant="link" id="dropdown-basic">
              {currentPageIndex && currentPageIndex?.title || "Index 1"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {
                pageURLs?.map((item: IPageURL, idx: number) => (
                  <li key={idx}><Dropdown.Item href={item?.url}>{item?.title}</Dropdown.Item></li>
                ))
              }
            </Dropdown.Menu>
          </Dropdown>
        </div> 
        <div>
          <h5>SELECT A COLOR</h5>
          {
            pageThemes?.map((item: IPageTheme, idx: number) => (
              <button key={idx} onClick={() => changeTheme(item?.name)} className="color" style={
                {
                  backgroundColor: item?.color
                }
              }></button>
            ))
          }
          <div className="clearfix"></div>
          <Button variant="info" size="sm" className="reset ps-30 pe-30 mt-15" onClick={resetThemeColor}>Reset</Button>
        </div>
      </div>
      */}
    </div>
  )
}

Settings.displayName = "Settings";
export default Settings;