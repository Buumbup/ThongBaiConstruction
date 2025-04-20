import React from 'react';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Link: React.FC<LinkProps> = ({ 
  href, 
  children, 
  className = '',
  onClick
}) => {
  const baseStyles = 'font-medium text-gray-700 hover:text-yellow-500 transition-colors duration-200';
  const combinedClassName = className ? className : baseStyles;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.scrollY - 100,
          behavior: 'smooth'
        });
      }
      if (onClick) onClick();
    }
  };

  return (
    <a 
      href={href} 
      className={combinedClassName}
      onClick={handleClick}
    >
      {children}
    </a>
  );
};