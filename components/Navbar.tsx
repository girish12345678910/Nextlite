'use client';

import Link from 'next/link';
import { useState } from 'react';
import Container from './Container';
import Button from './Button';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200">
      <Container>
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-2xl font-bold text-[#FF5A3C] hover:text-[#E44F35] transition-colors"
          >
            Nextlite
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/services"
              className="text-neutral-700 hover:text-[#FF5A3C] transition-colors font-medium"
            >
              Services
            </Link>
            <Link
              href="/program"
              className="text-neutral-700 hover:text-[#FF5A3C] transition-colors font-medium"
            >
              Program
            </Link>
            <Button href="/contact" size="sm">
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-neutral-200">
            <div className="flex flex-col gap-4">
              <Link
                href="/services"
                className="text-neutral-700 hover:text-[#FF5A3C] transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/program"
                className="text-neutral-700 hover:text-[#FF5A3C] transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Program
              </Link>
              <Button href="/contact" size="sm" onClick={() => setIsOpen(false)}>
                Contact
              </Button>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
}
