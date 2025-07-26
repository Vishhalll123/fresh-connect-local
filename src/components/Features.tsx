import { Card } from "@/components/ui/card";
import { Search, Star, ShoppingCart, MessageCircle, CreditCard, GraduationCap } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Search,
      title: "Supplier Discovery",
      description: "Discover local suppliers near you with quality ratings and real-time availability",
      subtitle: "Find trusted suppliers in your area"
    },
    {
      icon: Star,
      title: "Rating System",
      description: "Rate suppliers based on quality, reliability, and service for better decisions",
      subtitle: "Quality and reliability ratings"
    },
    {
      icon: ShoppingCart,
      title: "Micro-Bulk Ordering",
      description: "Order in small to medium quantities perfect for street food vendors",
      subtitle: "Small quantity orders, right amounts"
    },
    {
      icon: MessageCircle,
      title: "In-App Messaging",
      description: "Communicate directly with suppliers for better coordination and service",
      subtitle: "Direct communication with suppliers"
    },
    {
      icon: CreditCard,
      title: "Payment Gateway",
      description: "Secure payment integration for seamless transactions",
      subtitle: "Secure payment system"
    },
    {
      icon: GraduationCap,
      title: "Educational Content",
      description: "Educational content to help vendors make better business decisions",
      subtitle: "Business improvement knowledge"
    }
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            <span className="text-primary">Key Features</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Empowering street food vendors with technology for better procurement and business growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="p-6 hover:shadow-warm transition-smooth bg-card/50 backdrop-blur border-border/50">
                <div className="space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-sm text-primary font-medium">{feature.subtitle}</p>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;