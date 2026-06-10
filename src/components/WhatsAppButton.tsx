import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { useT } from "@/lib/i18n";

type Props = {
  message?: string;
  variant?: "primary" | "outline" | "ghost" | "whatsapp";
  size?: "sm" | "md" | "lg";
  label?: string;
  className?: string;
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

const variants = {
  primary:
    "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm",
  outline:
    "border border-primary/30 text-primary hover:bg-primary/5",
  ghost: "text-primary hover:bg-primary/5",
  whatsapp:
    "bg-[oklch(0.62_0.16_150)] text-white hover:brightness-110 shadow-sm",
};

export function WhatsAppButton({
  message,
  variant = "primary",
  size = "md",
  label,
  className = "",
}: Props) {
  const { t } = useT();
  return (
    <a
      href={buildWhatsAppUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all hover:-translate-y-0.5 ${sizes[size]} ${variants[variant]} ${className}`}
    >
      <WhatsAppIcon />
      <span>{label ?? t("cta_whatsapp")}</span>
    </a>
  );
}

export function WhatsAppFloating({ message }: { message?: string }) {
  const { t } = useT();
  return (
    <a
      href={buildWhatsAppUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("cta_whatsapp_long")}
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[oklch(0.62_0.16_150)] text-white shadow-lg shadow-[oklch(0.62_0.16_150)]/30 transition-transform hover:scale-105"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}

function WhatsAppIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.05 2.5c-5.247 0-9.5 4.253-9.5 9.5 0 1.674.438 3.295 1.27 4.731L2.5 21.5l4.91-1.286a9.45 9.45 0 0 0 4.64 1.18h.004c5.243 0 9.5-4.253 9.5-9.5 0-2.538-.988-4.923-2.782-6.717A9.46 9.46 0 0 0 12.05 2.5z" />
    </svg>
  );
}
