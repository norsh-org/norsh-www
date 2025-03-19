/**
 * Navbar Component Module
 *
 * This module provides the navigation bar for the application, including language switching,
 * login button, and a responsive design for mobile and desktop.
 * For mobile, subitems are displayed open and indented.
 *
 * @author ...
 * @version 1.0.0
 * @since 1.0.0
 */

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { IconMenu2 } from "@tabler/icons-react";
import { getLangFromPath } from "../i18n";
import "./Navbar.css";

interface NavbarProps {
  isLightBackground?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isLightBackground = true }) => {
  const { t } = useTranslation();
  const location = useLocation();
  const lang = getLangFromPath(location.pathname);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const textTheme: string = isLightBackground ? "text-dark" : "text-light";

  return (
    <div className="position-absolute w-100" style={{zIndex: 9}}>
      <div className="container-lg">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid d-flex align-items-center-between">
            {/* Menu Icon (Mobile) */}
            <button className="navbar-toggler d-lg-none" type="button" onClick={() => setIsDrawerOpen(true)}>
              <IconMenu2 stroke={2} className={textTheme} />
            </button>

            {/* Logo */}
            <Link to={`/${lang}/home`} className="navbar-brand mx-auto d-lg-0">
              <img
                src={`${t("cdn")}${
                  isLightBackground ? t("img.logo.color") : t("img.logo.white")
                }`}
                alt="Norsh"
                height="30"
              />
            </Link>

            {/* Desktop Menu */}
            <div className="collapse navbar-collapse justify-content-center d-none d-lg-flex">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to={`/${lang}/home`} className={`nav-link mx-3 ${textTheme}`}>
                    {t("navbar.home")}
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={`/${lang}/about`} className={`nav-link mx-3 ${textTheme}`}>
                    {t("navbar.about")}
                  </Link>
                </li>

                {/* Dropdown: Solutions */}
                <li className="nav-item dropdown">
                  <a
                    href="#"
                    className={`nav-link dropdown-toggle mx-3 ${textTheme}`}
                    id="solutionsDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {t("navbar.solutions")}
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="solutionsDropdown">
                    <li>
                      <Link to={`/${lang}/solutions/hazmat`} className="dropdown-item">
                        {t("navbarItems.solutions.hazmat")}
                      </Link>
                    </li>
                    <li>
                      <Link to={`/${lang}/solutions/pharma`} className="dropdown-item">
                        {t("navbarItems.solutions.pharma")}
                      </Link>
                    </li>
                    <li>
                      <Link to={`/${lang}/solutions/suplychain`} className="dropdown-item">
                        {t("navbarItems.solutions.suplychain")}
                      </Link>
                    </li>
                    <li>
                      <Link to={`/${lang}/solutions/recycle`} className="dropdown-item">
                        {t("navbarItems.solutions.recycle")}
                      </Link>
                    </li>
                    <li>
                      <Link to={`/${lang}/solutions/ip`} className="dropdown-item">
                        {t("navbarItems.solutions.ip")}
                      </Link>
                    </li>
                    <li>
                      <Link to={`/${lang}/solutions/sustainability`} className="dropdown-item">
                        {t("navbarItems.solutions.sustainability")}
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* Dropdown: Programs */}
                <li className="nav-item dropdown">
                  <a
                    href="#"
                    className={`nav-link dropdown-toggle mx-3 ${textTheme}`}
                    id="programsDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {t("navbar.programs")}
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="programsDropdown">
                    <li>
                      <Link to={`/${lang}/developers`} className="dropdown-item">
                        {t("navbarItems.programs.developers")}
                      </Link>
                    </li>
                    <li>
                      <Link to={`/${lang}/byc`} className="dropdown-item">
                        {t("navbarItems.programs.byc")}
                      </Link>
                    </li>
                    <li>
                      <Link to={`/${lang}/govnet`} className="dropdown-item">
                        {t("navbarItems.programs.govnet")}
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* Login Button */}
            <div>
              {/* Descomente e ajuste se necessário */}
              {/* <Link
                to={`/${lang}/login`}
                className="btn btn-info rounded-pill text-white px-4 border-0"
                style={{ backgroundColor: "#329da4" }}
              >
                Login
              </Link> */}
            </div>
          </div>
        </nav>

        {/* Mobile Sidebar Drawer */}
        <div
          className={`offcanvas offcanvas-start ${isDrawerOpen ? "show" : ""}`}
          style={{ visibility: isDrawerOpen ? "visible" : "hidden" }}
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title">{t("navbar.menu")}</h5>
            <button type="button" className="btn-close" onClick={() => setIsDrawerOpen(false)}></button>
          </div>
          <div className="offcanvas-body">
            <Link to={`/${lang}/home`} className="nav-link" onClick={() => setIsDrawerOpen(false)}>
              {t("navbar.home")}
            </Link>
            <Link to={`/${lang}/about`} className="nav-link" onClick={() => setIsDrawerOpen(false)}>
              {t("navbar.about")}
            </Link>

            {/* Mobile: Solutions - Always open and indented */}
            <div className="mobile-group">
              <p className="nav-link mb-1">{t("navbar.solutions")}</p>
              <ul className="list-unstyled ms-3">
                <li>
                  <Link
                    to={`/${lang}/solutions/hazmat`}
                    className="nav-link"
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    {t("navbarItems.solutions.hazmat")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/${lang}/solutions/pharma`}
                    className="nav-link"
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    {t("navbarItems.solutions.pharma")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/${lang}/solutions/suplychain`}
                    className="nav-link"
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    {t("navbarItems.solutions.suplychain")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/${lang}/solutions/recycle`}
                    className="nav-link"
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    {t("navbarItems.solutions.recycle")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/${lang}/solutions/ip`}
                    className="nav-link"
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    {t("navbarItems.solutions.ip")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/${lang}/solutions/sustainability`}
                    className="nav-link"
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    {t("navbarItems.solutions.sustainability")}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Mobile: Programs - Always open and indented */}
            <div className="mobile-group">
              <p className="nav-link mb-1">{t("navbar.programs")}</p>
              <ul className="list-unstyled ms-3">
                <li>
                  <Link
                    to={`/${lang}/developers`}
                    className="nav-link"
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    {t("navbarItems.programs.developers")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/${lang}/byc`}
                    className="nav-link"
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    {t("navbarItems.programs.byc")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/${lang}/govnet`}
                    className="nav-link"
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    {t("navbarItems.programs.govnet")}
                  </Link>
                </li>
              </ul>
            </div>

            <Link to={`/${lang}/contact`} className="nav-link" onClick={() => setIsDrawerOpen(false)}>
              {t("navbar.contact")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;