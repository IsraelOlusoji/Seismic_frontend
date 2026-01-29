import Link from 'next/link';

export default function Footer() {
  const navLinks = [
    { name: 'How it Works', href: '#how-it-works' },
    { name: 'Features', href: '#features' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Contact Us', href: '#contact' },
    { name: 'Track Order', href: '#track' },
    { name: 'Terms of Service', href: '#terms' },
  ];

  return (
    <footer className="bg-primary py-16 text-white">
      <div className="mx-auto flex max-w-[1160px] flex-col items-center px-4 md:px-6 lg:px-0">

        
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
           
          </div>
          <span className="text-[18px] font-bold leading-[25.2px] tracking-[0.01em] text-white">
            Brand Name
          </span>
        </div>

     
        <p className="mb-12 max-w-md text-center text-[18px] font-normal leading-[28.8px] tracking-[0.01em] text-[#008F82]">
          Shop internationally, receive your items in Nigeria. Simply, safely, and transparently.
        </p>

       
        <nav className="mb-20 flex flex-wrap justify-center gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="rounded-full border border-primary-200/30 bg-transparent px-6 py-2.5 text-[14px] font-medium text-primary-200 transition-colors hover:bg-[#002925] hover:text-white"
            >
              {link.name}
            </Link>
          ))}
        </nav>

       
        <div className="w-full border-t border-primary-200/20 pt-8 text-center">
          <p className="text-[14px] text-[#9CA3AF]">
            © 2025 YourPlatformName. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
