import { SEAT_TYPES, PRODUCTS } from '../constants/pricing-constants';
import { getProductIcon } from './icons/ProductIcons';

export default function SeatExplainerSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-[1440px] mx-auto px-16">
        {/* Heading */}
        <h2 className="text-[48px] font-semibold leading-tight text-black mb-16 max-w-3xl">
          Not sure which seat is right for you? We've got you.
        </h2>

        {/* Seat Cards Grid */}
        <div className="grid grid-cols-3 gap-8">
          {SEAT_TYPES.map((seat) => (
            <div key={seat.id} className="bg-[#F7F7F7] rounded-2xl p-8">
              {/* Title */}
              <h3 className="text-2xl font-semibold text-black mb-4">
                The {seat.name}
              </h3>

              {/* Description */}
              <p className="text-lg text-[#666] mb-8">
                {seat.description}
              </p>

              {/* Product List */}
              <ul className="space-y-3">
                {seat.products.map((productId) => {
                  const product = PRODUCTS.find(p => p.id === productId);
                  if (!product) return null;
                  
                  return (
                    <li key={productId} className="flex items-center gap-3">
                      {getProductIcon(productId, { size: 20 })}
                      <span className="text-sm text-black">
                        {product.name === 'FigJam' ? 'Brainstorm in ' : 
                         product.name === 'Figma Slides' ? 'Present on ' :
                         product.name === 'Dev Mode' ? 'Build in ' :
                         product.name === 'Figma Buzz' ? 'Promote in ' :
                         product.name === 'Figma Design' ? 'Create in ' :
                         product.name === 'Figma Draw' ? 'Illustrate in ' :
                         product.name === 'Figma Sites' ? 'Publish in ' :
                         product.name === 'Figma Make' ? 'Explore on ' : ''}
                        <span className="underline">{product.name}</span>
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
