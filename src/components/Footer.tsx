
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-sage-50 pt-16 pb-12 border-t border-sage-100">
      <div className="container-custom">
        {/* Footer Top */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h2 className="text-xl font-serif font-semibold text-sage-800 mb-4">
              Nature<span className="text-sage-600">Nest</span>
            </h2>
            <p className="text-slate-600 mb-6">
              Experience the power of nature with our organic wellness products. Crafted with care for you and the environment.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-500 hover:text-sage-600 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-slate-500 hover:text-sage-600 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-slate-500 hover:text-sage-600 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-slate-500 hover:text-sage-600 transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-sage-700 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-slate-600 hover:text-sage-600 transition-colors">
                  Shop All
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-600 hover:text-sage-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="#" className="text-slate-600 hover:text-sage-600 transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link to="#" className="text-slate-600 hover:text-sage-600 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-600 hover:text-sage-600 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-sage-700 mb-4">
              Customer Service
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-slate-600 hover:text-sage-600 transition-colors">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link to="#" className="text-slate-600 hover:text-sage-600 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="#" className="text-slate-600 hover:text-sage-600 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="#" className="text-slate-600 hover:text-sage-600 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-sage-700 mb-4">
              Join Our Newsletter
            </h3>
            <p className="text-slate-600 mb-4">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-white border border-sage-200 rounded-l-md py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-sage-500"
                required
              />
              <button
                type="submit"
                className="bg-sage-600 hover:bg-sage-700 text-white px-3 rounded-r-md transition-colors duration-200"
              >
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-sage-100 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} NatureNest. All rights reserved.
          </p>
          <div className="flex items-center mt-4 sm:mt-0">
            <img src="/placeholder.svg" alt="Payment Methods" className="h-6" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
