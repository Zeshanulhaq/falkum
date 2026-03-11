"use client";
import Link from "next/link";
import { useState } from "react";
import { useLang } from "@/lib/LanguageContext";

export default function Navbar() {
  const { t, lang, setLang } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0d0d0d]/95 backdrop-blur-sm border-b border-[#2a2a2a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <div className="w-8 h-8 bg-[#c9a84c] rounded-md flex items-center justify-center">
              <span className="text-black font-bold text-sm">F</span>
            </div>
            <span className="text-white font-semibold text-lg tracking-tight">Falkum</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-[#aaa] hover:text-white text-sm transition-colors">
              {t.nav.home}
            </Link>
            <Link href="/asset-types" className="text-[#aaa] hover:text-white text-sm transition-colors">
              {t.nav.assetTypes}
            </Link>
            <Link href="/how-it-works" className="text-[#aaa] hover:text-white text-sm transition-colors">
              {t.nav.howItWorks}
            </Link>
            <Link href="/contact" className="text-[#aaa] hover:text-white text-sm transition-colors">
              {t.nav.contact}
            </Link>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Language Toggle */}
            <button
              onClick={() => setLang(lang === "en" ? "ar" : "en")}
              className="hidden md:flex items-center gap-1 text-xs text-[#aaa] hover:text-[#c9a84c] transition-colors border border-[#333] rounded px-2.5 py-1.5"
            >
              {lang === "en" ? "عربي" : "EN"}
            </button>

            {/* CTA */}
            <Link
              href="/list-property"
              className="hidden md:block bg-[#c9a84c] hover:bg-[#b8963e] text-black text-sm font-semibold px-4 py-2 rounded transition-colors"
            >
              {t.nav.listProperty}
            </Link>

            {/* Mobile menu btn */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-white p-1"
              aria-label="Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0d0d0d] border-t border-[#2a2a2a] px-4 py-4 flex flex-col gap-4">
          <Link href="/" onClick={() => setMenuOpen(false)} className="text-[#aaa] hover:text-white text-sm py-1">
            {t.nav.home}
          </Link>
          <Link href="/asset-types" onClick={() => setMenuOpen(false)} className="text-[#aaa] hover:text-white text-sm py-1">
            {t.nav.assetTypes}
          </Link>
          <Link href="/how-it-works" onClick={() => setMenuOpen(false)} className="text-[#aaa] hover:text-white text-sm py-1">
            {t.nav.howItWorks}
          </Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)} className="text-[#aaa] hover:text-white text-sm py-1">
            {t.nav.contact}
          </Link>
          <div className="flex items-center gap-3 pt-2 border-t border-[#2a2a2a]">
            <button
              onClick={() => setLang(lang === "en" ? "ar" : "en")}
              className="text-xs text-[#aaa] hover:text-[#c9a84c] border border-[#333] rounded px-3 py-2"
            >
              {lang === "en" ? "عربي" : "EN"}
            </button>
            <Link
              href="/list-property"
              onClick={() => setMenuOpen(false)}
              className="flex-1 text-center bg-[#c9a84c] hover:bg-[#b8963e] text-black text-sm font-semibold px-4 py-2 rounded transition-colors"
            >
              {t.nav.listProperty}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
