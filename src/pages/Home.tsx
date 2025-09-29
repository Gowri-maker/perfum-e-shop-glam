import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Flame, Wind } from "lucide-react";
import categoriesImage from "@/assets/perfume-categories.jpg";

const Home = () => {
  const navigate = useNavigate();

  const categories = [
    {
      id: "light",
      title: "Light Fragrance",
      description: "Fresh, airy scents perfect for everyday wear",
      icon: Wind,
      gradient: "from-primary/20 to-primary-glow/30",
    },
    {
      id: "medium",
      title: "Medium Fragrance",
      description: "Balanced compositions for versatile occasions",
      icon: Sparkles,
      gradient: "from-luxury/20 to-accent/40",
    },
    {
      id: "strong",
      title: "Strong Fragrance",
      description: "Bold, intense scents that make a statement",
      icon: Flame,
      gradient: "from-primary/30 to-luxury/40",
    },
  ];

  const handleCategoryClick = (categoryId: string) => {
    navigate(`/category/${categoryId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-playfair font-bold text-foreground">
              Essence Luxe
            </h1>
            <Button
              variant="elegant"
              onClick={() => navigate("/login")}
              className="font-inter"
            >
              Account
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-playfair font-bold text-foreground mb-6">
            Discover Your
            <span className="block bg-gradient-luxury bg-clip-text text-transparent">
              Signature Scent
            </span>
          </h2>
          <p className="text-xl text-muted-foreground font-inter max-w-3xl mx-auto mb-12">
            Explore our curated collection of luxury fragrances, each crafted to tell your unique story
          </p>
          
          {/* Categories Image */}
          <div className="mb-16">
            <img
              src={categoriesImage}
              alt="Perfume collection"
              className="w-full max-w-4xl mx-auto rounded-2xl shadow-luxury"
            />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-playfair font-semibold text-foreground mb-4">
              Choose Your Intensity
            </h3>
            <p className="text-lg text-muted-foreground font-inter">
              Select the fragrance strength that matches your mood and style
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <Card
                  key={category.id}
                  className="group cursor-pointer transition-luxury hover:shadow-luxury border-border/50 bg-card/80 backdrop-blur-sm"
                  onClick={() => handleCategoryClick(category.id)}
                >
                  <CardHeader className="text-center pb-4">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${category.gradient} flex items-center justify-center`}>
                      <IconComponent className="w-8 h-8 text-foreground" />
                    </div>
                    <CardTitle className="text-xl font-playfair group-hover:text-primary transition-luxury">
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="font-inter text-muted-foreground mb-6">
                      {category.description}
                    </CardDescription>
                    <Button
                      variant="outline"
                      className="w-full group-hover:border-primary group-hover:text-primary transition-luxury font-inter"
                    >
                      Explore Collection
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-card/30 backdrop-blur-sm py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground font-inter">
            © 2024 Essence Luxe. Crafted with passion for luxury fragrances.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;