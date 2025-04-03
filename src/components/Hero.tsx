
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero-pattern min-h-screen flex items-center pt-16">
      <div className="container-custom grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="order-2 md:order-1">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-serif font-medium leading-tight text-sage-900 mb-6">
            Experience the Power of Nature in Every Breath
          </h1>
          <p className="text-lg text-slate-700 mb-8 max-w-lg">
            Discover our handcrafted Organic Sambrani, a natural way to purify your air, 
            create a soothing aroma, and repel mosquitoes without chemicals.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/products" 
              className="btn-primary"
            >
              Shop Now
              <ArrowRight size={18} className="ml-2" />
            </Link>
            <Link 
              to="/about" 
              className="btn-secondary"
            >
              Learn More
            </Link>
          </div>
          
          <div className="mt-12 grid grid-cols-3 gap-4">
            <div className="text-center">
              <p className="font-serif text-2xl font-medium text-sage-800">100%</p>
              <p className="text-slate-600 text-sm mt-1">Organic Ingredients</p>
            </div>
            <div className="text-center">
              <p className="font-serif text-2xl font-medium text-sage-800">500+</p>
              <p className="text-slate-600 text-sm mt-1">Happy Customers</p>
            </div>
            <div className="text-center">
              <p className="font-serif text-2xl font-medium text-sage-800">15+</p>
              <p className="text-slate-600 text-sm mt-1">Years Tradition</p>
            </div>
          </div>
        </div>
        
        <div className="order-1 md:order-2 relative">
          <div className="aspect-square rounded-full bg-cream-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 -z-10"></div>
          <img 
            src="/placeholder.svg" 
            alt="Organic Sambrani Product" 
            className="w-full max-w-lg mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
