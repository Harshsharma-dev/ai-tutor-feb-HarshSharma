'use client';

import { BillingCycle } from '../../constants/pricing-constants';

interface BillingToggleProps {
  selected: BillingCycle;
  onChange: (cycle: BillingCycle) => void;
}

export default function BillingToggle({ selected, onChange }: BillingToggleProps) {
  return (
    <div className="inline-flex bg-[#F7F7F7] rounded-full p-1 gap-1">
      <button
        onClick={() => onChange('monthly')}
        className={`px-4 text-sm font-medium rounded-full transition-all ${
          selected === 'monthly'
            ? 'bg-white text-black shadow-sm'
            : 'text-[#666] hover:text-black'
        }`}
      >
        Monthly
      </button>
      <button
        onClick={() => onChange('annual')}
        className={`px-4 text-sm font-medium rounded-full transition-all ${
          selected === 'annual'
            ? 'bg-white text-black shadow-sm'
            : 'text-[#666] hover:text-black'
        }`}
      >
        Annual
      </button>
    </div>
  );
}
