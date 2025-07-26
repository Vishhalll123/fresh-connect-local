import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary/5 border-t border-border/40">
      <div className="container py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">M</span>
              </div>
              <span className="font-bold text-xl text-primary">Mandala Fresh</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Empowering Indian street food vendors through technology-driven supply chain solutions.
            </p>
            <p className="text-secondary-foreground font-medium">
              Empowering Indian Street Food Vendors
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">For Vendors</h3>
            <div className="space-y-2">
              <a href="#" className="block text-muted-foreground hover:text-primary transition-smooth">
                Find Suppliers
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-smooth">
                Price Comparison
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-smooth">
                Order Management
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-smooth">
                Educational Content
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">For Suppliers</h3>
            <div className="space-y-2">
              <a href="#" className="block text-muted-foreground hover:text-primary transition-smooth">
                Find Vendors
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-smooth">
                Manage Inventory
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-smooth">
                Order Tracking
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-smooth">
                Payment History
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>support@mandalafresh.com</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Mumbai, India</span>
              </div>
            </div>
            <Button variant="hero" className="w-full">
              Help Center
            </Button>
          </div>
        </div>

        <div className="border-t border-border/40 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-center md:text-left">
              © 2024 Mandala Fresh. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;