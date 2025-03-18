import Navbar from "../components/Navbar";
import { decodeHtmlAndParse } from "../utils/DecodeHtml";
import { t } from "i18next";
import "./Hazmat.css";
import FaqAccordion from "../components/FaqAccordion";

const Hazmat = () => {
	return (
		<>
			<div style={{ backgroundColor: "black" }}>
				<Navbar isLightBackground={false} />

				<div className="container-lg">
					<div className="row w-100 d-flex align-items-center pt-5">
						<div className="col-12 col-md-5 mt-5 text-center text-md-start">
							<h1 className="fs-0">{t("hazmat.banner.title")}</h1>
							<div className="mt-3 fs-4 fw-lighter">{decodeHtmlAndParse(t("hazmat.banner.subtitle"))}</div>
						</div>
						<div className="col-12 col-md-7 mb-5">
							<img src={`${t("cdn")}${t("img.hazmat.bannerBg")}`} className="w-100" alt="Hazmat Banner" />
						</div>
					</div>
				</div>

                <div className="container-lg" style={{ marginBottom: 100, marginTop: 100 }}>
					<div className="row">
						<div className="col-12 col-lg-5 d-none d-lg-block text-center">
							<img src="https://img.freepik.com/free-photo/close-up-gun-surrounded-by-bullets_23-2150803762.jpg?t=st=1742321900~exp=1742325500~hmac=3ce5d610388218755f225bfc98d81f7c73a15c32f14fd41a15c19ccd77803bce&w=1800" className="w-100 p-5" alt="Hazmat Use Case" />
						</div>
						<div className="col-12 col-lg-7 pe-4">
							<h1 className="fs-0 mb-4">{decodeHtmlAndParse(t("hazmat.whatIs.title"))}</h1>
							<p className="fs-5 fw-lighter">
								{decodeHtmlAndParse(t("hazmat.whatIs.text"))}
								{decodeHtmlAndParse(t("hazmat.whatIs.list"))}
							</p>
						</div>
					</div>
				</div>

				<div className="container-lg" style={{ marginTop: 100, marginBottom: 200 }}>
                    <FaqAccordion faqPath="hazmat.faq.items" />
                </div>
			</div>
		</>
	);
};

export default Hazmat;
