
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Minus, Plus, ShoppingBag, Star } from 'lucide-react';
import { products } from '@/lib/data';
import { toast } from '@/components/ui/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  
  const product = products.find(p => p.id === parseInt(id || '0'));
  
  if (!product) {
    return (
      <div className="container-custom pt-32 pb-20 text-center">
        <h2 className="text-2xl font-serif text-sage-800 mb-4">Product Not Found</h2>
        <p className="text-slate-600 mb-8">The product you're looking for doesn't exist or has been removed.</p>
        <Link to="/products" className="btn-primary">
          Return to Shop
        </Link>
      </div>
    );
  }
  
  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${quantity} x ${product.name} added to your cart`,
    });
  };
  
  return (
    <main className="pt-24 pb-20">
      <div className="container-custom">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link 
            to="/products" 
            className="inline-flex items-center text-slate-600 hover:text-sage-600 transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Products
          </Link>
        </div>
        
        {/* Product Details */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="bg-white rounded-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto object-cover"
            />
          </div>
          
          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-serif font-medium text-sage-800 mb-2">
              {product.name}
            </h1>
            
            <p className="text-xl text-sage-700 font-medium mb-4">
              ${product.price.toFixed(2)}
            </p>
            
            <p className="text-slate-600 mb-6">
              {product.description}
            </p>
            
            {/* Quantity Selector */}
            <div className="mb-6">
              <label className="block text-slate-700 mb-2">Quantity</label>
              <div className="flex items-center">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="border border-slate-300 rounded-l-md px-3 py-2 hover:bg-slate-100 transition-colors"
                  disabled={quantity <= 1}
                >
                  <Minus size={16} />
                </button>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-16 text-center border-y border-slate-300 py-2 focus:outline-none"
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="border border-slate-300 rounded-r-md px-3 py-2 hover:bg-slate-100 transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>
            
            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full btn-primary mb-6"
            >
              <ShoppingBag size={18} className="mr-2" />
              Add to Cart
            </button>
            
            {/* Key Benefits */}
            <div className="border-t border-slate-200 pt-6">
              <h3 className="font-medium text-sage-800 mb-3">Key Benefits:</h3>
              <ul className="space-y-2">
                {product.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-sage-600 mr-2">•</span>
                    <span className="text-slate-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Product Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="details">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="details">Product Details</TabsTrigger>
              <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="details" className="mt-6 p-6 bg-white rounded-lg">
              <div className="prose max-w-none">
                <h3 className="text-xl font-serif font-medium text-sage-800 mb-4">About {product.name}</h3>
                <p className="text-slate-600 mb-4">{product.description}</p>
                <p className="text-slate-600">
                  Our products are crafted in small batches to ensure the highest quality. 
                  Each item is carefully tested and packaged to preserve its natural properties.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="ingredients" className="mt-6 p-6 bg-white rounded-lg">
              <h3 className="text-xl font-serif font-medium text-sage-800 mb-4">Ingredients</h3>
              {product.ingredients ? (
                <ul className="space-y-2">
                  {product.ingredients.map((ingredient, index) => (
                    <li key={index} className="text-slate-600 flex items-start">
                      <span className="text-sage-600 mr-2">•</span>
                      {ingredient}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-slate-600">Ingredient information coming soon.</p>
              )}
            </TabsContent>
            <TabsContent value="reviews" className="mt-6 p-6 bg-white rounded-lg">
              <h3 className="text-xl font-serif font-medium text-sage-800 mb-4">Customer Reviews</h3>
              {product.reviews && product.reviews.length > 0 ? (
                <div className="space-y-6">
                  {product.reviews.map((review) => (
                    <div key={review.id} className="border-b border-slate-200 pb-6 last:border-b-0">
                      <div className="flex items-center mb-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={16}
                              className={i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-slate-300"}
                            />
                          ))}
                        </div>
                        <span className="ml-2 font-medium text-slate-700">{review.name}</span>
                        <span className="ml-auto text-sm text-slate-500">{review.date}</span>
                      </div>
                      <p className="text-slate-600">{review.comment}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-slate-600">No reviews yet. Be the first to review this product!</p>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;
