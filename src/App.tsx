import { ArrowRight, Sparkles, Zap, Shield, Heart } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground">
              <Sparkles className="h-4 w-4" />
            </span>
            Nova Studio
          </a>
          <div className="hidden gap-8 text-sm text-muted-foreground md:flex">
            <a href="#features" className="transition hover:text-foreground">Funkcje</a>
            <a href="#about" className="transition hover:text-foreground">O nas</a>
            <a href="#contact" className="transition hover:text-foreground">Kontakt</a>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-1 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition hover:opacity-90"
          >
            Zacznij <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
        <div className="mx-auto max-w-4xl px-6 py-28 text-center md:py-40">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Nowość — wersja 2.0 już dostępna
          </span>
          <h1 className="mt-6 text-5xl font-semibold tracking-tight md:text-7xl">
            Tworzymy rzeczy,<br />
            <span className="text-muted-foreground">które zachwycają.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
            Projektujemy nowoczesne strony i produkty cyfrowe dla marek, które nie boją się wyróżniać.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90">
              Porozmawiajmy <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#features" className="inline-flex items-center rounded-full border border-border bg-card px-6 py-3 text-sm font-medium transition hover:bg-accent">
              Zobacz, co potrafimy
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-t border-border/50">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Wszystko, czego potrzebujesz</h2>
            <p className="mt-3 text-muted-foreground">Trzy zasady, które prowadzą każdy nasz projekt.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { icon: Zap, title: "Szybkość", desc: "Wydajne, lekkie i zoptymalizowane pod każde urządzenie." },
              { icon: Shield, title: "Solidność", desc: "Czysty kod i sprawdzone praktyki, które się skalują." },
              { icon: Heart, title: "Zachwyt", desc: "Estetyka i detale, które zostają w pamięci użytkownika." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="group rounded-2xl border border-border bg-card p-6 transition hover:border-foreground/20 hover:shadow-lg">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Stats */}
      <section id="about" className="border-t border-border/50 bg-card/30">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Małe studio. Duże ambicje.</h2>
            <p className="mt-4 text-muted-foreground">
              Jesteśmy zespołem projektantów i programistów, którzy wierzą, że dobry design to coś więcej niż ładny obrazek — to sposób myślenia o produkcie.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-6">
            {[
              { n: "120+", l: "Projektów" },
              { n: "8", l: "Lat doświadczenia" },
              { n: "98%", l: "Zadowolonych klientów" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-3xl font-semibold tracking-tight md:text-4xl">{s.n}</div>
                <div className="mt-1 text-xs text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="border-t border-border/50">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">Masz pomysł?</h2>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">Napisz do nas — odpowiadamy w ciągu 24h.</p>
          <a
            href="mailto:hello@nova.studio"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            hello@nova.studio <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <footer className="border-t border-border/50">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-8 text-xs text-muted-foreground md:flex-row">
          <span>© 2026 Nova Studio. Wszystkie prawa zastrzeżone.</span>
          <span>Stworzone z ♥ w Lovable</span>
        </div>
      </footer>
    </div>
  );
}
