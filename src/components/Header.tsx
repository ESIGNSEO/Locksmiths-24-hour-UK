'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Key, Phone, Menu, X } from 'lucide-react';

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Areas Covered', href: '/areas-covered' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Contact', href: '/contact' }
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-xl transition-premium">
      <div className="mx-auto flex max-w-7xl h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-premium group-hover:scale-105 shadow-[0_4px_20px_rgba(255,217,0,0.3)]">
            <Key className="h-5 w-5 stroke-[2.5]" />
          </div>
          <span className="text-lg font-black tracking-tight uppercase text-foreground">
            Locksmith<span className="text-primary font-black">24hour</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`px-4 py-2 text-sm font-semibold rounded-full transition-premium ${
                isActive(item.href)
                  ? 'bg-secondary text-secondary-foreground'
                  : 'text-muted-foreground hover:bg-secondary/50 hover:text-foreground'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA Call Button */}
        <div className="hidden md:block">
          <a
            href="tel:07742831011"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-black text-sm uppercase tracking-wider transition-premium hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(255,217,0,0.25)] hover:shadow-[0_6px_24px_rgba(255,217,0,0.4)]"
          >
            <Phone className="h-4 w-4 fill-current animate-pulse" />
            Tap to Call
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-foreground hover:bg-secondary/50 md:hidden transition-premium"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-border bg-background px-4 py-4 space-y-2 animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 text-base font-semibold rounded-xl transition-premium ${
                  isActive(item.href)
                    ? 'bg-secondary text-secondary-foreground'
                    : 'text-muted-foreground hover:bg-secondary/30 hover:text-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="pt-2">
            <a
              href="tel:07742831011"
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-primary text-primary-foreground font-black uppercase tracking-wider text-center"
            >
              <Phone className="h-4 w-4 fill-current" />
              Tap to Call
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
