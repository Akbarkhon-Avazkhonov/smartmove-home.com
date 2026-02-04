'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Setups', href: '#setups' },
    { label: 'Tips', href: '#tips' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-[#008080]/10">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#008080] to-[#005566] flex items-center justify-center">
            <span className="font-outfit font-bold text-white text-lg">S</span>
          </div>
          <div>
            <h1 className="font-outfit font-bold text-lg text-[#008080]">SmartMove</h1>
            <p className="text-xs text-[#008080]/60">The Kinetic Sanctuary</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-inter text-gray-700 hover:text-[#008080] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <button className="px-6 py-2 bg-[#008080] text-white rounded-lg font-inter text-sm font-medium hover:bg-[#005566] transition-colors duration-200">
            Get Started
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          {isOpen ? (
            <X className="w-5 h-5 text-gray-700" />
          ) : (
            <Menu className="w-5 h-5 text-gray-700" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-[#008080]/10 bg-white/95 backdrop-blur-md">
          <nav className="flex flex-col gap-4 p-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-inter text-gray-700 hover:text-[#008080] transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button className="w-full px-6 py-2 bg-[#008080] text-white rounded-lg font-inter text-sm font-medium hover:bg-[#005566] transition-colors mt-2">
              Get Started
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
