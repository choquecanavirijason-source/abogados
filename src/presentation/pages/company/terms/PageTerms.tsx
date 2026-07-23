"use client";

import { Link as I18nLink } from "@/i18n/navigation";
import {
  ArrowLeft,
  Scale,
  ShieldAlert,
  FileText,
  ChevronUp,
  ArrowDownToLine,
  Mail,
  Globe,
} from "lucide-react";
import { useLocale } from "next-intl";
import { getTermsFictionalContent, type TermsSection } from "./termsFictionalContent";
import { useEffect, useMemo, useState } from "react";
import FloatingWhatsApp from "@/presentation/molecules/layout/FloatingWhatsApp";

/** Convierte el título "1. Definiciones" en { number: "1", label: "Definiciones" } */
function splitTitle(title: string): { number: string | null; label: string } {
  const match = title.match(/^(\d+)\.\s*(.*)$/);
  if (match) return { number: match[1], label: match[2] };
  return { number: null, label: title };
}

const slugify = (title: string) => title.toLowerCase().replace(/\s+/g, "-");

type Block =
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "sub"; text: string }
  | { type: "p"; text: string };

/** Agrupa los párrafos planos en bloques semánticos (listas, subtítulos, párrafos). */
function groupParagraphs(paragraphs: string[]): Block[] {
  const blocks: Block[] = [];

  for (const p of paragraphs) {
    if (p.startsWith("• ")) {
      const text = p.slice(2).trim();
      const last = blocks[blocks.length - 1];
      if (last?.type === "ul") last.items.push(text);
      else blocks.push({ type: "ul", items: [text] });
      continue;
    }

    // "1. ", "2. " ... (obligaciones / pasos) — marcador igual en los 4 idiomas
    const numbered = p.match(/^(\d+)\.\s+(.*)$/);
    if (numbered) {
      const text = numbered[2].trim();
      const last = blocks[blocks.length - 1];
      if (last?.type === "ol") last.items.push(text);
      else blocks.push({ type: "ol", items: [text] });
      continue;
    }

    // "3.1 ", "7.2 " ... subapartados
    if (/^\d+\.\d+\s/.test(p)) {
      blocks.push({ type: "sub", text: p });
      continue;
    }

    blocks.push({ type: "p", text: p });
  }

  return blocks;
}

