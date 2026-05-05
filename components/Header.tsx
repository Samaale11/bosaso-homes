"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-primary-container fixed top-0 w-full h-[72px] z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center">
        
        {/* Logo + Icon */}
        <Link href="/" className="font-manrope text-xl font-bold text-secondary-fixed-dim flex items-center gap-2 transition-opacity hover:opacity-80">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 21V10l9-7 9 7v11"></path>
            <path d="M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6"></path>
            <line x1="3" y1="21" x2="21" y2="21"></line>
          </svg>
          Bosaso Home Solutions
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center">
          <Link href="/" className="font-inter font-semibold text-white hover:text-secondary-fixed-dim transition-colors">Home</Link>
          <Link href="/" className="font-inter font-semibold text-white hover:text-secondary-fixed-dim transition-colors">Houses</Link>
          <Link href="/contact" className="font-inter font-semibold text-white hover:text-secondary-fixed-dim transition-colors">Contact</Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden text-white flex items-center justify-center p-2 rounded focus:outline-none focus:ring-2 focus:ring-secondary-fixed-dim"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="material-symbols-outlined text-3xl">
            {isOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-[72px] left-0 w-full bg-primary-container border-t border-white/10 shadow-xl flex flex-col">
          <Link 
            href="/" 
            onClick={() => setIsOpen(false)}
            className="p-5 border-b border-white/10 font-inter font-semibold text-white text-center hover:bg-white/5 hover:text-secondary-fixed-dim transition-colors"
          >
            Home
          </Link>
          <Link 
            href="/" 
            onClick={() => setIsOpen(false)}
            className="p-5 border-b border-white/10 font-inter font-semibold text-white text-center hover:bg-white/5 hover:text-secondary-fixed-dim transition-colors"
          >
            Houses
          </Link>
          <Link 
            href="/contact" 
            onClick={() => setIsOpen(false)}
            className="p-5 font-inter font-semibold text-white text-center hover:bg-white/5 hover:text-secondary-fixed-dim transition-colors"
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}