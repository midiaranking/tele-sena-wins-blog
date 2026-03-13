import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Menu, X } from "lucide-react";
import logo from "@/assets/logo-telesena.png";
import { categories } from "@/data/posts";

const BlogHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="sticky top-0 z-50 bg-background ts-shadow">
      <div className="container mx-auto flex items-center justify-between py-3">
        <Link to="/" className="shrink-0">
          <img src={logo} alt="Tele Sena" className="h-10 md:h-12" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center">
          {categories.slice(0, 7).map((cat) => (
            <Link
              key={cat.slug}
              to={`/categoria/${cat.slug}`}
              className="px-3 py-2 text-sm font-medium text-ts-text hover:text-primary transition-colors rounded-lg hover:bg-secondary"
            >
              {cat.name}
            </Link>
          ))}
          <div className="relative group">
            <button className="px-3 py-2 text-sm font-medium text-ts-text hover:text-primary transition-colors rounded-lg hover:bg-secondary">
              Mais ▾
            </button>
            <div className="absolute top-full right-0 mt-1 bg-background rounded-lg ts-shadow border border-border py-2 min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              {categories.slice(7).map((cat) => (
                <Link
                  key={cat.slug}
                  to={`/categoria/${cat.slug}`}
                  className="block px-4 py-2 text-sm text-ts-text hover:text-primary hover:bg-secondary transition-colors"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2">
          {/* Search */}
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Buscar no blog..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-48 lg:w-56 pl-9 pr-3 py-2 rounded-lg border border-border bg-secondary text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          </div>

          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="md:hidden p-2 text-ts-text hover:text-primary transition-colors"
          >
            <Search className="w-5 h-5" />
          </button>

          <a
            href="https://telesena.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center px-5 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded-lg hover:bg-ts-blue-light transition-colors"
          >
            Compre sua Tele Sena
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-ts-text"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile search */}
      {searchOpen && (
        <div className="md:hidden px-4 pb-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar no blog..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 rounded-lg border border-border bg-secondary text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container mx-auto py-4 flex flex-col gap-1">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                to={`/categoria/${cat.slug}`}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-2.5 text-sm font-medium text-ts-text hover:text-primary hover:bg-secondary rounded-lg transition-colors"
              >
                {cat.name}
              </Link>
            ))}
            <a
              href="https://telesena.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 mx-4 text-center px-5 py-3 bg-primary text-primary-foreground text-sm font-semibold rounded-lg"
            >
              Compre sua Tele Sena
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default BlogHeader;
