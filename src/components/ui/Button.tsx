import React from 'react';
import Link from 'next/link';

type ButtonVariant = 'primary' | 'outline';
type ButtonSize = 'default' | 'large' | 'small' | 'nav' | 'navMobile';

const variantSizeClasses: Record<ButtonVariant, Record<ButtonSize, string>> = {
  primary: {
    default:
      'flex py-3.5 px-7 items-center justify-center gap-2 rounded-full bg-primary text-[16px] font-bold leading-[19.2px] tracking-[0.01em] text-white transition-colors hover:bg-primary cursor-pointer',
    large:
      'inline-flex h-[62px] w-[247px] items-center justify-center rounded-full bg-primary text-[18px] font-bold leading-[21.6px] tracking-[0.01em] text-white transition-colors hover:bg-primary/90 cursor-pointer',
    nav: 'hidden items-center justify-center rounded-full bg-primary px-6 py-2 text-[14px] font-semibold text-white shadow-[0_10px_30px_rgba(5,122,85,0.45)] transition-colors hover:bg-[#002925] md:inline-flex',
    navMobile:
      'mt-3 inline-flex w-full items-center justify-center rounded-full bg-[#065F46] px-6 py-2 text-[14px] font-semibold text-white shadow-[0_10px_30px_rgba(5,122,85,0.45)] transition-colors hover:bg-[#064E3B]',
    small:
      'inline-flex items-center justify-center rounded-full bg-primary px-6 py-2 text-[14px] font-semibold text-white shadow-[0_10px_30px_rgba(5,122,85,0.45)] transition-colors hover:bg-[#002925] cursor-pointer',
  },
  outline: {
    default:
      'flex py-3.5 px-7 items-center justify-center gap-2 rounded-full border border-primary bg-transparent text-[16px] font-bold leading-[19.2px] tracking-[0.01em] text-primary transition-colors hover:bg-primary/5 hover:cursor-pointer',
    large:
      'inline-flex h-[62px] w-[247px] items-center justify-center rounded-full border border-primary bg-transparent text-[18px] font-bold leading-[21.6px] tracking-[0.01em] text-primary transition-colors hover:bg-primary/5 cursor-pointer',
    nav: '',
    navMobile: '',
    small:
      'inline-flex h-[49px] w-[122px] items-center justify-center rounded-full border border-primary bg-transparent text-[14px] font-bold leading-[16.8px] tracking-[0.01em] text-primary cursor-pointer transition-colors hover:bg-primary-50',
  },
};

type BaseButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  className?: string;
};

type ButtonAsButton = BaseButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };
type ButtonAsLink = BaseButtonProps & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export default function Button({
  variant = 'primary',
  size = 'default',
  children,
  className = '',
  href,
  ...props
}: ButtonProps) {
  const baseClasses = variantSizeClasses[variant][size];
  const combinedClassName = [baseClasses, className].filter(Boolean).join(' ');

  if (href) {
    return (
      <Link href={href} className={combinedClassName} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={combinedClassName} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
