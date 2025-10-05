import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                onClick={() => navigate("/")}
                className="p-2"
              >
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <h1 className="text-2xl font-playfair font-bold text-foreground">
                Essence Luxe
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-8">
            About Essence Luxe
          </h2>
          <div className="space-y-6 text-muted-foreground font-inter text-lg">
            <p>
              Welcome to Essence Luxe, where sophistication meets sensory perfection. 
              We are dedicated to curating the world's finest fragrances, offering an 
              exquisite collection that embodies elegance, luxury, and timeless beauty.
            </p>
            <p>
              Our passion for perfumery drives us to source only the most exceptional 
              scents from renowned perfume houses and emerging artisans. Each fragrance 
              in our collection tells a unique story, crafted with the finest ingredients 
              and utmost attention to detail.
            </p>
            <p>
              At Essence Luxe, we believe that a signature scent is more than just a 
              fragrance—it's an expression of identity, a mark of distinction, and a 
              journey through memory and emotion. We invite you to discover your perfect 
              scent and experience the art of luxury perfumery.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
