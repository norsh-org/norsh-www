/**
 * Navbar Component Module
 *
 * This module provides the navigation bar for the application, including language switching,
 * login button, and a responsive design for mobile and desktop.
 *
 * @author Danthur Lice
 * @version 1.0.0
 * @since 1.0.0
 */

import { IconMenu2 } from '@tabler/icons-react';
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";

// import logoDark from "../assets/logo_color.svg";
// import logoLight from "../assets/logo_white.svg";
import { getLangFromPath } from "../utils/getLang";
import LanguageSwitcher from "./LanguageSwitcher";

interface NavbarProps {
  isLightBackground?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({
  isLightBackground: isLightBackground = true,
  ...rest
}) => {
  const { t } = useTranslation();
  const location = useLocation();
  const lang = getLangFromPath(location.pathname);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="position-absolute w-100"
      style={{
        zIndex: 1
      }}
    >
      <div className="container-lg">
        {/* Main Navbar */}
        <nav
          className="navbar navbar-expand-lg"
          {...rest}
        >
          <div className="container-fluid d-flex align-items-center-between">
            {/* Mobile Menu Icon */}
            <button
              className="navbar-toggler d-lg-none"
              type="button"
              onClick={() => setIsDrawerOpen(true)}
            >
            <IconMenu2 stroke={2} className={`${
              isLightBackground ? "text-dark" : "text-white"
            }`}/>
            </button>

            {/* Logo (Centered on mobile, aligned to the left on desktop) */}
            <Link to={`/${lang}/home`} className="navbar-brand mx-auto d-lg-0">
              <img
                src={`${t("cdn")}${isLightBackground ? t("img.logo.color") : t("img.logo.white")}`}
                alt="Norsh"
                height="30"
              />
            </Link>

            {/* Desktop Menu - Centered */}
            <div className="collapse navbar-collapse justify-content-center d-none d-lg-flex">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    to={`/${lang}/home`}
                    className={`nav-link mx-3 ${
                      isLightBackground ? "text-dark" : "text-light"
                    }`}
                  >
                   {t("navbar.home")}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={`/${lang}/about`}
                    className={`nav-link mx-3 ${
                      isLightBackground ? "text-dark" : "text-light"
                    }`}
                  >
                    {t("navbar.about")}
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    to={`/${lang}/hazmat`}
                    className={`nav-link mx-3 ${
                      isLightBackground ? "text-dark" : "text-light"
                    }`}
                  >
                    Hazmat
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={`/${lang}/contact`}
                    className={`nav-link mx-3 ${
                      isLightBackground ? "text-dark" : "text-light"
                    }`}
                  >
                    {t("navbar.contact")}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Language Switcher */}
            

            {/* Login Button (Always aligned to the right) */}
            <div>
              <Link
                to={`/${lang}/login`}
                className="btn btn-info rounded-pill text-white px-4 border-0"
                style={{backgroundColor: "#329da4"}}
              >
                Login
              </Link>
            </div>
            {/* <div className="ms-3 d-none d-lg-block">
              <LanguageSwitcher></LanguageSwitcher>  
            </div> */}
            
          </div>
        </nav>

        {/* Mobile Sidebar Drawer */}
        <div
          className={`offcanvas offcanvas-start ${isDrawerOpen ? "show" : ""}`}
          style={{ visibility: isDrawerOpen ? "visible" : "hidden" }}
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title">{t("navbar.menu")}</h5>
            <button
              type="button"
              className="btn-close"
              onClick={() => setIsDrawerOpen(false)}
            ></button>
          </div>
          <div className="offcanvas-body">
            <LanguageSwitcher></LanguageSwitcher>
            <Link
              to={`/${lang}/home`}
              className="nav-link"
              onClick={() => setIsDrawerOpen(false)}
            >
              {t("navbar.home")}
            </Link>
            <Link
              to={`/${lang}/about`}
              className="nav-link"
              onClick={() => setIsDrawerOpen(false)}
            >
              {t("navbar.about")}
            </Link>
            <Link
              to={`/${lang}/contact`}
              className="nav-link"
              onClick={() => setIsDrawerOpen(false)}
            >
              {t("navbar.contact")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
