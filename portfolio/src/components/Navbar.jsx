import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { Menu, X } from "lucide-react";

// Liste des liens de navigation
const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  // État qui détecte si l'utilisateur a scrollé
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // useEffect pour écouter le scroll de la page
  useEffect(() => {
    const handleScroll = () => {
      // Si on a scrollé de plus de 10px, on met isScrolled à true
      setIsScrolled(window.scrollY > 10);
    };

    // On ajoute l'événement "scroll"
    window.addEventListener("scroll", handleScroll);

    // Nettoyage : on retire l'événement quand le composant est démonté
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // Nav principale avec styles conditionnels selon si on a scrollé
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled
          ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" // Si scroll → plus petit + fond flou
          : "py-5" // Sinon → plus grand
      )}
    >
      {/* Conteneur de la navbar */}
      <div className="container flex items-center justify-between">
        {/* Logo ou nom du site */}
        <a className="text-xl font-bold text-primary flex items-center" href="#hero">
          <span className="relative z-10">
            <span className="text-glow text-foreground">PedroTech</span> Portfolio
          </span>
        </a>

        {/* Liens de navigation générés automatiquement pour laptop*/}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, key) => (
            <a
             
              href={item.href}
              key={key}
              className="text-foreground /80 hover:text-primary transition-color duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>


         {/* Liens de navigation générés automatiquement pour mobile*/}

         <button onClick={() =>setIsMenuOpen((prev) => !prev )}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}</button>

         <div className={cn("fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"

         )}>
        <div className="flex flex-col space-y-8 text-xl">
          {navItems.map((item, key) => (
            <a
             
              href={item.href}
              key={key}
              className="text-foreground /80 hover:text-primary transition-color duration-300"
              onClick={() => setIsMenuOpen()}
            >
              {item.name}
            </a>
          ))}
        </div>
        </div>
      </div>
    </nav>
  );
};
