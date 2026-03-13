"use client";
import Link from "next/link";
import { useLang } from "@/lib/LanguageContext";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import CtaSection from "@/components/CtaSection";
import Image from "next/image";

export default function HospitalsPage() {
  const { t } = useLang();
  const h = t.hospitals;

  return (
    <>
      <section className="px-4 pt-12 pb-10 max-w-7xl mx-auto">
        <span className="inline-flex items-center gap-2 text-xs text-[#bf8b55] bg-[#0f1a2b] border border-[#bf8b55]/20 px-3 py-1.5 rounded-full mb-6">
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
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
            />
          </svg>
          {h.label}
        </span>
        <h1 className="text-3xl md:text-5xl font-bold text-[#bf8b55] mb-4 leading-tight max-w-2xl">
          {h.title}
        </h1>
        <p className="text-[#edcfa1] text-sm sm:text-base leading-relaxed max-w-2xl">
          {h.subtitle}
        </p>
      </section>

      {/* Feature Cards */}
      <section className="px-4 pb-14 max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-3 gap-5">
          {h.features.map(f => (
            <div key={f.title} className="card">
              <div className="w-10 h-10 bg-[#0f1a2b] border border-[#1a2942] rounded-xl mb-4 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-[#bf8b55]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-[#edcfa1] font-semibold mb-2">
                {f.title}
              </h3>
              <p className="text-[#edcfa1] text-sm leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Asset Focus */}
      <section className="px-4 py-14 border-t border-[#0f1a2b]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="section-label">{h.assetFocus.label}</p>
            <h2 className="text-2xl md:text-4xl font-bold text-[#edcfa1] mb-4">
              {h.assetFocus.title}
            </h2>
            <p className="text-[#edcfa1] text-sm leading-relaxed mb-6">
              {h.assetFocus.desc}
            </p>
            <ul className="space-y-4">
              {h.assetFocus.items.map(item => (
                <li key={item.title} className="flex gap-3">
                  <svg
                    className="w-5 h-5 text-[#bf8b55] shrink-0 mt-0.5"
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
                  <div>
                    <p className="text-[#edcfa1] font-semibold text-sm">
                      {item.title}
                    </p>
                    <p className="text-[#edcfa1] text-xs leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <Image
            src={"/hospitals.svg"}
            alt="Hero"
            width={560}
            height={719}
            className="w-full h-full object-cover rounded-xl"
          />
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
