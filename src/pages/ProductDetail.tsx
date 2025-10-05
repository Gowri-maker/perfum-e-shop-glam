import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Star, Heart, ShoppingCart, TrendingUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/contexts/CartContext";
import heroImage from "@/assets/hero-perfume.jpg";

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { addToCart, addToWishlist } = useCart();

  const allPerfumes = [
    { id: 1, name: "Ocean Breeze", brand: "Aqua Luxe", cost: "$85", description: "Fresh marine notes with a hint of citrus", rating: 4.8, category: "light", purchases: 245 },
    { id: 2, name: "Spring Garden", brand: "Floral Elements", cost: "$92", description: "Delicate floral bouquet with green leaves", rating: 4.6, category: "light", purchases: 189 },
    { id: 3, name: "Citrus Dawn", brand: "Fresh & Co", cost: "$78", description: "Energizing blend of bergamot and lemon", rating: 4.7, category: "light", purchases: 312 },
    { id: 4, name: "Silk Whisper", brand: "Gentle Touch", cost: "$89", description: "Soft musk with subtle vanilla undertones", rating: 4.5, category: "light", purchases: 156 },
    { id: 5, name: "Rose Elegance", brand: "Classic Rose", cost: "$125", description: "Sophisticated rose with woody base notes", rating: 4.9, category: "medium", purchases: 428 },
    { id: 6, name: "Amber Nights", brand: "Evening Glow", cost: "$135", description: "Warm amber with spicy oriental touches", rating: 4.8, category: "medium", purchases: 367 },
    { id: 7, name: "Lavender Dreams", brand: "Provence Fields", cost: "$118", description: "French lavender with herbal complexity", rating: 4.7, category: "medium", purchases: 294 },
    { id: 8, name: "Golden Hour", brand: "Sunset Collection", cost: "$142", description: "Honeyed florals with sandalwood depth", rating: 4.6, category: "medium", purchases: 221 },
    { id: 9, name: "Midnight Oud", brand: "Dark Luxury", cost: "$285", description: "Rich oud with leather and tobacco notes", rating: 4.9, category: "strong", purchases: 512 },
    { id: 10, name: "Velvet Passion", brand: "Intense Collection", cost: "$245", description: "Deep vanilla with smoky incense", rating: 4.8, category: "strong", purchases: 445 },
    { id: 11, name: "Black Diamond", brand: "Prestige Line", cost: "$320", description: "Precious woods with dark chocolate", rating: 5.0, category: "strong", purchases: 678 },
    { id: 12, name: "Storm King", brand: "Power Series", cost: "$198", description: "Bold spices with metallic undertones", rating: 4.7, category: "strong", purchases: 334 },
  ];

  const product = allPerfumes.find((p) => p.id === parseInt(productId || ""));

  const handleAddToWishlist = () => {
    if (product) {
      addToWishlist(product);
      toast({
        title: "Added to Wishlist",
        description: `${product.name} has been added to your wishlist.`,
      });
    }
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      toast({
        title: "Added to Cart",
        description: `${product.name} has been added to your cart.`,
      });
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-hero flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-playfair font-bold text-foreground mb-4">
            Product Not Found
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
                onClick={() => navigate(-1)}
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

      {/* Product Detail */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="relative overflow-hidden rounded-lg shadow-luxury">
              <img
                src={heroImage}
                alt={product.name}
                className="w-full h-[500px] object-cover"
              />
            </div>

            {/* Product Information */}
            <div className="space-y-6">
              <div>
                <Badge variant="secondary" className="font-inter mb-4">
                  {product.brand}
                </Badge>
                <h2 className="text-4xl font-playfair font-bold text-foreground mb-2">
                  {product.name}
                </h2>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 fill-luxury text-luxury" />
                    <span className="text-lg font-inter text-muted-foreground">
                      {product.rating}
                    </span>
                  </div>
                  <span className="text-muted-foreground font-inter">
                    ({product.purchases} reviews)
                  </span>
                </div>
              </div>

              <div className="py-4 border-y border-border/50">
                <p className="text-3xl font-playfair font-bold text-primary">
                  {product.cost}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-playfair font-semibold text-foreground mb-3">
                  Description
                </h3>
                <p className="text-muted-foreground font-inter leading-relaxed">
                  {product.description}
                </p>
              </div>

              <Card className="bg-card/50 border-border/50">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-playfair font-semibold text-foreground">
                        Popular Choice
                      </p>
                      <p className="text-sm text-muted-foreground font-inter">
                        {product.purchases} customers purchased this in the last month
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={handleAddToWishlist}
                  className="flex-1 gap-2"
                >
                  <Heart className="w-5 h-5" />
                  Add to Wishlist
                </Button>
                <Button
                  variant="luxury"
                  size="lg"
                  onClick={handleAddToCart}
                  className="flex-1 gap-2"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </Button>
              </div>

              <div className="pt-6 space-y-3 text-sm text-muted-foreground font-inter">
                <p>✓ Free shipping on orders over $100</p>
                <p>✓ 30-day return policy</p>
                <p>✓ Authenticity guaranteed</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
