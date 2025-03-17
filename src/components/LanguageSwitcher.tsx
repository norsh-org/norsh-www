import { useNavigate, useLocation } from "react-router-dom";
import { getLangFromPath } from "../i18n";

const LanguageSwitcher = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const lang = getLangFromPath(location.pathname); // Obtém o idioma da URL

	const switchLanguage = () => {
		const newLang = lang === "en" ? "pt" : "en"; // Alterna entre inglês e português

		// Substituir apenas o idioma na URL, mantendo o restante
		const newPath = location.pathname.replace(`/${lang}`, `/${newLang}`);

		navigate(newPath, { replace: true });
	};

	return (
		<button className="p-2 bg-white text-black rounded absolute top-4 right-4" onClick={switchLanguage}>
			{lang === "en" ? "🇧🇷 Português" : "🇺🇸 English"}
		</button>
	);
};

export default LanguageSwitcher;
