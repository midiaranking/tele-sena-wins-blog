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
