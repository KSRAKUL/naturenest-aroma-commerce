
import { Leaf, Heart, Users } from 'lucide-react';

const About = () => {
  return (
    <main className="pt-24 pb-20">
      <div className="container-custom">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-medium text-sage-900 mb-4">
            Our Story
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            NatureNest was born from a passion for traditional wellness practices and 
            a commitment to bringing nature's healing power into modern homes.
          </p>
        </div>
        
        {/* Founder Story */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img 
              src="/placeholder.svg" 
              alt="NatureNest Founder" 
              className="rounded-lg shadow-md"
            />
          </div>
          <div>
            <h2 className="text-3xl font-serif font-medium text-sage-800 mb-4">
              How It All Started
            </h2>
            <p className="text-slate-600 mb-4">
              Our journey began when our founder, Aanya, discovered the remarkable benefits of 
              traditional wellness practices during her travels across rural communities in India. 
              She was particularly moved by the centuries-old practice of burning sambrani, 
              a natural incense used to purify spaces and create a peaceful atmosphere.
            </p>
            <p className="text-slate-600 mb-4">
              Recognizing the growing interest in natural alternatives to synthetic home products, 
              Aanya partnered with local artisans to create a modern version of sambrani that 
              maintained its traditional benefits while meeting contemporary quality standards.
            </p>
            <p className="text-slate-600">
              What began as a small passion project has since grown into NatureNest, a 
              thriving wellness brand committed to bringing nature's gifts into 
              everyday living spaces across the country.
            </p>
          </div>
        </div>
        
        {/* Mission & Values */}
        <div className="bg-sage-50 rounded-lg p-8 md:p-12 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-medium text-sage-800 mb-4">
              Our Mission & Values
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We're guided by a simple belief: wellness should be natural, accessible, 
              and sustainable for both people and planet.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="w-14 h-14 rounded-full bg-sage-100 flex items-center justify-center mx-auto mb-4">
                <Leaf className="text-sage-600" size={24} />
              </div>
              <h3 className="text-xl font-serif text-sage-800 mb-3">
                Natural Authenticity
              </h3>
              <p className="text-slate-600">
                We source only organic, sustainably harvested ingredients and maintain 
                traditional preparation methods to preserve their natural benefits.
              </p>
            </div>
            
            {/* Value 2 */}
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="w-14 h-14 rounded-full bg-sage-100 flex items-center justify-center mx-auto mb-4">
                <Heart className="text-sage-600" size={24} />
              </div>
              <h3 className="text-xl font-serif text-sage-800 mb-3">
                Holistic Wellbeing
              </h3>
              <p className="text-slate-600">
                We believe true wellness encompasses mind, body, and environment. Our 
                products aim to nurture all three for complete harmony.
              </p>
            </div>
            
            {/* Value 3 */}
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="w-14 h-14 rounded-full bg-sage-100 flex items-center justify-center mx-auto mb-4">
                <Users className="text-sage-600" size={24} />
              </div>
              <h3 className="text-xl font-serif text-sage-800 mb-3">
                Community Support
              </h3>
              <p className="text-slate-600">
                We work directly with artisan communities, ensuring fair compensation 
                and supporting the preservation of traditional craftsmanship.
              </p>
            </div>
          </div>
        </div>
        
        {/* Sustainability */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-medium text-sage-800 mb-4">
              Our Commitment to Sustainability
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We believe in creating products that respect and protect our planet for future generations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <img 
                src="/placeholder.svg" 
                alt="Sustainable Practices" 
                className="rounded-lg shadow-md"
              />
            </div>
            <div>
              <h3 className="text-2xl font-serif font-medium text-sage-800 mb-4">
                Eco-Friendly From Start to Finish
              </h3>
              <div className="space-y-4">
                <div className="flex">
                  <span className="text-sage-600 mr-3 font-medium">01</span>
                  <div>
                    <h4 className="font-medium text-slate-800 mb-1">Sustainable Sourcing</h4>
                    <p className="text-slate-600">
                      We partner with organic farmers who use regenerative practices that 
                      protect biodiversity and soil health.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <span className="text-sage-600 mr-3 font-medium">02</span>
                  <div>
                    <h4 className="font-medium text-slate-800 mb-1">Minimal Processing</h4>
                    <p className="text-slate-600">
                      Our production methods preserve the natural integrity of ingredients 
                      while minimizing energy consumption.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <span className="text-sage-600 mr-3 font-medium">03</span>
                  <div>
                    <h4 className="font-medium text-slate-800 mb-1">Eco-Packaging</h4>
                    <p className="text-slate-600">
                      All our packaging is made from recycled or biodegradable materials, 
                      designed to minimize environmental impact.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <span className="text-sage-600 mr-3 font-medium">04</span>
                  <div>
                    <h4 className="font-medium text-slate-800 mb-1">Carbon Offset</h4>
                    <p className="text-slate-600">
                      We invest in reforestation projects to offset our carbon footprint 
                      and contribute to global climate solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Team section would go here */}
        
        {/* CTA */}
        <div className="bg-sage-600 text-white rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-3xl font-serif font-medium mb-4">
            Experience the NatureNest Difference
          </h2>
          <p className="max-w-2xl mx-auto mb-8">
            Join us in our mission to bring nature's healing power into your daily life. 
            Discover our collection of mindfully crafted wellness products.
          </p>
          <a 
            href="/products" 
            className="inline-block bg-white text-sage-700 hover:bg-cream-50 font-medium px-6 py-3 rounded-md transition-colors"
          >
            Shop Our Collection
          </a>
        </div>
      </div>
    </main>
  );
};

export default About;
