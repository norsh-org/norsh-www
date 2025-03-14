import Navbar from "../components/Navbar";
import block from "../assets/home/block.png";
import nsh from "../assets/home/nsh.png";
import styles from "./Home.module.css";
import { t } from "i18next";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar isLightBackground={false} />

      <div
        className={styles.bannerContainer}
        style={{ backgroundImage: `url(${t("cdn")}${t("img.home.bannerBg")})` }}
      >
        <img
          src={`${t("cdn")}${t("img.home.bannerL1")}`}
          className={styles.bannerL1}
        />
        <div className={`container-lg text-white ${styles.bannerContent}`}>
          <div className="row m-4 align-items-center">
            <div className="col-12 col-md-8 mt-5 mt-md-0 text-center text-md-start">
              <h1 className="fs-0">{t("home.banner.title")}</h1>
              <div className="mt-3 fs-4 fw-lighter">
                {t("home.banner.subtitle")}
              </div>
            </div>

            <div className={`col-12 col-md-4 text-center`}>
              <img src={block} className={styles.imageBanner} />
            </div>
          </div>
        </div>
      </div>

      <div
        className="container-lg"
        style={{ marginBottom: 100, marginTop: 100 }}
      >
        <div className="row">
          <div className="col-12 col-lg-7 pe-4">
            <h1 className="fs-0 mb-4">
              What is <span style={{ color: "darkcyan" }}>Norsh?</span>
            </h1>
            <p className="fs-5 fw-lighter">
              Norsh is not just a blockchain. It is a new standard that removes
              the limits of Web 3.0. We have created an ecosystem that
              eliminates existing barriers and makes operations more efficient,
              transparent, and direct. With imperceptible latency, costs reduced
              to the essential, and no obstacles for those who develop, use, or
              innovate, in any environment: public, corporate, industrial, or
              governmental.
            </p>
            <p className="fs-5 fw-lighter">
              We believe that true progress comes from improving what already
              exists. “Reinvent the Wheel” does not mean changing for the sake
              of change, but evolving with purpose. If something works, we keep
              it. If it gets in the way, we replace it. We do not follow trends
              or dogmas, only what truly adds value.
            </p>
            <p className="fs-5 fw-lighter">
              The future of blockchains will no longer be defined by
              restrictions but by the opportunities we can create. That is
              exactly why Norsh exists, to build a new path that is secure,
              intelligent, structured, and free of barriers for the future.
            </p>
          </div>
          <div className="col-12 col-lg-5 d-none d-lg-block text-center">
            <img src={nsh} className="w-100 p-5" />
          </div>
        </div>
      </div>

      <div
        className={`${styles.divContainer}`}
        style={{ backgroundImage: `url(${t("cdn")}${t("img.home.div")})` }}
      >
        <div className="container-lg text-white">
          <h1 className="d-block w-100">
            Blockchain for you, businesses, governments, and things
          </h1>
          <p className="fs-5 fw-lighter mt-3">
            From personal use to public and private sectors, from small
            operations to large corporations, Norsh adapts to what you need.
            Secure, scalable, and ready to connect people, institutions, and
            devices.
          </p>
        </div>
      </div>

      <div
        className="container-lg"
        style={{ marginBottom: 100, marginTop: 100 }}
      >
        <div className="row">
          <div className="col-4 col-lg-auto mb-5">
            <img
              src={`${t("cdn")}${t("img.home.laptop")}`}
              style={{maxWidth: "400px", width: "100%", objectFit: "contain" }}
            />
          </div>
          <div className="col">
              <h1 className="fs-0 mb-4">
              Designed for Integration
              </h1>
              <p className="fs-5 fw-lighter">
              Norsh is a blockchain ready for the real world, built on open standards and aligned with the best market practices. Our infrastructure enables seamless integration with existing systems, reducing complexity and development time.
              </p>
              <p className="fs-5 fw-lighter">
              With flexible APIs and an optimized architecture, you can connect applications, services, and devices without barriers. Your focus is your product. We’ve already solved the secure and scalable foundation.              </p>
              <p className="fs-5 fw-lighter">
              
              <Link to="https://docs.norsh.org" className="" target="_blank" style={{textDecoration: "none", color:"rgb(41, 135, 125)"}}>
                See our documentation


              </Link>
              </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
