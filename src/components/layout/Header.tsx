'use client';

import Link from 'next/link';
import { useState } from 'react';
import Button from '@/components/ui/Button';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/95 shadow-sm backdrop-blur">
      <nav className="mx-auto flex max-w-[1160px] items-center justify-between px-4 py-4 md:px-6 lg:px-0">
        
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary md:h-10 md:w-10">
            <span className="text-[11px] font-semibold text-white md:text-xs">BN</span>
          </div>
          <span className="text-[15px] font-semibold tracking-[-0.02em] text-grey-950 md:text-[16px]">
            Brand Name
          </span>
        </div>

        
        <div className="hidden items-center gap-8 text-[14px] text-grey-950 md:flex lg:gap-10">
          <Link href="#how-it-works" className="hover:text-primary">
            How it Works
          </Link>
          <Link href="#features" className="hover:text-primary">
            Features
          </Link>
          <Link href="#faqs" className="hover:text-primary">
            FAQs
          </Link>
          <Link href="#support" className="hover:text-primary">
            Support
          </Link>
        </div>

        <div className="flex items-center gap-3 md:gap-4">
          {/* Get Started Button - Desktop */}
          <Button variant="primary" size="default" className="hidden md:inline-flex">
            Get Started
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex rounded-full p-2 text-grey-950 hover:bg-gray-100 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-gray-100 bg-white md:hidden">
          <div className="mx-auto flex max-w-[1160px] flex-col gap-2 px-4 py-4 text-sm text-[#111827]">
            <Link
              href="#how-it-works"
              className="py-2 hover:text-[#047857]"
              onClick={() => setMobileMenuOpen(false)}
            >
              How it Works
            </Link>
            <Link href="#features" className="py-2 hover:text-[#047857]" onClick={() => setMobileMenuOpen(false)}>
              Features
            </Link>
            <Link href="#faqs" className="py-2 hover:text-[#047857]" onClick={() => setMobileMenuOpen(false)}>
              FAQs
            </Link>
            <Link href="#support" className="py-2 hover:text-[#047857]" onClick={() => setMobileMenuOpen(false)}>
              Support
            </Link>
            <Button variant="primary" size="default" className="mt-3 w-full">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
