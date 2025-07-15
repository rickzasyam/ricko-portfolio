import { ArrowUp } from "lucide-react";


export const Footer = () => {
    return (
        <footer className="py-6 px-4 bg-card relative border-t border-border mt-12 pt-5 text-center">
            <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} Ricko Erlangga, All rights reserved.
            </p>

            <a
                href="#hero"
                className="absolute right-4 top-4 p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
            >
                <ArrowUp size={20} />
            </a>
        </footer>

    );
}; 