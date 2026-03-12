"use client";
import Link from "next/link";
import { useLang } from "@/lib/LanguageContext";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import CtaSection from "@/components/CtaSection";
import Image from "next/image";

export default function BuildingsPage() {
  const { t } = useLang();
  const b = t.buildings;

  return (
    <>
      <section className="px-4 pt-12 pb-8 max-w-7xl mx-auto">
        <nav className="text-xs text-[#B7A87A] mb-6">
          <Link
            href="/asset-types"
            className="hover:text-[#c9a84c] transition-colors"
          >
            {t.nav.assetTypes}
          </Link>
          <span className="mx-2">›</span>
          <span className="text-[#B7A87A]">{b.breadcrumb}</span>
        </nav>
        <p className="section-label">{b.label}</p>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold text-[#c9a84c] mb-4 leading-tight">
              {b.title}
            </h1>
            <p className="text-[#B7A87A] text-sm leading-relaxed mb-6">
              {b.subtitle}
            </p>
            <div className="grid grid-cols-2 gap-2 mb-6">
              {b.tags.map(tag => (
                <div
                  key={tag}
                  className="bg-[#141414] border border-[#2a2a2a] rounded-lg p-3"
                >
                  <p className="text-[#c9a84c] text-xs font-medium">{tag}</p>
                </div>
              ))}
            </div>
            <Link href="/list-property" className="outline-btn inline-block">
              {b.listBtn}
            </Link>
          </div>
          <Image
            src={"/building.svg"}
            alt="Hero"
            width={568}
            height={600}
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </section>

      {/* Strategy */}
      <section className="px-4 py-14 border-t border-[#1e1e1e]">
        <div className="max-w-7xl mx-auto">
          <p className="section-label">{b.strategy.label}</p>
          <h2 className="text-2xl md:text-4xl font-bold text-[#F5E7B2] mb-4 max-w-2xl">
            {b.strategy.title}
          </h2>
          <p className="text-[#B7A87A] text-sm leading-relaxed max-w-xl mb-10">
            {b.strategy.desc}
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {b.assetTypes.map(at => (
              <div key={at.title} className="card">
                <h3 className="text-[#F5E7B2] font-semibold mb-2">
                  {at.title}
                </h3>
                <p className="text-[#B7A87A] text-sm leading-relaxed">
                  {at.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-4 py-14 border-t border-[#1e1e1e]">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-3 gap-6">
          {b.features.map((f, i) => {
            const icons = [
              <path
                key="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />,
              <path
                key="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2"
              />,
              <path
                key="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />,
            ];
            return (
              <div key={f.title}>
                <div className="w-10 h-10 bg-[#141414] border border-[#2a2a2a] rounded-xl mb-4 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-[#c9a84c]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {icons[i]}
                  </svg>
                </div>
                <h3 className="text-[#F5E7B2] font-semibold mb-2">
                  {f.title}
                </h3>
                <p className="text-[#B7A87A] text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <CtaSection
        label={b.cta.label}
        title={b.cta.title}
        subtitle={b.cta.subtitle}
        btnText={b.cta.btn}
        btnHref="/contact"
      />
    </>
  );
}
