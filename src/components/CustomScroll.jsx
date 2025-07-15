import { useEffect, useState } from "react";

export const CustomScroll = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", updateScroll);
    updateScroll(); // initial

    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  return (
    <div className="mk-top-scrolled">
      <div
        className="mk-top-scrolled-highlight"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};
