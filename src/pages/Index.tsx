
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import NewsletterSignup from "@/components/NewsletterSignup";
import { Check, Leaf, RefreshCw, Truck } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <main>
      {/* Hero Section */}
      <Hero />
      
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-14 h-14 rounded-full bg-sage-100 flex items-center justify-center mb-4">
                <Leaf className="text-sage-600" size={24} />
              </div>
              <h3 className="text-lg font-medium text-sage-800 mb-2">100% Organic</h3>
              <p className="text-slate-600">All our products are made with certified organic ingredients</p>
            </div>
            
            {/* Feature 2 */}
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-14 h-14 rounded-full bg-sage-100 flex items-center justify-center mb-4">
                <Truck className="text-sage-600" size={24} />
              </div>
              <h3 className="text-lg font-medium text-sage-800 mb-2">Free Shipping</h3>
              <p className="text-slate-600">Free shipping on all orders over $35</p>
            </div>
            
            {/* Feature 3 */}
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-14 h-14 rounded-full bg-sage-100 flex items-center justify-center mb-4">
                <RefreshCw className="text-sage-600" size={24} />
              </div>
              <h3 className="text-lg font-medium text-sage-800 mb-2">Easy Returns</h3>
              <p className="text-slate-600">30-day money-back guarantee for all purchases</p>
            </div>
            
            {/* Feature 4 */}
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-14 h-14 rounded-full bg-sage-100 flex items-center justify-center mb-4">
                <Check className="text-sage-600" size={24} />
              </div>
              <h3 className="text-lg font-medium text-sage-800 mb-2">Quality Tested</h3>
              <p className="text-slate-600">Every product passes rigorous quality standards</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Products Section */}
      <FeaturedProducts />
      
      {/* About Section */}
      <section className="py-20 bg-sage-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/placeholder.svg" 
                alt="About NatureNest" 
                className="rounded-lg shadow-md"
              />
            </div>
            <div>
              <h2 className="text-3xl font-serif font-medium text-sage-900 mb-4">Our Story</h2>
              <p className="text-slate-600 mb-4">
                NatureNest was founded with a simple mission: to bring the healing power of nature into modern homes. 
                Our journey began when our founder discovered the remarkable benefits of traditional wellness practices 
                during her travels across rural communities.
              </p>
              <p className="text-slate-600 mb-6">
                Today, we work directly with small-scale organic farmers and artisans to create wellness products that 
                honor ancient traditions while meeting modern standards for quality and sustainability.
              </p>
              <Link to="/about" className="btn-secondary">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials section would go here */}
      
      {/* Newsletter Signup */}
      <NewsletterSignup />
    </main>
  );
};

export default Index;
