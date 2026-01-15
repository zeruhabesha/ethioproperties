import React, { useState } from 'react';

interface InteractiveCardProps extends React.ComponentPropsWithoutRef<'div'> {
  children: React.ReactNode;
  hoverEffect?: 'lift' | 'glow' | 'scale' | 'tilt';
  className?: string; // Explicitly included, though ComponentPropsWithoutRef<'div'> has it, for clarity if needed or remove redudancy
  onClick?: () => void;
  as?: React.ElementType;
}

const InteractiveCard: React.FC<InteractiveCardProps> = ({
  children,
  hoverEffect = 'lift',
  className = '',
  onClick,
  as: Component = 'div',
  ...rest
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const getHoverEffectClasses = (effect: string): string => {
    const baseClasses = 'transition-all duration-300 ease-out';

    switch (effect) {
      case 'lift':
        return `${baseClasses} hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/25`;
      case 'glow':
        return `${baseClasses} hover:shadow-lg hover:shadow-primary/25 hover:ring-1 hover:ring-primary/20`;
      case 'scale':
        return `${baseClasses} hover:transform hover:scale-105 hover:shadow-xl`;
      case 'tilt':
        return `${baseClasses} hover:transform hover:rotate-1 hover:scale-105 hover:shadow-xl`;
      default:
        return `${baseClasses} hover:transform hover:-translate-y-2 hover:shadow-2xl`;
    }
  };

  const getPressedClasses = (): string => {
    if (!isPressed) return '';

    switch (hoverEffect) {
      case 'lift':
        return 'transform translate-y-0 shadow-lg';
      case 'scale':
        return 'transform scale-100';
      case 'tilt':
        return 'transform rotate-0 scale-100';
      default:
        return 'transform translate-y-0';
    }
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsPressed(false);
  };
  const handleMouseDown = () => setIsPressed(true);
  const handleMouseUp = () => setIsPressed(false);

  const interactiveClasses = `
    ${getHoverEffectClasses(hoverEffect)}
    ${getPressedClasses()}
    ${onClick ? 'cursor-pointer' : ''}
    ${className}
  `.trim();

  const props = {
    className: interactiveClasses,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onMouseDown: onClick ? handleMouseDown : undefined,
    onMouseUp: onClick ? handleMouseUp : undefined,
    onClick,
    ...rest,
    ...(onClick && {
      role: 'button',
      tabIndex: 0,
      onKeyDown: (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      },
    }),
  };

  return (
    <Component {...props}>
      {children}
    </Component>
  );
};

export default InteractiveCard;