import Navbar from "../components/Navbar";
import { decodeHtmlAndParse } from "../utils/DecodeHtml";
import styles from "./Home.module.css";
import { t } from "i18next";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<>
			<Navbar isLightBackground={false} />

			<div className={styles.bannerContainer} style={{ backgroundImage: `url(${t("cdn")}${t("img.home.bannerBg")})` }}>
				<img src={`${t("cdn")}${t("img.home.bannerL1")}`} className={styles.bannerL1} />
				<div className={`container-lg text-white ${styles.bannerContent}`}>
					<div className="row m-4 align-items-center">
						<div className="col-12 col-md-8 mt-5 mt-md-0 text-center text-md-start">
							<h1 className="fs-0">{decodeHtmlAndParse(t("home.banner.title"))}</h1>
							<div className="mt-3 fs-4 fw-lighter">{decodeHtmlAndParse(t("home.banner.subtitle"))}</div>
						</div>

						<div className={`col-12 col-md-4 text-center`}>
							<img src={`${t("cdn")}${t("img.home.block")}`} className={styles.imageBanner} />
						</div>
					</div>
				</div>
			</div>

			<div className="container-lg" style={{ marginBottom: 100, marginTop: 100 }}>
				<div className="row">
					<div className="col-12 col-lg-7 pe-4">
						<h1 className="fs-0 mb-4">{decodeHtmlAndParse(t("home.whatIs.title"))}</h1>
						<p className="fs-5 fw-lighter">{decodeHtmlAndParse(t("home.whatIs.text"))}</p>
					</div>
					<div className="col-12 col-lg-5 d-none d-lg-block text-center">
						<img src={`${t("cdn")}${t("img.home.nsh")}`} className="w-100 p-5" />
					</div>
				</div>
			</div>

			<div className={`${styles.divContainer}`} style={{ backgroundImage: `url(${t("cdn")}${t("img.home.div")})` }}>
				<div className="container-lg text-white">
					<h1 className="d-block w-100">{decodeHtmlAndParse(t("home.cta.title"))}</h1>
					<p className="fs-5 fw-lighter mt-3">{decodeHtmlAndParse(t("home.cta.text"))}</p>
				</div>
			</div>

			<div className="container-lg" style={{ marginBottom: 100, marginTop: 100 }}>
				<div className="row">
					<div className="col-4 col-lg-auto mb-5">
						<img src={`${t("cdn")}${t("img.home.laptop")}`} style={{ maxWidth: "400px", width: "100%", objectFit: "contain" }} />
					</div>
					<div className="col">
						<h1 className="fs-0 mb-4">{decodeHtmlAndParse(t("home.techInfo.title"))}</h1>
						<p className="fs-5 fw-lighter">{decodeHtmlAndParse(t("home.techInfo.text"))}</p>
						<p className="fs-5 fw-lighter">
							<Link to="https://docs.norsh.org" className="" target="_blank" style={{ textDecoration: "none", color: "rgb(41, 135, 125)" }}>
								{decodeHtmlAndParse(t("home.techInfo.link"))}
							</Link>
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
