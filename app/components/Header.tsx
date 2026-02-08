import FigmaLogo from './icons/FigmaLogo';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#E5E5E5]">
      <div className="max-w-[1440px] mx-auto px-16">
        <div className="flex items-center justify-between h-20">
          {/* Left: Logo and Nav */}
          <div className="flex items-center gap-8">
            <FigmaLogo />
            
            {/* Navigation Items */}
            <nav className="flex items-center gap-6">
              <button className="flex items-center gap-1 text-[15px] text-black hover:opacity-70 transition-opacity">
                Products
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="flex items-center gap-1 text-[15px] text-black hover:opacity-70 transition-opacity">
                Solutions
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="flex items-center gap-1 text-[15px] text-black hover:opacity-70 transition-opacity">
                Community
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="flex items-center gap-1 text-[15px] text-black hover:opacity-70 transition-opacity">
                Resources
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
          
              <button className="text-[15px] text-black hover:opacity-70 transition-opacity">
                Pricing
              </button>
            </nav>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-3">
            {/* Log in */}
            <button className="px-4 py-2 text-[18px] font-light text-black hover:opacity-70 transition-opacity tracking-[-0.14px]">
              Log in
            </button>

            {/* Contact sales */}
            <button className="px-[21px] py-3 text-[18px] font-light text-black rounded-lg ring-1 ring-inset ring-black hover:bg-black hover:text-white transition-all tracking-[-0.14px]">
              Contact sales
            </button>

            {/* Get started for free */}
            <button className="px-[21px] py-3 text-[16px] font-light text-white bg-black rounded-lg hover:bg-[#212121] transition-colors tracking-[-0.14px]">
              Get started for free
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
