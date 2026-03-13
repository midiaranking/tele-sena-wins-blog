import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo-telesena.png";

interface MenuItem {
  name: string;
  slug?: string;
  href?: string;
}

interface MenuGroup {
  label: string;
  items: MenuItem[];
}

const menuGroups: MenuGroup[] = [
  {
    label: "Tele Sena",
    items: [
      { name: "Conheça Tele Sena", href: "https://www.telesena.com.br/conheca-as-telesenas" },
      { name: "Concorrer a Prêmios", href: "https://www.telesena.com.br/comprar" },
      { name: "Realizar um Sonho", href: "https://www.telesena.com.br/" },
      { name: "Contato", href: "https://atendimento.telesena.com.br/#/" },
    ],
  },
  {
    label: "Quite Dívidas",
    items: [
      { name: "Pagar as Contas", slug: "pagar-as-contas" },
      { name: "Sair das Dívidas", slug: "sair-das-dividas" },
    ],
  },
  {
    label: "Ganhe Mais",
    items: [
      { name: "Ganhar Dinheiro", slug: "ganhar-dinheiro" },
    ],
  },
  {
    label: "Economize",
    items: [
      { name: "Organizar as Finanças", slug: "organizar-as-financas" },
      { name: "Guardar Dinheiro", slug: "guardar-dinheiro" },
    ],
  },
  {
    label: "Invista",
    items: [
      { name: "Começar a Investir", slug: "comecar-a-investir" },
    ],
  },
  {
    label: "Planeje",
    items: [
      { name: "Planejar o Futuro", slug: "planejar-o-futuro" },
    ],
  },
];

const MenuItemLink = ({ item, className, onClick }: { item: MenuItem; className?: string; onClick?: () => void }) => {
  if (item.href) {
    return (
      <a href={item.href} target="_blank" rel="noopener noreferrer" className={className} onClick={onClick}>
        {item.name}
      </a>
    );
  }
  return (
    <Link to={`/categoria/${item.slug}`} className={className} onClick={onClick}>
      {item.name}
    </Link>
  );
};

const BlogHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="sticky top-0 z-50 bg-background">
      {/* Top row */}
      <div className="container mx-auto flex items-center justify-between py-4 gap-6">
        <Link to="/" className="shrink-0">
          <img src={logo} alt="Tele Sena" className="h-10 md:h-14" />
        </Link>

        <div className="hidden md:flex flex-1 max-w-xl relative">
          <div className="flex items-center w-full bg-secondary rounded-full border border-border overflow-hidden">
            <Search className="ml-4 w-5 h-5 text-primary shrink-0" />
            <input
              type="text"
              placeholder="O que você está procurando? Busque aqui!"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3 py-3 bg-transparent text-sm focus:outline-none placeholder:text-muted-foreground"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            <Search className="w-5 h-5" />
          </button>
          <a
            href="https://telesena.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center px-6 py-3 bg-primary text-primary-foreground text-sm font-semibold rounded-full hover:bg-ts-blue-light transition-colors"
          >
            Compre sua Tele Sena
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile search */}
      {searchOpen && (
        <div className="md:hidden px-4 pb-3">
          <div className="flex items-center w-full bg-secondary rounded-full border border-border overflow-hidden">
            <Search className="ml-4 w-5 h-5 text-primary shrink-0" />
            <input
              type="text"
              placeholder="Buscar no blog..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3 py-2.5 bg-transparent text-sm focus:outline-none"
            />
          </div>
        </div>
      )}

      {/* Bottom row: grouped nav */}
      <div className="hidden lg:block border-t border-border">
        <nav className="container mx-auto flex items-center justify-center gap-1 py-2">
          {menuGroups.map((group) =>
            group.items.length === 1 ? (
              <Link
                key={group.label}
                to={`/categoria/${group.items[0].slug}`}
                className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {group.label}
              </Link>
            ) : (
              <div key={group.label} className="relative group">
                <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
                  {group.label} <ChevronDown className="w-3.5 h-3.5" />
                </button>
                <div className="absolute top-full left-0 mt-1 bg-background rounded-xl ts-shadow border border-border py-2 min-w-[220px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                  {group.items.map((item) => (
                    <Link
                      key={item.slug}
                      to={`/categoria/${item.slug}`}
                      className="block px-5 py-2.5 text-sm text-foreground hover:text-primary hover:bg-secondary transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            )
          )}
        </nav>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container mx-auto py-4 flex flex-col gap-1">
            {menuGroups.map((group) => (
              <div key={group.label}>
                <div className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  {group.label}
                </div>
                {group.items.map((item) => (
                  <Link
                    key={item.slug}
                    to={`/categoria/${item.slug}`}
                    onClick={() => setMobileOpen(false)}
                    className="block px-6 py-2.5 text-sm font-medium text-foreground hover:text-primary hover:bg-secondary rounded-lg transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            ))}
            <a
              href="https://telesena.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 mx-4 text-center px-5 py-3 bg-primary text-primary-foreground text-sm font-semibold rounded-full"
            >
              Compre sua Tele Sena
            </a>
          </nav>
        </div>
      )}

      <div className="h-px bg-border shadow-sm" />
    </header>
  );
};

export default BlogHeader;
