import heroImg from "@/assets/hero-1.jpg";
import financasImg from "@/assets/post-financas.jpg";
import rendaExtraImg from "@/assets/post-renda-extra.jpg";
import guardarImg from "@/assets/post-guardar-dinheiro.jpg";
import dividasImg from "@/assets/post-dividas.jpg";
import premiosImg from "@/assets/post-premios.jpg";
import sonhoImg from "@/assets/post-sonho.jpg";
import organizarImg from "@/assets/post-organizar.jpg";
import investirImg from "@/assets/post-investir.jpg";
import futuroImg from "@/assets/post-futuro.jpg";
import contasImg from "@/assets/post-contas.jpg";

export interface Category {
  slug: string;
  name: string;
  description: string;
}

export interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  categorySlug: string;
  date: string;
  readTime: string;
  author: string;
  featured?: boolean;
}

export const categories: Category[] = [
  { slug: "entender-a-tele-sena", name: "Entender a Tele Sena", description: "O que é, como funciona, regras, histórico, diferenças entre edições, dúvidas frequentes" },
  { slug: "pagar-as-contas", name: "Pagar as Contas", description: "Organizar boletos, priorizar contas, evitar juros, contas essenciais vs extras" },
  { slug: "sair-das-dividas", name: "Sair das Dívidas", description: "Quitação, negociação, Feirão Serasa, PROCON, Desenrola Brasil" },
  { slug: "ganhar-dinheiro", name: "Ganhar Dinheiro", description: "Renda extra, bicos, freelas, negócios com baixo investimento" },
  { slug: "concorrer-a-premios", name: "Concorrer a Prêmios", description: "Sorteios ativos, como participar, calendário de premiações, resultados" },
  { slug: "realizar-um-sonho", name: "Realizar um Sonho", description: "Histórias de ganhadores, metas pessoais, planejamento para conquistas" },
  { slug: "organizar-as-financas", name: "Organizar as Finanças", description: "Orçamento doméstico, planilhas, apps, método dos envelopes, 50-30-20" },
  { slug: "guardar-dinheiro", name: "Guardar Dinheiro", description: "Poupança, desafios de economia, reserva de emergência, dicas de corte de gastos" },
  { slug: "comecar-a-investir", name: "Começar a Investir", description: "Poupança, CDB, Tesouro Direto, renda fixa acessível para iniciantes" },
  { slug: "planejar-o-futuro", name: "Planejar o Futuro", description: "Aposentadoria, previdência, educação dos filhos, objetivos de longo prazo" },
];

