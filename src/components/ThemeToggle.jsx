import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Theme check from localStorage
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    }

    // Scroll detection
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed top-4 right-18 md:top-3 md:right-5 z-70 p-2 rounded-full card-hover transition-all duration-300",
        isScrolled ? "scale-90 -translate-y-1" : "scale-100 translate-y-0",
        "focus:outline-none"
      )}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300 transition-transform duration-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900 transition-transform duration-300" />
      )}
    </button>
  );
};
