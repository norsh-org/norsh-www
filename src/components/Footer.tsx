import { Link, useLocation } from "react-router-dom";
import { t } from "i18next";
import { IconBrandGithub, IconBrandLinkedin, IconBrandMedium, IconBrandX } from "@tabler/icons-react";
import { getLangFromPath } from "../i18n";
import "./Footer.css";

const Footer = () => {
  const location = useLocation();
  const lang = getLangFromPath(location.pathname);

  return (
    <div
      className="footer footerContainer"
      style={{ backgroundImage: `url(${t("cdn")}${t("img.footer.bannerBg")})` }}
    >
      <div className="container-lg text-white footerContent">
        <div className="row w-100">
          {/* Coluna 1: Logo e Informações */}
          <div className="col-12 col-lg-3 mb-5 pe-lg-5">
            <img src={`${t("cdn")}${t("img.logo.white")}`} alt="Norsh" height="30" />

            <p className="mt-4">
              Designed and built with dedication and innovation by the Norsh team, with the support of our incredible community.
            </p>
            <p>Licensed under NCL</p>
            <p>Currently at v1.0.0</p>
          </div>

          {/* Coluna 2: Links */}
          <div className="col-6 col-lg-2 mb-5">
            <h5 className="mb-3">Links</h5>
            <ul className="list-group">
              <li className="d-inline">
                <Link to={`/${lang}/home`} className="text-white nav-link mb-3">
                  {t("navbar.home")}
                </Link>
              </li>
              {/* Outros links internos podem ser adicionados aqui */}
            </ul>
          </div>

          {/* Coluna 3: Solutions */}
          <div className="col-6 col-lg-3 mb-5">
            <h5 className="mb-3">Solutions</h5>
            <ul className="list-group">
              <li className="d-inline">
                <Link to={`/${lang}/solutions/hazmat`} className="text-white nav-link mb-3">
                  {t("navbarItems.solutions.hazmat")}
                </Link>
              </li>
              <li className="d-inline">
                <Link to={`/${lang}/solutions/pharma`} className="text-white nav-link mb-3">
                  {t("navbarItems.solutions.pharma")}
                </Link>
              </li>
              <li className="d-inline">
                <Link to={`/${lang}/solutions/supplychain`} className="text-white nav-link mb-3">
                  {t("navbarItems.solutions.supplychain")}
                </Link>
              </li>
              <li className="d-inline">
                <Link to={`/${lang}/solutions/recycle`} className="text-white nav-link mb-3">
                  {t("navbarItems.solutions.recycle")}
                </Link>
              </li>
              <li className="d-inline">
                <Link to={`/${lang}/solutions/ip`} className="text-white nav-link mb-3">
                  {t("navbarItems.solutions.ip")}
                </Link>
              </li>
              <li className="d-inline">
                <Link to={`/${lang}/solutions/sustainability`} className="text-white nav-link mb-3">
                  {t("navbarItems.solutions.sustainability")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Programs */}
          <div className="col-6 col-lg-2 mb-5">
            <h5 className="mb-3">Programs</h5>
            <ul className="list-group">
              <li className="d-inline">
                <Link to={`/${lang}/programs/developers`} className="text-white nav-link mb-3">
                  {t("navbarItems.programs.developers")}
                </Link>
              </li>
              <li className="d-inline">
                <Link to={`/${lang}/programs/byc`} className="text-white nav-link mb-3">
                  {t("navbarItems.programs.byc")}
                </Link>
              </li>
              <li className="d-inline">
                <Link to={`/${lang}/programs/govnet`} className="text-white nav-link mb-3">
                  {t("navbarItems.programs.govnet")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 5: Redes Sociais */}
          <div className="col-12 col-lg-2 mb-5 text-center">
            <a
              href="https://github.com/norsh-org"
              className="text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconBrandGithub stroke={2} className="me-3" />
            </a>

            <a
              href="https://www.linkedin.com/company/norsh-org"
              className="text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconBrandLinkedin stroke={2} className="me-3" />
            </a>

            <a
              href="https://norsh.medium.com/"
              className="text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconBrandMedium stroke={2} className="me-3" />
            </a>

            <a
              href="https://x.com/norsh_org"
              className="text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconBrandX stroke={2} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
