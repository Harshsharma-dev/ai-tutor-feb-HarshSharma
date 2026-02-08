import { PricingTier, BillingCycle, SeatPricing } from '../../constants/pricing-constants';
import { CheckIcon } from '../icons/CheckIcon';
import { getProductIcon } from '../icons/ProductIcons';
import BillingToggle from './BillingToggle';

interface PricingCardProps {
  tier: PricingTier;
  billingCycle?: BillingCycle;
  onBillingChange?: (cycle: BillingCycle) => void;
}

export default function PricingCard({ tier, billingCycle = 'monthly', onBillingChange }: PricingCardProps) {
  const isProfessional = tier.id === 'professional';
  const isStarter = tier.id === 'starter';
  
  const getPrice = (seatPrice: SeatPricing | number | undefined) => {
    if (!seatPrice) return null;
    if (typeof seatPrice === 'number') return seatPrice;
    return billingCycle === 'monthly' ? seatPrice.monthly : seatPrice.annual;
  };

  const collabPrice = getPrice(tier.seats.collab);
  const devPrice = getPrice(tier.seats.dev);
  const fullPrice = getPrice(tier.seats.full);

  return (
    <div className={`relative bg-white border border-[#E5E5E5] rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow ${
      isProfessional ? 'bg-[#F0F8FF]' : ''
    }`}>
      {/* Plan Name */}
      <h3 className="text-[28px] font-semibold mb-6 text-black">{tier.name}</h3>

      {/* Billing Toggle (Professional only) */}
      {isProfessional && onBillingChange && (
        <div className="mb-6">
          <BillingToggle selected={billingCycle} onChange={onBillingChange} />
        </div>
      )}

      {/* Billing Type (Organization/Enterprise) */}
      {tier.billingType && (
        <p className="text-sm text-[#666] mb-6">{tier.billingType}</p>
      )}

      {/* Pricing Section */}
      {isStarter ? (
        <div className="mb-8">
          <p className="text-[48px] font-semibold text-black">Free</p>
        </div>
      ) : (
        <div className="mb-8 space-y-4">
          {/* Collab Seat */}
          {collabPrice !== null && (
            <div className="flex items-center justify-between pb-4 border-b border-[#E5E5E5]">
              <div>
                <p className="text-base font-medium text-black underline decoration-dotted underline-offset-4">
                  Collab seat
                </p>
                <div className="flex items-center gap-2 mt-1">
                  {getProductIcon('figjam', { size: 16 })}
                  {getProductIcon('slides', { size: 16 })}
                </div>
              </div>
              <p className="text-2xl font-medium text-black">
                ${collabPrice}<span className="text-base text-[#666]">/mo</span>
              </p>
            </div>
          )}

          {/* Dev Seat */}
          {devPrice !== null && (
            <div className="flex items-center justify-between pb-4 border-b border-[#E5E5E5]">
              <div>
                <p className="text-base font-medium text-black underline decoration-dotted underline-offset-4">
                  Dev seat
                </p>
                <div className="flex items-center gap-2 mt-1">
                  {getProductIcon('figjam', { size: 16 })}
                  {getProductIcon('slides', { size: 16 })}
                  {getProductIcon('devmode', { size: 16 })}
                  {getProductIcon('buzz', { size: 16 })}
                </div>
              </div>
              <p className="text-2xl font-medium text-black">
                ${devPrice}<span className="text-base text-[#666]">/mo</span>
              </p>
            </div>
          )}

          {/* Full Seat */}
          {fullPrice !== null && (
            <div className="flex items-center justify-between pb-4">
              <div>
                <p className="text-base font-medium text-black underline decoration-dotted underline-offset-4">
                  Full seat
                </p>
                <div className="flex items-center gap-2 mt-1">
                  {getProductIcon('figjam', { size: 16 })}
                  {getProductIcon('slides', { size: 16 })}
                  {getProductIcon('devmode', { size: 16 })}
                  {getProductIcon('design', { size: 16 })}
                  {getProductIcon('draw', { size: 16 })}
                  {getProductIcon('buzz', { size: 16 })}
                  {getProductIcon('sites', { size: 16 })}
                  {getProductIcon('make', { size: 16 })}
                </div>
              </div>
              <p className="text-2xl font-medium text-black">
                ${fullPrice}<span className="text-base text-[#666]">/mo</span>
              </p>
            </div>
          )}
        </div>
      )}

      {/* CTA Buttons */}
      <div className="mb-8 space-y-3">
        <button className="w-full py-3 px-6 bg-black text-white text-sm font-medium rounded-lg hover:bg-[#333] transition-colors">
          {tier.cta.primary}
        </button>
        {tier.cta.secondary && (
          <button className="w-full py-3 px-6 text-black text-sm font-medium underline hover:opacity-70 transition-opacity">
            {tier.cta.secondary}
          </button>
        )}
      </div>

      {/* Why Choose Section */}
      <div className="mb-6">
        <p className="text-base font-semibold text-black mb-3">
          Choose <span className="font-semibold">{tier.name}</span> if you:
        </p>
        <ul className="space-y-2">
          {tier.whyChoose.map((reason, index) => (
            <li key={index} className="text-sm text-[#666] flex items-start gap-2">
              <span className="mt-1">•</span>
              <span>{reason}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Key Features */}
      <div>
        <p className="text-base font-semibold text-black mb-3">Key features:</p>
        <ul className="space-y-2">
          {tier.keyFeatures.map((feature, index) => (
            <li key={index} className="text-sm text-[#666] flex items-start gap-2">
              <CheckIcon />
              <span className="flex-1">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
