import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import PriceDiscovery from "@/components/PriceDiscovery";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <PriceDiscovery />
      <Footer />
    </div>
  );
};

export default Index;
