"use client";
import Link from "next/link";
import { useLang } from "@/lib/LanguageContext";
import Image from "next/image";

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="bg-[#09101b] border-t border-[#1a2942] py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        <div className="max-w-md">
          <Link href="/" className="flex items-center gap-2.5 mb-3">
            <Image
              src="/Falkum_logo_footer.png"
              alt="Falkum"
              width={200}
              height={96}
              className="w-36 h-auto object-contain"
            />
            {/* <div className="w-8 h-8 bg-[#bf8b55] rounded-md flex items-center justify-center">
              <span className="text-black font-bold text-sm">F</span>
            </div>
            <span className="text-[#edcfa1] font-semibold text-lg">Falkum</span> */}
          </Link>
          <p className="text-[#edcfa1] text-sm leading-relaxed">
            {t.footer.tagline}
          </p>
        </div>
        <div className="flex flex-wrap gap-8">
          <div className="flex justify-center w-full gap-6 items-center">
            <Link
              href="/"
              className="text-[#edcfa1] hover:text-[#bf8b55] text-sm transition-colors"
            >
              {t.nav.home}
            </Link>
            <Link
              href="/asset-types"
              className="text-[#edcfa1] hover:text-[#bf8b55] text-sm transition-colors"
            >
              {t.nav.assetTypes}
            </Link>
            <Link
              href="/how-it-works"
              className="text-[#edcfa1] hover:text-[#bf8b55] text-sm transition-colors"
            >
              {t.nav.howItWorks}
            </Link>
            <Link
              href="/contact"
              className="text-[#edcfa1] hover:text-[#bf8b55] text-sm transition-colors"
            >
              {t.nav.contact}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
