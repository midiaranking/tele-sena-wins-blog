import { Link } from "react-router-dom";
import { Instagram, Youtube, Facebook } from "lucide-react";
import logo from "@/assets/logo-telesena.png";
import { categories } from "@/data/posts";

const BlogFooter = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & about */}
          <div>
            <img src={logo} alt="Tele Sena" className="h-10 mb-4 brightness-0 invert" />
            <p className="text-sm opacity-80 leading-relaxed">
              Blog da Tele Sena — dicas de educação financeira, renda extra e tudo sobre a Tele Sena para você realizar seus sonhos.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Categorias</h3>
            <ul className="space-y-2">
              {categories.slice(0, 5).map((cat) => (
                <li key={cat.slug}>
                  <Link
                    to={`/categoria/${cat.slug}`}
                    className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Mais Categorias</h3>
            <ul className="space-y-2">
              {categories.slice(5).map((cat) => (
                <li key={cat.slug}>
                  <Link
                    to={`/categoria/${cat.slug}`}
                    className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Redes Sociais</h3>
            <div className="flex gap-3 mb-6">
              <a href="#" className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors" aria-label="YouTube">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
            <h3 className="font-semibold text-lg mb-3">Sobre a Tele Sena</h3>
            <p className="text-sm opacity-80">A Tele Sena é um título de capitalização que oferece sorteios semanais com prêmios incríveis.</p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-10 pt-6 text-center">
          <p className="text-sm opacity-70">© 2026 Tele Sena. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default BlogFooter;
