"use client";
import Link from "next/link";
import Image from "next/image";
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#F5E7B2] leading-tight mb-6">
              {h.hero.title}
            </h1>
            <p className="text-[#B7A87A] text-sm sm:text-[19px] leading-8 mb-8">
              {h.hero.subtitle}
            </p>

            {/* Tags */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
              {[
                {
                  label: h.heroTags.buyerSourcing,
                  desc: h.heroTags.buyerSourcingDesc,
                },
                {
                  label: h.heroTags.negotiation,
                  desc: h.heroTags.negotiationDesc,
                },
                { label: h.heroTags.legal, desc: h.heroTags.legalDesc },
              ].map(tag => (
                <div
                  key={tag.label}
                  className="bg-[#141414] border border-[#2a2a2a] rounded-lg p-3"
                >
                  <p className="text-[#c9a84c] text-[10px] font-semibold tracking-widest uppercase mb-1">
                    {tag.label}
                  </p>
                  <p className="text-[#777] text-xs leading-relaxed">
                    {tag.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="gold-btn !font-normal">
                {h.hero.cta}
              </Link>
              <Link href="/asset-types" className="outline-btn">
                {h.hero.viewCategories}
              </Link>
            </div>
          </div>

          {/* Hero image + asset types */}
          <div className="flex flex-col gap-4">
            <Image
              src="/hero.svg"
              alt="Hero"
              width={800}
              height={600}
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[#141414] border border-[#2a2a2a] rounded-lg p-4">
                <p className="text-[#F5E7B2] font-semibold mb-1">
                  {h.assetTypes.residential}
                </p>
                <p className="text-[#B7A87A] text-xs">
                  {h.assetTypes.residentialDesc}
                </p>
              </div>
              <div className="bg-[#141414] border border-[#2a2a2a] rounded-lg p-4">
                <p className="text-[#F5E7B2] font-semibold mb-1">
                  {h.assetTypes.commercial}
                </p>
                <p className="text-[#B7A87A] text-xs">
                  {h.assetTypes.commercialDesc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Falkum – build to create (single container) */}
      <section className="px-4 py-16 md:py-20 border-t border-[#1e1e1e]">
        <div className="max-w-7xl mx-auto space-y-10">
          <div>
            <p className="section-label">{h.trust.label}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#F5E7B2] mb-4 max-w-2xl">
              {h.trust.title}
            </h2>
            <p className="text-[#B7A87A] text-sm leading-relaxed max-w-xl">
              {h.trust.subtitle}
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                title: h.trust.forSellers,
                desc: h.trust.forSellersDesc,
                items: h.trust.forSellersItems,
              },
              {
                title: h.trust.forBuyers,
                desc: h.trust.forBuyersDesc,
                items: h.trust.forBuyersItems,
              },
              {
                title: h.trust.aligned,
                desc: h.trust.alignedDesc,
                items: h.trust.alignedItems,
              },
            ].map(card => (
              <div key={card.title} className="card">
                <div className="w-8 h-8 bg-[#1e1e1e] border border-[#333] rounded-lg mb-4 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-[#c9a84c]" />
                </div>
                <h3 className="text-[#F5E7B2] font-semibold text-base mb-2">
                  {card.title}
                </h3>
                <p className="text-[#B7A87A] text-sm leading-relaxed mb-3">
                  {card.desc}
                </p>
                <ul className="space-y-1">
                  {card.items.map(item => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-[#F5E7B2] text-xs"
                    >
                      <svg
                        className="w-3.5 h-3.5 text-[#c9a84c] shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="p-8 bg-[#101012] border border-[#2a2a2a] rounded-lg">
            <div className="grid grid-cols-2 md:grid-cols-4">
              {[
                h.stats.hours,
                h.stats.confidential,
                h.stats.point,
                h.stats.upfront,
              ].map(s => (
                <div
                  key={s.value}
                  className={`bg-[#141414] border-r border-[#2a2a2a] ${s.value === h.stats.upfront.value ? "border-r-0" : "border-r"} p-6`}
                >
                  <p className="text-[#F5E7B2] text-2xl font-bold mb-4">
                    {s.value}
                  </p>
                  <p className="text-[#B7A87A] text-xs leading-relaxed">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-[#B7A87A] text-sm leading-relaxed max-w-2xl mt-4">
              {h.trustSummary}
            </p>
          </div>
        </div>
      </section>

      {/* Asset Categories */}
      <section className="px-4 py-16 md:py-20 border-t border-[#1e1e1e]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <p className="section-label">{h.assetCategories.label}</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#F5E7B2] mb-3">
                {h.assetCategories.title}
              </h2>
              <p className="text-[#B7A87A] text-sm leading-relaxed max-w-lg">
                {h.assetCategories.subtitle}
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 outline-btn whitespace-nowrap"
            >
              {h.assetCategories.cta}
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                href: "/asset-types/villas",
                data: h.assetCategories.villas,
                image: "/cat1.svg",
              },
              {
                href: "/asset-types/buildings",
                data: h.assetCategories.buildings,
                image: "/cat2.svg",
              },
              {
                href: "/asset-types/hotels",
                data: h.assetCategories.hotels,
                image: "/cat3.svg",
              },
              {
                href: "/asset-types/hospitals",
                data: h.assetCategories.hospitals,
                image: "/cat4.svg",
              },
            ].map(({ href, data, image }) => (
              <Link key={href} href={href} className="group block">
                <div className="card hover:border-[#c9a84c]/40 transition-colors flex flex-col h-full">
                  <Image
                    src={image}
                    alt=""
                    width={280}
                    height={220}
                    className="w-full h-full object-cover rounded-xl"
                  />
                  <span className="inline-block mt-2 text-[10px] font-semibold tracking-widest uppercase bg-[#1e1e1e] text-[#c9a84c] px-2 py-0.5 rounded mb-2 w-fit">
                    {data.badge}
                  </span>
                  <h3 className="text-[#F5E7B2] font-semibold text-sm mb-2 group-hover:text-[#c9a84c] transition-colors">
                    {data.title}
                  </h3>
                  <p className="text-[#B7A87A] text-xs leading-relaxed mb-3 flex-1">
                    {data.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4 mt-2">
                    <span className="text-[10px] text-[#B7A87A] bg-[#1a1a1a] border border-[#333] px-2 py-0.5 rounded">
                      {data.tag1}
                    </span>
                    <span className="text-[10px] text-[#B7A87A] bg-[#1a1a1a] border border-[#333] px-2 py-0.5 rounded">
                      {data.tag2}
                    </span>
                  </div>
                  {/* <span className="gold-btn inline-flex items-center gap-2 w-fit text-sm py-2 px-4">
                    {h.assetCategories.viewDetails}
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span> */}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Clear path – How it works + Contact channels (single section) */}
      <section className="px-4 py-16 md:py-20 border-t border-[#1e1e1e]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="">
            <p className="section-label">{h.howItWorks.label}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#F5E7B2] mb-4 max-w-[860px]">
              {h.howItWorks.title}
            </h2>
            <p className="text-[#B7A87A] text-sm leading-relaxed mb-8 max-w-[860px]">
              {h.howItWorks.subtitle}
            </p>
            <div className="grid md:grid-cols-2 gap-10 md:gap-16">
              <div className="bg-[#121214] border border-[#2a2a2a] h-fit rounded-lg p-8">
                <div className="space-y-5 ">
                  {h.howItWorks.steps.map(step => (
                    <div key={step.num} className="flex gap-4">
                      <div className="w-8 h-8 bg-[#c9a84c] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-black text-xs font-bold">
                          {step.num}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-[#F5E7B2] font-semibold text-sm mb-1">
                          {step.title}
                        </h3>
                        <p className="text-[#B7A87A] text-xs leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-[#B7A87A] text-xs italic leading-relaxed border-t border-[#1e1e1e] pt-4">
                  {h.howItWorks.successFee}
                </p>
              </div>

              {/* Contact channels */}
              <div className="bg-[#121214] border border-[#2a2a2a] rounded-lg p-8">
                <p className="section-label">{h.contact.label}</p>
                <h2 className="text-2xl md:text-3xl font-bold text-[#F5E7B2] mb-4">
                  {h.contact.title}
                </h2>
                <p className="text-[#B7A87A] text-sm leading-relaxed mb-6">
                  {h.contact.subtitle}
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { ...h.contact.whatsapp, icon: "whatsapp" },
                    { ...h.contact.email, icon: "email" },
                    { ...h.contact.unified, icon: "phone" },
                    { ...h.contact.social, icon: "social" },
                  ].map(ch => (
                    <div key={ch.label} className="card">
                      <div className="w-10 h-10 flex items-center justify-center mb-3 text-[#c9a84c]">
                        {ch.icon === "whatsapp" && (
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                            />
                          </svg>
                        )}
                        {ch.icon === "email" && (
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        )}
                        {ch.icon === "phone" && (
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                        )}
                        {ch.icon === "social" && (
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <rect
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              x="3"
                              y="3"
                              width="18"
                              height="18"
                              rx="4"
                            />
                            <circle
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              cx="12"
                              cy="12"
                              r="4"
                            />
                            <circle
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              cx="17.5"
                              cy="6.5"
                              r="1.5"
                              fill="currentColor"
                            />
                          </svg>
                        )}
                      </div>
                      <p className="text-[#c9a84c] text-[10px] font-semibold tracking-widest uppercase mb-2">
                        {ch.label}
                      </p>
                      <p className="text-[#B7A87A] text-xs leading-relaxed mb-2">
                        {ch.desc}
                      </p>
                      <p className="text-[#F5E7B2] text-sm font-medium">
                        {ch.value}
                      </p>
                    </div>
                  ))}
                </div>
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
