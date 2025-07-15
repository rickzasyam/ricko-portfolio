// components/MobileMenu.jsx
import { navItems } from "./navItems";
import { cn } from "@/lib/utils";

export const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <div
      className={cn(
        "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
        "transition-all duration-400 md:hidden",
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      )}
    >
      <div className="font-bold flex flex-col space-y-8 text-xl">
        {navItems.map((item, key) => (
          <a
            key={key}
            href={item.href}
            className="text-foreground/80 hover:text-primary transition-colors duration-400"
            onClick={onClose}
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
};
