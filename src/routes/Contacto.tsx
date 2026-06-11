import { useEffect } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { useT } from "@/lib/i18n";
import { WHATSAPP_NUMBER } from "@/lib/whatsapp";

export default function ContactPage() {
  const { t } = useT();
  useEffect(() => {
    document.title = `${t("nav_contact")} · Carol Guaiato`;
  }, [t]);

  const phoneDisplay = "+351 926 507 257";

  return (
    <SiteLayout>
      <section className="mx-auto max-w-3xl px-5 py-20 text-center">
        <p className="text-xs uppercase tracking-[0.22em] text-primary">
          {t("footer_contact")}
        </p>
        <h1 className="mt-4 font-display text-4xl md:text-5xl">{t("contact_title")}</h1>
        <p className="mx-auto mt-5 max-w-xl text-muted-foreground md:text-lg">
          {t("contact_via_wa")}
        </p>

        <div className="mt-10 rounded-3xl border border-border bg-card p-8 text-left shadow-sm">
          <dl className="space-y-5 text-sm">
            <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-border/60 pb-4">
              <dt className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                WhatsApp
              </dt>
              <dd className="font-display text-lg">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  {phoneDisplay}
                </a>
              </dd>
            </div>
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <dt className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {t("contact_artist")}
              </dt>
              <dd className="font-display text-lg">Carol Guaiato</dd>
            </div>
          </dl>

          <div className="mt-8 flex justify-center">
            <WhatsAppButton
              variant="whatsapp"
              size="lg"
              label={t("cta_whatsapp_long")}
              message="Olá Carol, gostava de falar consigo."
            />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
