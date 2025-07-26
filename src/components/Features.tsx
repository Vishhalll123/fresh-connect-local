import { Card } from "@/components/ui/card";
import { Search, Star, ShoppingCart, MessageCircle, CreditCard, GraduationCap } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Search,
      title: "आपूर्तिकर्ता खोजें",
      description: "Discover local suppliers near you with quality ratings and real-time availability",
      hindi: "अपने आस-पास के विश्वसनीय आपूर्तिकर्ताओं को खोजें"
    },
    {
      icon: Star,
      title: "रेटिंग सिस्टम",
      description: "Rate suppliers based on quality, reliability, and service for better decisions",
      hindi: "गुणवत्ता और विश्वसनीयता के आधार पर रेटिंग"
    },
    {
      icon: ShoppingCart,
      title: "माइक्रो-बल्क ऑर्डरिंग",
      description: "Order in small to medium quantities perfect for street food vendors",
      hindi: "छोटी मात्रा में ऑर्डर करें, सही मात्रा में खरीदें"
    },
    {
      icon: MessageCircle,
      title: "इन-ऐप मैसेजिंग",
      description: "Communicate directly with suppliers for better coordination and service",
      hindi: "आपूर्तिकर्ताओं से सीधे बात करें"
    },
    {
      icon: CreditCard,
      title: "पेमेंट गेटवे",
      description: "Secure payment integration for seamless transactions",
      hindi: "सुरक्षित पेमेंट सिस्टम"
    },
    {
      icon: GraduationCap,
      title: "शिक्षा सामग्री",
      description: "Educational content to help vendors make better business decisions",
      hindi: "व्यापार बेहतर बनाने की जानकारी"
    }
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            <span className="text-primary">मुख्य विशेषताएं</span>
            <br />
            Key Features
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
                    <p className="text-sm text-primary font-medium">{feature.hindi}</p>
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