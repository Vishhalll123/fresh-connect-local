import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Truck, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-vendor.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                <span className="text-primary">Mandala Fresh</span>
                <br />
                <span className="text-foreground">Street Food</span>
                <br />
                <span className="text-foreground">Supply Chain</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Fresh produce discovery platform connecting street food vendors with local suppliers. 
                Real-time prices, micro-bulk ordering, and trusted supplier ratings.
              </p>
              <p className="text-lg text-secondary-foreground font-medium">
                Fresh Produce • Local Suppliers • Fair Prices
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg">
                Start as Vendor
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg">
                Become Supplier
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center space-y-2">
                <div className="flex justify-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Vendors</div>
              </div>
              <div className="text-center space-y-2">
                <div className="flex justify-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Truck className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-primary">200+</div>
                <div className="text-sm text-muted-foreground">Suppliers</div>
              </div>
              <div className="text-center space-y-2">
                <div className="flex justify-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-primary">₹2L+</div>
                <div className="text-sm text-muted-foreground">Monthly Orders</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary rounded-2xl transform rotate-3 opacity-20"></div>
            <img 
              src={heroImage} 
              alt="Street food vendor with fresh produce"
              className="relative rounded-2xl shadow-glow w-full h-[600px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;