'use client';

import { Button as HeadlessButton } from '@headlessui/react';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  disabled = false,
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-colors duration-200 gap-2';
  
  const variantStyles = {
    primary: 'bg-[var(--color-primary)] hover:opacity-90',
    secondary: 'bg-[var(--color-secondary)] hover:opacity-90',
    outline: 'border border-[var(--color-primary)] text-[var(--color-primary)] data-hover:bg-gray-700'
  };

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm rounded-[var(--radius-sm)]',
    md: 'px-4 py-2 text-base rounded-[var(--radius-md)]',
    lg: 'px-6 py-3 text-lg rounded-[var(--radius-lg)]'
  };

  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : '';

  return (
    <HeadlessButton
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${className}`}
    >
      {children}
    </HeadlessButton>
  );
}