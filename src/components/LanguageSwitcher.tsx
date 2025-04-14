import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { getLangFromPath } from "../i18n";

// Defina os idiomas disponíveis com código, label e caminho para a bandeira
const LANGUAGES = [
  { code: "en", label: "English", flag: "/flags/us.svg" },
  { code: "pt", label: "Português", flag: "/flags/br.svg" },
  { code: "es", label: "Español", flag: "/flags/es.svg" },
  { code: "cn", label: "中文", flag: "/flags/cn.svg" },
  // Se necessário, adicione mais idiomas aqui
];

interface LanguageSwitcherProps {
	textTheme: string;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ textTheme }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentLang = getLangFromPath(location.pathname) || "en";

  // Estado para controlar a abertura do dropdown
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Ref tipada para o elemento que envolve o dropdown
  const dropdownRef = useRef<HTMLLIElement>(null);

  // Fecha o dropdown se clicar fora do mesmo
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Verifica se o clique ocorreu fora do componente
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Altera o idioma e navega para a URL correspondente
  const changeLanguage = (newLang: string) => {
    if (newLang !== currentLang) {
      // Ex.: substitui "/en/" por "/pt/" (mantendo o restante da URL)
      const newPath = location.pathname.replace(`/${currentLang}`, `/${newLang}`);
      navigate(newPath, { replace: true });
    }
    setDropdownOpen(false);
  };

  // Identifica o idioma ativo para exibir na âncora do dropdown
  const activeLang = LANGUAGES.find((lang) => lang.code === currentLang);

  return (
    <li className="nav-item dropdown" ref={dropdownRef}>
      <a
        href="#"
        className={`nav-link dropdown-toggle mx-3 ${textTheme}`}
        id="languageDropdown"
        data-bs-toggle="dropdown"
        aria-expanded={dropdownOpen}
      >
        <img
          src={activeLang?.flag}
          alt={activeLang?.label}
          style={{ width: "20px", marginRight: "8px" }}
        />
      </a>
      
        <ul className="dropdown-menu" aria-labelledby="languageDropdown">
          {LANGUAGES.map((langItem) => (
            <li key={langItem.code}>
              <a
                className="dropdown-item d-flex align-items-center text-light py-2 me-3"
                onClick={() => changeLanguage(langItem.code)}
				href=""
              >
                {langItem.label}
              </a>
            </li>
          ))}
        </ul>
      
    </li>
  );
};

export default LanguageSwitcher;
