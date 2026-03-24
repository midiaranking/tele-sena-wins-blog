import { Link } from "react-router-dom";
import { Instagram, Youtube, Facebook } from "lucide-react";
import logo from "@/assets/logo-telesena.png";
import logoGSS from "@/assets/logo-gss.png";
import logoLideranca from "@/assets/logo-lideranca.png";

const BlogFooter = () => {
  return (
    <>
      <footer className="bg-primary text-primary-foreground">
        <div className="container mx-auto py-12 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo centered */}
            <div className="col-span-1 md:col-span-2 lg:col-span-4 flex justify-center mb-6">
              <img src={logo} alt="Tele Sena" className="h-14" />
            </div>

            {/* About + Social + CTA */}
            <div>
              <p className="text-sm opacity-80 leading-relaxed">
                Blog da Tele Sena - Dicas e ideias para melhorar sua vida financeira, planejar o futuro e realizar seus sonhos.
              </p>
              <div className="flex gap-3 mt-5">
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
              <a
                href="https://telesena.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-5 px-6 py-3 bg-accent text-accent-foreground text-sm font-bold rounded-full hover:brightness-110 transition"
              >
                Compre sua Tele Sena
              </a>
            </div>

            {/* Termos do site */}
            <div>
              <h3 className="font-bold text-sm uppercase tracking-wider mb-4">Termos do Site</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm opacity-80 hover:opacity-100 hover:underline transition-opacity">Termos de Uso</a></li>
                <li><a href="#" className="text-sm opacity-80 hover:opacity-100 hover:underline transition-opacity">Política de Privacidade</a></li>
                <li><a href="#" className="text-sm opacity-80 hover:opacity-100 hover:underline transition-opacity">Política de Cookies</a></li>
                <li><a href="#" className="text-sm opacity-80 hover:opacity-100 hover:underline transition-opacity">Termos Legais</a></li>
                <li><a href="#" className="text-sm opacity-80 hover:opacity-100 hover:underline transition-opacity">Condições Gerais</a></li>
              </ul>
            </div>

            {/* Institucional + Ajuda */}
            <div>
              <h3 className="font-bold text-sm uppercase tracking-wider mb-4">Institucional</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm opacity-80 hover:opacity-100 hover:underline transition-opacity">As Tele Senas</a></li>
                <li><a href="#" className="text-sm opacity-80 hover:opacity-100 hover:underline transition-opacity">Assessoria de Imprensa</a></li>
                <li><Link to="/equipe" className="text-sm opacity-80 hover:opacity-100 hover:underline transition-opacity">Equipe Tele Sena</Link></li>
              </ul>
              <h3 className="font-bold text-sm uppercase tracking-wider mt-6 mb-4">Precisa de Ajuda?</h3>
              <ul className="space-y-2">
                <li><a href="https://atendimento.telesena.com.br/#/" target="_blank" rel="noopener noreferrer" className="text-sm opacity-80 hover:opacity-100 hover:underline transition-opacity">Acesse a Central de Atendimento</a></li>
              </ul>
            </div>

            {/* Contato */}
            <div>
              <h3 className="font-bold text-sm uppercase tracking-wider mb-4">Contato</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li>SAC: 0800-7010319</li>
                <li>Ouvidoria: 0800-7715936</li>
              </ul>
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
          <div className="flex items-center justify-center gap-10 mb-8">
            <div className="text-center">
              <img src={logoGSS} alt="Grupo Silvio Santos" className="h-12 brightness-0 invert" />
            </div>
            <div className="text-center">
              <img src={logoLideranca} alt="Liderança Capitalização S/A" className="h-10 brightness-0 invert" />
            </div>
          </div>
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
