"use client";
import Link from "next/link";

interface CtaSectionProps {
  label: string;
  title: string;
  subtitle: string;
  btnText: string;
  btnHref?: string;
}

export default function CtaSection({
  label,
  title,
  subtitle,
  btnText,
  btnHref = "/contact",
}: CtaSectionProps) {
  return (
    <section className="bg-gradient-to-r from-[#8f7e64] via-[#bf8b55] to-[#fee6a2] py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-[#09101b] text-xs font-semibold tracking-widest uppercase mb-4">
          {label}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 leading-tight">
          {title}
        </h2>
        <p className="text-[#09101b] text-base mb-8 leading-relaxed">
          {subtitle}
        </p>
        <Link
          href={btnHref}
          className="inline-block bg-[#09101b]/20 border border-[#09101b]/40 text-[#09101b] text-sm font-medium px-8 py-3.5 rounded transition-colors"
        >
          {btnText}
        </Link>
      </div>
    </section>
  );
}
