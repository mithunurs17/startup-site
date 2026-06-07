import { Button } from "./ui/button";

const NAV_LINKS = ["Services", "About Us", "Projects", "Team", "Contacts"];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 lg:px-16 py-5 opacity-0 animate-fade-in [animation-delay:0.1s]">
      {/* Logo */}
      <a
        href="#"
        className="text-foreground text-xl font-semibold tracking-tight flex items-center gap-2 select-none"
      >
        <span className="w-2 h-2 rounded-full bg-primary animate-pulse-dot" />
        SENTINEL
      </a>

      {/* Nav links — hidden on mobile */}
      <nav className="hidden md:flex items-center gap-8">
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase().replace(" ", "-")}`}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors uppercase tracking-widest font-normal"
          >
            {link}
          </a>
        ))}
      </nav>

      {/* CTA — hidden on mobile */}
      <Button
        variant="navCta"
        size="lg"
        className="hidden md:inline-flex"
      >
        Get Quote
      </Button>
    </header>
  );
}