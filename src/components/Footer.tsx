import { Link, useLocation } from "react-router-dom";
import styles from "./Footer.module.css";
import { t } from "i18next";
import { getLangFromPath } from "../utils/getLang";
import { IconBrandGithub, IconBrandLinkedin, IconBrandMedium, IconBrandX } from '@tabler/icons-react';

const Footer = () => {
  const location = useLocation();
  const lang = getLangFromPath(location.pathname);
  
  return (
    <>
      <div className={`footer ${styles.footerContainer}`} style={{backgroundImage: `url(${t("cdn")}${t("img.footer.bannerBg")})`}}>
        <div className={`container-lg text-white ${styles.footerContent}`}>
            <div className={`row ${styles.footerContentRow}`}>
              <div className="col-12 col-lg-3 mb-5 pe-lg-5">
                <img src={`${t("cdn")}${t("img.logo.white")}`} alt="Norsh" height="30"/>

                <p className="mt-4">Designed and built with dedication and innovation by the Norsh team, with the support of our incredible community.</p>
                <p className="">Licensed under NCL</p>
                <p>Currently at v1.0.0</p>
              </div>

              <div className="col-6 col-lg-3 mb-5">
              <h5 className="mb-3">Links</h5>
                <ul className="list-group">
                  <li className="d-inline"><Link to={`/${lang}/home`} className="text-white nav-link mb-3">{t("navbar.home")}</Link></li> 
                  <li className="d-inline"><Link to={`/${lang}/about`} className="text-white nav-link mb-3">{t("navbar.about")}</Link></li>
                  <li className="d-inline"><Link to={`/${lang}/contact`} className="text-white nav-link mb-3">{t("navbar.contact")}</Link></li> 
                </ul>
              </div>

              <div className="col-6 col-lg-3 mb-5">
                <h5 className="mb-3">Solutions</h5>
                <ul className="list-group">
                  <li className="d-inline"><Link to={`/${lang}/hazmat`} className="text-white nav-link mb-3">Hazmat</Link></li> 
                  <li className="d-inline"><Link to={`/${lang}/about`} className="text-white nav-link mb-3">{t("navbar.about")}</Link></li>
                  <li className="d-inline"><Link to={`/${lang}/contact`} className="text-white nav-link mb-3">{t("navbar.contact")}</Link></li> 
                </ul>
              </div>

              <div className="col-12 col-lg-3 mb-5 text-center">
              <Link to="https://github.com/norsh-org" className="text-white" target="_blank">
                <IconBrandGithub stroke={2} className="me-3" />
              </Link>

              <Link to="https://www.linkedin.com/company/norsh-org" className="text-white" target="_blank">
              <IconBrandLinkedin stroke={2} className="me-3" />
              </Link>

              <Link to="https://norsh.medium.com/" className="text-white" target="_blank">
              <IconBrandMedium stroke={2} className="me-3" />
              </Link>

              <Link to="https://x.com/norsh_org" className="text-white" target="_blank">
              <IconBrandX stroke={2} />
              </Link>
              </div>
            </div>
          </div>
       </div>
    </>
  );
};

export default Footer;
