import PopularProductCard from '../components/PopularProductCard';
import { products } from '../constants/index';

const PopularProducts = () => {
  return (
    <section id="products" className="w-full py-24 px-6">
      <div className="max-container">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl font-palanquin font-bold">
            Our Popular <span className="text-coral-blue">Products</span>
          </h2>
          <p className="text-slate-gray mt-4 text-lg font-montserrat max-w-xl mx-auto">
            Explore premium-quality footwear crafted to elevate your athletic edge and unique fashion sense.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          {products.map((product, index) => (
            <div
              key={product.name}
              className="relative group animate-zoom-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glassmorphism Card */}
              <div className="bg-white/20 backdrop-blur-md border border-white/30 shadow-xl rounded-3xl p-6 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:backdrop-blur-lg">
                <PopularProductCard {...product} />
              </div>

              {/* Subtle shine */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
