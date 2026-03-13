"use client";
import { useState } from "react";
import { useLang } from "@/lib/LanguageContext";

export default function ListPropertyPage() {
  const { t } = useLang();
  const lp = t.listProperty;
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    fullName: "", company: "", phone: "", email: "",
    assetCategory: "", city: "", description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="px-4 py-14 md:py-20 min-h-screen">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-bold text-[#bf8b55] mb-3">{lp.title}</h1>
          <p className="text-[#8f7e64] text-sm sm:text-base leading-relaxed">{lp.subtitle}</p>
        </div>

        {submitted ? (
          <div className="bg-[#0f1a2b] border border-[#bf8b55]/20 rounded-2xl p-10 text-center">
            <div className="w-20 h-20 bg-[#bf8b55]/10 border border-[#bf8b55]/30 rounded-full mx-auto mb-5 flex items-center justify-center">
              <svg className="w-10 h-10 text-[#bf8b55]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-[#edcfa1] font-bold text-2xl mb-3">{lp.success.title}</h2>
            <p className="text-[#8f7e64] text-sm leading-relaxed">{lp.success.message}</p>
          </div>
        ) : (
          <div className="bg-[#0f1a2b] border border-[#1a2942] rounded-2xl p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Contact Info */}
              <div>
                <h2 className="text-[#edcfa1] font-bold text-base mb-4 pb-3 border-b border-[#1a2942]">{lp.contactInfo}</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#8f7e64] text-xs mb-1.5">{lp.fullName}</label>
                    <input
                      type="text"
                      placeholder={lp.fullNamePlaceholder}
                      value={form.fullName}
                      onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                      className="w-full bg-[#09101b] border border-[#1a2942] rounded-lg px-4 py-3 text-[#edcfa1] text-sm placeholder:text-[#8f7e64] focus:outline-none focus:border-[#bf8b55]/50"
                    />
                  </div>
                  <div>
                    <label className="block text-[#8f7e64] text-xs mb-1.5">{lp.company}</label>
                    <input
                      type="text"
                      placeholder={lp.companyPlaceholder}
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="w-full bg-[#09101b] border border-[#1a2942] rounded-lg px-4 py-3 text-[#edcfa1] text-sm placeholder:text-[#8f7e64] focus:outline-none focus:border-[#bf8b55]/50"
                    />
                  </div>
                  <div>
                    <label className="block text-[#8f7e64] text-xs mb-1.5">{lp.phone}</label>
                    <input
                      type="text"
                      placeholder={lp.phonePlaceholder}
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-[#09101b] border border-[#1a2942] rounded-lg px-4 py-3 text-[#edcfa1] text-sm placeholder:text-[#8f7e64] focus:outline-none focus:border-[#bf8b55]/50"
                    />
                  </div>
                  <div>
                    <label className="block text-[#8f7e64] text-xs mb-1.5">{lp.email}</label>
                    <input
                      type="email"
                      placeholder={lp.emailPlaceholder}
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-[#09101b] border border-[#1a2942] rounded-lg px-4 py-3 text-[#edcfa1] text-sm placeholder:text-[#8f7e64] focus:outline-none focus:border-[#bf8b55]/50"
                    />
                  </div>
                </div>
              </div>

              {/* Asset Details */}
              <div>
                <h2 className="text-[#edcfa1] font-bold text-base mb-4 pb-3 border-b border-[#1a2942]">{lp.assetDetails}</h2>
                <div className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#8f7e64] text-xs mb-1.5">{lp.assetCategory}</label>
                      <select
                        value={form.assetCategory}
                        onChange={(e) => setForm({ ...form, assetCategory: e.target.value })}
                        className="w-full bg-[#09101b] border border-[#1a2942] rounded-lg px-4 py-3 text-sm text-[#edcfa1] focus:outline-none focus:border-[#bf8b55]/50"
                      >
                        <option value="">—</option>
                        {lp.assetCategoryOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-[#8f7e64] text-xs mb-1.5">{lp.cityLocation}</label>
                      <input
                        type="text"
                        placeholder={lp.cityPlaceholder}
                        value={form.city}
                        onChange={(e) => setForm({ ...form, city: e.target.value })}
                        className="w-full bg-[#09101b] border border-[#1a2942] rounded-lg px-4 py-3 text-[#edcfa1] text-sm placeholder:text-[#8f7e64] focus:outline-none focus:border-[#bf8b55]/50"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[#8f7e64] text-xs mb-1.5">{lp.description}</label>
                    <textarea
                      rows={5}
                      placeholder={lp.descPlaceholder}
                      value={form.description}
                      onChange={(e) => setForm({ ...form, description: e.target.value })}
                      className="w-full bg-[#09101b] border border-[#1a2942] rounded-lg px-4 py-3 text-[#edcfa1] text-sm placeholder:text-[#8f7e64] focus:outline-none focus:border-[#bf8b55]/50 resize-none"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-[#bf8b55] hover:bg-[#8f7e64] text-[#09101b] font-semibold px-8 py-3.5 rounded-lg transition-colors text-sm"
                >
                  {lp.submit}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}
