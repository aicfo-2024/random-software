"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="text-base-text hover:text-brand-green relative group"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-coral group-hover:w-full transition-all duration-300" />
    </Link>
  );
}

interface DropdownItem {
  href: string;
  label: string;
}

interface NavDropdownProps {
  label: string;
  items: DropdownItem[];
}

function NavDropdown({ label, items }: NavDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle keyboard navigation
  function handleKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Escape") {
      setIsOpen(false);
    } else if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setIsOpen(!isOpen);
    }
  }

  // Delay closing to allow mouse to move to dropdown
  function handleMouseLeave() {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 150);
  }

  function handleMouseEnter() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsOpen(true);
  }

  return (
    <div
      ref={dropdownRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className="text-base-text hover:text-brand-green relative group"
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        aria-expanded={isOpen}
        aria-haspopup="menu"
      >
        {label}
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-coral group-hover:w-full transition-all duration-300" />
      </button>
      <div
        role="menu"
        aria-label={`${label} menu`}
        className={`absolute top-full left-0 mt-2 w-48 bg-base-bg border border-base-border rounded-lg shadow-lg transition-all duration-200 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="py-2">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              role="menuitem"
              className="block px-4 py-2 text-base-text hover:bg-brand-green/10 hover:text-brand-green"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

import { getGalleryItems } from "@/app/config/projects";

const galleryItems: DropdownItem[] = getGalleryItems();

export function Navigation() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-base-bg/80 backdrop-blur-sm border-b border-base-border">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-semibold text-base-text hover:text-brand-green"
        >
          Random Software
        </Link>
        <div className="flex gap-8 text-sm">
          <NavLink href="/build">Build</NavLink>
          <NavDropdown label="Gallery" items={galleryItems} />
          <NavLink href="/manifesto">Manifesto</NavLink>
        </div>
      </nav>
    </header>
  );
}
