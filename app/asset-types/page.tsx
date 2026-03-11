"use client";
import Link from "next/link";
import { useLang } from "@/lib/LanguageContext";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import CtaSection from "@/components/CtaSection";

export default function AssetTypesPage() {
  const { t } = useLang();
  const a = t.assetTypes;

  const items = [
    { href: "/asset-types/villas", data: a.villas, imgLabel: "Luxury Villa" },
    { href: "/asset-types/buildings", data: a.buildings, imgLabel: "Investment Building" },
    { href: "/asset-types/hotels", data: a.hotels, imgLabel: "Hotel" },
    { href: "/asset-types/hospitals", data: a.hospitals, imgLabel: "Hospital" },
  ];

  return (
    <>
      <section className="px-4 py-14 md:py-20 max-w-4xl mx-auto text-center">
        <p className="section-label inline-block">{a.label}</p>
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{a.title}</h1>
        <p className="text-[#888] text-sm sm:text-base leading-relaxed">{a.subtitle}</p>
      </section>

      <section className="px-4 pb-20 max-w-7xl mx-auto space-y-16">
        {items.map(({ href, data, imgLabel }, i) => (
          <div key={href} className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${i % 2 !== 0 ? "md:flex-row-reverse" : ""}`}>
            {i % 2 !== 0 ? (
              <>
                <div className="md:order-2">
                  <ImagePlaceholder aspectRatio="aspect-[4/3]" label={imgLabel} />
                </div>
                <div className="md:order-1">
                  <AssetCard href={href} data={data} />
                </div>
              </>
            ) : (
              <>
                <div>
                  <ImagePlaceholder aspectRatio="aspect-[4/3]" label={imgLabel} />
                </div>
                <div>
                  <AssetCard href={href} data={data} />
                </div>
              </>
            )}
          </div>
        ))}
      </section>

      <CtaSection
        label={a.pageCta.label}
        title={a.pageCta.title}
        subtitle={a.pageCta.subtitle}
        btnText={a.pageCta.btn}
        btnHref="/contact"
      />
    </>
  );
}

function AssetCard({ href, data }: { href: string; data: any }) {
  return (
    <div>
      <span className="inline-block text-[10px] font-semibold tracking-widest uppercase bg-[#1e1e1e] text-[#c9a84c] border border-[#c9a84c]/20 px-3 py-1 rounded mb-4">
        {data.tag}
      </span>
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{data.title}</h2>
      <p className="text-[#888] text-sm leading-relaxed mb-5">{data.desc}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="flex items-center gap-1.5 text-xs text-[#aaa] bg-[#141414] border border-[#2a2a2a] px-3 py-1.5 rounded">
          <svg className="w-3.5 h-3.5 text-[#c9a84c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0" />
          </svg>
          {data.tag1}
        </span>
        <span className="flex items-center gap-1.5 text-xs text-[#aaa] bg-[#141414] border border-[#2a2a2a] px-3 py-1.5 rounded">
          <svg className="w-3.5 h-3.5 text-[#c9a84c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          {data.tag2}
        </span>
      </div>
      <p className="text-[#555] text-xs mb-5">{data.subtypes}</p>
      <Link href={href} className="gold-btn inline-block">{data.cta}</Link>
    </div>
  );
}
