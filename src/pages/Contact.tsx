import { useEffect } from "react";
import { useGlobal } from "../context/GlobalContext";

const Contact = () => {
  const { setIsDarkTheme } = useGlobal();

  useEffect(() => {
    setIsDarkTheme(false); // Navbar escura
  }, []);

  return <h1>Contact</h1>;
};

export default Contact;
