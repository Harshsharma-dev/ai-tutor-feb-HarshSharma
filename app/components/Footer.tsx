import { FOOTER_LINKS } from '../constants/pricing-constants';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-[1440px] mx-auto px-16">
        {/* Footer Links Grid */}
        <div className="grid grid-cols-4 gap-12 mb-12">
          {/* Product Column */}
          <div>
            <ul className="space-y-3">
              {FOOTER_LINKS.product.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-sm text-white hover:opacity-70 transition-opacity inline-flex items-center gap-2">
                    {link.label}
                    {link.badge && (
                      <span className="text-xs px-2 py-0.5 bg-white text-black rounded-full font-medium">
                        {link.badge}
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Plans Column */}
          <div>
            <h3 className="text-xs uppercase text-[#999] font-semibold mb-4 tracking-wider">
              PLANS
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.plans.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-sm text-white hover:opacity-70 transition-opacity">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Use Cases Column */}
          <div>
            <ul className="space-y-3">
              {FOOTER_LINKS.useCases.slice(0, 8).map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-sm text-white hover:opacity-70 transition-opacity">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <ul className="space-y-3">
              {FOOTER_LINKS.resources.slice(0, 14).map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-sm text-white hover:opacity-70 transition-opacity">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-8 border-t border-[#333] flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-white hover:opacity-70 transition-opacity">
              Cookie settings
            </a>
            <button className="text-sm text-white hover:opacity-70 transition-opacity flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M8 4v8M4 8h8" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
              English
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
