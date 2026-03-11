"use client";
import Link from "next/link";
import { useLang } from "@/lib/LanguageContext";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import CtaSection from "@/components/CtaSection";

export default function HomePage() {
  const { t } = useLang();
  const h = t.home;

  return (
    <>
      {/* Hero */}
      <section className="px-4 py-16 md:py-24 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#c9a84c] leading-tight mb-6">
              {h.hero.title}
            </h1>
            <p className="text-[#888] text-sm sm:text-base leading-relaxed mb-8">{h.hero.subtitle}</p>

            {/* Tags */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
              {[
                { label: h.heroTags.buyerSourcing, desc: h.heroTags.buyerSourcingDesc },
                { label: h.heroTags.negotiation, desc: h.heroTags.negotiationDesc },
                { label: h.heroTags.legal, desc: h.heroTags.legalDesc },
              ].map((tag) => (
                <div key={tag.label} className="bg-[#141414] border border-[#2a2a2a] rounded-lg p-3">
                  <p className="text-[#c9a84c] text-[10px] font-semibold tracking-widest uppercase mb-1">{tag.label}</p>
                  <p className="text-[#777] text-xs leading-relaxed">{tag.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="gold-btn">{h.hero.cta}</Link>
              <Link href="/asset-types" className="outline-btn">{h.hero.viewCategories}</Link>
            </div>
          </div>

          {/* Hero image + asset types */}
          <div className="flex flex-col gap-4">
            <ImagePlaceholder aspectRatio="aspect-[4/3]" label="Hero Image" />
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[#141414] border border-[#2a2a2a] rounded-lg p-4">
                <p className="text-white font-semibold mb-1">{h.assetTypes.residential}</p>
                <p className="text-[#777] text-xs">{h.assetTypes.residentialDesc}</p>
              </div>
              <div className="bg-[#141414] border border-[#2a2a2a] rounded-lg p-4">
                <p className="text-white font-semibold mb-1">{h.assetTypes.commercial}</p>
                <p className="text-[#777] text-xs">{h.assetTypes.commercialDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Falkum */}
      <section className="px-4 py-16 md:py-20 border-t border-[#1e1e1e]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="section-label">{h.trust.label}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 max-w-2xl">{h.trust.title}</h2>
            <p className="text-[#888] text-sm leading-relaxed max-w-xl">{h.trust.subtitle}</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-4 mb-12">
            {[
              { title: h.trust.forSellers, desc: h.trust.forSellersDesc, items: h.trust.forSellersItems },
              { title: h.trust.forBuyers, desc: h.trust.forBuyersDesc, items: h.trust.forBuyersItems },
              { title: h.trust.aligned, desc: h.trust.alignedDesc, items: h.trust.alignedItems },
            ].map((card) => (
              <div key={card.title} className="card">
                <div className="w-8 h-8 bg-[#1e1e1e] border border-[#333] rounded-lg mb-4 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-[#c9a84c]" />
                </div>
                <h3 className="text-white font-semibold text-base mb-2">{card.title}</h3>
                <p className="text-[#777] text-sm leading-relaxed mb-3">{card.desc}</p>
                <ul className="space-y-1">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-[#888] text-xs">
                      <svg className="w-3.5 h-3.5 text-[#c9a84c] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[h.stats.hours, h.stats.confidential, h.stats.point, h.stats.upfront].map((s) => (
              <div key={s.value} className="bg-[#141414] border border-[#2a2a2a] rounded-xl p-5">
                <p className="text-[#c9a84c] text-2xl font-bold mb-2">{s.value}</p>
                <p className="text-[#777] text-xs leading-relaxed">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Asset Categories */}
      <section className="px-4 py-16 md:py-20 border-t border-[#1e1e1e]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <p className="section-label">{h.assetCategories.label}</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{h.assetCategories.title}</h2>
              <p className="text-[#888] text-sm leading-relaxed max-w-lg">{h.assetCategories.subtitle}</p>
            </div>
            <Link href="/contact" className="shrink-0 outline-btn whitespace-nowrap">
              {h.assetCategories.cta}
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { href: "/asset-types/villas", data: h.assetCategories.villas, badge: "Residential" },
              { href: "/asset-types/buildings", data: h.assetCategories.buildings, badge: "Investment" },
              { href: "/asset-types/hotels", data: h.assetCategories.hotels, badge: "Commercial" },
              { href: "/asset-types/hospitals", data: h.assetCategories.hospitals, badge: "Specialized" },
            ].map(({ href, data, badge }) => (
              <Link key={href} href={href} className="group">
                <div className="card hover:border-[#c9a84c]/40 transition-colors">
                  <ImagePlaceholder aspectRatio="aspect-[4/3]" label={data.title} className="mb-4" />
                  <span className="inline-block text-[10px] font-semibold tracking-widest uppercase bg-[#1e1e1e] text-[#c9a84c] px-2 py-0.5 rounded mb-2">
                    {badge}
                  </span>
                  <h3 className="text-white font-semibold text-sm mb-2 group-hover:text-[#c9a84c] transition-colors">
                    {data.title}
                  </h3>
                  <p className="text-[#777] text-xs leading-relaxed mb-3">{data.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-[10px] text-[#888] bg-[#1a1a1a] border border-[#333] px-2 py-0.5 rounded">{data.tag1}</span>
                    <span className="text-[10px] text-[#888] bg-[#1a1a1a] border border-[#333] px-2 py-0.5 rounded">{data.tag2}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-4 py-16 md:py-20 border-t border-[#1e1e1e]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            <div>
              <p className="section-label">{h.howItWorks.label}</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{h.howItWorks.title}</h2>
              <p className="text-[#888] text-sm leading-relaxed mb-8">{h.howItWorks.subtitle}</p>
              <div className="space-y-5">
                {h.howItWorks.steps.map((step) => (
                  <div key={step.num} className="flex gap-4">
                    <div className="w-8 h-8 bg-[#c9a84c] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-black text-xs font-bold">{step.num}</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-sm mb-1">{step.title}</h3>
                      <p className="text-[#777] text-xs leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-[#666] text-xs italic leading-relaxed border-t border-[#1e1e1e] pt-4">
                {h.howItWorks.successFee}
              </p>
            </div>

            {/* Contact channels */}
            <div>
              <p className="section-label">{h.contact.label}</p>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{h.contact.title}</h2>
              <p className="text-[#888] text-sm leading-relaxed mb-6">{h.contact.subtitle}</p>
              <div className="grid grid-cols-2 gap-3">
                {[h.contact.whatsapp, h.contact.email, h.contact.unified, h.contact.social].map((ch) => (
                  <div key={ch.label} className="card">
                    <p className="text-[#c9a84c] text-[10px] font-semibold tracking-widest uppercase mb-2">{ch.label}</p>
                    <p className="text-white text-sm font-medium">{ch.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        label={h.cta.label}
        title={h.cta.title}
        subtitle={h.cta.subtitle}
        btnText={h.cta.btn}
        btnHref="/contact"
      />
    </>
  );
}
