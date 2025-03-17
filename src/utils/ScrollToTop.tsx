import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop Component
 *
 * This component scrolls the window to the top whenever the route changes.
 *
 * @author Danthur Lice
 * @version 1.0.0
 * @since 1.0.0
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
