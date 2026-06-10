import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { useT } from "@/lib/i18n";
import { WhatsAppButton } from "./WhatsAppButton";

export function SiteHeader() {
  const { t, lang, setLang } = useT();
  const [open, setOpen] = useState(false);
  const [workshopsOpen, setWorkshopsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4">
        <Link to="/" className="flex flex-col leading-tight">
          <span className="font-display text-xl text-foreground">Carol Guaiato</span>
          <span className="text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
            Arte Terapia
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm md:flex">
          <Link
            to="/"
            activeOptions={{ exact: true }}
            activeProps={{ className: "text-primary" }}
            className="text-foreground/80 transition-colors hover:text-primary"
          >
            {t("nav_home")}
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setWorkshopsOpen(true)}
            onMouseLeave={() => setWorkshopsOpen(false)}
          >
            <button className="text-foreground/80 transition-colors hover:text-primary">
              {t("nav_workshops")} ▾
            </button>
            {workshopsOpen && (
              <div className="absolute left-1/2 top-full -translate-x-1/2 pt-3">
                <div className="min-w-[200px] rounded-2xl border border-border bg-card p-2 shadow-lg">
                  <Link
                    to="/workshops/$faixa"
                    params={{ faixa: "10-15" }}
                    className="block rounded-xl px-3 py-2 text-sm hover:bg-muted"
                  >
                    {t("nav_age_10_15")}
                  </Link>
                  <Link
                    to="/workshops/$faixa"
                    params={{ faixa: "15-20" }}
                    className="block rounded-xl px-3 py-2 text-sm hover:bg-muted"
                  >
                    {t("nav_age_15_20")}
                  </Link>
                  <Link
                    to="/workshops/$faixa"
                    params={{ faixa: "20-mais" }}
                    className="block rounded-xl px-3 py-2 text-sm hover:bg-muted"
                  >
                    {t("nav_age_20_mais")}
                  </Link>
                </div>
              </div>
            )}
          </div>
          <Link
            to="/quadros"
            activeProps={{ className: "text-primary" }}
            className="text-foreground/80 transition-colors hover:text-primary"
          >
            {t("nav_paintings")}
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-1 rounded-full border border-border bg-card p-0.5 text-xs sm:flex">
            <button
              onClick={() => setLang("pt")}
              className={`rounded-full px-2.5 py-1 transition-colors ${
                lang === "pt" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
              }`}
            >
              PT
            </button>
            <button
              onClick={() => setLang("en")}
              className={`rounded-full px-2.5 py-1 transition-colors ${
                lang === "en" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
              }`}
            >
              EN
            </button>
          </div>
          <div className="hidden md:block">
            <WhatsAppButton variant="primary" size="sm" />
          </div>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className="rounded-full p-2 text-foreground md:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
              {open ? (
                <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-card md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-3">
            <Link to="/" onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 hover:bg-muted">
              {t("nav_home")}
            </Link>
            <Link
              to="/workshops/$faixa"
              params={{ faixa: "10-15" }}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 hover:bg-muted"
            >
              {t("nav_workshops")} · {t("nav_age_10_15")}
            </Link>
            <Link
              to="/workshops/$faixa"
              params={{ faixa: "15-20" }}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 hover:bg-muted"
            >
              {t("nav_workshops")} · {t("nav_age_15_20")}
            </Link>
            <Link
              to="/workshops/$faixa"
              params={{ faixa: "20-mais" }}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 hover:bg-muted"
            >
              {t("nav_workshops")} · {t("nav_age_20_mais")}
            </Link>
            <Link
              to="/quadros"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 hover:bg-muted"
            >
              {t("nav_paintings")}
            </Link>
            <div className="flex items-center gap-2 px-3 pt-2">
              <button
                onClick={() => setLang("pt")}
                className={`rounded-full border px-3 py-1 text-xs ${
                  lang === "pt" ? "border-primary bg-primary text-primary-foreground" : "border-border"
                }`}
              >
                PT
              </button>
              <button
                onClick={() => setLang("en")}
                className={`rounded-full border px-3 py-1 text-xs ${
                  lang === "en" ? "border-primary bg-primary text-primary-foreground" : "border-border"
                }`}
              >
                EN
              </button>
              <div className="ml-auto">
                <WhatsAppButton size="sm" />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
