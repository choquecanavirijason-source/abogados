"use client";

import { Link as I18nLink } from "@/i18n/navigation";
import {
  ArrowLeft,
  ShieldCheck,
  Lock,
  FileText,
  ChevronUp,
  Printer,
  Download,
  Mail,
  Globe,
  CheckCircle2,
} from "lucide-react";
import { useLocale } from "next-intl";
import { getPrivacyContent, type PrivacySection } from "./privacyContent";
import { useEffect, useMemo, useRef, useState } from "react";
import FloatingWhatsApp from "@/presentation/molecules/layout/FloatingWhatsApp";

/** Convierte "I. Identidad..." o "1. ..." en { number, label } */
function splitTitle(title: string): { number: string | null; label: string } {
  const match = title.match(/^([IVXLCDM]+|\d+)\.\s*(.*)$/);
  if (match) return { number: match[1], label: match[2] };
  return { number: null, label: title };
}

const slugify = (title: string) => title.toLowerCase().replace(/\s+/g, "-");

type Block =
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "sub"; text: string }
  | { type: "p"; text: string };

/** Agrupa los párrafos planos en bloques semánticos. */
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

    // Subapartados con letra: "A. ", "B. " ... "F. "
    if (/^[A-F]\.\s/.test(p)) {
      blocks.push({ type: "sub", text: p });
      continue;
    }

    // Lista con numeral romano: "I. ", "II. " ... "X. "
    const roman = p.match(/^(?:I{1,3}|IV|V|VI{0,3}|IX|X)\.\s+(.*)$/);
    if (roman) {
      const text = roman[1].trim();
      const last = blocks[blocks.length - 1];
      if (last?.type === "ol") last.items.push(text);
      else blocks.push({ type: "ol", items: [text] });
      continue;
    }

    // Subapartados numéricos "3.1 " (por consistencia)
    if (/^\d+\.\d+\s/.test(p)) {
      blocks.push({ type: "sub", text: p });
      continue;
    }

    // Lista numérica "1. ", "2. "
    const numbered = p.match(/^\d+\.\s+(.*)$/);
    if (numbered) {
      const text = numbered[1].trim();
      const last = blocks[blocks.length - 1];
      if (last?.type === "ol") last.items.push(text);
      else blocks.push({ type: "ol", items: [text] });
      continue;
    }

    blocks.push({ type: "p", text: p });
  }

  return blocks;
}

