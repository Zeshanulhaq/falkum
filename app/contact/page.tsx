"use client";
import { useState } from "react";
import { useLang } from "@/lib/LanguageContext";

export default function ContactPage() {
  const { t } = useLang();
  const c = t.contact;
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    assetType: "",
    message: "",
  });

  const icons = [
    <path
      key="wa"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
    />,
    <path
      key="ph"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />,
    <path
      key="em"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />,
    <path
      key="ig"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm8 3a3 3 0 100 6 3 3 0 000-6zm5-1h.01"
    />,
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="px-4 pt-14 pb-12 max-w-4xl mx-auto text-center">
        <p className="section-label inline-block">{c.label}</p>
        <h1 className="text-3xl md:text-5xl font-bold text-[#edcfa1] mb-4">
          {c.title}
        </h1>
        <p className="text-[#edcfa1] text-sm sm:text-base leading-relaxed">
          {c.subtitle}
        </p>
      </section>

      {/* Channel Cards */}
      <section className="px-4 pb-14 max-w-3xl mx-auto">
        <div className="grid sm:grid-cols-2 gap-4">
          {c.channels.map((ch, i) => (
            <a
              key={ch.title}
              href={ch.href}
              target={ch.href.startsWith("http") ? "_blank" : undefined}
              rel={
                ch.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className="block bg-[#0f1a2b] border border-[#1a2942] hover:border-[#bf8b55]/30 transition-colors rounded-2xl p-6 group"
            >
              <div className="w-10 h-10 border border-[#1a2942] rounded-xl mb-4 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-[#bf8b55]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {icons[i]}
                </svg>
              </div>
              <h3 className="text-[#edcfa1] font-semibold mb-2">{ch.title}</h3>
              <p className="text-[#edcfa1] text-sm leading-relaxed mb-4">
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
      </section>

      {/* Form */}
      {/* <section className="px-4 pb-20 max-w-2xl mx-auto">
        <div className="bg-[#0f1a2b] border border-[#1a2942] rounded-2xl p-6 md:p-8">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-[#bf8b55]/10 border border-[#bf8b55]/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-[#bf8b55]"
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
              </div>
              <h3 className="text-[#edcfa1] font-bold text-xl mb-2">
                {c.success.title}
              </h3>
              <p className="text-[#edcfa1] text-sm">{c.success.message}</p>
            </div>
          ) : (
            <>
              <h2 className="text-[#edcfa1] font-bold text-xl mb-1">
                {c.form.title}
              </h2>
              <p className="text-[#edcfa1] text-sm mb-6">{c.form.subtitle}</p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#edcfa1] text-xs mb-1.5">
                      {c.form.fullName}
                    </label>
                    <input
                      type="text"
                      placeholder={c.form.fullNamePlaceholder}
                      value={form.fullName}
                      onChange={e =>
                        setForm({ ...form, fullName: e.target.value })
                      }
                      className="w-full bg-[#09101b] border border-[#1a2942] rounded-lg px-4 py-3 text-[#edcfa1] text-sm placeholder:text-[#8f7e64] focus:outline-none focus:border-[#bf8b55]/50"
                    />
                  </div>
                  <div>
                    <label className="block text-[#edcfa1] text-xs mb-1.5">
                      {c.form.phone}
                    </label>
                    <input
                      type="text"
                      placeholder={c.form.phonePlaceholder}
                      value={form.phone}
                      onChange={e =>
                        setForm({ ...form, phone: e.target.value })
                      }
                      className="w-full bg-[#09101b] border border-[#1a2942] rounded-lg px-4 py-3 text-[#edcfa1] text-sm placeholder:text-[#8f7e64] focus:outline-none focus:border-[#bf8b55]/50"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[#edcfa1] text-xs mb-1.5">
                    {c.form.assetType}
                  </label>
                  <select
                    value={form.assetType}
                    onChange={e =>
                      setForm({ ...form, assetType: e.target.value })
                    }
                    className="w-full bg-[#09101b] border border-[#1a2942] rounded-lg px-4 py-3 text-sm text-[#edcfa1] focus:outline-none focus:border-[#bf8b55]/50"
                  >
                    <option value="">{c.form.assetTypePlaceholder}</option>
                    {c.form.assetOptions.map(opt => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-[#edcfa1] text-xs mb-1.5">
                    {c.form.message}
                  </label>
                  <textarea
                    rows={4}
                    placeholder={c.form.messagePlaceholder}
                    value={form.message}
                    onChange={e =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className="w-full bg-[#09101b] border border-[#1a2942] rounded-lg px-4 py-3 text-[#edcfa1] text-sm placeholder:text-[#8f7e64] focus:outline-none focus:border-[#bf8b55]/50 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#bf8b55] hover:bg-[#8f7e64] text-[#09101b] font-medium py-3.5 rounded-lg transition-colors text-sm"
                >
                  {c.form.submit}
                </button>
              </form>
            </>
          )}
        </div>
      </section> */}
    </>
  );
}
