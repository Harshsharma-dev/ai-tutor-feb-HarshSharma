'use client';

import { useState } from 'react';
import { PRICING_TIERS, BillingCycle } from '../constants/pricing-constants';
import PricingCard from './PricingCards/PricingCard';

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('monthly');

  return (
    <section className="bg-white">
      <div className="max-w-[1440px] mx-auto px-16">
        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-4 gap-6">
          {PRICING_TIERS.map((tier) => (
            <PricingCard
              key={tier.id}
              tier={tier}
              billingCycle={billingCycle}
              onBillingChange={tier.id === 'professional' ? setBillingCycle : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
