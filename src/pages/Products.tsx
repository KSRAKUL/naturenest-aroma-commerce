
import { useState } from 'react';
import { products } from '@/lib/data';
import ProductCard from '@/components/ProductCard';
import { ArrowDown, Filter } from 'lucide-react';

const Products = () => {
  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);
  
  // Get unique categories
  const categories = ['all', ...new Set(products.map(product => product.category))];
  
  // Filter products
  let filteredProducts = filter === 'all' 
    ? products 
    : products.filter(product => product.category === filter);
  
  // Sort products
  if (sort === 'price-low') {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sort === 'price-high') {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  } else if (sort === 'newest') {
    // In a real app, you would sort by date
    filteredProducts = [...filteredProducts].sort((a, b) => b.id - a.id);
  }
  // 'featured' is default and uses the original order
  
  return (
    <main className="pt-24 pb-20">
      <div className="container-custom">
        <header className="mb-12">
          <h1 className="text-3xl font-serif font-medium text-sage-900 mb-3">
            Our Products
          </h1>
          <p className="text-slate-600 max-w-2xl">
            Explore our collection of natural wellness products, crafted with organic ingredients 
            and traditional wisdom to enhance your wellbeing.
          </p>
        </header>
        
        {/* Filters and Sorting */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <button
            className="md:hidden flex items-center text-slate-700 mb-4"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter size={18} className="mr-2" />
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </button>
          
          <div className={`w-full md:w-auto flex flex-wrap gap-2 mb-4 md:mb-0 ${showFilters ? 'block' : 'hidden md:flex'}`}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 text-sm rounded-md transition-colors ${
                  filter === category 
                    ? 'bg-sage-600 text-white' 
                    : 'bg-sage-100 text-slate-700 hover:bg-sage-200'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
          
          <div className="relative w-full md:w-auto">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="input-field pl-3 pr-10 py-2 appearance-none bg-white cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="newest">Newest Arrivals</option>
            </select>
            <ArrowDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500" />
          </div>
        </div>
        
        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-slate-600">No products found matching your criteria.</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default Products;
