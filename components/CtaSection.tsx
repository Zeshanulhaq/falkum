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
    <section className="bg-[#c9a84c] py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-[#7a5e1a] text-xs font-semibold tracking-widest uppercase mb-4">
          {label}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 leading-tight">
          {title}
        </h2>
        <p className="text-[#5a4010] text-base mb-8 leading-relaxed">
          {subtitle}
        </p>
        <Link
          href={btnHref}
          className="inline-block bg-[#0b0b0c24] border border-[#0b0b0c29]  text-[#000] text-sm font-medium px-8 py-3.5 rounded transition-colors"
        >
          {btnText}
        </Link>
      </div>
    </section>
  );
}
