"use client";
import Link from "next/link";
import { useLang } from "@/lib/LanguageContext";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import CtaSection from "@/components/CtaSection";
import Image from "next/image";
import { useGsapAnimations } from "@/lib/useGsapAnimations";

export default function AssetTypesPage() {
  useGsapAnimations();
  const { t } = useLang();
  const a = t.assetTypes;

  const items = [
    {
      href: "/asset-types/villas",
      data: a.villas,
      imgLabel: "Luxury Villa",
      image: "/asset1.svg",
    },
    {
      href: "/asset-types/buildings",
      data: a.buildings,
      imgLabel: "Investment Building",
      image: "/asset2.svg",
    },
    {
      href: "/asset-types/hotels",
      data: a.hotels,
      imgLabel: "Hotel",
      image: "/asset3.svg",
    },
    {
      href: "/asset-types/hospitals",
      data: a.hospitals,
      imgLabel: "Hospital",
      image: "/asset4.svg",
    },
  ];

  return (
    <>
      <section
        className="px-4 py-14 md:py-20 max-w-4xl mx-auto text-center"
        data-gsap="headline"
      >
        <p className="section-label inline-block" data-gsap-child="badge">
          {a.label}
        </p>
        <h1 className="text-3xl md:text-5xl font-bold text-[#edcfa1] mb-4">
          {a.title}
        </h1>
        <p
          className="text-[#edcfa1] text-sm sm:text-base leading-relaxed"
          data-gsap-child="subtitle"
        >
          {a.subtitle}
        </p>
      </section>

      <section
        className="px-4 pb-20 max-w-7xl mx-auto space-y-16"
        data-gsap="stagger"
      >
        {items.map(({ href, data, imgLabel, image }, i) => (
          <div
            key={href}
            className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${i % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
            data-gsap-item
          >
            {i % 2 !== 0 ? (
              <>
                <div className="md:order-2">
                  <Image
                    src={image}
                    alt="Hero"
                    width={568}
                    height={480}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="md:order-1">
                  <AssetCard href={href} data={data} />
                </div>
              </>
            ) : (
              <>
                <div>
                  <Image
                    src={image}
                    alt="Hero"
                    width={568}
                    height={480}
                    className="w-full h-full object-cover rounded-xl"
                  />
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
    <div data-gsap-hover="lift">
      <span className="inline-block text-[10px] font-semibold tracking-widest uppercase bg-[#0f1a2b] text-[#bf8b55] border border-[#bf8b55]/20 px-3 py-1 rounded mb-4">
        {data.tag}
      </span>
      <h2 className="text-2xl md:text-3xl font-bold text-[#edcfa1] mb-3">
        {data.title}
      </h2>
      <p className="text-[#edcfa1] text-sm leading-relaxed mb-5">{data.desc}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="flex items-center gap-1.5 text-xs text-[#edcfa1] bg-[#0f1a2b] border border-[#1a2942] px-3 py-1.5 rounded">
          <svg
            className="w-3.5 h-3.5 text-[#bf8b55]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0"
            />
          </svg>
          {data.tag1}
        </span>
        <span className="flex items-center gap-1.5 text-xs text-[#edcfa1] bg-[#0f1a2b] border border-[#1a2942] px-3 py-1.5 rounded">
          <svg
            className="w-3.5 h-3.5 text-[#bf8b55]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          {data.tag2}
        </span>
      </div>
      <p className="text-[#edcfa1] text-xs mb-5">{data.subtypes}</p>
      <Link href={href} className="outline-btn inline-block">
        {data.cta}
      </Link>
    </div>
  );
}
