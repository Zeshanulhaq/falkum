"use client";
import Link from "next/link";
import { useLang } from "@/lib/LanguageContext";
import CtaSection from "@/components/CtaSection";

export default function HowItWorksPage() {
  const { t } = useLang();
  const h = t.howItWorks;

  return (
    <>
      <section className="px-4 pt-14 pb-12 max-w-4xl mx-auto text-center">
        <p className="section-label inline-block">{h.label}</p>
        <h1 className="text-3xl md:text-5xl font-bold text-[#F5E7B2] mb-4">{h.title}</h1>
        <p className="text-[#B7A87A] text-sm sm:text-base leading-relaxed">{h.subtitle}</p>
      </section>

      {/* Steps */}
      <section className="px-4 pb-16 max-w-3xl mx-auto">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-[#2a2a2a] hidden sm:block" />

          <div className="space-y-6">
            {h.steps.map((step, i) => (
              <div key={step.num} className="relative flex gap-6">
                <div className="relative z-10 shrink-0 w-16 h-16 bg-[#141414] border-2 border-[#c9a84c] rounded-full flex flex-col items-center justify-center">
                  <span className="text-[#c9a84c] text-xs font-bold">{step.num}</span>
                </div>
                <div className="flex-1 bg-[#141414] border border-[#2a2a2a] rounded-2xl p-6 hover:border-[#c9a84c]/30 transition-colors">
                  <h2 className="text-[#F5E7B2] font-bold text-lg mb-2">{step.title}</h2>
                  <p className="text-[#B7A87A] text-sm leading-relaxed mb-3">{step.desc}</p>
                  <p className="text-[#B7A87A] text-xs leading-relaxed border-t border-[#1e1e1e] pt-3">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 bg-[#141414] border border-[#c9a84c]/20 rounded-xl p-5 flex gap-3 items-start">
          <svg className="w-5 h-5 text-[#c9a84c] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-[#B7A87A] text-sm leading-relaxed">{h.note}</p>
        </div>
      </section>

      <CtaSection
        label={h.cta.label}
        title={h.cta.title}
        subtitle={h.cta.subtitle}
        btnText={h.cta.btn}
        btnHref="/list-property"
      />
    </>
  );
}
