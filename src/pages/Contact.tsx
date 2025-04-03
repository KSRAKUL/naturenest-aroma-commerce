
import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission with timeout
    setTimeout(() => {
      console.log('Form submitted:', formState);
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. We'll get back to you shortly.",
      });
      
      // Reset form
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1000);
  };
  
  return (
    <main className="pt-24 pb-20">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-medium text-sage-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We'd love to hear from you! Whether you have a question about our products, 
            need assistance with an order, or want to share your experience, we're here to help.
          </p>
        </div>
        
        {/* Contact Information */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Email */}
          <div className="bg-white rounded-lg p-6 text-center shadow-sm">
            <div className="w-12 h-12 rounded-full bg-sage-100 flex items-center justify-center mx-auto mb-4">
              <Mail className="text-sage-600" size={20} />
            </div>
            <h3 className="font-medium text-sage-800 mb-1">Email</h3>
            <p className="text-slate-600 mb-2">For general inquiries:</p>
            <a 
              href="mailto:hello@naturenest.com" 
              className="text-sage-600 hover:text-sage-700 transition-colors"
            >
              hello@naturenest.com
            </a>
          </div>
          
          {/* Phone */}
          <div className="bg-white rounded-lg p-6 text-center shadow-sm">
            <div className="w-12 h-12 rounded-full bg-sage-100 flex items-center justify-center mx-auto mb-4">
              <Phone className="text-sage-600" size={20} />
            </div>
            <h3 className="font-medium text-sage-800 mb-1">Phone</h3>
            <p className="text-slate-600 mb-2">Monday to Friday, 9am to 5pm:</p>
            <a 
              href="tel:+1234567890" 
              className="text-sage-600 hover:text-sage-700 transition-colors"
            >
              (123) 456-7890
            </a>
          </div>
          
          {/* Address */}
          <div className="bg-white rounded-lg p-6 text-center shadow-sm">
            <div className="w-12 h-12 rounded-full bg-sage-100 flex items-center justify-center mx-auto mb-4">
              <MapPin className="text-sage-600" size={20} />
            </div>
            <h3 className="font-medium text-sage-800 mb-1">Visit Us</h3>
            <p className="text-slate-600 mb-2">Our shop is open daily, 10am to 6pm:</p>
            <address className="text-sage-600 not-italic">
              123 Nature Way<br />
              Greenville, CA 12345
            </address>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <div>
            <h2 className="text-2xl font-serif font-medium text-sage-800 mb-6">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formState.name}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formState.subject}
                  onChange={handleChange}
                  className="input-field"
                >
                  <option value="">Select a topic</option>
                  <option value="product-inquiry">Product Inquiry</option>
                  <option value="order-status">Order Status</option>
                  <option value="return-question">Return or Refund</option>
                  <option value="wholesale">Wholesale Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formState.message}
                  onChange={handleChange}
                  className="input-field"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`btn-primary w-full ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
          
          {/* Map */}
          <div>
            <h2 className="text-2xl font-serif font-medium text-sage-800 mb-6">
              Find Us
            </h2>
            <div className="aspect-square md:aspect-auto md:h-[400px] bg-sage-100 rounded-lg overflow-hidden">
              <div className="w-full h-full bg-slate-200 flex items-center justify-center">
                <p className="text-slate-500">Map placeholder</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-2xl font-serif font-medium text-sage-800 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-medium text-sage-800 mb-2">
                How long does shipping take?
              </h3>
              <p className="text-slate-600">
                Standard shipping typically takes 3-5 business days. Express shipping 
                options (1-2 days) are available during checkout for an additional fee.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-medium text-sage-800 mb-2">
                Are your products certified organic?
              </h3>
              <p className="text-slate-600">
                Yes, all our ingredients are certified organic by USDA and other relevant 
                certification bodies. You can find specific certifications on each product page.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-medium text-sage-800 mb-2">
                What is your return policy?
              </h3>
              <p className="text-slate-600">
                We offer a 30-day satisfaction guarantee. If you're not completely satisfied, 
                you can return unused items for a full refund or exchange.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-medium text-sage-800 mb-2">
                Do you offer wholesale options?
              </h3>
              <p className="text-slate-600">
                Yes, we work with select retailers who share our values. Please contact 
                our wholesale team at wholesale@naturenest.com for more information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
