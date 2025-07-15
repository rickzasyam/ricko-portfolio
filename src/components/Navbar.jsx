import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems } from "./navItems";
import { MobileMenu } from "./Mobile";


export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Hanya lock scroll tanpa position fixed
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMenuOpen]);

  return (
    <>
      <nav
        className={cn(
          "fixed w-full z-50 transition-all duration-300",
          isScrolled
            ? "py-3 bg-white/30 dark:bg-background/20 backdrop-blur-md shadow-md border-b border-white/20 dark:border-white/10"
            : "py-5"
        )}
      >
        <div className="container flex items-center justify-between">
          <a
            className="text-xl font-bold text-primary flex items-center"
            href="#hero"
          >
            <span className="relative z-10">
              <span className="text-glow text-foreground">Ricko's</span>{" "}
              Portfolio
            </span>
          </a>

          <div className="font-bold hidden md:flex space-x-8">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-400"
              >
                {item.name}
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden p-2 text-foreground z-50"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Pisahkan menu mobile di luar nav */}
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

