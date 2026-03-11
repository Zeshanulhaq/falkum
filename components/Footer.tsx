"use client";
import Link from "next/link";
import { useLang } from "@/lib/LanguageContext";

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="bg-[#0d0d0d] border-t border-[#2a2a2a] py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        <div className="max-w-xs">
          <Link href="/" className="flex items-center gap-2.5 mb-3">
            <div className="w-8 h-8 bg-[#c9a84c] rounded-md flex items-center justify-center">
              <span className="text-black font-bold text-sm">F</span>
            </div>
            <span className="text-white font-semibold text-lg">Falkum</span>
          </Link>
          <p className="text-[#666] text-sm leading-relaxed">{t.footer.tagline}</p>
        </div>
        <div className="flex flex-wrap gap-8">
          <div className="flex flex-col gap-2">
            <Link href="/" className="text-[#888] hover:text-white text-sm transition-colors">{t.nav.home}</Link>
            <Link href="/asset-types" className="text-[#888] hover:text-white text-sm transition-colors">{t.nav.assetTypes}</Link>
            <Link href="/how-it-works" className="text-[#888] hover:text-white text-sm transition-colors">{t.nav.howItWorks}</Link>
            <Link href="/contact" className="text-[#888] hover:text-white text-sm transition-colors">{t.nav.contact}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
