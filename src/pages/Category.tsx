import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Star } from "lucide-react";

const Category = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();

  const perfumeData = {
    light: {
      title: "Light Fragrance Collection",
      description: "Fresh, airy scents perfect for everyday wear",
      perfumes: [
        {
          id: 1,
          name: "Ocean Breeze",
          brand: "Aqua Luxe",
          cost: "$85",
          description: "Fresh marine notes with a hint of citrus",
          rating: 4.8,
        },
        {
          id: 2,
          name: "Spring Garden",
          brand: "Floral Elements",
          cost: "$92",
          description: "Delicate floral bouquet with green leaves",
          rating: 4.6,
        },
        {
          id: 3,
          name: "Citrus Dawn",
          brand: "Fresh & Co",
          cost: "$78",
          description: "Energizing blend of bergamot and lemon",
          rating: 4.7,
        },
        {
          id: 4,
          name: "Silk Whisper",
          brand: "Gentle Touch",
          cost: "$89",
          description: "Soft musk with subtle vanilla undertones",
          rating: 4.5,
        },
      ],
    },
    medium: {
      title: "Medium Fragrance Collection",
      description: "Balanced compositions for versatile occasions",
      perfumes: [
        {
          id: 5,
          name: "Rose Elegance",
          brand: "Classic Rose",
          cost: "$125",
          description: "Sophisticated rose with woody base notes",
          rating: 4.9,
        },
        {
          id: 6,
          name: "Amber Nights",
          brand: "Evening Glow",
          cost: "$135",
          description: "Warm amber with spicy oriental touches",
          rating: 4.8,
        },
        {
          id: 7,
          name: "Lavender Dreams",
          brand: "Provence Fields",
          cost: "$118",
          description: "French lavender with herbal complexity",
          rating: 4.7,
        },
        {
          id: 8,
          name: "Golden Hour",
          brand: "Sunset Collection",
          cost: "$142",
          description: "Honeyed florals with sandalwood depth",
          rating: 4.6,
        },
      ],
    },
    strong: {
      title: "Strong Fragrance Collection",
      description: "Bold, intense scents that make a statement",
      perfumes: [
        {
          id: 9,
          name: "Midnight Oud",
          brand: "Dark Luxury",
          cost: "$285",
          description: "Rich oud with leather and tobacco notes",
          rating: 4.9,
        },
        {
          id: 10,
          name: "Velvet Passion",
          brand: "Intense Collection",
          cost: "$245",
          description: "Deep vanilla with smoky incense",
          rating: 4.8,
        },
        {
          id: 11,
          name: "Black Diamond",
          brand: "Prestige Line",
          cost: "$320",
          description: "Precious woods with dark chocolate",
          rating: 5.0,
        },
        {
          id: 12,
          name: "Storm King",
          brand: "Power Series",
          cost: "$198",
          description: "Bold spices with metallic undertones",
          rating: 4.7,
        },
      ],
    },
  };

  const currentCategory = perfumeData[categoryId as keyof typeof perfumeData];

  if (!currentCategory) {
    return (
      <div className="min-h-screen bg-gradient-hero flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-playfair font-bold text-foreground mb-4">
            Category Not Found
          </h1>
          <Button onClick={() => navigate("/")} variant="luxury">
            Return Home
          </Button>
        </div>
      </div>
    );
  }

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
            <div className="flex items-center gap-6">
              <nav className="hidden md:flex items-center gap-6">
                <button
                  onClick={() => navigate("/about")}
                  className="text-muted-foreground hover:text-foreground transition-colors font-inter"
                >
                  About
                </button>
                <button
                  onClick={() => navigate("/contact")}
                  className="text-muted-foreground hover:text-foreground transition-colors font-inter"
                >
                  Contact
                </button>
                <button
                  onClick={() => navigate("/terms")}
                  className="text-muted-foreground hover:text-foreground transition-colors font-inter"
                >
                  Terms & Conditions
                </button>
              </nav>
              <Button
                variant="elegant"
                onClick={() => navigate("/login")}
                className="font-inter"
              >
                Account
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Category Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
            {currentCategory.title}
          </h2>
          <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto">
            {currentCategory.description}
          </p>
        </div>
      </section>

      {/* Perfumes Grid */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {currentCategory.perfumes.map((perfume) => (
              <Card
                key={perfume.id}
                className="group cursor-pointer transition-luxury hover:shadow-luxury border-border/50 bg-card/80 backdrop-blur-sm"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="secondary" className="font-inter text-xs">
                      {perfume.brand}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-luxury text-luxury" />
                      <span className="text-sm font-inter text-muted-foreground">
                        {perfume.rating}
                      </span>
                    </div>
                  </div>
                  <CardTitle className="text-lg font-playfair group-hover:text-primary transition-luxury">
                    {perfume.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="font-inter text-muted-foreground mb-4 text-sm">
                    {perfume.description}
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-playfair font-semibold text-primary">
                      {perfume.cost}
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => navigate(`/product/${perfume.id}`)}
                      className="group-hover:border-primary group-hover:text-primary transition-luxury font-inter"
                    >
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
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

export default Category;