export const posts: Post[] = [
  {
    id: "1",
    slug: "tele-sena-2026-como-funciona",
    title: "Tele Sena 2026: como funciona, sorteios e tudo que você precisa saber",
    excerpt: "Entenda como funciona a Tele Sena, quais são os sorteios disponíveis e como você pode concorrer a prêmios incríveis em 2026.",
    content: `<p>A Tele Sena é um dos produtos mais queridos do Brasil, oferecendo a chance de concorrer a prêmios incríveis todas as semanas. Neste artigo, vamos explicar tudo sobre como funciona a Tele Sena em 2026.</p>
<h2>O que é a Tele Sena?</h2>
<p>A Tele Sena é um título de capitalização que oferece sorteios semanais com prêmios em dinheiro. Além de concorrer a prêmios, você também forma uma reserva financeira que pode ser resgatada após o período de vigência.</p>
<h2>Como participar dos sorteios?</h2>
<p>Para participar, basta adquirir sua Tele Sena em pontos de venda autorizados ou pela internet. Cada título dá direito a participar de todos os sorteios da série correspondente.</p>
<div class="highlight-tip"><strong>💡 Dica:</strong> Confira sempre o calendário de sorteios para não perder nenhuma data importante!</div>
<h2>Tipos de sorteio</h2>
<p>A Tele Sena oferece diferentes modalidades de sorteio, incluindo sorteios semanais, mensais e especiais. Cada edição traz novidades e prêmios diferenciados.</p>
<div class="highlight-info"><strong>ℹ️ Informação:</strong> Os resultados são divulgados durante o programa Silvio Santos no SBT.</div>
<h2>Dicas para acompanhar seus resultados</h2>
<p>Você pode conferir os resultados pelo site oficial, pelo app da Tele Sena ou durante as transmissões ao vivo. Mantenha seu título sempre em mãos para conferir os números sorteados.</p>`,
    image: heroImg,
    category: "Entender a Tele Sena",
    categorySlug: "entender-a-tele-sena",
    date: "12 Mar 2026",
    readTime: "8 min",
    author: "Equipe Tele Sena",
    featured: true,
  },
  {
    id: "2",
    slug: "10-formas-ganhar-renda-extra",
    title: "10 formas de ganhar renda extra sem sair de casa em 2026",
    excerpt: "Descubra maneiras práticas e acessíveis de complementar sua renda trabalhando de casa, com dicas para todos os perfis.",
    content: `<p>Ganhar uma renda extra é o desejo de muitos brasileiros. A boa notícia é que existem diversas formas de conseguir isso sem precisar sair de casa.</p>
<h2>1. Venda de produtos artesanais</h2>
<p>Se você tem habilidades manuais, pode criar e vender produtos artesanais por marketplaces online.</p>
<h2>2. Freelancing digital</h2>
<p>Plataformas como 99Freelas e Workana conectam profissionais a clientes que precisam de serviços diversos.</p>
<div class="highlight-tip"><strong>💡 Dica:</strong> Comece oferecendo serviços que você já sabe fazer bem. Com o tempo, diversifique!</div>
<h2>3. Revenda de produtos</h2>
<p>A revenda de cosméticos, roupas e acessórios continua sendo uma excelente fonte de renda extra.</p>`,
    image: rendaExtraImg,
    category: "Ganhar Dinheiro",
    categorySlug: "ganhar-dinheiro",
    date: "10 Mar 2026",
    readTime: "6 min",
    author: "Equipe Tele Sena",
    featured: true,
  },
  {
    id: "3",
    slug: "desafio-52-semanas-guardar-dinheiro",
    title: "Desafio das 52 semanas: como guardar mais de R$ 1.300 por ano",
    excerpt: "Conheça o método simples que ajuda milhares de brasileiros a economizar mais de mil reais por ano, começando com apenas R$ 1.",
    content: `<p>O Desafio das 52 Semanas é um método popular de economia que funciona de forma progressiva.</p>
<h2>Como funciona?</h2>
<p>Na primeira semana, você guarda R$ 1. Na segunda, R$ 2. Na terceira, R$ 3. E assim por diante, até a semana 52, quando você guarda R$ 52.</p>
<div class="highlight-tip"><strong>💡 Dica:</strong> Use um cofre ou conta separada para não gastar o dinheiro guardado!</div>`,
    image: guardarImg,
    category: "Guardar Dinheiro",
    categorySlug: "guardar-dinheiro",
    date: "8 Mar 2026",
    readTime: "5 min",
    author: "Equipe Tele Sena",
    featured: true,
  },
  {
    id: "4",
    slug: "negociar-dividas-feirao-serasa",
    title: "Como negociar dívidas pelo Feirão Serasa: passo a passo",
    excerpt: "Aprenda como aproveitar o Feirão Serasa para quitar suas dívidas com descontos que podem chegar a 90%.",
    content: `<p>O Feirão Serasa é uma das melhores oportunidades para quem quer limpar o nome e recomeçar com as finanças em dia.</p>`,
    image: dividasImg,
    category: "Sair das Dívidas",
    categorySlug: "sair-das-dividas",
    date: "6 Mar 2026",
    readTime: "7 min",
    author: "Equipe Tele Sena",
  },
  {
    id: "5",
    slug: "calendario-sorteios-tele-sena-2026",
    title: "Calendário de sorteios Tele Sena 2026: todas as datas",
    excerpt: "Confira todas as datas dos sorteios da Tele Sena em 2026 e não perca nenhuma chance de ganhar.",
    content: `<p>Fique por dentro de todas as datas de sorteios da Tele Sena em 2026.</p>`,
    image: premiosImg,
    category: "Concorrer a Prêmios",
    categorySlug: "concorrer-a-premios",
    date: "5 Mar 2026",
    readTime: "4 min",
    author: "Equipe Tele Sena",
  },
  {
    id: "6",
    slug: "investir-30-reais-tesouro-direto",
    title: "Como começar a investir com R$ 30 por mês no Tesouro Direto",
    excerpt: "Investir não é só para quem tem muito dinheiro. Veja como começar com apenas R$ 30 e fazer seu dinheiro render.",
    content: `<p>O Tesouro Direto é uma das formas mais acessíveis de investir no Brasil.</p>`,
    image: investirImg,
    category: "Começar a Investir",
    categorySlug: "comecar-a-investir",
    date: "4 Mar 2026",
    readTime: "6 min",
    author: "Equipe Tele Sena",
  },
  {
    id: "7",
    slug: "metodo-envelopes-financas",
    title: "Método dos envelopes: organize suas finanças de forma simples",
    excerpt: "Aprenda o método dos envelopes, uma técnica prática para controlar gastos e organizar seu orçamento mensal.",
    content: `<p>O método dos envelopes é uma das formas mais simples e eficazes de controlar suas finanças.</p>`,
    image: organizarImg,
    category: "Organizar as Finanças",
    categorySlug: "organizar-as-financas",
    date: "3 Mar 2026",
    readTime: "5 min",
    author: "Equipe Tele Sena",
  },
  {
    id: "8",
    slug: "5-contas-priorizar-salario-curto",
    title: "5 contas para priorizar quando o salário é curto",
    excerpt: "Quando o dinheiro não dá para tudo, saiba quais contas pagar primeiro para evitar problemas maiores.",
    content: `<p>Priorizar contas é essencial quando o orçamento está apertado.</p>`,
    image: contasImg,
    category: "Pagar as Contas",
    categorySlug: "pagar-as-contas",
    date: "2 Mar 2026",
    readTime: "4 min",
    author: "Equipe Tele Sena",
  },
  {
    id: "9",
    slug: "ganhou-tele-sena-casa-propria",
    title: "Ela ganhou a Tele Sena e realizou o sonho da casa própria",
    excerpt: "Conheça a história de Maria, que ganhou na Tele Sena e conseguiu comprar a casa dos seus sonhos.",
    content: `<p>Maria sempre sonhou em ter sua casa própria. Com o prêmio da Tele Sena, esse sonho se tornou realidade.</p>`,
    image: sonhoImg,
    category: "Realizar um Sonho",
    categorySlug: "realizar-um-sonho",
    date: "1 Mar 2026",
    readTime: "5 min",
    author: "Equipe Tele Sena",
  },
  {
    id: "10",
    slug: "planejar-aposentadoria-comecando-tarde",
    title: "Como planejar a aposentadoria mesmo começando tarde",
    excerpt: "Nunca é tarde para começar a planejar sua aposentadoria. Veja estratégias práticas para quem está começando agora.",
    content: `<p>Muitas pessoas acham que é tarde demais para planejar a aposentadoria, mas isso não é verdade.</p>`,
    image: futuroImg,
    category: "Planejar o Futuro",
    categorySlug: "planejar-o-futuro",
    date: "28 Fev 2026",
    readTime: "7 min",
    author: "Equipe Tele Sena",
  },
  {
    id: "11",
    slug: "como-funciona-orcamento-50-30-20",
    title: "Como funciona o orçamento 50-30-20 e como aplicar no seu dia a dia",
    excerpt: "O método 50-30-20 é uma regra simples para dividir seu salário entre necessidades, desejos e investimentos.",
    content: `<p>O método 50-30-20 é uma das formas mais populares de organizar o orçamento pessoal.</p>`,
    image: financasImg,
    category: "Organizar as Finanças",
    categorySlug: "organizar-as-financas",
    date: "25 Fev 2026",
    readTime: "6 min",
    author: "Equipe Tele Sena",
  },
  // --- Ganhar Dinheiro ---
  {
    id: "12",
    slug: "como-vender-pelo-instagram",
    title: "Como vender pelo Instagram e faturar de casa em 2026",
    excerpt: "O Instagram é uma das maiores vitrines digitais do Brasil. Aprenda a montar sua loja e começar a vender hoje.",
    content: `<p>Vender pelo Instagram se tornou uma das formas mais acessíveis de empreender no Brasil.</p>
<h2>Monte seu perfil comercial</h2>
<p>O primeiro passo é converter sua conta para um perfil comercial. Isso libera recursos como métricas, botões de contato e a loja integrada.</p>
<div class="highlight-tip"><strong>💡 Dica:</strong> Use fotos bem iluminadas e descrições detalhadas para aumentar suas vendas!</div>
<h2>Estratégias de conteúdo</h2>
<p>Poste com regularidade, use Reels para alcançar mais pessoas e abuse dos Stories para criar conexão com seus seguidores.</p>
<h2>Meios de pagamento</h2>
<p>Ofereça Pix, cartão e boleto para facilitar a compra. Plataformas como Mercado Pago e PagSeguro ajudam na gestão.</p>`,
    image: rendaExtraImg,
    category: "Ganhar Dinheiro",
    categorySlug: "ganhar-dinheiro",
    date: "24 Fev 2026",
    readTime: "7 min",
    author: "Equipe Tele Sena",
  },
  {
    id: "13",
    slug: "apps-para-ganhar-dinheiro",
    title: "7 apps para ganhar dinheiro no celular em 2026",
    excerpt: "Conheça aplicativos confiáveis que pagam por tarefas simples, pesquisas e cashback nas compras do dia a dia.",
    content: `<p>Seu celular pode ser uma ferramenta poderosa para gerar renda extra. Confira os melhores apps disponíveis.</p>
<h2>1. Kwai e TikTok</h2>
<p>Essas plataformas pagam por visualizações e engajamento em vídeos curtos. Quanto mais você publica, mais ganha.</p>
<h2>2. Méliuz e Picpay</h2>
<p>Receba cashback em compras online e em lojas físicas parceiras.</p>
<div class="highlight-info"><strong>ℹ️ Informação:</strong> Sempre verifique a reputação do app antes de fornecer dados pessoais.</div>
<h2>3. 99Freelas</h2>
<p>Ideal para quem tem habilidades em redação, design, programação ou tradução.</p>`,
    image: financasImg,
    category: "Ganhar Dinheiro",
    categorySlug: "ganhar-dinheiro",
    date: "20 Fev 2026",
    readTime: "5 min",
    author: "Equipe Tele Sena",
  },
  {
    id: "14",
    slug: "renda-extra-fim-de-semana",
    title: "Como conseguir renda extra nos fins de semana: 8 ideias práticas",
    excerpt: "Use seus fins de semana livres para ganhar um dinheiro extra com atividades simples e lucrativas.",
    content: `<p>Se você tem os fins de semana livres, existem várias formas de transformar esse tempo em dinheiro.</p>
<h2>Entregas por aplicativo</h2>
<p>Apps como iFood, Rappi e Uber Eats permitem que você trabalhe apenas nos horários que quiser.</p>
<h2>Brechó e vendas de garagem</h2>
<p>Reúna itens que você não usa mais e organize uma venda. O que sobrar pode ir para marketplaces online.</p>
<div class="highlight-tip"><strong>💡 Dica:</strong> Comece vendendo o que você já tem em casa antes de investir em produtos novos!</div>`,
    image: guardarImg,
    category: "Ganhar Dinheiro",
    categorySlug: "ganhar-dinheiro",
    date: "18 Fev 2026",
    readTime: "6 min",
    author: "Equipe Tele Sena",
  },
  // --- Sair das Dívidas ---
  {
    id: "15",
    slug: "como-sair-do-cheque-especial",
    title: "Como sair do cheque especial: guia completo para se livrar dessa armadilha",
    excerpt: "O cheque especial cobra juros altíssimos. Veja estratégias para trocar essa dívida por opções mais baratas.",
    content: `<p>O cheque especial é uma das modalidades de crédito mais caras do Brasil, com juros que podem ultrapassar 300% ao ano.</p>
<h2>Por que o cheque especial é tão perigoso?</h2>
<p>Ele é fácil de acessar, mas os juros compostos fazem a dívida crescer rapidamente.</p>
<div class="highlight-alert"><strong>⚠️ Alerta:</strong> Se você usa o cheque especial todo mês, sua dívida pode dobrar em menos de um ano!</div>
<h2>Estratégias para sair</h2>
<p>1. Faça um empréstimo pessoal com juros menores para quitar o cheque especial.</p>
<p>2. Negocie diretamente com o banco — muitos oferecem condições especiais.</p>
<p>3. Use o Desenrola Brasil para conseguir descontos significativos.</p>`,
    image: dividasImg,
    category: "Sair das Dívidas",
    categorySlug: "sair-das-dividas",
    date: "22 Fev 2026",
    readTime: "6 min",
    author: "Equipe Tele Sena",
  },
  {
    id: "16",
    slug: "desenrola-brasil-como-funciona",
    title: "Desenrola Brasil 2026: como funciona e quem pode participar",
    excerpt: "O programa do governo federal ajuda milhões de brasileiros a renegociar dívidas com descontos. Saiba como participar.",
    content: `<p>O Desenrola Brasil é um programa federal criado para ajudar brasileiros endividados a renegociar suas dívidas com condições especiais.</p>
<h2>Quem pode participar?</h2>
<p>Pessoas com dívidas de até R$ 20.000 registradas em birôs de crédito como Serasa e SPC.</p>
<div class="highlight-info"><strong>ℹ️ Informação:</strong> O programa oferece descontos de até 96% sobre o valor total da dívida!</div>
<h2>Como aderir</h2>
<p>Acesse o site oficial do Desenrola ou vá a uma agência do Banco do Brasil com seus documentos.</p>
<h2>Dívidas que podem ser negociadas</h2>
<p>Cartão de crédito, empréstimos, financiamentos, contas de serviços e muito mais.</p>`,
    image: contasImg,
    category: "Sair das Dívidas",
    categorySlug: "sair-das-dividas",
    date: "19 Fev 2026",
    readTime: "7 min",
    author: "Equipe Tele Sena",
  },
  {
    id: "17",
    slug: "5-erros-ao-tentar-sair-das-dividas",
    title: "5 erros comuns ao tentar sair das dívidas (e como evitá-los)",
    excerpt: "Muita gente tenta quitar dívidas mas acaba piorando a situação. Conheça os erros mais frequentes.",
    content: `<p>Sair das dívidas exige planejamento. Sem ele, você pode cair em armadilhas que pioram sua situação financeira.</p>
<h2>1. Fazer novas dívidas para pagar as antigas</h2>
<p>Trocar uma dívida cara por outra mais barata faz sentido, mas acumular mais dívidas, não.</p>
<h2>2. Ignorar os juros</h2>
<p>Pagar apenas o mínimo do cartão faz a dívida crescer exponencialmente.</p>
<div class="highlight-alert"><strong>⚠️ Alerta:</strong> Os juros do rotativo do cartão chegam a 400% ao ano!</div>
<h2>3. Não ter um plano de pagamento</h2>
<p>Defina prioridades: quite primeiro as dívidas com juros mais altos.</p>`,
    image: organizarImg,
    category: "Sair das Dívidas",
    categorySlug: "sair-das-dividas",
    date: "15 Fev 2026",
    readTime: "5 min",
    author: "Equipe Tele Sena",
  },
  // --- Pagar as Contas ---
  {
    id: "18",
    slug: "como-reduzir-conta-de-luz",
    title: "10 dicas para reduzir a conta de luz e economizar todo mês",
    excerpt: "A conta de luz pesa no orçamento? Veja medidas simples que podem reduzir seu gasto em até 30%.",
    content: `<p>A conta de energia elétrica é uma das maiores despesas fixas das famílias brasileiras. Mas com algumas mudanças simples, é possível economizar bastante.</p>
<h2>1. Troque lâmpadas por LED</h2>
<p>Lâmpadas LED consomem até 80% menos energia que as incandescentes.</p>
<h2>2. Desligue aparelhos da tomada</h2>
<p>Equipamentos em standby continuam consumindo energia. Desconecte-os quando não estiver usando.</p>
<div class="highlight-tip"><strong>💡 Dica:</strong> Use réguas com interruptor para desligar vários aparelhos de uma vez!</div>
<h2>3. Use a tarifa social</h2>
<p>Famílias de baixa renda podem ter desconto de até 65% na conta de luz pelo programa Tarifa Social.</p>`,
    image: contasImg,
    category: "Pagar as Contas",
    categorySlug: "pagar-as-contas",
    date: "21 Fev 2026",
    readTime: "5 min",
    author: "Equipe Tele Sena",
  },
  {
    id: "19",
    slug: "contas-atrasadas-o-que-fazer",
    title: "Contas atrasadas: o que fazer primeiro para não virar uma bola de neve",
    excerpt: "Se suas contas estão atrasadas, saiba quais priorizar e como evitar que a situação saia do controle.",
    content: `<p>Quando as contas começam a atrasar, é fácil entrar em pânico. Mas com organização, é possível retomar o controle.</p>
<h2>Priorize contas essenciais</h2>
<p>Aluguel, energia e água devem vir primeiro, pois podem gerar cortes de serviço.</p>
<div class="highlight-alert"><strong>⚠️ Alerta:</strong> Contas como IPTU e condomínio podem levar a ações judiciais se não forem pagas!</div>
<h2>Negocie com credores</h2>
<p>Entre em contato com as empresas e peça parcelamento ou desconto para pagamento à vista.</p>
<h2>Monte um calendário de pagamentos</h2>
<p>Organize todas as datas de vencimento em uma planilha ou app para não esquecer nenhuma conta.</p>`,
    image: dividasImg,
    category: "Pagar as Contas",
    categorySlug: "pagar-as-contas",
    date: "17 Fev 2026",
    readTime: "6 min",
    author: "Equipe Tele Sena",
  },
  {
    id: "20",
    slug: "como-organizar-boletos-mensais",
    title: "Como organizar seus boletos mensais e nunca mais pagar juros",
    excerpt: "Aprenda a criar um sistema simples para controlar todos os seus boletos e evitar multas por atraso.",
    content: `<p>Pagar juros por atraso é jogar dinheiro fora. Com um sistema simples de organização, você evita esse problema.</p>
<h2>Use um app de controle financeiro</h2>
<p>Apps como Mobills, Organizze e Guiabolso ajudam a cadastrar contas e enviam lembretes de vencimento.</p>
<h2>Concentre vencimentos</h2>
<p>Ligue para as empresas e peça para alterar a data de vencimento para próximo ao dia do pagamento.</p>
<div class="highlight-tip"><strong>💡 Dica:</strong> Tente concentrar todas as contas entre os dias 5 e 10 do mês, logo após o pagamento!</div>`,
    image: organizarImg,
    category: "Pagar as Contas",
    categorySlug: "pagar-as-contas",
    date: "13 Fev 2026",
    readTime: "4 min",
    author: "Equipe Tele Sena",
  },
  // --- Entender a Tele Sena ---
  {
    id: "21",
    slug: "diferencas-entre-edicoes-tele-sena",
    title: "Quais são as diferenças entre as edições da Tele Sena?",
    excerpt: "Carnaval, Páscoa, São João, Independência, Natal e Semanal: entenda o que muda entre cada edição.",
    content: `<p>A Tele Sena lança diferentes edições ao longo do ano, cada uma com características únicas.</p>
<h2>Edições temáticas</h2>
<p>As edições de Carnaval, Páscoa, São João, Independência e Natal são lançadas em datas comemorativas e têm valores de prêmios diferenciados.</p>
<h2>Tele Sena Semanal</h2>
<p>A versão semanal custa menos e tem sorteios toda semana, ideal para quem quer concorrer com frequência.</p>
<div class="highlight-info"><strong>ℹ️ Informação:</strong> Cada edição possui seu próprio calendário de sorteios e regras específicas.</div>
<h2>Qual escolher?</h2>
<p>As edições temáticas geralmente têm prêmios maiores, enquanto a semanal oferece mais chances de ganhar ao longo do mês.</p>`,
    image: premiosImg,
    category: "Entender a Tele Sena",
    categorySlug: "entender-a-tele-sena",
    date: "23 Fev 2026",
    readTime: "5 min",
    author: "Equipe Tele Sena",
  },
  {
    id: "22",
    slug: "como-conferir-resultado-tele-sena",
    title: "Como conferir o resultado da Tele Sena: todas as formas disponíveis",
    excerpt: "Saiba onde e como verificar se sua Tele Sena foi sorteada, pelo site, app, TV ou telefone.",
    content: `<p>Conferir o resultado da sua Tele Sena é simples e pode ser feito de diversas formas.</p>
<h2>Pelo site oficial</h2>
<p>Acesse telesena.com.br e digite o número do seu título para verificar se foi contemplado.</p>
<h2>Pelo app</h2>
<p>Baixe o aplicativo da Tele Sena, disponível para Android e iOS, e confira seus resultados a qualquer momento.</p>
<h2>Pela TV</h2>
<p>Os sorteios são transmitidos ao vivo durante o programa Silvio Santos, no SBT.</p>
<div class="highlight-tip"><strong>💡 Dica:</strong> Ative as notificações do app para ser avisado sempre que houver um novo sorteio!</div>`,
    image: heroImg,
    category: "Entender a Tele Sena",
    categorySlug: "entender-a-tele-sena",
    date: "16 Fev 2026",
    readTime: "4 min",
    author: "Equipe Tele Sena",
  },
  {
    id: "23",
    slug: "tele-sena-titulo-capitalizacao-explicado",
    title: "A Tele Sena é um título de capitalização: o que isso significa?",
    excerpt: "Entenda o que é um título de capitalização, como funciona o resgate e por que a Tele Sena não é uma loteria.",
    content: `<p>Muita gente confunde a Tele Sena com uma loteria, mas ela é, na verdade, um título de capitalização.</p>
<h2>O que é capitalização?</h2>
<p>É uma forma de poupar dinheiro com a chance de concorrer a prêmios. Parte do valor pago é guardada e pode ser resgatada após o prazo de vigência.</p>
<div class="highlight-info"><strong>ℹ️ Informação:</strong> Após 12 meses, você pode resgatar 50% do valor pago, corrigido pela TR + juros de 0,16% ao mês.</div>
<h2>Diferença para loteria</h2>
<p>Na loteria, o valor do bilhete não é devolvido. Na Tele Sena, parte do valor é devolvida como resgate.</p>
<h2>Vale a pena?</h2>
<p>Se você gosta de concorrer a prêmios e quer guardar uma parte do dinheiro, a Tele Sena combina os dois benefícios.</p>`,
    image: sonhoImg,
    category: "Entender a Tele Sena",
    categorySlug: "entender-a-tele-sena",
    date: "12 Fev 2026",
    readTime: "6 min",
    author: "Equipe Tele Sena",
  },

];

export function getPostsByCategory(categorySlug: string): Post[] {
  return posts.filter((p) => p.categorySlug === categorySlug);
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getFeaturedPosts(): Post[] {
  return posts.filter((p) => p.featured);
}

export function getRelatedPosts(post: Post, limit = 3): Post[] {
  return posts.filter((p) => p.categorySlug === post.categorySlug && p.id !== post.id).slice(0, limit);
}
