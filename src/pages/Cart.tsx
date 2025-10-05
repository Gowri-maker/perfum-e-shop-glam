import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, X, ShoppingBag } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import heroImage from "@/assets/hero-perfume.jpg";

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart } = useCart();

  const total = cartItems.reduce((sum, item) => {
    const price = parseFloat(item.cost.replace("$", ""));
    return sum + price;
  }, 0);

  return (
    <div className="min-h-screen bg-gradient-hero">
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" onClick={() => navigate("/")} className="p-2">
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <h1 className="text-2xl font-playfair font-bold text-foreground">
                Shopping Cart
              </h1>
            </div>
            <Button variant="elegant" onClick={() => navigate("/login")} className="font-inter">
              Account
            </Button>
          </div>
        </div>
      </header>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {cartItems.length === 0 ? (
            <div className="text-center py-20">
              <ShoppingBag className="w-20 h-20 mx-auto mb-6 text-muted-foreground" />
              <h2 className="text-3xl font-playfair font-bold text-foreground mb-4">
                Your Cart is Empty
              </h2>
              <p className="text-muted-foreground font-inter mb-8">
                Add some fragrances to get started
              </p>
              <Button variant="luxury" onClick={() => navigate("/")}>
                Continue Shopping
              </Button>
            </div>
          ) : (
            <>
              <div className="space-y-4 mb-8">
                {cartItems.map((item) => (
                  <Card key={item.id} className="bg-card/80 backdrop-blur-sm border-border/50">
                    <CardContent className="p-6">
                      <div className="flex gap-6">
                        <img
                          src={heroImage}
                          alt={item.name}
                          className="w-24 h-24 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <Badge variant="secondary" className="font-inter mb-2">
                                {item.brand}
                              </Badge>
                              <h3 className="text-xl font-playfair font-bold text-foreground mb-1">
                                {item.name}
                              </h3>
                              <p className="text-sm text-muted-foreground font-inter">
                                {item.description}
                              </p>
                            </div>
                            <div className="flex items-center gap-4">
                              <p className="text-2xl font-playfair font-bold text-primary">
                                {item.cost}
                              </p>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => removeFromCart(item.id)}
                                className="text-muted-foreground hover:text-destructive"
                              >
                                <X className="w-5 h-5" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-card/80 backdrop-blur-sm border-border/50">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-xl font-playfair font-semibold text-foreground">
                      Total
                    </span>
                    <span className="text-3xl font-playfair font-bold text-primary">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                  <Button variant="luxury" size="lg" className="w-full">
                    Proceed to Checkout
                  </Button>
                </CardContent>
              </Card>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Cart;
