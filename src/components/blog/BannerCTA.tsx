const BannerCTA = () => {
  return (
    <div className="rounded-lg p-6 text-center mx-0 bg-accent" style={{ background: "var(--ts-gradient-gold)" }}>
      <h3 className="text-xl font-bold mb-2 text-primary-foreground">
        Compre sua Tele Sena e concorra a prêmios toda semana!
      </h3>
      <p className="text-sm text-accent-foreground/80 mb-4">
        Realize seus sonhos com a Tele Sena 2026
      </p>
      <a
        href="https://telesena.com.br"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-ts-blue-light transition-colors">
        
        Comprar agora
      </a>
    </div>);

};

export default BannerCTA;