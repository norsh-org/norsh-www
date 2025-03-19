import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import i18n, { getLangFromPath } from "./i18n";
import { GlobalProvider } from "./context/GlobalContext";
import Hazmat from "./pages/Hazmat";
import "./App.css";
import Footer from "./components/Footer";
import ScrollToTop from "./utils/ScrollToTop";
import BodyClassSetter from "./utils/BodyClassSetter";
import Pharma from "./pages/Pharma";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const lang = getLangFromPath(location.pathname);

  if (!["en", "pt"].includes(lang)) {
    return <Navigate to="/en" replace />; // Redireciona para inglês se o idioma for inválido
  }

  i18n.changeLanguage(lang); // Altera o idioma no i18n
  return <>{children}</>;
};

const App = () => {
  return (
    <GlobalProvider> 
      <Router>
      <BodyClassSetter/>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Navigate to="/en/home" replace />} />
          <Route path="/en" element={<Navigate to="/en/home" replace />} />
          <Route path="/:lang/home" element={<Wrapper><Home /></Wrapper>} />
          <Route path="/:lang/about" element={<Wrapper><About /></Wrapper>} />
          <Route path="/:lang/solutions/hazmat" element={<Wrapper><Hazmat /></Wrapper>} />
          <Route path="/:lang/solutions/pharma" element={<Wrapper><Pharma /></Wrapper>} />
          <Route path="/:lang/contact" element={<Wrapper><Contact /></Wrapper>} />
        </Routes>
        <Footer/>
      </Router>
      
    </GlobalProvider>
  );
};

export default App;
