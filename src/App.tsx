import { Routes, Route, Link } from "react-router-dom";
import { useEffect } from "react";
import HomePage from "./routes/Home";
import PaintingsPage from "./routes/Quadros";
import WorkshopPage from "./routes/Workshop";
import ContactPage from "./routes/Contacto";
import { useT } from "./lib/i18n";

function usePageTitle(title: string) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}

function NotFound() {
  usePageTitle("Página não encontrada · Carol Guaiato");
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl text-foreground">404</h1>
        <p className="mt-4 text-muted-foreground">
          A página que procura não existe ou foi movida.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Voltar ao início
        </Link>
      </div>
    </div>
  );
}

export default function App() {
  const { lang } = useT();
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/quadros" element={<PaintingsPage />} />
      <Route path="/workshops/:faixa" element={<WorkshopPage />} />
      <Route path="/contacto" element={<ContactPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
