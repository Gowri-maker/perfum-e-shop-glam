import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Flame, Wind, ShoppingCart, Heart, Mail, Phone, MapPin, FileText } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import categoriesImage from "@/assets/perfume-categories.jpg";

const Home = () => {
  const navigate = useNavigate();
  const { cartItems, wishlistItems } = useCart();

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

      {/* Cart and Wishlist Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-border/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-playfair font-semibold text-foreground mb-4">
              Your Collections
            </h3>
            <p className="text-lg text-muted-foreground font-inter">
              Manage your favorites and shopping cart
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card
              className="group cursor-pointer transition-luxury hover:shadow-luxury border-border/50 bg-card/80 backdrop-blur-sm"
              onClick={() => navigate("/cart")}
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-luxury/30 flex items-center justify-center">
                  <ShoppingCart className="w-8 h-8 text-foreground" />
                </div>
                <CardTitle className="text-xl font-playfair group-hover:text-primary transition-luxury">
                  Shopping Cart
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="font-inter text-muted-foreground mb-6">
                  {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart
                </CardDescription>
                <Button variant="outline" className="w-full group-hover:border-primary group-hover:text-primary transition-luxury font-inter">
                  View Cart
                </Button>
              </CardContent>
            </Card>

            <Card
              className="group cursor-pointer transition-luxury hover:shadow-luxury border-border/50 bg-card/80 backdrop-blur-sm"
              onClick={() => navigate("/wishlist")}
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-luxury/20 to-accent/40 flex items-center justify-center">
                  <Heart className="w-8 h-8 text-foreground" />
                </div>
                <CardTitle className="text-xl font-playfair group-hover:text-primary transition-luxury">
                  Wishlist
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="font-inter text-muted-foreground mb-6">
                  {wishlistItems.length} {wishlistItems.length === 1 ? 'item' : 'items'} saved for later
                </CardDescription>
                <Button variant="outline" className="w-full group-hover:border-primary group-hover:text-primary transition-luxury font-inter">
                  View Wishlist
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 border-t border-border/50 bg-card/20">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-playfair font-semibold text-foreground mb-6">About Essence Luxe</h3>
          <p className="text-lg text-muted-foreground font-inter leading-relaxed mb-6">
            At Essence Luxe, we believe that fragrance is more than just a scent—it's a signature, a memory, and an expression of who you are. Our carefully curated collection brings together the world's finest perfumes, from light and airy to bold and unforgettable.
          </p>
          <p className="text-lg text-muted-foreground font-inter leading-relaxed">
            Each fragrance in our collection has been selected for its quality, craftsmanship, and ability to tell a story. We're passionate about helping you discover the perfect scent that resonates with your unique style and personality.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 border-t border-border/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-playfair font-semibold text-foreground mb-4">Contact Us</h3>
            <p className="text-lg text-muted-foreground font-inter">
              We'd love to hear from you. Get in touch with our team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card/80 backdrop-blur-sm border-border/50">
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-primary-glow/30 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-foreground" />
                </div>
                <h4 className="font-playfair font-semibold text-foreground mb-2">Email</h4>
                <p className="text-muted-foreground font-inter text-sm">contact@essenceluxe.com</p>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-border/50">
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-primary-glow/30 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-foreground" />
                </div>
                <h4 className="font-playfair font-semibold text-foreground mb-2">Phone</h4>
                <p className="text-muted-foreground font-inter text-sm">+1 (555) 123-4567</p>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-border/50">
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-primary-glow/30 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-foreground" />
                </div>
                <h4 className="font-playfair font-semibold text-foreground mb-2">Location</h4>
                <p className="text-muted-foreground font-inter text-sm">123 Luxury Ave, New York, NY 10001</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Terms & Conditions Section */}
      <section id="terms" className="py-16 px-4 sm:px-6 lg:px-8 border-t border-border/50 bg-card/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-luxury/30 flex items-center justify-center">
              <FileText className="w-8 h-8 text-foreground" />
            </div>
            <h3 className="text-3xl font-playfair font-semibold text-foreground mb-4">Terms & Conditions</h3>
          </div>

          <div className="space-y-6 text-muted-foreground font-inter">
            <div>
              <h4 className="text-xl font-playfair font-semibold text-foreground mb-2">1. Purchase Terms</h4>
              <p className="leading-relaxed">
                All purchases are subject to product availability. We reserve the right to limit quantities or refuse orders at our discretion.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-playfair font-semibold text-foreground mb-2">2. Returns & Refunds</h4>
              <p className="leading-relaxed">
                We offer a 30-day return policy for unopened products in original packaging. Refunds will be processed within 5-7 business days.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-playfair font-semibold text-foreground mb-2">3. Shipping</h4>
              <p className="leading-relaxed">
                Free shipping on orders over $100. Standard delivery takes 3-5 business days. Express shipping available at checkout.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-playfair font-semibold text-foreground mb-2">4. Authenticity Guarantee</h4>
              <p className="leading-relaxed">
                All products sold are 100% authentic and sourced directly from authorized distributors. We guarantee the quality and authenticity of every fragrance.
              </p>
            </div>
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