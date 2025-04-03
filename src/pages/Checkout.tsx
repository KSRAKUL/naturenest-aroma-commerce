
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, CreditCard, Check } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import { products } from '@/lib/data';

const Checkout = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [step, setStep] = useState(1); // 1: Info, 2: Payment, 3: Review
  
  // Mock cart items - in a real app, these would come from your cart state/context
  const cartItems = [
    { product: products[0], quantity: 1 },
    { product: products[2], quantity: 2 },
  ];
  
  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const shipping = subtotal > 35 ? 0 : 5.99;
  const tax = subtotal * 0.08; // 8% tax rate example
  const total = subtotal + shipping + tax;
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate order processing
    setTimeout(() => {
      toast({
        title: "Order Placed!",
        description: "Thank you for your purchase. Check your email for order confirmation.",
      });
      setIsSubmitting(false);
      
      // Redirect to success page
      // In a real app, you would use navigation/router functionality
      window.location.href = "/";
    }, 1500);
  };
  
  return (
    <main className="pt-24 pb-20">
      <div className="container-custom">
        <div className="mb-8">
          <Link 
            to="/cart" 
            className="inline-flex items-center text-slate-600 hover:text-sage-600 transition-colors"
          >
            <ChevronLeft size={16} className="mr-2" />
            Back to Cart
          </Link>
        </div>
        
        <h1 className="text-3xl font-serif font-medium text-sage-800 mb-8">
          Checkout
        </h1>
        
        {/* Checkout Steps */}
        <div className="mb-12">
          <div className="flex justify-between items-center">
            <div className="flex-1">
              <div className={`h-1 ${step >= 1 ? 'bg-sage-600' : 'bg-slate-200'}`}></div>
            </div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              step >= 1 ? 'bg-sage-600 text-white' : 'bg-slate-200 text-slate-400'
            }`}>
              {step > 1 ? <Check size={16} /> : '1'}
            </div>
            <div className="flex-1">
              <div className={`h-1 ${step >= 2 ? 'bg-sage-600' : 'bg-slate-200'}`}></div>
            </div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              step >= 2 ? 'bg-sage-600 text-white' : 'bg-slate-200 text-slate-400'
            }`}>
              {step > 2 ? <Check size={16} /> : '2'}
            </div>
            <div className="flex-1">
              <div className={`h-1 ${step >= 3 ? 'bg-sage-600' : 'bg-slate-200'}`}></div>
            </div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              step >= 3 ? 'bg-sage-600 text-white' : 'bg-slate-200 text-slate-400'
            }`}>
              3
            </div>
            <div className="flex-1">
              <div className={`h-1 ${step >= 3 ? 'bg-sage-600' : 'bg-slate-200'}`}></div>
            </div>
          </div>
          <div className="flex justify-between mt-2 text-sm">
            <div className="text-center" style={{marginLeft: '-1rem'}}>
              <span className={step >= 1 ? 'text-sage-700 font-medium' : 'text-slate-500'}>
                Your Info
              </span>
            </div>
            <div className="text-center">
              <span className={step >= 2 ? 'text-sage-700 font-medium' : 'text-slate-500'}>
                Payment
              </span>
            </div>
            <div className="text-center" style={{marginRight: '-1rem'}}>
              <span className={step >= 3 ? 'text-sage-700 font-medium' : 'text-slate-500'}>
                Review
              </span>
            </div>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Form Section */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit}>
              {/* Step 1: Customer Info */}
              {step === 1 && (
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-xl font-serif font-medium text-sage-800 mb-6">
                    Shipping Information
                  </h2>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-1">
                        First Name *
                      </label>
                      <input
                        id="firstName"
                        type="text"
                        required
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-1">
                        Last Name *
                      </label>
                      <input
                        id="lastName"
                        type="text"
                        required
                        className="input-field"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      className="input-field"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="address" className="block text-sm font-medium text-slate-700 mb-1">
                      Address *
                    </label>
                    <input
                      id="address"
                      type="text"
                      required
                      className="input-field"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
                    <div className="sm:col-span-1">
                      <label htmlFor="city" className="block text-sm font-medium text-slate-700 mb-1">
                        City *
                      </label>
                      <input
                        id="city"
                        type="text"
                        required
                        className="input-field"
                      />
                    </div>
                    <div className="sm:col-span-1">
                      <label htmlFor="state" className="block text-sm font-medium text-slate-700 mb-1">
                        State *
                      </label>
                      <input
                        id="state"
                        type="text"
                        required
                        className="input-field"
                      />
                    </div>
                    <div className="sm:col-span-1">
                      <label htmlFor="zip" className="block text-sm font-medium text-slate-700 mb-1">
                        ZIP *
                      </label>
                      <input
                        id="zip"
                        type="text"
                        required
                        className="input-field"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      className="input-field"
                    />
                  </div>
                  
                  <div className="flex items-center justify-end">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="btn-primary"
                    >
                      Continue to Payment
                    </button>
                  </div>
                </div>
              )}
              
              {/* Step 2: Payment */}
              {step === 2 && (
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-xl font-serif font-medium text-sage-800 mb-6">
                    Payment Method
                  </h2>
                  
                  <div className="mb-8">
                    <div className="flex items-center p-4 border border-sage-200 rounded-md bg-sage-50">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-sage-100 text-sage-600">
                        <CreditCard size={20} />
                      </div>
                      <div className="ml-4">
                        <div className="font-medium text-sage-800">Credit / Debit Card</div>
                        <div className="text-sm text-slate-500">Safe and secure payment with Stripe</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="cardName" className="block text-sm font-medium text-slate-700 mb-1">
                      Name on Card *
                    </label>
                    <input
                      id="cardName"
                      type="text"
                      required
                      className="input-field"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="cardNumber" className="block text-sm font-medium text-slate-700 mb-1">
                      Card Number *
                    </label>
                    <input
                      id="cardNumber"
                      type="text"
                      required
                      placeholder="1234 5678 9012 3456"
                      className="input-field"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="expiration" className="block text-sm font-medium text-slate-700 mb-1">
                        Expiration (MM/YY) *
                      </label>
                      <input
                        id="expiration"
                        type="text"
                        required
                        placeholder="MM/YY"
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label htmlFor="cvv" className="block text-sm font-medium text-slate-700 mb-1">
                        CVV *
                      </label>
                      <input
                        id="cvv"
                        type="text"
                        required
                        placeholder="123"
                        className="input-field"
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="text-sage-600 hover:text-sage-700"
                    >
                      <ChevronLeft size={16} className="inline mr-1" />
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="btn-primary"
                    >
                      Review Order
                    </button>
                  </div>
                </div>
              )}
              
              {/* Step 3: Review */}
              {step === 3 && (
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-xl font-serif font-medium text-sage-800 mb-6">
                    Review Your Order
                  </h2>
                  
                  {/* Order Items */}
                  <div className="border border-slate-200 rounded-md divide-y divide-slate-200 mb-6">
                    {cartItems.map((item) => (
                      <div key={item.product.id} className="grid grid-cols-4 gap-4 p-4 items-center">
                        <div className="col-span-3 flex items-center">
                          <div className="w-16 h-16 bg-slate-100 rounded-md overflow-hidden mr-4">
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
                            <p className="text-sm text-slate-500">
                              Quantity: {item.quantity}
                            </p>
                          </div>
                        </div>
                        <div className="text-right font-medium">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="text-sage-600 hover:text-sage-700"
                    >
                      <ChevronLeft size={16} className="inline mr-1" />
                      Back
                    </button>
                    <button
                      type="submit"
                      className="btn-primary"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Processing...' : 'Place Order'}
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
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
                <div className="flex justify-between">
                  <span className="text-slate-600">Tax</span>
                  <span className="text-sage-800 font-medium">${tax.toFixed(2)}</span>
                </div>
                <div className="border-t border-slate-200 pt-3 flex justify-between font-medium">
                  <span className="text-sage-900">Total</span>
                  <span className="text-sage-900">${total.toFixed(2)}</span>
                </div>
              </div>
              
              <div className="border border-slate-200 rounded-md p-4">
                <div className="text-sm">
                  <p className="flex items-center text-green-600 mb-2">
                    <Check size={16} className="mr-2" />
                    <span className="font-medium">Fast Shipping</span>
                  </p>
                  <p className="text-slate-600 ml-6">
                    Most orders ship within 1-2 business days
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Checkout;