function SectionBody({ section }: { section: TermsSection }) {
  const blocks = useMemo(() => groupParagraphs(section.paragraphs), [section.paragraphs]);

  return (
    <div className="space-y-5 text-[15px] leading-relaxed text-slate-600 md:text-[15.5px]">
      {blocks.map((block, i) => {
        if (block.type === "ul") {
          return (
            <ul key={i} className="space-y-3">
              {block.items.map((item, j) => (
                <li key={j} className="flex gap-3">
                  <span className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-linear-to-br from-[#0A0E27] to-[#4688D4]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          );
        }

        if (block.type === "ol") {
          return (
            <ol key={i} className="space-y-3.5">
              {block.items.map((item, j) => (
                <li
                  key={j}
                  className="flex gap-4 rounded-2xl bg-slate-50/70 p-3.5 transition-colors duration-200 hover:bg-[#4688D4]/[0.05]"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-sm font-semibold text-[#4688D4] shadow-[0_2px_8px_rgba(10,14,39,0.08)] ring-1 ring-[#4688D4]/15">
                    {j + 1}
                  </span>
                  <span className="pt-0.5">{item}</span>
                </li>
              ))}
            </ol>
          );
        }

        if (block.type === "sub") {
          return (
            <p
              key={i}
              className="rounded-xl border-l-[3px] border-[#4688D4] bg-[#4688D4]/[0.04] py-2.5 pl-4 pr-3 font-medium tracking-tight text-[#0A0E27]"
            >
              {block.text}
            </p>
          );
        }

        return <p key={i}>{block.text}</p>;
      })}
    </div>
  );
}

export default function PageTerms() {
  const locale = useLocale();
  const c = getTermsFictionalContent(locale);

  const [activeSection, setActiveSection] = useState<string>("");
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [progress, setProgress] = useState(0);

  const t = {
    back: locale === "es" ? "Volver al inicio" : locale === "cn" ? "返回首页" : locale === "in" ? "होम पर वापस" : "Back to home",
    toc: locale === "es" ? "Índice" : locale === "cn" ? "目录" : locale === "in" ? "विषय-सूची" : "Contents",
    ctaTitle:
      locale === "es" ? "¿Necesitas el documento completo?" : locale === "cn" ? "需要完整文件吗？" : locale === "in" ? "पूरा दस्तावेज़ चाहिए?" : "Need the full document?",
    ctaText:
      locale === "es"
        ? "Descarga la versión en PDF con plena validez o escríbenos para cualquier duda."
        : locale === "cn"
          ? "下载具有完全效力的 PDF 版本，或就任何疑问与我们联系。"
          : locale === "in"
            ? "पूर्ण रूप से वैध PDF संस्करण डाउनलोड करें या किसी भी प्रश्न के लिए हमें लिखें।"
            : "Download the fully valid PDF version or write to us with any questions.",
  };

  // Active section tracking + Back to top + reading progress
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-100px 0px -55% 0px", threshold: 0.1 }
    );

    document.querySelectorAll("section[id]").forEach((section) => observer.observe(section));

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0);
      setShowBackToTop(scrollTop > 600);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // Back-to-top progress ring geometry
  const ringR = 15;
  const ringC = 2 * Math.PI * ringR;

  return (
    <main className="font-euclid relative min-h-screen overflow-hidden bg-slate-50 text-slate-900">
      {/* Reading progress bar */}
      <div className="fixed inset-x-0 top-0 z-50 h-1 bg-transparent">
        <div
          className="h-full bg-linear-to-r from-[#0A0E27] to-[#4688D4] shadow-[0_0_12px_rgba(70,136,212,0.6)] transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(at_top,#e8f0fb_0%,transparent_55%)]" />
      <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-[#4688D4]/10 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#0f172a08_1px,transparent_1px),linear-gradient(to_bottom,#0f172a08_1px,transparent_1px)] bg-[size:34px_34px] [mask-image:radial-gradient(at_top,black,transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-4 pb-24 pt-16 sm:px-6 md:pt-24 lg:px-8">
        {/* Back link */}
        <I18nLink
          href="/"
          className="group mb-10 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-[#4688D4]"
        >
          <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
          {t.back}
        </I18nLink>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* === LEFT COLUMN - STICKY SIDEBAR === */}
          <header className="space-y-6 lg:col-span-4 lg:sticky lg:top-8 lg:self-start lg:h-fit">
            {/* Identity card */}
            <div className="overflow-hidden rounded-3xl border border-black/[0.06] bg-white/80 shadow-[0_8px_30px_rgba(10,14,39,0.06)] backdrop-blur">
              <div className="h-1.5 bg-linear-to-r from-[#0A0E27] via-[#4688D4] to-[#0A0E27]" />
              <div className="space-y-5 p-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#4688D4]/20 bg-[#4688D4]/[0.06] px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-widest text-[#4688D4]">
                  <Scale className="h-3.5 w-3.5" />
                  {c.badge}
                </div>

                <div>
                  <h1 className="bg-linear-to-br from-[#0A0E27] via-[#1e3a8a] to-[#4688D4] bg-clip-text text-3xl font-semibold leading-tight tracking-tight text-transparent sm:text-4xl">
                    {c.pageTitle}
                  </h1>
                  {c.tagline && (
                    <p className="mt-3 border-l-2 border-[#4688D4]/40 pl-3 text-sm italic text-[#4688D4]">
                      “{c.tagline}”
                    </p>
                  )}
                </div>

                <div className="space-y-1 border-t border-slate-100 pt-4 text-sm text-slate-500">
                  <p className="font-medium text-slate-700">{c.firmName}</p>
                  <p className="text-xs">{c.lastUpdated}</p>
                </div>

                {/* Download button */}
                <a
                  href={c.downloadUrl}
                  download
                  className="group flex w-full items-center justify-center gap-2.5 rounded-full bg-linear-to-r from-[#0A0E27] to-[#4688D4] px-6 py-3 text-sm font-medium text-white shadow-[0_8px_30px_rgba(70,136,212,0.28)] transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(70,136,212,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4688D4] focus-visible:ring-offset-2"
                >
                  <ArrowDownToLine className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                  {c.downloadLabel}
                </a>
              </div>
            </div>

            {/* Disclaimer */}
            {c.disclaimer && (
              <div className="flex gap-3 rounded-2xl border border-amber-200/70 bg-amber-50/70 p-4 text-[13px] leading-relaxed text-amber-900 backdrop-blur">
                <ShieldAlert className="h-5 w-5 shrink-0 text-amber-500" />
                <p>{c.disclaimer}</p>
              </div>
            )}

            {/* Table of Contents */}
            <nav className="hidden rounded-3xl border border-black/[0.06] bg-white/80 p-5 shadow-[0_8px_30px_rgba(10,14,39,0.05)] backdrop-blur lg:block">
              <div className="mb-3 flex items-center justify-between text-xs font-medium uppercase tracking-widest text-slate-400">
                <span className="flex items-center gap-2">
                  <FileText className="h-3.5 w-3.5" />
                  {t.toc}
                </span>
                <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-500">
                  {c.sections.length}
                </span>
              </div>

              <ul className="max-h-[48vh] space-y-0.5 overflow-y-auto pr-1 text-[13px] [scrollbar-width:thin]">
                {c.sections.map((section) => {
                  const sectionId = slugify(section.title);
                  const isActive = activeSection === sectionId;
                  const { number, label } = splitTitle(section.title);

                  return (
                    <li key={section.title}>
                      <a
                        href={`#${sectionId}`}
                        className={`group flex items-center gap-3 rounded-xl px-3 py-2 transition-all duration-200 ${
                          isActive
                            ? "bg-[#4688D4]/[0.08] font-medium text-[#4688D4]"
                            : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                        }`}
                      >
                        {number && (
                          <span
                            className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md text-[11px] font-semibold transition-colors ${
                              isActive
                                ? "bg-linear-to-br from-[#0A0E27] to-[#4688D4] text-white"
                                : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
                            }`}
                          >
                            {number}
                          </span>
                        )}
                        <span className="truncate">{label}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </header>

          {/* === RIGHT COLUMN - CONTENT === */}
          <div className="lg:col-span-8">
            <article className="space-y-5">
              {c.sections.map((section, idx) => {
                const sectionId = slugify(section.title);
                const { number, label } = splitTitle(section.title);

                return (
                  <section
                    key={section.title}
                    id={sectionId}
                    style={{ animationDelay: `${Math.min(idx, 6) * 70}ms` }}
                    className="reveal-up group relative scroll-mt-24 overflow-hidden rounded-3xl border border-black/[0.06] bg-white/80 p-6 shadow-[0_8px_30px_rgba(10,14,39,0.05)] backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-[#4688D4]/20 hover:shadow-[0_12px_40px_rgba(70,136,212,0.14)] sm:p-9"
                  >
                    {/* Marca de agua con el número de cláusula */}
                    {number && (
                      <span
                        aria-hidden
                        className="pointer-events-none absolute -right-3 -top-8 select-none text-[7.5rem] font-bold leading-none text-[#4688D4]/[0.05] transition-colors duration-300 group-hover:text-[#4688D4]/[0.09]"
                      >
                        {number}
                      </span>
                    )}
                    {/* Acento lateral en hover */}
                    <span
                      aria-hidden
                      className="absolute left-0 top-9 h-0 w-1 rounded-r-full bg-linear-to-b from-[#0A0E27] to-[#4688D4] transition-all duration-300 group-hover:h-14"
                    />

                    <h2 className="relative flex items-center gap-4 tracking-tight">
                      {number && (
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-[#0A0E27] to-[#4688D4] text-sm font-semibold text-white shadow-[0_4px_14px_rgba(70,136,212,0.32)] ring-4 ring-[#4688D4]/[0.06] transition-transform duration-300 group-hover:scale-105">
                          {number}
                        </span>
                      )}
                      <span className="text-xl font-semibold text-[#0A0E27] sm:text-[1.6rem]">{label}</span>
                    </h2>

                    <div className="relative my-6 h-px bg-linear-to-r from-[#4688D4]/30 via-slate-200 to-transparent" />

                    <div className="relative">
                      <SectionBody section={section} />
                    </div>
                  </section>
                );
              })}

              {/* Footer CTA card */}
              <div className="reveal-up relative overflow-hidden rounded-3xl bg-linear-to-br from-[#0A0E27] to-[#1e3a8a] p-8 text-white shadow-[0_12px_40px_rgba(10,14,39,0.25)] sm:p-10">
                {/* Glow decorativo */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-[#4688D4]/30 blur-3xl" />
                <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
                  <div className="max-w-md space-y-2">
                    <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">{t.ctaTitle}</h3>
                    <p className="text-sm leading-relaxed text-white/70">{t.ctaText}</p>
                    <div className="flex flex-wrap gap-x-5 gap-y-2 pt-2 text-sm text-white/80">
                      <a
                        href="mailto:info@stratiumlegal.com"
                        className="inline-flex items-center gap-2 transition-colors hover:text-white"
                      >
                        <Mail className="h-4 w-4" />
                        info@stratiumlegal.com
                      </a>
                      <a
                        href="https://stratiumlegal.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 transition-colors hover:text-white"
                      >
                        <Globe className="h-4 w-4" />
                        stratiumlegal.com
                      </a>
                    </div>
                  </div>
                  <a
                    href={c.downloadUrl}
                    download
                    className="group inline-flex shrink-0 items-center justify-center gap-2.5 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0A0E27] shadow-lg transition-all duration-300 ease-out hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(255,255,255,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0E27]"
                  >
                    <ArrowDownToLine className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                    {c.downloadLabel}
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
        <FloatingWhatsApp />
      {/* Back to Top Button with progress ring */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="group fixed bottom-24 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-black/5 bg-white text-slate-600 shadow-[0_8px_30px_rgba(10,14,39,0.12)] transition-all duration-300 hover:-translate-y-1 hover:text-[#4688D4] hover:shadow-[0_0_24px_rgba(70,136,212,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4688D4] focus-visible:ring-offset-2 md:bottom-[6.5rem]"
          aria-label={t.back}
        >
          <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 36 36">
            <circle cx="18" cy="18" r={ringR} fill="none" stroke="#0A0E27" strokeOpacity="0.06" strokeWidth="2" />
            <circle
              cx="18"
              cy="18"
              r={ringR}
              fill="none"
              stroke="#4688D4"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray={ringC}
              strokeDashoffset={ringC * (1 - progress / 100)}
              className="transition-[stroke-dashoffset] duration-150 ease-out"
            />
          </svg>
          <ChevronUp className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
        </button>
      )}
     
    </main>
  );
}
