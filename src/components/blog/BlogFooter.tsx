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

    {/* Disclaimer legal */}
    <div className="bg-primary/90 text-primary-foreground">
      <div className="container mx-auto py-10 px-4">
        {/* Logos */}
        <div className="flex items-center justify-center gap-10 mb-8">
          <div className="text-center">
            <div className="text-3xl font-bold leading-none tracking-tight">S</div>
            <div className="text-[10px] uppercase tracking-widest mt-1 opacity-80">Grupo<br/>Silvio Santos</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold tracking-tight">liderança</div>
            <div className="text-[10px] opacity-80">capitalização s/a</div>
          </div>
        </div>

        {/* Legal text */}
        <div className="text-xs leading-relaxed opacity-85 max-w-5xl mx-auto space-y-4">
          <p>
            <strong>Liderança Capitalização S.A. CNPJ N° 60.853.264/0001-10</strong> | Títulos de Capitalização | Modalidade: Popular | Planos de Pagamento Único | Prazo de carência e de vigência: 12 meses | Não é permitido o resgate antecipado do título, exceto nas hipóteses estabelecidas nas Condições Gerais. Datas de sorteio conforme especificadas nos títulos. O titular sempre terá direito ao recebimento do prêmio em dinheiro. Antes de contratar, consulte previamente as Condições Gerais do título de capitalização. É proibida a venda de título de capitalização a menores de dezesseis anos. SAC 0800-7010319. Ouvidoria 0800-7715936. <strong>Se os valores não forem resgatados dentro do prazo prescricional, o titular do direito de resgate perderá esse direito.</strong> É vedada a cessão do direito de participação no sorteio e do direito de resgate. Ao adquirir estes títulos o Titular concorrerá aos sorteios neles previstos e, após 12 meses, poderá resgatá-los, recebendo de volta 50% do valor pago, atualizado pela TR e por juros de 0,16% ao mês, correspondente ao valor constituído na provisão matemática de resgate. Os bens representam sugestão de utilização do prêmio. Os prêmios serão pagos em dinheiro. Prêmios Líquidos.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div>
              <p><strong>Tele Sena de Carnaval:</strong></p>
              <p>Valor R$ 16,00</p>
              <p>Aprovação Proc. SUSEP nº 15414.665722/2025-86.</p>
              <p>Percentuais de capitalização e sorteio são de 50,0000% e 10,3098%, respectivamente.</p>
            </div>
            <div>
              <p><strong>Tele Sena Semanal Edição 95:</strong></p>
              <p>Valor R$ 5,00</p>
              <p>Aprovação Proc. SUSEP nº 15414.625712/2025-16.</p>
              <p>Percentuais de capitalização e sorteio são de 50,0000% e 12,8381%, respectivamente.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default BlogFooter;
