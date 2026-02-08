import { PRODUCTS } from '../constants/pricing-constants';
import { getProductIcon } from './icons/ProductIcons';

export default function HeroSection() {
  return (
    <section className="bg-white pt-20 pb-1">
      <div className="max-w-[1440px] mx-auto px-16">
        {/* Main Heading */}
        <h1 className="text-[4.5rem] font-normal leading-[1.1] tracking-tight text-black mb-12 max-w-3xl">
          Pick your plan, choose your seats
        </h1>

        {/* Product Callout Box */}
        <div className="border border-black/10 rounded-lg py-3 px-4 bg-transparent max-w-[80%]">
          <p className="text-[15px] font-normal text-black mb-3">
            Seats give you access to Figma products:
          </p>

          {/* Product List - Horizontal Flex */}
          <div className="flex flex-wrap items-center gap-4 mb-3">
            {PRODUCTS.map((product) => (
              <div key={product.id} className="flex items-center gap-2">
                {getProductIcon(product.id, { size: 20 })}
                <span className="text-[14px] font-normal text-black">{product.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
