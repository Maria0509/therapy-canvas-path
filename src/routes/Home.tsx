import { Link } from "react-router-dom";
import { useEffect } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { useT } from "@/lib/i18n";
import heroImg from "@/assets/hero.jpg";
import age1015 from "@/assets/age-10-15.jpg";
import age1520 from "@/assets/age-15-20.jpg";
import age20 from "@/assets/age-20-mais.jpg";
import q1 from "@/assets/quadro-1.jpg";
import q2 from "@/assets/quadro-2.jpg";
import q3 from "@/assets/quadro-3.jpg";
import q4 from "@/assets/quadro-4.jpg";

export default function HomePage() {
  const { t } = useT();
  useEffect(() => {
    document.title = "Carol Guaiato · Arte Terapia & Pintura em Tela";
  }, []);

  const groups = [
    { id: "10-15", title: t("age_10_15_title"), desc: t("age_10_15_desc"), img: age1015 },
    { id: "15-20", title: t("age_15_20_title"), desc: t("age_15_20_desc"), img: age1520 },
    { id: "20-mais", title: t("age_20_mais_title"), desc: t("age_20_mais_desc"), img: age20 },
  ] as const;

  return (
    <SiteLayout>
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-primary">
              {t("hero_eyebrow")}
            </p>
            <h1 className="mt-4 font-display text-4xl leading-[1.1] text-foreground md:text-6xl">
              {t("hero_title")}
            </h1>
            <p className="mt-5 max-w-lg text-base text-muted-foreground md:text-lg">
              {t("hero_subtitle")}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <WhatsAppButton size="lg" message="Olá Carol, gostava de saber mais sobre os workshops." />
              <Link
                to="/quadros"
                className="inline-flex items-center justify-center rounded-full border border-primary/30 px-6 py-3.5 text-base font-medium text-primary transition-colors hover:bg-primary/5"
              >
                {t("hero_cta_workshops")}
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-secondary/40 blur-2xl" />
            <img
              src={heroImg}
              alt="Ateliê de pintura"
              width={1536}
              height={1024}
              className="relative aspect-[3/2] w-full rounded-[1.75rem] object-cover shadow-xl shadow-primary/10"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-20 text-center">
        <p className="text-xs uppercase tracking-[0.22em] text-primary">{t("about_eyebrow")}</p>
        <h2 className="mt-4 font-display text-3xl md:text-4xl">{t("about_title")}</h2>
        <p className="mx-auto mt-5 max-w-2xl text-muted-foreground md:text-lg">
          {t("about_body")}
        </p>
      </section>

      <section className="bg-[oklch(0.96_0.02_10)] py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-primary">
              {t("workshops_eyebrow")}
            </p>
            <h2 className="mt-4 font-display text-3xl md:text-4xl">{t("workshops_title")}</h2>
            <p className="mt-3 text-muted-foreground">{t("workshops_subtitle")}</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {groups.map((g) => (
              <Link
                key={g.id}
                to={`/workshops/${g.id}`}
                className="group overflow-hidden rounded-3xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
              >
                <div className="overflow-hidden">
                  <img
                    src={g.img}
                    alt={g.title}
                    loading="lazy"
                    width={1280}
                    height={896}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl">{g.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{g.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                    {t("learn_more")} <span aria-hidden>→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-primary">
              {t("gallery_eyebrow")}
            </p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl">{t("gallery_title")}</h2>
          </div>
          <Link to="/quadros" className="text-sm font-medium text-primary hover:underline">
            {t("see_all_paintings")} →
          </Link>
        </div>
        <p className="mt-3 max-w-2xl text-muted-foreground">{t("gallery_subtitle")}</p>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[q1, q2, q3, q4].map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Quadro ${i + 1}`}
              loading="lazy"
              width={896}
              height={896}
              className="aspect-square w-full rounded-2xl object-cover shadow-sm transition-transform hover:-translate-y-1"
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 pb-20">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-accent px-8 py-14 text-center text-primary-foreground shadow-xl shadow-primary/20">
          <h2 className="mx-auto max-w-2xl font-display text-3xl md:text-4xl">
            {t("contact_via_wa")}
          </h2>
          <div className="mt-7 flex justify-center">
            <WhatsAppButton
              variant="whatsapp"
              size="lg"
              label={t("cta_whatsapp_long")}
              message="Olá Carol, gostava de saber mais sobre os workshops e os quadros."
            />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
