import { useEffect } from "react";
import { useGlobal } from "../context/GlobalContext";

const About = () => {
  const { setIsDarkTheme } = useGlobal();

  useEffect(() => {
    setIsDarkTheme(true); // Navbar clara
  }, []);

  return <h1>About</h1>;
};

export default About;
