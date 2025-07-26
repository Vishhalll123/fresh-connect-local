import { Button } from "@/components/ui/button";
import { Menu, Search, Bell } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">M</span>
            </div>
            <span className="font-bold text-xl text-primary">Mandala Fresh</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="text-sm font-medium text-foreground/80 hover:text-primary transition-smooth">
            मार्केटप्लेस
          </a>
          <a href="#" className="text-sm font-medium text-foreground/80 hover:text-primary transition-smooth">
            आपूर्तिकर्ता
          </a>
          <a href="#" className="text-sm font-medium text-foreground/80 hover:text-primary transition-smooth">
            कीमत खोजें
          </a>
          <a href="#" className="text-sm font-medium text-foreground/80 hover:text-primary transition-smooth">
            ऑर्डर
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="sm">
            लॉग इन
          </Button>
          <Button variant="hero" size="sm">
            साइन अप
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;