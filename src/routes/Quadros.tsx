import { useEffect } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { useT } from "@/lib/i18n";
import q1 from "@/assets/quadro-1.jpg";
import q2 from "@/assets/quadro-2.jpg";
import q3 from "@/assets/quadro-3.jpg";
import q4 from "@/assets/quadro-4.jpg";
import q5 from "@/assets/quadro-5.jpg";
import q6 from "@/assets/quadro-6.jpg";
import q7 from "@/assets/quadro-7.jpg";
import q8 from "@/assets/quadro-8.jpg";

type Painting = { src: string; title: string; size: string };

const paintings: Painting[] = [
  { src: q1, title: "Flor Solitária", size: "40 × 40 cm" },
  { src: q2, title: "Cerejeira", size: "50 × 50 cm" },
  { src: q3, title: "Rosa Profundo", size: "60 × 60 cm" },
  { src: q4, title: "Horizonte Suave", size: "50 × 50 cm" },
  { src: q5, title: "Retrato em Rosa", size: "40 × 40 cm" },
  { src: q6, title: "Peónias", size: "30 × 30 cm" },
  { src: q7, title: "Ouro & Blush", size: "60 × 60 cm" },
  { src: q8, title: "Borboletas", size: "50 × 50 cm" },
];

export default function PaintingsPage() {
  const { t } = useT();
  useEffect(() => {
    document.title = "Quadros · Carol Guaiato";
  }, []);

  return (
    <SiteLayout>
      <section className="mx-auto max-w-4xl px-5 py-16 text-center">
        <p className="text-xs uppercase tracking-[0.22em] text-primary">
          {t("gallery_eyebrow")}
        </p>
        <h1 className="mt-4 font-display text-4xl md:text-5xl">{t("paintings_title")}</h1>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">{t("paintings_subtitle")}</p>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {paintings.map((p) => (
            <article
              key={p.title}
              className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="overflow-hidden">
                <img
                  src={p.src}
                  alt={p.title}
                  loading="lazy"
                  width={896}
                  height={896}
                  className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h2 className="font-display text-xl">{p.title}</h2>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  {t("painting_dimensions")} · {p.size}
                </p>
                <div className="mt-5 pt-1">
                  <WhatsAppButton
                    variant="outline"
                    size="sm"
                    label={t("inquire")}
                    message={`Olá Carol, gostava de saber mais sobre o quadro "${p.title}".`}
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
