import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import produceImage from "@/assets/fresh-produce.jpg";

const PriceDiscovery = () => {
  const priceData = [
    {
      name: "टमाटर",
      english: "Tomatoes",
      currentPrice: 45,
      previousPrice: 50,
      unit: "kg",
      trend: "down",
      suppliers: 12
    },
    {
      name: "प्याज",
      english: "Onions", 
      currentPrice: 30,
      previousPrice: 28,
      unit: "kg",
      trend: "up",
      suppliers: 8
    },
    {
      name: "धनिया",
      english: "Coriander",
      currentPrice: 15,
      previousPrice: 15,
      unit: "bunch",
      trend: "stable",
      suppliers: 15
    },
    {
      name: "हरी मिर्च",
      english: "Green Chili",
      currentPrice: 80,
      previousPrice: 75,
      unit: "kg",
      trend: "up",
      suppliers: 6
    }
  ];

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up":
        return <TrendingUp className="h-4 w-4 text-red-500" />;
      case "down":
        return <TrendingDown className="h-4 w-4 text-green-500" />;
      default:
        return <Minus className="h-4 w-4 text-gray-500" />;
    }
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case "up":
        return "text-red-500";
      case "down":
        return "text-green-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <section className="py-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">
                <span className="text-primary">मूल्य खोज</span>
                <br />
                Real-time Price Discovery
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Get real-time pricing from multiple suppliers to make informed purchasing decisions. 
                Track price trends and find the best deals for your business.
              </p>
              <p className="text-lg text-secondary-foreground font-medium">
                निष्पक्ष मूल्य • रियल-टाइम अपडेट • मार्केट ट्रेंड
              </p>
            </div>

            <div className="space-y-4">
              {priceData.map((item, index) => (
                <Card key={index} className="p-4 hover:shadow-warm transition-smooth bg-card/80 backdrop-blur">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <div>
                          <h3 className="font-semibold text-foreground">{item.name}</h3>
                          <p className="text-sm text-muted-foreground">{item.english}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-right space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-primary">₹{item.currentPrice}</span>
                        <span className="text-sm text-muted-foreground">/{item.unit}</span>
                        {getTrendIcon(item.trend)}
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <span className={getTrendColor(item.trend)}>
                          {item.trend === "up" ? "+" : item.trend === "down" ? "-" : ""}
                          {item.trend !== "stable" ? Math.abs(item.currentPrice - item.previousPrice) : 0}
                        </span>
                        <span className="text-muted-foreground">• {item.suppliers} suppliers</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <Button variant="hero" size="lg">
              सभी कीमतें देखें
              <TrendingUp className="h-5 w-5" />
            </Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary rounded-2xl transform -rotate-3 opacity-20"></div>
            <img 
              src={produceImage} 
              alt="Fresh Indian vegetables and produce"
              className="relative rounded-2xl shadow-glow w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceDiscovery;