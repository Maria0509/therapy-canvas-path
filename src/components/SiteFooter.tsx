import { Link } from "@tanstack/react-router";
import { useT } from "@/lib/i18n";
import { WhatsAppButton } from "./WhatsAppButton";

export function SiteFooter() {
  const { t } = useT();
  return (
    <footer className="mt-24 border-t border-border bg-[oklch(0.96_0.02_10)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-3">
        <div>
          <h3 className="font-display text-xl">{t("footer_about")}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{t("footer_tagline")}</p>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
            {t("footer_links")}
          </h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/" className="hover:text-primary">{t("nav_home")}</Link></li>
            <li><Link to="/workshops/$faixa" params={{ faixa: "10-15" }} className="hover:text-primary">{t("nav_age_10_15")}</Link></li>
            <li><Link to="/workshops/$faixa" params={{ faixa: "15-20" }} className="hover:text-primary">{t("nav_age_15_20")}</Link></li>
            <li><Link to="/workshops/$faixa" params={{ faixa: "20-mais" }} className="hover:text-primary">{t("nav_age_20_mais")}</Link></li>
            <li><Link to="/quadros" className="hover:text-primary">{t("nav_paintings")}</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
            {t("footer_contact")}
          </h4>
          <p className="mt-3 text-sm text-muted-foreground">{t("contact_via_wa")}</p>
          <div className="mt-4">
            <WhatsAppButton variant="whatsapp" size="sm" label={t("cta_whatsapp_long")} />
          </div>
        </div>
      </div>
      <div className="border-t border-border/60">
        <p className="mx-auto max-w-6xl px-5 py-5 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Carol Guaiato · {t("footer_rights")}
        </p>
      </div>
    </footer>
  );
}
