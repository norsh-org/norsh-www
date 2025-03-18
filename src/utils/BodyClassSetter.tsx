import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const BodyClassSetter: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Remove todas as classes previamente definidas
    document.body.className = "";

    // Divide o pathname em segmentos, removendo strings vazias
    const segments = location.pathname.split("/").filter(Boolean);

    // Remove o primeiro segmento, que representa o idioma
    const effectiveSegments = segments.length > 0 ? segments.slice(1) : [];

    // Concatena os segmentos com hífens usando um loop
    let pageClass = "";
    for (let i = 0; i < effectiveSegments.length; i++) {
      if (i > 0) {
        pageClass += "-";
      }
      pageClass += effectiveSegments[i].toLowerCase();
    }

    // Se não houver segmentos efetivos, define "home"
    if (!pageClass) {
      pageClass = "home";
    }

    // Adiciona a classe ao body
    document.body.classList.add(pageClass);
  }, [location]);

  return null;
};

export default BodyClassSetter;