function TransfersTable({ table }: { table: NonNullable<PrivacySection["table"]> }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200">
      {/* Cabecera (solo desktop) */}
      <div className="hidden bg-[#0A0E27] text-[11px] font-semibold uppercase tracking-wider text-white/80 sm:grid sm:grid-cols-[1.3fr_1.6fr_1fr]">
        {table.headers.map((h, i) => (
          <div key={i} className="px-4 py-3">
            {h}
          </div>
        ))}
      </div>
      {table.rows.map((row, r) => (
        <div
          key={r}
          className="grid gap-3 border-t border-slate-200 p-4 text-[14px] odd:bg-white even:bg-slate-50/60 sm:grid-cols-[1.3fr_1.6fr_1fr] sm:gap-4 sm:py-4"
        >
          <div className="font-medium text-[#0A0E27]">
            <span className="mb-1 block text-[10px] font-semibold uppercase tracking-wider text-slate-400 sm:hidden">
              {table.headers[0]}
            </span>
            {row[0]}
          </div>
          <div className="text-slate-600">
            <span className="mb-1 block text-[10px] font-semibold uppercase tracking-wider text-slate-400 sm:hidden">
              {table.headers[1]}
            </span>
            {row[1]}
          </div>
          <div>
            <span className="mb-1 block text-[10px] font-semibold uppercase tracking-wider text-slate-400 sm:hidden">
              {table.headers[2]}
            </span>
            <span
              className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[12px] font-medium ${
                /requiere/i.test(row[2])
                  ? "bg-amber-50 text-amber-700 ring-1 ring-amber-200"
                  : "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200"
              }`}
            >
              <CheckCircle2 className="h-3.5 w-3.5" />
              {row[2]}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

function SectionBody({ section }: { section: PrivacySection }) {
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
              className="rounded-xl border-l-[3px] border-[#4688D4] bg-[#4688D4]/[0.04] py-2.5 pl-4 pr-3 font-semibold tracking-tight text-[#0A0E27]"
            >
              {block.text}
            </p>
          );
        }

        return <p key={i}>{block.text}</p>;
      })}

      {section.table && <TransfersTable table={section.table} />}
    </div>
  );
}

export default function PageLegal() {
  const locale = useLocale();
  const c = getPrivacyContent(locale);

  const [activeSection, setActiveSection] = useState<string>("");
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [progress, setProgress] = useState(0);
  const [paneHeight, setPaneHeight] = useState<number | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // El panel de contenido debe medir exactamente lo mismo que el índice
  useEffect(() => {
    const headerEl = headerRef.current;
    if (!headerEl) return;

    const updateHeight = () => setPaneHeight(headerEl.offsetHeight);
    updateHeight();

    const resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(headerEl);
    window.addEventListener("resize", updateHeight);
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  const t = {
    back: locale === "es" ? "Volver al inicio" : locale === "cn" ? "返回首页" : locale === "in" ? "होम पर वापस" : "Back to home",
    toc: locale === "es" ? "Índice" : locale === "cn" ? "目录" : locale === "in" ? "विषय-सूची" : "Contents",
    print: locale === "es" ? "Imprimir / Guardar PDF" : locale === "cn" ? "打印 / 另存为 PDF" : locale === "in" ? "प्रिंट / PDF सहेजें" : "Print / Save PDF",
    download: locale === "es" ? "Descargar PDF" : locale === "cn" ? "下载 PDF" : locale === "in" ? "PDF डाउनलोड करें" : "Download PDF",
    ctaTitle:
      locale === "es" ? "¿Dudas sobre tus datos personales?" : locale === "cn" ? "对您的个人数据有疑问吗？" : locale === "in" ? "अपने व्यक्तिगत डेटा के बारे में प्रश्न?" : "Questions about your personal data?",
    ctaText:
      locale === "es"
        ? "Ejerce tus derechos ARCO o escríbenos para cualquier duda sobre privacidad."
        : locale === "cn"
          ? "行使您的 ARCO 权利，或就任何隐私疑问与我们联系。"
          : locale === "in"
            ? "अपने ARCO अधिकारों का प्रयोग करें या गोपनीयता संबंधी किसी भी प्रश्न के लिए हमें लिखें।"
            : "Exercise your ARCO rights or write to us with any privacy questions.",
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

    // En desktop el contenido tiene su propio scroll (panel tipo lector);
    // en mobile hace scroll la página completa. Escuchamos ambos y usamos
    // el que realmente esté desplazándose.
    const handleScroll = () => {
      const pane = contentRef.current;
      const paneScrolls = pane && pane.scrollHeight > pane.clientHeight + 4;
      const scrollTop = paneScrolls ? pane!.scrollTop : window.scrollY;
      const docHeight = paneScrolls
        ? pane!.scrollHeight - pane!.clientHeight
        : document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0);
      setShowBackToTop(scrollTop > 600);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    const pane = contentRef.current;
    pane?.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      pane?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    const pane = contentRef.current;
    if (pane && pane.scrollHeight > pane.clientHeight + 4) {
      pane.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Clic en el índice: mueve SOLO el panel de contenido, nunca la ventana.
  // El <a href="#id"> nativo del navegador puede scrollear la página completa
  // cuando hay un panel con scroll propio anidado, sacando al sidebar sticky
  // de su contenedor y cortándolo visualmente.
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const pane = contentRef.current;
    const target = document.getElementById(sectionId);
    if (!pane || !target) return;

    const paneRect = pane.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    const offset = targetRect.top - paneRect.top + pane.scrollTop - 12;

    pane.scrollTo({ top: offset, behavior: "smooth" });
    window.history.replaceState(null, "", `#${sectionId}`);
  };

  const handlePrint = () => window.print();

  // Back-to-top progress ring geometry
  const ringR = 15;
  const ringC = 2 * Math.PI * ringR;

  return (
    <main className="font-euclid relative min-h-screen overflow-hidden bg-slate-50 text-slate-900">
      {/* Reading progress bar */}
      <div className="fixed inset-x-0 top-0 z-50 h-1 bg-transparent print:hidden">
        <div
          className="h-full bg-linear-to-r from-[#0A0E27] to-[#4688D4] shadow-[0_0_12px_rgba(70,136,212,0.6)] transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(at_top,#e8f0fb_0%,transparent_55%)]" />
      <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-[#4688D4]/10 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#0f172a08_1px,transparent_1px),linear-gradient(to_bottom,#0f172a08_1px,transparent_1px)] bg-[size:34px_34px] [mask-image:radial-gradient(at_top,black,transparent_70%)]" />

      <div className="relative mx-auto max-w-400 px-4 pb-24 pt-16 sm:px-6 md:pt-24 lg:px-8">
        {/* Back link */}
        <I18nLink
          href="/"
          className="group mb-10 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-[#4688D4] print:hidden"
        >
          <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
          {t.back}
        </I18nLink>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* === LEFT COLUMN - STICKY SIDEBAR === */}
          <header ref={headerRef} className="space-y-4 lg:col-span-6 lg:sticky lg:top-8 lg:self-start lg:h-fit">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              {/* Identity card */}
              <div className="overflow-hidden rounded-3xl border border-black/[0.06] bg-white/80 shadow-[0_8px_30px_rgba(10,14,39,0.06)] backdrop-blur">
                <div className="h-1.5 bg-linear-to-r from-[#0A0E27] via-[#4688D4] to-[#0A0E27]" />
                <div className="space-y-4 p-5">
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#4688D4]/20 bg-[#4688D4]/[0.06] px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-widest text-[#4688D4]">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    {c.badge}
                  </div>

                  <div>
                    <h1 className="bg-linear-to-br from-[#0A0E27] via-[#1e3a8a] to-[#4688D4] bg-clip-text text-2xl font-semibold leading-tight tracking-tight text-transparent xl:text-3xl">
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

                  {/* Print + Download PDF — lado a lado para ahorrar alto vertical */}
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={handlePrint}
                      className="group flex min-w-0 flex-1 items-center justify-center gap-2 rounded-full bg-linear-to-r from-[#0A0E27] to-[#4688D4] px-3 py-2.5 text-xs font-medium text-white shadow-[0_8px_30px_rgba(70,136,212,0.28)] transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(70,136,212,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4688D4] focus-visible:ring-offset-2 print:hidden"
                    >
                      <Printer className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover:scale-110" />
                      <span className="truncate">{t.print}</span>
                    </button>

                    <a
                      href="/docs/avisodeprivacidad.pdf"
                      download
                      className="group flex min-w-0 flex-1 items-center justify-center gap-2 rounded-full border border-[#4688D4]/25 bg-white px-3 py-2.5 text-xs font-medium text-[#0A0E27] shadow-[0_4px_14px_rgba(10,14,39,0.06)] transition-all duration-300 ease-out hover:scale-[1.02] hover:border-[#4688D4]/50 hover:text-[#4688D4] hover:shadow-[0_0_24px_rgba(70,136,212,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4688D4] focus-visible:ring-offset-2 print:hidden"
                    >
                      <Download className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover:translate-y-0.5" />
                      <span className="truncate">{t.download}</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Table of Contents */}
              <nav className="hidden rounded-3xl border border-black/[0.06] bg-white/80 p-5 shadow-[0_8px_30px_rgba(10,14,39,0.05)] backdrop-blur lg:block print:hidden">
                <div className="mb-3 flex items-center justify-between text-xs font-medium uppercase tracking-widest text-slate-400">
                  <span className="flex items-center gap-2">
                    <FileText className="h-3.5 w-3.5" />
                    {t.toc}
                  </span>
                  <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-500">
                    {c.sections.length}
                  </span>
                </div>

                <ul className="max-h-[54vh] space-y-0.5 overflow-y-auto pr-1 text-[13px] [scrollbar-width:thin]">
                  {c.sections.map((section) => {
                  const sectionId = slugify(section.title);
                  const isActive = activeSection === sectionId;
                  const { number, label } = splitTitle(section.title);

                  return (
                    <li key={section.title}>
                      <a
                        href={`#${sectionId}`}
                        onClick={(e) => scrollToSection(e, sectionId)}
                        className={`group flex items-center gap-3 rounded-xl px-3 py-2 transition-all duration-200 ${
                          isActive
                            ? "bg-[#4688D4]/[0.08] font-medium text-[#4688D4]"
                            : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                        }`}
                      >
                        {number && (
                          <span
                            className={`flex h-5 min-w-5 shrink-0 items-center justify-center rounded-md px-1 text-[10px] font-semibold transition-colors ${
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
            </div>

            {/* Disclaimer — debajo de la tarjeta e índice, aprovechando el ancho completo */}
            {c.disclaimer && (
              <div className="flex gap-3 rounded-2xl border border-[#4688D4]/20 bg-[#4688D4]/[0.05] p-4 text-[13px] leading-relaxed text-[#0A0E27]/80 backdrop-blur print:hidden">
                <Lock className="h-5 w-5 shrink-0 text-[#4688D4]" />
                <p>{c.disclaimer}</p>
              </div>
            )}
          </header>

          {/* === RIGHT COLUMN - CONTENT (panel con scroll propio, misma altura que el índice) ===
              El límite de altura solo debe aplicar en desktop: se guarda como variable CSS y
              se consume dentro de la utilidad "lg:max-h-[var(--pane-h)]" para que en mobile
              (sin overflow-y-auto) el contenido nunca quede recortado sin poder scrollear. */}
          <div
            ref={contentRef}
            style={paneHeight ? ({ "--pane-h": `${paneHeight}px` } as React.CSSProperties) : undefined}
            className="lg:col-span-6 lg:sticky lg:top-8 lg:max-h-(--pane-h) lg:overflow-y-auto lg:overscroll-contain lg:scroll-pt-6 lg:pr-2 lg:[scrollbar-width:thin] print:static print:h-auto print:overflow-visible print:pr-0"
          >
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
                    {/* Marca de agua con el número de sección */}
                    {number && (
                      <span
                        aria-hidden
                        className="pointer-events-none absolute -right-2 -top-7 select-none text-[6rem] font-bold leading-none text-[#4688D4]/[0.05] transition-colors duration-300 group-hover:text-[#4688D4]/[0.09]"
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
                        <span className="flex h-10 min-w-10 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-[#0A0E27] to-[#4688D4] px-2 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(70,136,212,0.32)] ring-4 ring-[#4688D4]/[0.06] transition-transform duration-300 group-hover:scale-105">
                          {number}
                        </span>
                      )}
                      <span className="text-lg font-semibold text-[#0A0E27] sm:text-[1.45rem]">{label}</span>
                    </h2>

                    <div className="relative my-6 h-px bg-linear-to-r from-[#4688D4]/30 via-slate-200 to-transparent" />

                    <div className="relative">
                      <SectionBody section={section} />
                    </div>
                  </section>
                );
              })}

              {/* Footer CTA card */}
              <div className="reveal-up relative overflow-hidden rounded-3xl bg-linear-to-br from-[#0A0E27] to-[#1e3a8a] p-8 text-white shadow-[0_12px_40px_rgba(10,14,39,0.25)] sm:p-10 print:hidden">
                {/* Glow decorativo */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-[#4688D4]/30 blur-3xl" />
                <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
                  <div className="max-w-md space-y-2">
                    <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">{t.ctaTitle}</h3>
                    <p className="text-sm leading-relaxed text-white/70">{t.ctaText}</p>
                    <div className="flex flex-wrap gap-x-5 gap-y-2 pt-2 text-sm text-white/80">
                      <a
                        href="mailto:privacidad@stratiumlegal.com"
                        className="inline-flex items-center gap-2 transition-colors hover:text-white"
                      >
                        <Mail className="h-4 w-4" />
                        privacidad@stratiumlegal.com
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
                  <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
                    <button
                      type="button"
                      onClick={handlePrint}
                      className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0A0E27] shadow-lg transition-all duration-300 ease-out hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(255,255,255,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0E27]"
                    >
                      <Printer className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                      {t.print}
                    </button>
                    <a
                      href="/docs/avisodeprivacidad.pdf"
                      download
                      className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-all duration-300 ease-out hover:scale-[1.03] hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0E27]"
                    >
                      <Download className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                      {t.download}
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>

      {/* Back to Top Button with progress ring */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="group fixed bottom-24 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-black/5 bg-white text-slate-600 shadow-[0_8px_30px_rgba(10,14,39,0.12)] transition-all duration-300 hover:-translate-y-1 hover:text-[#4688D4] hover:shadow-[0_0_24px_rgba(70,136,212,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4688D4] focus-visible:ring-offset-2 md:bottom-[6.5rem] print:hidden"
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
       <FloatingWhatsApp />
    </main>
  );
}
