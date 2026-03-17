"use client";
import Link from "next/link";
import Image from "next/image";
import { useLang } from "@/lib/LanguageContext";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import CtaSection from "@/components/CtaSection";
import { useGsapAnimations } from "@/lib/useGsapAnimations";

export default function HomePage() {
  useGsapAnimations();
  const { t } = useLang();
  const h = t.home;

  return (
    <>
      {/* Hero */}
      <section className="px-4 py-16 md:py-24 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div data-gsap="headline">
            <div className="inline-flex items-center gap-2 bg-[#0f1a2b] border border-[#1a2942] rounded-lg px-4 py-2 mb-4">
              <svg
                className="w-4 h-4 text-[#edcfa1] shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
              <span className="text-[#edcfa1] text-sm" data-gsap-child="badge">
                {h.hero.trustBadge}
              </span>
            </div>
            <div className="mt-2 w-20 h-0.5 bg-[#edcfa1] mb-6" />
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#edcfa1] leading-tight mb-6"
              data-gsap-child="title"
            >
              {h.hero.title}
            </h1>
            <p
              className="text-[#edcfa1] text-sm sm:text-[19px] leading-8 mb-8"
              data-gsap-child="subtitle"
            >
              {h.hero.subtitle}
            </p>

            {/* Tags */}
            <div
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8"
              data-gsap="stagger"
            >
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
                  className="bg-[#0f1a2b] border border-[#1a2942] rounded-lg p-3"
                  data-gsap-item
                  data-gsap-hover="lift"
                >
                  <p className="text-[#bf8b55] text-[10px] font-semibold tracking-widest uppercase mb-1">
                    {tag.label}
                  </p>
                  <p className="text-[#8f7e64] text-xs leading-relaxed">
                    {tag.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3" data-gsap-child="cta">
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
              data-gsap="parallax"
            />
            <div className="grid grid-cols-2 gap-3">
              <div
                className="bg-[#0f1a2b] border border-[#1a2942] rounded-lg p-4"
                data-gsap-hover="lift"
              >
                <p className="text-[#edcfa1] font-semibold mb-1">
                  {h.assetTypes.residential}
                </p>
                <p className="text-[#edcfa1] text-xs">
                  {h.assetTypes.residentialDesc}
                </p>
              </div>
              <div
                className="bg-[#0f1a2b] border border-[#1a2942] rounded-lg p-4"
                data-gsap-hover="lift"
              >
                <p className="text-[#edcfa1] font-semibold mb-1">
                  {h.assetTypes.commercial}
                </p>
                <p className="text-[#edcfa1] text-xs">
                  {h.assetTypes.commercialDesc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Falkum – build to create (single container) */}
      <section className="px-4 py-16 md:py-20 border-t border-[#0f1a2b]">
        <div className="max-w-7xl mx-auto space-y-10">
          <div>
            <p className="section-label">{h.trust.label}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#edcfa1] mb-4 max-w-2xl">
              {h.trust.title}
            </h2>
            <p className="text-[#edcfa1] text-sm leading-relaxed max-w-xl">
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
                <div className="w-8 h-8 bg-[#0f1a2b] border border-[#1a2942] rounded-lg mb-4 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-[#bf8b55]" />
                </div>
                <h3 className="text-[#edcfa1] font-semibold text-base mb-2">
                  {card.title}
                </h3>
                <p className="text-[#edcfa1] text-sm leading-relaxed mb-3">
                  {card.desc}
                </p>
                <ul className="space-y-1">
                  {card.items.map(item => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-[#edcfa1] text-xs"
                    >
                      <svg
                        className="w-3.5 h-3.5 text-[#bf8b55] shrink-0"
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
          <div className="p-8 bg-[#0f1a2b] border border-[#1a2942] rounded-lg">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
              {[
                h.stats.hours,
                h.stats.confidential,
                h.stats.point,
                h.stats.upfront,
              ].map((s, idx, arr) => (
                <div
                  key={s.value}
                  className={[
                    "bg-[#0f1a2b] p-6",

                    // Mobile (1 col): horizontal dividers between items.
                    idx !== arr.length - 1 ? "border-b border-[#1a2942]" : "",

                    // Mobile/tablet (2x2 on sm): add column divider (logical) + row divider.
                    "sm:border-b-0",
                    idx % 2 === 0 ? "sm:border-e sm:border-[#1a2942]" : "",
                    idx < 2 ? "sm:border-b sm:border-[#1a2942]" : "",

                    // Desktop (4 cols on md): only vertical dividers, RTL-safe.
                    "md:border-b-0 md:border-e md:border-[#1a2942]",
                    idx === arr.length - 1 ? "md:border-e-0" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  <p className="text-[#edcfa1] text-2xl font-bold mb-4">
                    {s.value}
                  </p>
                  <p className="text-[#edcfa1] text-xs leading-relaxed">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-[#edcfa1] text-sm leading-relaxed max-w-2xl mt-4">
              {h.trustSummary}
            </p>
          </div>
        </div>
      </section>

      {/* Asset Categories */}
      <section className="px-4 py-16 md:py-20 border-t border-[#0f1a2b]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <p className="section-label">{h.assetCategories.label}</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#edcfa1] mb-3">
                {h.assetCategories.title}
              </h2>
              <p className="text-[#edcfa1] text-sm leading-relaxed max-w-lg">
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
                <div className="card hover:border-[#bf8b55]/40 transition-colors flex flex-col h-full">
                  <Image
                    src={image}
                    alt=""
                    width={280}
                    height={220}
                    className="w-full h-full object-cover rounded-xl"
                  />
                  <span className="inline-block mt-2 text-[10px] font-semibold tracking-widest uppercase bg-[#0f1a2b] text-[#bf8b55] px-2 py-0.5 rounded mb-2 w-fit">
                    {data.badge}
                  </span>
                  <h3 className="text-[#edcfa1] font-semibold text-sm mb-2 group-hover:text-[#bf8b55] transition-colors">
                    {data.title}
                  </h3>
                  <p className="text-[#edcfa1] text-xs leading-relaxed mb-3 flex-1">
                    {data.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4 mt-2">
                    <span className="text-[10px] text-[#edcfa1] bg-[#0f1a2b] border border-[#1a2942] px-2 py-0.5 rounded">
                      {data.tag1}
                    </span>
                    <span className="text-[10px] text-[#edcfa1] bg-[#0f1a2b] border border-[#1a2942] px-2 py-0.5 rounded">
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
      <section className="px-4 py-16 md:py-20 border-t border-[#0f1a2b]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="">
            <p className="section-label">{h.howItWorks.label}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#edcfa1] mb-4 max-w-[860px]">
              {h.howItWorks.title}
            </h2>
            <p className="text-[#edcfa1] text-sm leading-relaxed mb-8 max-w-[860px]">
              {h.howItWorks.subtitle}
            </p>
            <div className="grid md:grid-cols-2 gap-10 md:gap-16">
              <div className="bg-[#0f1a2b] border border-[#1a2942] h-fit rounded-lg p-8">
                <div className="space-y-5 ">
                  {h.howItWorks.steps.map(step => (
                    <div key={step.num} className="flex gap-4">
                      <div className="w-8 h-8 bg-[#bf8b55] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-[#09101b] text-xs font-bold">
                          {step.num}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-[#edcfa1] font-semibold text-sm mb-1">
                          {step.title}
                        </h3>
                        <p className="text-[#edcfa1] text-xs leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-[#edcfa1] text-xs italic leading-relaxed border-t border-[#0f1a2b] pt-4">
                  {h.howItWorks.successFee}
                </p>
              </div>

              {/* Contact channels */}
              <div className="bg-[#0f1a2b] border border-[#1a2942] rounded-lg p-8">
                <p className="section-label">{h.contact.label}</p>
                <h2 className="text-2xl md:text-3xl font-bold text-[#edcfa1] mb-4">
                  {h.contact.title}
                </h2>
                <p className="text-[#edcfa1] text-sm leading-relaxed mb-6">
                  {h.contact.subtitle}
                </p>
                <div className="grid gird-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { ...h.contact.whatsapp, icon: "whatsapp" },
                    { ...h.contact.email, icon: "email" },
                    { ...h.contact.unified, icon: "phone" },
                    { ...h.contact.social, icon: "social" },
                  ].map(ch => (
                    <a
                      key={ch.label}
                      href={ch.href}
                      target={
                        ch.href?.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        ch.href?.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="card block group hover:border-[#bf8b55]/40 transition-colors"
                    >
                      <div className="w-10 h-10 flex items-center justify-center mb-3 text-[#bf8b55]">
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
                      <p className="text-[#bf8b55] text-[10px] font-semibold tracking-widest uppercase mb-2">
                        {ch.label}
                      </p>
                      <p className="text-[#edcfa1] text-xs leading-relaxed mb-2">
                        {ch.desc}
                      </p>
                      <p className="text-[#bf8b55] text-sm font-medium flex items-center gap-1 group-hover:text-[#fee6a2] transition-colors">
                        <span dir="ltr">{ch.value}</span>
                        <svg
                          className="w-3.5 h-3.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </p>
                    </a>
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
