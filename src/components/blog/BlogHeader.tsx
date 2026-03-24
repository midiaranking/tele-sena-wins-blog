import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo-telesena.png";
import { categories } from "@/data/posts";

const BlogHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="sticky top-0 z-50 bg-background">
      {/* Top row */}
      <div className="container mx-auto flex items-center justify-between py-4 gap-4">
        <Link to="/" className="shrink-0">
          <img src={logo} alt="Tele Sena" className="h-14 md:h-16" />
        </Link>

        {/* Search */}
        <div className="flex flex-1 max-w-xl relative">
          <div className="flex items-center w-full bg-secondary rounded-full border border-border overflow-hidden">
            <Search className="ml-3 md:ml-4 w-4 h-4 md:w-5 md:h-5 text-primary shrink-0" />
            <input
              type="text"
              placeholder="O que você quer aprender hoje?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-2 md:px-3 py-2.5 md:py-3 bg-transparent text-sm focus:outline-none placeholder:text-muted-foreground"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
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

      {/* Bottom row: category nav with subcategory dropdowns */}
      <div className="hidden lg:block border-t border-border">
        <nav className="container mx-auto flex items-center justify-center gap-1 py-2">
          {categories.map((cat) => (
            <div key={cat.slug} className="relative group">
              <Link
                to={`/categoria/${cat.slug}`}
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {cat.name} <ChevronDown className="w-3.5 h-3.5" />
              </Link>
              <div className="absolute top-full left-0 mt-1 bg-background rounded-xl ts-shadow border border-border py-2 min-w-[220px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                {cat.subcategories.map((sub) => (
                  <Link
                    key={sub.slug}
                    to={`/categoria/${cat.slug}/${sub.slug}`}
                    className="block px-5 py-2.5 text-sm text-foreground hover:text-primary hover:bg-secondary transition-colors"
                  >
                    {sub.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {/* External links */}
          <a
            href="https://atendimento.telesena.com.br/#/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Contato
          </a>
        </nav>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container mx-auto py-4 flex flex-col gap-1">
            {categories.map((cat) => (
              <div key={cat.slug}>
                <Link
                  to={`/categoria/${cat.slug}`}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-2 text-sm font-semibold text-foreground hover:text-primary"
                >
                  {cat.name}
                </Link>
                {cat.subcategories.map((sub) => (
                  <Link
                    key={sub.slug}
                    to={`/categoria/${cat.slug}/${sub.slug}`}
                    onClick={() => setMobileOpen(false)}
                    className="block px-8 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {sub.name}
                  </Link>
                ))}
              </div>
            ))}
            <a
              href="https://atendimento.telesena.com.br/#/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-2 text-sm font-semibold text-foreground hover:text-primary"
            >
              Contato
            </a>
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
