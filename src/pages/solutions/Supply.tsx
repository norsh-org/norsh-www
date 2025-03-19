import FaqAccordion from "../../components/FaqAccordion";
import Navbar from "../../components/Navbar";
import { decodeHtmlAndParse } from "../../utils/DecodeHtml";
import "./Solutions.scss";
import { t } from "i18next";

const Supply = () => {
	return (
		<> 
			<Navbar isLightBackground={false} />

			<div className="bannerContainer" style={{ backgroundImage: `url(${t("cdn")}${t("img.supply.bannerBg")})` }}>
				<div className="layerBlack">
				<div className="divContainer container-lg text-white">
					<div className="row m-4 align-items-center">
						<div className="col-12 col-md-8 mt-5 mt-md-0 text-center text-md-start">
							<h1 className="fs-0">{t("supply.banner.title")}</h1>
							<div className="mt-3 fs-4 fw-lighter">{decodeHtmlAndParse(t("supply.banner.subtitle"))}</div>
						</div>
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
							<h1 className="fs-0 mb-4">{decodeHtmlAndParse(t("supply.whatIs.title"))}</h1>
							<p className="fs-5 fw-lighter">
								{decodeHtmlAndParse(t("supply.whatIs.text"))}
								{decodeHtmlAndParse(t("supply.whatIs.list"))}
							</p>
						</div>
					</div>
				</div>

				<div className="container-lg" style={{ marginTop: 100, marginBottom: 200 }}>
                    <FaqAccordion faqPath="supply.faq.items" />
                </div>
		</>
	);
};

export default Supply;
