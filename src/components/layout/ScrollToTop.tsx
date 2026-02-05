import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop - Resets viewport to top on route change
 * Ensures consistent navigation experience across pages
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top on every route change
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
