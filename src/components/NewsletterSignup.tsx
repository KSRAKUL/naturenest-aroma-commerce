
import { Send } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const NewsletterSignup = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = new FormData(form).get('email') as string;
    
    // In a real app, you would send this to your backend
    console.log("Subscribing email:", email);
    
    // Show success toast
    toast({
      title: "Successfully subscribed!",
      description: "Thank you for joining our newsletter.",
    });
    
    // Reset form
    form.reset();
  };
  
  return (
    <section className="bg-sage-50 py-20">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-medium text-sage-900 mb-4">
            Join Our Community
          </h2>
          <p className="text-slate-600 mb-8">
            Subscribe to our newsletter for wellness tips, exclusive offers, and updates on new products.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              name="email"
              placeholder="Your email address"
              className="flex-grow input-field"
              required
            />
            <button
              type="submit"
              className="btn-primary whitespace-nowrap"
            >
              Subscribe
              <Send size={16} className="ml-2" />
            </button>
          </form>
          
          <p className="text-slate-500 text-sm mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
