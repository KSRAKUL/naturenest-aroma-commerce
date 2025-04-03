
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ArrowRight, ChevronLeft, RefreshCw } from 'lucide-react';
import { products } from '@/lib/data';
import { CartItem } from '@/lib/types';
import { toast } from '@/components/ui/use-toast';

const Cart = () => {
  // For demo purposes, let's create some cart items
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { product: products[0], quantity: 1 },
    { product: products[2], quantity: 2 },
  ]);
  const [isUpdating, setIsUpdating] = useState(false);

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.product.id !== id));
    toast({
      title: "Item removed",
      description: "The item has been removed from your cart",
    });
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) return;
    
    setCartItems(cartItems.map(item => 
      item.product.id === id ? { ...item, quantity } : item
    ));
  };

  const updateCart = () => {
    setIsUpdating(true);
    setTimeout(() => {
      toast({
        title: "Cart updated",
        description: "Your cart has been updated successfully",
      });
      setIsUpdating(false);
    }, 500);
  };

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const shipping = subtotal > 35 ? 0 : 5.99;
  const total = subtotal + shipping;

  return (
    <main className="pt-24 pb-20">
      <div className="container-custom">
        <h1 className="text-3xl font-serif font-medium text-sage-800 mb-8">
          Your Cart
        </h1>

        {cartItems.length > 0 ? (
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                {/* Cart Header */}
                <div className="hidden md:grid grid-cols-12 gap-4 p-4 border-b border-slate-200 bg-sage-50 text-sage-800 font-medium">
                  <div className="col-span-6">Product</div>
                  <div className="col-span-2 text-center">Price</div>
                  <div className="col-span-2 text-center">Quantity</div>
                  <div className="col-span-2 text-center">Total</div>
                </div>

                {/* Cart Items */}
                <div className="divide-y divide-slate-200">
                  {cartItems.map((item) => (
                    <div key={item.product.id} className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 items-center">
                      {/* Product Info */}
                      <div className="md:col-span-6 flex items-center">
                        <div className="w-20 h-20 bg-slate-100 rounded-md overflow-hidden mr-4">
                          <img 
                            src={item.product.image} 
                            alt={item.product.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-medium text-sage-800">
                            {item.product.name}
                          </h3>
                          <button 
                            onClick={() => removeItem(item.product.id)}
                            className="text-slate-500 hover:text-red-600 text-sm flex items-center mt-1"
                          >
                            <Trash2 size={14} className="mr-1" />
                            Remove
                          </button>
                        </div>
                      </div>

                      {/* Price */}
                      <div className="md:col-span-2 text-center flex md:block items-center justify-between">
                        <span className="md:hidden font-medium text-sm text-slate-500">Price:</span>
                        <span>${item.product.price.toFixed(2)}</span>
                      </div>

                      {/* Quantity */}
                      <div className="md:col-span-2 text-center flex md:block items-center justify-between">
                        <span className="md:hidden font-medium text-sm text-slate-500">Quantity:</span>
                        <div className="inline-flex items-center">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="border border-slate-300 rounded-l-md px-2 py-1 hover:bg-slate-100"
                          >
                            -
                          </button>
                          <input
                            type="number"
                            min="1"
                            value={item.quantity}
                            onChange={(e) => updateQuantity(item.product.id, parseInt(e.target.value) || 1)}
                            className="w-10 text-center border-y border-slate-300 py-1 focus:outline-none"
                          />
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="border border-slate-300 rounded-r-md px-2 py-1 hover:bg-slate-100"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      {/* Total */}
                      <div className="md:col-span-2 text-center flex md:block items-center justify-between font-medium">
                        <span className="md:hidden text-sm text-slate-500">Total:</span>
                        <span>${(item.product.price * item.quantity).toFixed(2)}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Cart Actions */}
                <div className="p-4 border-t border-slate-200 bg-white flex flex-wrap justify-between gap-4">
                  <Link 
                    to="/products" 
                    className="inline-flex items-center text-sage-700 hover:text-sage-900"
                  >
                    <ChevronLeft size={16} className="mr-1" />
                    Continue Shopping
                  </Link>

                  <button 
                    onClick={updateCart}
                    disabled={isUpdating}
                    className="inline-flex items-center text-sage-700 hover:text-sage-900"
                  >
                    <RefreshCw size={16} className={`mr-1 ${isUpdating ? 'animate-spin' : ''}`} />
                    {isUpdating ? 'Updating...' : 'Update Cart'}
                  </button>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-serif font-medium text-sage-800 mb-4">
                  Order Summary
                </h2>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Subtotal</span>
                    <span className="text-sage-800 font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Shipping</span>
                    <span className="text-sage-800 font-medium">
                      {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  {shipping > 0 && (
                    <div className="text-sm text-slate-500">
                      Free shipping on orders over $35
                    </div>
                  )}
                  <div className="border-t border-slate-200 pt-3 flex justify-between font-medium">
                    <span className="text-sage-900">Total</span>
                    <span className="text-sage-900">${total.toFixed(2)}</span>
                  </div>
                </div>

                <Link 
                  to="/checkout" 
                  className="btn-primary w-full justify-center"
                >
                  Checkout
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-lg shadow-sm">
            <div className="w-20 h-20 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sage-600" />
              </svg>
            </div>
            <h2 className="text-2xl font-serif font-medium text-sage-800 mb-4">
              Your cart is empty
            </h2>
            <p className="text-slate-600 max-w-md mx-auto mb-8">
              Looks like you haven't added any products to your cart yet. 
              Explore our collection to find the perfect natural wellness products for you.
            </p>
            <Link 
              to="/products" 
              className="btn-primary inline-flex"
            >
              Browse Products
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        )}
      </div>
    </main>
  );
};

export default Cart;
