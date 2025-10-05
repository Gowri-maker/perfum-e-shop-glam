import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Terms = () => {
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
            Terms & Conditions
          </h2>
          <div className="space-y-6 text-muted-foreground font-inter">
            <div>
              <h3 className="text-xl font-playfair font-semibold text-foreground mb-3">
                1. Acceptance of Terms
              </h3>
              <p>
                By accessing and using Essence Luxe, you accept and agree to be bound by the 
                terms and provision of this agreement.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-playfair font-semibold text-foreground mb-3">
                2. Product Information
              </h3>
              <p>
                We strive to provide accurate product descriptions and pricing. However, we do 
                not warrant that product descriptions or other content is accurate, complete, 
                reliable, current, or error-free.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-playfair font-semibold text-foreground mb-3">
                3. Pricing and Payment
              </h3>
              <p>
                All prices are subject to change without notice. We reserve the right to modify 
                or discontinue products without prior notice. Payment must be received in full 
                before products are shipped.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-playfair font-semibold text-foreground mb-3">
                4. Shipping and Returns
              </h3>
              <p>
                Shipping times may vary based on location. Returns are accepted within 30 days 
                of purchase for unopened products in original condition. Refunds will be processed 
                within 7-10 business days.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-playfair font-semibold text-foreground mb-3">
                5. Privacy Policy
              </h3>
              <p>
                Your privacy is important to us. We collect and use personal information solely 
                for processing orders and improving customer experience. We do not share your 
                information with third parties without consent.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-playfair font-semibold text-foreground mb-3">
                6. Limitation of Liability
              </h3>
              <p>
                Essence Luxe shall not be liable for any indirect, incidental, special, or 
                consequential damages resulting from the use or inability to use our products 
                or services.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
