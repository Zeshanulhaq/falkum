"use client";
import Link from "next/link";
import { useLang } from "@/lib/LanguageContext";

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="bg-[#0d0d0d] border-t border-[#2a2a2a] py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        <div className="max-w-md">
          <Link href="/" className="flex items-center gap-2.5 mb-3">
            <div className="w-8 h-8 bg-[#c9a84c] rounded-md flex items-center justify-center">
              <span className="text-black font-bold text-sm">F</span>
            </div>
            <span className="text-[#F5E7B2] font-semibold text-lg">Falkum</span>
          </Link>
          <p className="text-[#B7A87A] text-sm leading-relaxed">
            {t.footer.tagline}
          </p>
        </div>
        <div className="flex flex-wrap gap-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            <Link
              href="/"
              className="text-[#B7A87A] hover:text-[#c9a84c] text-sm transition-colors"
            >
              {t.nav.home}
            </Link>
            <Link
              href="/asset-types"
              className="text-[#B7A87A] hover:text-[#c9a84c] text-sm transition-colors"
            >
              {t.nav.assetTypes}
            </Link>
            <Link
              href="/how-it-works"
              className="text-[#B7A87A] hover:text-[#c9a84c] text-sm transition-colors"
            >
              {t.nav.howItWorks}
            </Link>
            <Link
              href="/contact"
              className="text-[#B7A87A] hover:text-[#c9a84c] text-sm transition-colors"
            >
              {t.nav.contact}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
