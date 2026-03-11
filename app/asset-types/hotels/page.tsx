"use client";
import Link from "next/link";
import { useLang } from "@/lib/LanguageContext";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import CtaSection from "@/components/CtaSection";

export default function HotelsPage() {
  const { t } = useLang();
  const h = t.hotels;

  return (
    <>
      <section className="px-4 pt-12 pb-8 max-w-7xl mx-auto">
        <p className="section-label">{h.label}</p>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold text-[#c9a84c] mb-4 leading-tight">{h.title}</h1>
            <p className="text-[#888] text-sm leading-relaxed mb-5">{h.subtitle}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {h.tags.map((tag) => (
                <span key={tag} className="text-xs text-[#aaa] bg-[#141414] border border-[#2a2a2a] px-3 py-1.5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            <Link href="/contact" className="gold-btn inline-block">{h.startBtn}</Link>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-4 pb-12 max-w-7xl mx-auto">
        <ImagePlaceholder aspectRatio="aspect-[21/9]" label="Hotel Hero Image" className="rounded-2xl" />
      </section>

      {/* Tailored */}
      <section className="px-4 py-14 border-t border-[#1e1e1e]">
        <div className="max-w-7xl mx-auto">
          <p className="section-label">{h.tailored.label}</p>
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 max-w-2xl">{h.tailored.title}</h2>
          <p className="text-[#888] text-sm leading-relaxed max-w-xl mb-10">{h.tailored.desc}</p>
          <div className="grid sm:grid-cols-3 gap-5">
            {h.features.map((f) => (
              <div key={f.title} className="card">
                <div className="w-8 h-8 bg-[#1e1e1e] border border-[#333] rounded-lg mb-4 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-[#c9a84c]" />
                </div>
                <h3 className="text-white font-semibold mb-2">{f.title}</h3>
                <p className="text-[#777] text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
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
