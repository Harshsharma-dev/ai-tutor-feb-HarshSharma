import { PRODUCTS } from '../constants/pricing-constants';
import { getProductIcon } from './icons/ProductIcons';

export default function HeroSection() {
  return (
    <section className="bg-white pt-20 pb-16">
      <div className="max-w-[1440px] mx-auto px-16">
        {/* Main Heading */}
        <h1 className="text-[4.5rem] font-normal leading-[1.1] tracking-tight text-black mb-12 max-w-3xl">
          Pick your plan, choose your seats
        </h1>

        {/* Product Callout Box */}
        <div className="border border-[#E5E5E5] rounded-2xl p-8 bg-white shadow-sm max-w-4xl">
          <p className="text-base text-[#666] mb-6">
            Seats give you access to Figma products:
          </p>

          {/* Product Grid */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            {PRODUCTS.map((product) => (
              <div key={product.id} className="flex items-center gap-3">
                {getProductIcon(product.id, { size: 20 })}
                <span className="text-sm text-black">{product.name}</span>
              </div>
            ))}
          </div>

          {/* Disclaimer */}
          <p className="text-sm text-[#999]">
            Prices in USD
          </p>
        </div>
      </div>
    </section>
  );
}
