import { useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { SiteLayout } from "@/components/SiteLayout";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { useT } from "@/lib/i18n";
import type { TranslationKey } from "@/lib/translations";
import age1015 from "@/assets/age-10-15.jpg";
import age1520 from "@/assets/age-15-20.jpg";
import age20 from "@/assets/age-20-mais.jpg";

type Faixa = "10-15" | "15-20" | "20-mais";

const FAIXAS: Record<
  Faixa,
  { titleKey: TranslationKey; introKey: TranslationKey; img: string; waMsg: string }
> = {
  "10-15": {
    titleKey: "age_10_15_title",
    introKey: "wd_10_15_intro",
    img: age1015,
    waMsg: "Olá Carol, quero saber mais sobre o workshop 10-15 anos.",
  },
  "15-20": {
    titleKey: "age_15_20_title",
    introKey: "wd_15_20_intro",
    img: age1520,
    waMsg: "Olá Carol, quero saber mais sobre o workshop 15-20 anos.",
  },
  "20-mais": {
    titleKey: "age_20_mais_title",
    introKey: "wd_20_mais_intro",
    img: age20,
    waMsg: "Olá Carol, quero saber mais sobre o workshop 20+ anos.",
  },
};

export default function WorkshopPage() {
  const { faixa } = useParams<{ faixa: string }>();
  const { t } = useT();

  useEffect(() => {
    document.title = `Workshop ${faixa} · Carol Guaiato`;
  }, [faixa]);

  if (!faixa || !(faixa in FAIXAS)) {
    return <Navigate to="/" replace />;
  }

  const data = FAIXAS[faixa as Faixa];

  return (
    <SiteLayout>
      <section className="relative">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2">
          <div>
            <Link to="/" className="text-xs uppercase tracking-[0.18em] text-muted-foreground hover:text-primary">
              ← {t("nav_workshops")}
            </Link>
            <h1 className="mt-4 font-display text-4xl md:text-5xl">{t(data.titleKey)}</h1>
            <p className="mt-5 text-muted-foreground md:text-lg">{t(data.introKey)}</p>
            <div className="mt-8">
              <WhatsAppButton size="lg" label={t("wd_cta")} message={data.waMsg} />
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-secondary/40 blur-2xl" />
            <img
              src={data.img}
              alt={t(data.titleKey)}
              width={1280}
              height={896}
              className="relative aspect-[4/3] w-full rounded-[1.75rem] object-cover shadow-xl shadow-primary/10"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-8">
            <h2 className="font-display text-2xl">{t("wd_includes")}</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {["wd_inc1", "wd_inc2", "wd_inc3", "wd_inc4"].map((k) => (
                <li key={k} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>{t(k as TranslationKey)}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-card p-8">
            <dl className="space-y-5 text-sm">
              {[
                ["wd_duration", "wd_duration_val"],
                ["wd_group", "wd_group_val"],
                ["wd_location", "wd_location_val"],
              ].map(([k, v]) => (
                <div key={k} className="flex items-baseline justify-between gap-4 border-b border-border/60 pb-4 last:border-0 last:pb-0">
                  <dt className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {t(k as TranslationKey)}
                  </dt>
                  <dd className="font-display text-lg">{t(v as TranslationKey)}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 pb-20">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-accent px-8 py-12 text-center text-primary-foreground">
          <h2 className="font-display text-2xl md:text-3xl">{t("contact_via_wa")}</h2>
          <div className="mt-6 flex justify-center">
            <WhatsAppButton variant="whatsapp" size="lg" label={t("cta_whatsapp_long")} message={data.waMsg} />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
