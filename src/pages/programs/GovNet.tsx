import FaqAccordion from "../../components/FaqAccordion";
import Navbar from "../../components/Navbar";
import { decodeHtmlAndParse } from "../../utils/DecodeHtml";
import "./Programs.scss";
import { t } from "i18next";

const GovNet = () => {
	return (
		<>
			<div className="banner">
				<Navbar isLightBackground={true} />

				<div className="container-lg">
					<div className="row w-100 d-flex align-items-center pt-5">
						<div className="col-12 col-md-5 mt-5 text-center text-md-start">
							<h1 className="fs-0">{t("govnet.banner.title")}</h1>
							<div className="mt-3 fs-4 fw-lighter">{decodeHtmlAndParse(t("govnet.banner.subtitle"))}</div>
						</div>
						<div className="col-12 col-md-7 mb-5">
							<img src={`${t("cdn")}${t("img.govnet.bannerBg")}`} className="w-100" alt="Hazmat Banner" />
						</div>
					</div>
				</div>
			</div>

			<div className="container-lg" style={{ marginBottom: 100, marginTop: 100 }}>
				<div className="row">
					<div className="col-12 col-lg-5 d-none d-lg-block text-center">
						<img src="" className="w-100 p-5" alt="Hazmat Use Case" />
					</div>
					<div className="col-12 col-lg-7 pe-4">
						<h1 className="fs-0 mb-4">{decodeHtmlAndParse(t("govnet.whatIs.title"))}</h1>
						<p className="fs-5 fw-lighter">
							{decodeHtmlAndParse(t("govnet.whatIs.text"))}
							{decodeHtmlAndParse(t("govnet.whatIs.list"))}
						</p>
					</div>
				</div>
			</div>

			<div className="container-lg" style={{ marginTop: 100, marginBottom: 200 }}>
				<FaqAccordion faqPath="govnet.faq.items" />
			</div>
		</>
	);
};

export default GovNet;
