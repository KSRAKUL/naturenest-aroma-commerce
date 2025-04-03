
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { Product } from "@/lib/types";
import { Button } from "@/components/ui/button";

type ProductCardProps = {
  product: Product;
  featured?: boolean;
};

const ProductCard = ({ product, featured = false }: ProductCardProps) => {
  return (
    <div 
      className={`product-card group ${
        featured ? 'lg:col-span-2 lg:grid lg:grid-cols-2 lg:items-center' : ''
      }`}
    >
      <div className={`relative overflow-hidden aspect-square ${featured ? 'lg:aspect-auto lg:h-full' : ''}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.bestseller && (
          <span className="absolute top-2 right-2 bg-cream-500 text-white text-xs px-2 py-1 rounded-md">
            Bestseller
          </span>
        )}
      </div>
      
      <div className="p-5">
        <h3 className="text-lg font-serif font-medium text-sage-800">
          {product.name}
        </h3>
        <p className="text-slate-500 mt-1 mb-3">{product.shortDescription}</p>
        <div className="flex items-center justify-between">
          <span className="font-medium text-sage-800">${product.price.toFixed(2)}</span>
          
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="border-sage-300 hover:bg-sage-50 hover:border-sage-500 text-sage-700"
              title="Add to cart"
            >
              <ShoppingCart size={16} />
            </Button>
            <Link 
              to={`/product/${product.id}`}
              className="text-sm font-medium text-sage-700 hover:text-sage-900 transition-colors"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
