"use client";
import Link from "next/link";
import { useLang } from "@/lib/LanguageContext";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import CtaSection from "@/components/CtaSection";
import Image from "next/image";

export default function VillasPage() {
  const { t } = useLang();
  const v = t.villas;

  return (
    <>
      {/* Header */}
      <section className="px-4 pt-12 pb-10 max-w-7xl mx-auto">
        <nav className="text-xs text-[#edcfa1] mb-6">
          <Link
            href="/asset-types"
            className="hover:text-[#bf8b55] transition-colors"
          >
            {v.breadcrumb}
          </Link>
          <span className="mx-2">›</span>
          <span className="text-[#edcfa1]">{v.title}</span>
        </nav>
        <p className="section-label">{v.label}</p>
        <h1 className="text-3xl md:text-5xl font-bold text-[#bf8b55] mb-4 max-w-2xl leading-tight">
          {v.title}
        </h1>
        <p className="text-[#edcfa1] text-sm sm:text-base leading-relaxed max-w-xl">
          {v.subtitle}
        </p>
      </section>

      {/* Hero image */}
      <section className="px-4 pb-12 max-w-7xl mx-auto">
        <Image
          src={"/villa.svg"}
          alt="Hero"
          width={1198}
          height={558}
          className="w-full h-full object-cover rounded-xl"
        />
      </section>

      {/* Main content */}
      <section className="px-4 pb-16 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-[#edcfa1] mb-4">
                {v.discreet.title}
              </h2>
              <p className="text-[#edcfa1] text-sm leading-relaxed mb-3">
                {v.discreet.p1}
              </p>
              <p className="text-[#edcfa1] text-sm leading-relaxed">
                {v.discreet.p2}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#edcfa1] mb-4">
                {v.assetTypesTitle}
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {v.assets.map(asset => (
                  <div key={asset.title} className="card">
                    <div className="w-8 h-8 bg-[#0f1a2b] border border-[#1a2942] rounded-lg mb-3 flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-[#bf8b55]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                      </svg>
                    </div>
                    <h3 className="text-[#edcfa1] font-semibold text-sm mb-1">
                      {asset.title}
                    </h3>
                    <p className="text-[#edcfa1] text-xs leading-relaxed">
                      {asset.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#edcfa1] mb-3">
                {v.network.title}
              </h2>
              <p className="text-[#edcfa1] text-sm leading-relaxed">
                {v.network.desc}
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="bg-[#0f1a2b] border border-[#1a2942] rounded-2xl p-6 sticky top-24">
              <h3 className="text-[#edcfa1] font-bold text-lg mb-2">
                {v.sidebar.title}
              </h3>
              <p className="text-[#edcfa1] text-sm leading-relaxed mb-5">
                {v.sidebar.desc}
              </p>
              <Link href="/contact" className="gold-btn block text-center mb-4">
                {v.sidebar.btn}
              </Link>
              <ul className="space-y-2">
                {v.sidebar.items.map(item => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-[#edcfa1] text-xs"
                    >
                    <svg
                      className="w-4 h-4 text-[#bf8b55] shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        label={v.cta.label}
        title={v.cta.title}
        subtitle={v.cta.subtitle}
        btnText={v.cta.btn}
        btnHref="/contact"
      />
    </>
  );
}
