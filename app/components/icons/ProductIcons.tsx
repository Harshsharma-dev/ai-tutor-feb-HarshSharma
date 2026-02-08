interface ProductIconProps {
  className?: string;
  size?: number;
}

export function FigJamIcon({ size = 20, className = '' }: ProductIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="20" height="20" rx="4" fill="#A259FF"/>
      <path d="M10 6V14M6 10H14" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

export function FigmaSlidesIcon({ size = 20, className = '' }: ProductIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="20" height="20" rx="4" fill="#FF9F66"/>
      <rect x="5" y="7" width="10" height="6" rx="1" stroke="white" strokeWidth="1.5"/>
    </svg>
  );
}

export function DevModeIcon({ size = 20, className = '' }: ProductIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="20" height="20" rx="4" fill="#10B981"/>
      <path d="M7 7L5 10L7 13M13 7L15 10L13 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function FigmaDesignIcon({ size = 20, className = '' }: ProductIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="20" height="20" rx="4" fill="#0D99FF"/>
      <path d="M10 5L13 10L10 15L7 10L10 5Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function FigmaDrawIcon({ size = 20, className = '' }: ProductIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="20" height="20" rx="4" fill="#06B6D4"/>
      <path d="M6 14L14 6M14 6H10M14 6V10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function FigmaBuzzIcon({ size = 20, className = '' }: ProductIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="20" height="20" rx="4" fill="#FF69B4"/>
      <circle cx="10" cy="10" r="3" stroke="white" strokeWidth="1.5"/>
    </svg>
  );
}

export function FigmaSitesIcon({ size = 20, className = '' }: ProductIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="20" height="20" rx="4" fill="#6366F1"/>
      <path d="M5 8H15M8 5V15" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

export function FigmaMakeIcon({ size = 20, className = '' }: ProductIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="20" height="20" rx="4" fill="#6B7280"/>
      <rect x="6" y="6" width="8" height="8" rx="1" stroke="white" strokeWidth="1.5"/>
    </svg>
  );
}

// Helper to get icon by product ID
export function getProductIcon(productId: string, props?: ProductIconProps) {
  const icons: Record<string, React.ComponentType<ProductIconProps>> = {
    figjam: FigJamIcon,
    slides: FigmaSlidesIcon,
    devmode: DevModeIcon,
    design: FigmaDesignIcon,
    draw: FigmaDrawIcon,
    buzz: FigmaBuzzIcon,
    sites: FigmaSitesIcon,
    make: FigmaMakeIcon,
  };
  
  const Icon = icons[productId];
  return Icon ? <Icon {...props} /> : null;
}
