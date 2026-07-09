import { createFileRoute } from "@tanstack/react-router";
import logoAsset from "@/assets/logo.png.asset.json";
import lojaExterior from "@/assets/loja-exterior.asset.json";
import lojaEntrada from "@/assets/loja-entrada.asset.json";
import carne1 from "@/assets/carne-1.asset.json";
import ossobuco from "@/assets/ossobuco.asset.json";
import hamburguer from "@/assets/hamburguer.asset.json";
import cogumelos from "@/assets/cogumelos.asset.json";
import equipa from "@/assets/equipa.png.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { property: "og:image", content: `https://id-preview--fcdae8e0-b16d-490b-816f-0dff33b9ed79.lovable.app${logoAsset.url}` },
    ],
  }),
});

const INSTAGRAM = "https://www.instagram.com/talhodoisparceiros/";
const FACEBOOK = "https://www.facebook.com/profile.php?id=61569119907822&locale=pt_PT";
const PHONE = "244 092 816";
const PHONE2 = "919 540 615";
const ADDRESS = "R. Sra. do Rosário 40, 2400-441 Parceiros";

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/85 border-b border-border/60">
        <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <img src={logoAsset.url} alt="Talho Dois Parceiros" className="h-14 w-14 object-contain" />
            <span className="hidden sm:block font-display text-lg font-bold text-charcoal leading-tight">
              Talho <span className="script text-primary text-xl">Dois Parceiros</span>
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#sobre" className="hover:text-primary transition-colors">Sobre</a>
            <a href="#historia" className="hover:text-primary transition-colors">História</a>
            <a href="#produtos" className="hover:text-primary transition-colors">Produtos</a>
            <a href="#produtos" className="hover:text-primary transition-colors">Produtos</a>
            <a href="#loja" className="hover:text-primary transition-colors">A Loja</a>
            <a href="#encomendas" className="hover:text-primary transition-colors">Encomendas</a>
          </nav>
          <a href="#encomendas" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] hover:bg-accent transition-colors">
            Encomendar
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-24 md:pt-24 md:pb-32 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold tracking-wider uppercase text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Parceiros · Leiria
            </div>
            <h1 className="mt-6 font-display text-5xl md:text-7xl font-black leading-[1.02] text-balance text-charcoal">
              Os melhores cortes,
              <br />
              <span className="script text-primary font-bold text-6xl md:text-8xl block mt-2">do produtor para si.</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
              Um talho familiar dedicado à venda de carnes frescas, preparados artesanais e produtos de qualidade — de produtores locais para a sua mesa.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#encomendas" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-warm)] hover:bg-accent transition-colors">
                Fazer encomenda
              </a>
              <a href="#produtos" className="inline-flex items-center gap-2 rounded-full border-2 border-charcoal/20 px-7 py-3.5 text-sm font-semibold text-charcoal hover:border-charcoal transition-colors">
                Ver produtos
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/20 via-transparent to-transparent blur-2xl" />
            <img
              src={carne1.url}
              alt="Cortes de carne fresca"
              width={1600}
              height={2000}
              className="relative rounded-3xl shadow-[var(--shadow-warm)] object-cover aspect-[4/5] w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-cream rounded-2xl p-5 shadow-[var(--shadow-soft)] border border-border max-w-[220px]">
              <div className="script text-primary text-2xl leading-none">Todos os dias</div>
              <div className="mt-1 text-sm text-muted-foreground">frescura, variedade e um sorriso.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="bg-cream border-y border-border">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32 grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2 relative">
            <img
              src={ossobuco.url}
              alt="Ossobuco fresco"
              width={1400}
              height={1800}
              loading="lazy"
              className="rounded-3xl shadow-[var(--shadow-soft)] object-cover aspect-[4/5] w-full"
            />
          </div>
          <div className="md:col-span-3">
            <div className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">A nossa história</div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold text-charcoal text-balance">
              Dois parceiros, uma <span className="script text-primary">paixão</span> pela carne.
            </h2>
            <div className="mt-6 space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>
                O <strong className="text-charcoal">Talho Dois Parceiros</strong> é um talho familiar localizado nos Parceiros, Leiria. Trabalhamos com produtores locais da nossa região para garantir produtos selecionados, frescos e de confiança.
              </p>
              <p>
                Todos os dias procuramos oferecer variedade — desde carnes para o dia a dia a preparados prontos a cozinhar — sempre com um atendimento próximo, personalizado e profissional.
              </p>
              <p className="font-display italic text-charcoal text-xl">
                "Recebemos cada cliente como gostaríamos de ser recebidos: com simpatia, dedicação e um sorriso."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* História */}
      <section id="historia" className="bg-cream border-y border-border">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">De 19 anos a hoje</div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold text-charcoal text-balance">
              A história de <span className="script text-primary">dois parceiros</span>.
            </h2>
          </div>

          <div className="mt-14 grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/15 via-transparent to-transparent blur-2xl" />
              <img
                src={equipa.url}
                alt="A equipa do Talho Dois Parceiros ao balcão"
                width={1600}
                height={1200}
                loading="lazy"
                className="relative rounded-3xl shadow-[var(--shadow-soft)] object-cover aspect-[4/3] w-full"
              />
            </div>
            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>
                A história do <strong className="text-charcoal">Talho Dois Parceiros</strong> é mais do que um simples negócio. Começou há muitos anos no mercado de Leiria, onde ele, ainda adolescente, começou a sua jornada como talhante. Com apenas 19 anos, comprou o seu próprio talho e seguiu em frente, mas a vida tinha mais planos para ele.
              </p>
              <p>
                Ela, filha de um cliente fiel, entrou na sua vida como quem não quer nada, e o que parecia um simples encontro, transformou-se num amor que nasceu entre cortes de carne fresca. Juntos, aprenderam, cresceram e, durante 20 anos, mantiveram a tradição viva, mas a vida levou-os a explorar novos caminhos.
              </p>
              <p>
                Hoje, depois de algum tempo, estão de volta, mais fortes, mais apaixonados e prontos para partilhar com todos a arte e o amor que os uniu. O Talho Dois Parceiros é agora a nossa nova casa, onde a tradição, a qualidade e o amor pela carne nunca saem de moda. Venham fazer parte desta história.
              </p>
            </div>
          </div>

          <div className="mt-16 rounded-3xl bg-background border border-border p-8 md:p-12">
            <blockquote className="max-w-4xl mx-auto text-center space-y-4">
              <p className="font-display text-2xl md:text-3xl text-charcoal leading-relaxed">
                "Há memórias que não se apagam... só mudam de lugar."
              </p>
              <div className="text-muted-foreground leading-relaxed space-y-2">
                <p>Uma fotografia de outro tempo. De quando tudo começou.</p>
                <p>Um jovem de 19 anos que comprou um talho e fez dele a sua vida. Depois veio ela e passou a ser a vida dos dois. Aprenderam juntos, trabalharam juntos, construíram juntos.</p>
                <p>Em 2011, a crise obrigou a fechar este capítulo.</p>
                <p>Mas há coisas que não morrem com uma porta fechada.</p>
                <p>A paixão pelo ofício ficou. O saber fazer ficou. A vontade de voltar ficou.</p>
                <p>E cá estamos.</p>
                <p>Não é o mesmo espaço mas é a mesma essência. As mesmas mãos, o mesmo cuidado, a mesma dedicação de sempre.</p>
              </div>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Produtos */}
      <section id="produtos" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">O que oferecemos</div>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold text-charcoal text-balance">
            Produtos selecionados, <span className="script text-primary">todos os dias</span>.
          </h2>
        </div>

        {/* Product grid with real photos */}
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {[
            { img: carne1.url, title: "Carnes frescas", desc: "Vaca, porco, borrego e aves — cortadas ao momento pelo talhante.", tag: "Diariamente" },
            { img: hamburguer.url, title: "Preparados artesanais", desc: "Hambúrgueres, espetadas, marinados e recheios prontos a cozinhar.", tag: "Casa" },
            { img: cogumelos.url, title: "Ideias para o jantar", desc: "Sugestões prontas para levar direto do balcão para o forno.", tag: "Novidade" },
          ].map((p) => (
            <article key={p.title} className="group rounded-3xl bg-card border border-border overflow-hidden hover:shadow-[var(--shadow-warm)] transition-all hover:-translate-y-1">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8">
                <div className="inline-flex text-[10px] tracking-widest uppercase font-bold text-primary bg-secondary rounded-full px-3 py-1">{p.tag}</div>
                <h3 className="mt-4 font-display text-2xl font-bold text-charcoal">{p.title}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 relative rounded-3xl overflow-hidden">
          <img src={ossobuco.url} alt="Preparados artesanais" loading="lazy" className="w-full h-[420px] md:h-[520px] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/85 via-charcoal/50 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="px-8 md:px-16 max-w-xl">
              <div className="script text-4xl md:text-5xl text-cream">Feitos à mão,</div>
              <h3 className="mt-2 font-display text-3xl md:text-4xl font-bold text-cream text-balance">
                prontos para levar direto para o seu tacho.
              </h3>
              <p className="mt-4 text-cream/85 text-lg">
                Diga-nos o que precisa — preparamos ao seu gosto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* A Loja */}
      <section id="loja" className="bg-cream border-y border-border">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">A nossa casa</div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold text-charcoal text-balance">
              Venha conhecer-nos <span className="script text-primary">nos Parceiros</span>.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Tradição, frescura e qualidade — dos melhores produtores, com cortes perfeitos e sabores únicos.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-5 gap-4">
            <div className="md:col-span-3 rounded-3xl overflow-hidden shadow-[var(--shadow-soft)]">
              <img src={lojaExterior.url} alt="Talho Dois Parceiros — fachada" loading="lazy" className="w-full h-full object-cover aspect-[4/3]" />
            </div>
            <div className="md:col-span-2 rounded-3xl overflow-hidden shadow-[var(--shadow-soft)]">
              <img src={lojaEntrada.url} alt="Entrada da loja" loading="lazy" className="w-full h-full object-cover aspect-[4/3]" />
            </div>
          </div>

          <div className="mt-10 grid sm:grid-cols-4 gap-4">
            {["Tradição", "Frescura e qualidade", "Cortes perfeitos", "Sabores únicos"].map((v) => (
              <div key={v} className="rounded-2xl bg-background border border-border px-5 py-4 text-center">
                <div className="text-primary text-lg">★</div>
                <div className="mt-1 font-display font-bold text-charcoal">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Encomendas */}
      <section id="encomendas" className="bg-charcoal text-cream">
        <div className="mx-auto max-w-5xl px-6 py-24 md:py-32 text-center">
          <div className="text-xs font-semibold tracking-[0.3em] uppercase text-accent">Encomendas</div>
          <h2 className="mt-5 font-display text-4xl md:text-6xl font-bold text-balance">
            Fale connosco pelas <span className="script text-accent">nossas redes sociais</span>.
          </h2>
          <p className="mt-6 text-lg text-cream/75 max-w-2xl mx-auto">
            Pode fazer encomendas diretamente pelo Instagram ou Facebook. Respondemos rapidamente e preparamos tudo ao seu gosto para levantar em loja.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground hover:bg-accent transition-colors shadow-[var(--shadow-warm)]">
              <InstagramIcon /> Encomendar por Instagram
            </a>
            <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-full border-2 border-cream/30 px-8 py-4 font-semibold text-cream hover:bg-cream/10 transition-colors">
              <FacebookIcon /> Encomendar por Facebook
            </a>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-cream/70 text-sm">
            <span className="inline-flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              {ADDRESS}
            </span>
            <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 hover:text-cream transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>
              {PHONE}
            </a>
            <a href={`tel:${PHONE2.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 hover:text-cream transition-colors">
              {PHONE2}
            </a>
          </div>

          <p className="mt-8 text-sm text-cream/50">Respondemos rapidamente nos nossos canais.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-4 gap-12">
          <div>
            <img src={logoAsset.url} alt="Talho Dois Parceiros" className="h-20 w-20 object-contain" />
            <p className="mt-4 text-muted-foreground max-w-xs">
              Talho familiar nos Parceiros, Leiria — carnes frescas, preparados e produtos de qualidade.
            </p>
          </div>
          <div>
            <div className="text-xs font-bold tracking-[0.2em] uppercase text-primary">Onde estamos</div>
            <p className="mt-4 font-display text-xl text-charcoal">Parceiros</p>
            <p className="text-muted-foreground">{ADDRESS}</p>
          </div>
          <div>
            <div className="text-xs font-bold tracking-[0.2em] uppercase text-primary">Contactos</div>
            <div className="mt-4 flex flex-col gap-2">
              <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="font-display text-xl text-charcoal hover:text-primary transition-colors">
                {PHONE}
              </a>
              <a href={`tel:${PHONE2.replace(/\s/g, "")}`} className="font-display text-xl text-charcoal hover:text-primary transition-colors">
                {PHONE2}
              </a>
            </div>
          </div>
          <div>
            <div className="text-xs font-bold tracking-[0.2em] uppercase text-primary">Siga-nos</div>
            <div className="mt-4 flex flex-col gap-2">
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-charcoal hover:text-primary transition-colors">
                <InstagramIcon /> @talhodoisparceiros
              </a>
              <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-charcoal hover:text-primary transition-colors">
                <FacebookIcon /> Talho Dois Parceiros
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-border">
          <div className="mx-auto max-w-7xl px-6 py-6 flex flex-wrap justify-between items-center gap-3 text-xs text-muted-foreground">
            <div>© {new Date().getFullYear()} Talho Dois Parceiros. Todos os direitos reservados.</div>
            <div className="script text-lg text-primary">Com dedicação, desde sempre.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  );
}
function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.51 1.49-3.9 3.78-3.9 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0 0 22 12z"/>
    </svg>
  );
}
