
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { products } from "@/lib/data";
import ProductCard from "./ProductCard";

const FeaturedProducts = () => {
  const featuredProducts = products.filter(product => product.featured).slice(0, 3);
  
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl font-serif font-medium text-sage-900">Featured Products</h2>
            <p className="text-slate-600 mt-2">Explore our bestselling wellness essentials</p>
          </div>
          <Link 
            to="/products" 
            className="mt-4 md:mt-0 group flex items-center text-sage-600 hover:text-sage-800 transition-colors"
          >
            View All Products
            <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product}
              featured={product.id === 1} // Make the first product featured
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
