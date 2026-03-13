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
import teleSenaGuiaImg from "@/assets/post-tele-sena-guia.jpg";
import limparNomeImg from "@/assets/post-limpar-nome.jpg";
import rendaExtraCasaImg from "@/assets/post-renda-extra-casa.jpg";
import metodoEnvelopesImg from "@/assets/post-metodo-envelopes.jpg";
import desafio52Img from "@/assets/post-desafio-52-semanas.jpg";
import tesouroDiretoImg from "@/assets/post-tesouro-direto.jpg";
import contasPriorizarImg from "@/assets/post-contas-priorizar.jpg";
import calendarioSorteiosImg from "@/assets/post-calendario-sorteios.jpg";
import sonhoCasaImg from "@/assets/post-sonho-casa-propria.jpg";
import aposentadoriaImg from "@/assets/post-aposentadoria.jpg";

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
  // ===== ARTIGO 01 — Entender a Tele Sena =====
  {
    id: "1",
    slug: "tele-sena-o-que-e-como-funciona",
    title: "Tele Sena: o que é, como funciona e como concorrer aos prêmios",
    excerpt: "Entenda tudo sobre a Tele Sena: como funciona, quais os prêmios, como participar dos sorteios e por que ela é diferente de uma loteria. Guia completo e atualizado.",
    content: `<p>Se você já ouviu falar da Tele Sena mas nunca entendeu direito como ela funciona, esse artigo é pra você. Vamos explicar tudo de um jeito simples, sem complicação.</p>

<h2>O que é a Tele Sena?</h2>
<p>A Tele Sena é um título de capitalização. Isso significa que, ao comprar, você está adquirindo um produto financeiro regulamentado pela SUSEP (Superintendência de Seguros Privados) que dá direito a participar de sorteios de prêmios em dinheiro.</p>
<p>Muita gente confunde com loteria, mas existe uma diferença importante: na loteria, você compra um bilhete para um único sorteio. Na Tele Sena, um único título dá direito a concorrer em vários sorteios durante semanas.</p>

<h2>Como funciona na prática?</h2>
<p>O processo é bem simples. Você compra seu título da Tele Sena em pontos de venda autorizados ou pela internet. Cada título vem com números já definidos. Nos dias de sorteio, os números são sorteados ao vivo na TV. Se seus números forem sorteados, você ganha.</p>
<p>Uma vantagem é que você não precisa acertar todos os números de uma vez. A Tele Sena tem diferentes modalidades de premiação, o que aumenta suas chances.</p>

<h2>Quais são os tipos de prêmio?</h2>
<ul>
<li><strong>Prêmio principal:</strong> valor mais alto, sorteado entre todos os títulos</li>
<li><strong>"Na Mão":</strong> prêmio instantâneo que você descobre na hora de raspar o título</li>
<li><strong>Tele Sena Completa:</strong> você marca os números a cada sorteio e, ao completar a cartela, ganha</li>
<li><strong>Sorteios semanais:</strong> acontecem todo domingo e são transmitidos na TV aberta</li>
</ul>

<h2>Por que a Tele Sena é diferente?</h2>
<p>A principal diferença é que você não está apenas apostando. Você está adquirindo um título de capitalização, o que significa que parte do valor que você paga pode ser resgatado ao final do período de vigência do título, dependendo da edição.</p>
<p>Além disso, a Tele Sena tem edições especiais ao longo do ano: de Ano Novo, Carnaval, Dia das Mães, São João, Dia dos Pais e Natal. Cada edição traz prêmios e dinâmicas diferentes.</p>

<div class="highlight-info"><strong>ℹ️ Informação:</strong> Os resultados são divulgados durante o programa Silvio Santos no SBT.</div>

<h2>Como comprar sua Tele Sena?</h2>
<p>Você pode adquirir nos pontos de venda autorizados espalhados por todo o Brasil, como bancas de jornal, lotéricas e estabelecimentos parceiros. Também é possível comprar pelo site oficial telesena.com.br.</p>
<p>O valor varia de acordo com a edição, mas costuma ser acessível. É uma forma de concorrer a prêmios que cabem no bolso de qualquer pessoa.</p>

<h2>Dica final</h2>
<div class="highlight-tip"><strong>💡 Dica:</strong> Guarde sempre o seu título em um lugar seguro e confira os resultados toda semana. Muita gente esquece de verificar e perde prêmios. Você pode acompanhar os resultados pelo site oficial, pelas redes sociais ou pela TV.</div>`,
    image: teleSenaGuiaImg,
    category: "Entender a Tele Sena",
    categorySlug: "entender-a-tele-sena",
    date: "13 Mar 2026",
    readTime: "8 min",
    author: "Equipe Tele Sena",
    featured: true,
  },
  // ===== ARTIGO 02 — Sair das Dívidas =====
  {
    id: "2",
    slug: "como-limpar-seu-nome-2026",
    title: "Como limpar seu nome em 2026: passo a passo para sair das dívidas",
    excerpt: "Aprenda como negociar dívidas, limpar seu nome no SPC e Serasa e voltar a ter crédito. Guia prático com dicas que funcionam de verdade.",
    content: `<p>Estar com o nome sujo é uma situação que causa muito estresse. Você não consegue crédito, não consegue financiar e, às vezes, até alugar um imóvel fica difícil. Mas a boa notícia é: dá pra resolver. Vamos te mostrar como.</p>

<h2>Passo 1: Descubra todas as suas dívidas</h2>
<p>Antes de negociar, você precisa saber exatamente o que deve e pra quem. Existem duas formas gratuitas de consultar:</p>
<ul>
<li><strong>Serasa</strong> (serasa.com.br): mostra todas as dívidas negativadas no seu CPF</li>
<li><strong>Registrato do Banco Central</strong> (bcb.gov.br/meubc/registrato): mostra empréstimos, financiamentos e contas em seu nome</li>
</ul>
<p>Anote tudo: nome do credor, valor original, valor atualizado e há quanto tempo está em atraso.</p>

<h2>Passo 2: Priorize as dívidas certas</h2>
<p>Nem toda dívida é igual. Comece pelas que cobram mais juros, porque são as que crescem mais rápido:</p>
<ul>
<li>Cartão de crédito rotativo: pode passar de 400% ao ano</li>
<li>Cheque especial: juros de 150% a 300% ao ano</li>
<li>Empréstimo pessoal: juros variáveis, mas geralmente altos</li>
</ul>
<div class="highlight-alert"><strong>⚠️ Alerta:</strong> Dívidas de consumo (lojas, celular) costumam ter juros menores e podem esperar um pouco.</div>

<h2>Passo 3: Negocie com inteligência</h2>
<p>A maioria dos credores prefere receber com desconto do que não receber nada. Use isso a seu favor.</p>
<ul>
<li><strong>Serasa Limpa Nome:</strong> oferece descontos que podem chegar a 90%. Acesse pelo site ou app</li>
<li><strong>Desenrola Brasil:</strong> programa do governo federal para renegociar dívidas com condições especiais</li>
<li><strong>Direto com o credor:</strong> ligue, vá até a loja ou banco. Peça desconto à vista ou parcelamento sem juros</li>
</ul>
<div class="highlight-tip"><strong>💡 Dica de ouro:</strong> Se conseguir juntar um valor para pagar à vista, seu poder de negociação aumenta muito.</div>

<h2>Passo 4: Formalize o acordo</h2>
<p>Nunca pague sem ter o acordo por escrito. Peça sempre o comprovante com: valor negociado, número de parcelas, data de vencimento e a confirmação de que o nome será limpo após o pagamento.</p>

<h2>Passo 5: Acompanhe a limpeza do nome</h2>
<p>Após o pagamento (ou da primeira parcela do acordo), o credor tem até 5 dias úteis para retirar seu nome dos órgãos de proteção ao crédito. Acompanhe pelo Serasa para confirmar.</p>

<h2>Como não voltar a se endividar</h2>
<p>Limpar o nome é só o primeiro passo. Para não cair na mesma situação, crie o hábito de anotar tudo que gasta, evite parcelamentos longos e comece a montar uma reserva de emergência, mesmo que seja com R$ 20 por mês.</p>`,
    image: limparNomeImg,
    category: "Sair das Dívidas",
    categorySlug: "sair-das-dividas",
    date: "12 Mar 2026",
    readTime: "9 min",
    author: "Equipe Tele Sena",
    featured: true,
  },
  // ===== ARTIGO 03 — Ganhar Dinheiro =====
  {
    id: "3",
    slug: "renda-extra-sem-sair-de-casa-2026",
    title: "10 formas de ganhar renda extra sem sair de casa em 2026",
    excerpt: "Descubra 10 ideias práticas para ganhar dinheiro extra sem sair de casa. De revenda online a freelas, todas com baixo investimento.",
    content: `<p>Precisando de uma grana a mais no final do mês? Você não está sozinho. Segundo o Sebrae, mais de 15 milhões de brasileiros buscam renda extra além do emprego principal. E o melhor: muitas dessas atividades podem ser feitas de casa, com pouco ou nenhum investimento.</p>

<h2>1. Revenda de produtos</h2>
<p>Marcas de cosméticos, perfumes e utilidades domésticas oferecem catálogos para revenda sem custo inicial. Você vende pra amigos, família e vizinhos e ganha uma comissão que pode chegar a 30% sobre cada venda. Dá pra começar hoje.</p>

<h2>2. Freelas online</h2>
<p>Se você sabe escrever, mexer com redes sociais, fazer planilhas ou traduzir textos, existem plataformas que conectam você a clientes. As mais usadas são 99Freelas, Workana e GetNinjas. Você cria um perfil e começa a receber propostas.</p>

<h2>3. Venda de doces e salgados</h2>
<p>Se você tem habilidade na cozinha, essa é uma das formas mais rápidas de gerar renda. Brigadeiros gourmet, bolos no pote, coxinhas e empadões têm procura alta. Divulgue no WhatsApp e Instagram do bairro.</p>

<h2>4. Aulas particulares online</h2>
<p>Se você domina matemática, português, inglês ou qualquer disciplina, pode dar aulas por vídeochamada. Plataformas como Superprof e Preply ajudam você a encontrar alunos.</p>

<h2>5. Motorista de aplicativo</h2>
<p>Se você tem carro ou moto, aplicativos como Uber, 99 e iFood permitem que você faça seus próprios horários. Muita gente roda só nos fins de semana e já consegue um bom complemento.</p>

<h2>6. Artesanato</h2>
<p>Crochê, biscuit, velas decorativas, personalização de canecas. O artesanato tem um mercado enorme no Brasil. Venda pelo Instagram, em feiras do bairro ou no Elo7.</p>

<h2>7. Gestão de redes sociais</h2>
<p>Pequenos comércios e profissionais autônomos precisam de alguém para cuidar do Instagram e Facebook deles. Se você entende de redes sociais, pode oferecer esse serviço cobrando entre R$ 300 e R$ 1.000 por mês por cliente.</p>

<h2>8. Digitação e transcrição</h2>
<p>Empresas e profissionais precisam de alguém para digitar documentos ou transcrever áudios. É um trabalho simples que exige basicamente um computador e internet.</p>

<h2>9. Afiliados digitais</h2>
<p>Você divulga produtos de outras pessoas e ganha comissão a cada venda. Plataformas como Hotmart, Eduzz e Amazon Afiliados oferecem milhares de produtos. Você divulga pelo WhatsApp, redes sociais ou blog.</p>

<h2>10. Cuidador de pets</h2>
<p>Passear com cães, hospedar animais durante viagens ou dar banho em domicílio. Plataformas como DogHero conectam você a donos de pets na sua região.</p>

<div class="highlight-tip"><strong>💡 Dica:</strong> Escolha uma ou duas opções que combinem com suas habilidades e comece pequeno. Não precisa largar tudo de uma vez. O importante é dar o primeiro passo e ir ajustando conforme os resultados aparecem.</div>`,
    image: rendaExtraCasaImg,
    category: "Ganhar Dinheiro",
    categorySlug: "ganhar-dinheiro",
    date: "11 Mar 2026",
    readTime: "7 min",
    author: "Equipe Tele Sena",
    featured: true,
  },
  // ===== ARTIGO 04 — Organizar as Finanças =====
  {
    id: "4",
    slug: "metodo-dos-envelopes-organizar-financas",
    title: "Método dos envelopes: organize suas finanças de forma simples",
    excerpt: "Aprenda o método dos envelopes para controlar seus gastos sem planilha e sem app. Funciona com qualquer salário.",
    content: `<p>Se você já tentou usar planilhas ou aplicativos para controlar seus gastos e desistiu, o método dos envelopes pode ser a solução. Ele é tão simples que funciona até com dinheiro físico na mão.</p>

<h2>Como funciona?</h2>
<p>A ideia é dividir seu salário em categorias e colocar o valor de cada uma em um envelope separado. Quando o dinheiro daquele envelope acaba, acabou. Você não pode pegar de outro envelope.</p>

<h2>Exemplo prático com salário de R$ 2.000</h2>
<ul>
<li>Moradia (aluguel, água, luz): R$ 800</li>
<li>Alimentação: R$ 500</li>
<li>Transporte: R$ 200</li>
<li>Saúde/farmácia: R$ 100</li>
<li>Lazer: R$ 100</li>
<li>Reserva/poupança: R$ 200</li>
<li>Imprevistos: R$ 100</li>
</ul>

<h2>E se eu recebo por Pix ou transferência?</h2>
<p>Você pode adaptar o método usando contas digitais separadas ou até mesmo potes em casa com etiquetas. O importante é separar fisicamente o dinheiro de cada categoria para não misturar.</p>
<p>Alguns bancos digitais permitem criar "cofrinhos" ou "guardados" dentro do app, o que funciona como envelopes virtuais.</p>

<h2>Por que esse método funciona tão bem?</h2>
<ul>
<li><strong>Dá visibilidade:</strong> você vê pra onde vai cada real</li>
<li><strong>Evita impulso:</strong> se acabou, acabou. Sem cartão pra salvar</li>
<li><strong>Não precisa de tecnologia:</strong> funciona com dinheiro físico</li>
<li><strong>É flexível:</strong> você ajusta os valores todo mês conforme sua realidade</li>
</ul>

<div class="highlight-tip"><strong>💡 Dica da Tele Sena:</strong> Crie um envelope chamado "Sonhos". Coloque nele nem que seja R$ 10 por mês. Pode ser para uma viagem, uma compra especial ou até para sua Tele Sena. O importante é ter um objetivo que te motive a continuar.</div>`,
    image: metodoEnvelopesImg,
    category: "Organizar as Finanças",
    categorySlug: "organizar-as-financas",
    date: "10 Mar 2026",
    readTime: "6 min",
    author: "Equipe Tele Sena",
    featured: true,
  },
  // ===== ARTIGO 05 — Guardar Dinheiro =====
  {
    id: "5",
    slug: "desafio-52-semanas-guardar-dinheiro",
    title: "Desafio das 52 semanas: como guardar mais de R$ 1.300 em um ano",
    excerpt: "Conheça o desafio das 52 semanas e aprenda a juntar R$ 1.378 em um ano guardando a partir de R$ 1. Tabela gratuita para acompanhar.",
    content: `<p>Guardar dinheiro parece difícil quando você olha o valor final. Mas e se você começasse guardando apenas R$ 1? É exatamente essa a proposta do desafio das 52 semanas.</p>

<h2>Como funciona o desafio?</h2>
<p>A regra é simples: na semana 1, guarde R$ 1. Na semana 2, guarde R$ 2. Na semana 3, R$ 3. E assim por diante até a semana 52.</p>
<p>No começo parece fácil (e é!). O desafio aumenta gradualmente, te dando tempo de se acostumar. Nas últimas semanas você vai guardar valores maiores, mas aí o hábito já está formado.</p>

<h2>Quanto vou juntar?</h2>
<p>Se seguir o desafio completo, você terá <strong>R$ 1.378</strong> ao final do ano. Isso dá pra pagar uma dívida, fazer uma compra importante ou começar sua reserva de emergência.</p>

<h2>Variações do desafio</h2>
<ul>
<li><strong>Ao contrário:</strong> comece pela semana 52 (R$ 52) e vá diminuindo. Bom para quem está motivado no início</li>
<li><strong>Valor fixo:</strong> guarde R$ 27 por semana (dá o mesmo resultado, sem variação)</li>
<li><strong>Multiplicado:</strong> multiplique tudo por 2 e junte R$ 2.756 no ano</li>
<li><strong>Versão mensal:</strong> guarde valores crescentes por mês se achar mais fácil</li>
</ul>

<h2>Onde guardar o dinheiro?</h2>
<p>Pode ser em um cofrinho físico, uma conta digital separada ou até em um "guardado" do Nubank ou PicPay. O importante é não misturar com o dinheiro do dia a dia.</p>

<div class="highlight-tip"><strong>💡 Dica para não desistir:</strong> Cole a tabela do desafio na geladeira ou no espelho do banheiro. Cada semana que você completar, risque com marca-texto. Ver o progresso visual dá uma sensação boa e te motiva a continuar.</div>`,
    image: desafio52Img,
    category: "Guardar Dinheiro",
    categorySlug: "guardar-dinheiro",
    date: "9 Mar 2026",
    readTime: "5 min",
    author: "Equipe Tele Sena",
    featured: true,
  },
  // ===== ARTIGO 06 — Começar a Investir =====
  {
    id: "6",
    slug: "comecar-investir-tesouro-direto-30-reais",
    title: "Como começar a investir com R$ 30 por mês no Tesouro Direto",
    excerpt: "Aprenda a investir no Tesouro Direto com apenas R$ 30. Entenda os tipos de títulos, como abrir conta e quanto seu dinheiro pode render.",
    content: `<p>Muita gente acha que investir é coisa de rico. Mas a verdade é que dá pra começar com menos de R$ 30 e fazer seu dinheiro render mais do que na poupança. O Tesouro Direto é a porta de entrada ideal.</p>

<h2>O que é o Tesouro Direto?</h2>
<p>É um programa do governo federal que permite que qualquer pessoa compre títulos públicos. Na prática, você está emprestando dinheiro para o governo, e ele te paga de volta com juros. É o investimento mais seguro do Brasil.</p>

<h2>Quanto preciso pra começar?</h2>
<p>O investimento mínimo no Tesouro Direto é de cerca de <strong>R$ 30</strong>. Isso mesmo, com o valor de um lanche você já pode começar a investir.</p>

<h2>Quais títulos escolher?</h2>
<ul>
<li><strong>Tesouro Selic:</strong> ideal para reserva de emergência. Rende todo dia e você pode resgatar a qualquer momento</li>
<li><strong>Tesouro IPCA+:</strong> protege seu dinheiro da inflação. Bom para objetivos de longo prazo (5 anos ou mais)</li>
<li><strong>Tesouro Prefixado:</strong> você sabe exatamente quanto vai receber no vencimento. Bom quando os juros estão altos</li>
</ul>
<div class="highlight-info"><strong>ℹ️ Informação:</strong> Se você está começando, vá de Tesouro Selic. É o mais simples e o mais flexível.</div>

<h2>Como abrir conta?</h2>
<p>Você precisa de uma conta em uma corretora ou banco que ofereça acesso ao Tesouro Direto. As mais populares são: Nubank, Inter, Rico, Clear e XP. A abertura é gratuita e 100% online.</p>

<h2>Quanto meu dinheiro vai render?</h2>
<p>Se você investir R$ 30 por mês no Tesouro Selic durante 5 anos, terá aproximadamente R$ 2.200 (considerando a taxa Selic atual). Na poupança, o mesmo valor renderia cerca de R$ 1.950. A diferença parece pequena, mas cresce muito ao longo dos anos.</p>

<div class="highlight-tip"><strong>💡 Dica final:</strong> Não espere ter "uma boa quantia" para começar. O segredo dos investimentos é a consistência. R$ 30 por mês, todo mês, sem parar. É assim que o seu dinheiro começa a trabalhar por você.</div>`,
    image: tesouroDiretoImg,
    category: "Começar a Investir",
    categorySlug: "comecar-a-investir",
    date: "8 Mar 2026",
    readTime: "7 min",
    author: "Equipe Tele Sena",
  },
  // ===== ARTIGO 07 — Pagar as Contas =====
  {
    id: "7",
    slug: "contas-priorizar-salario-curto",
    title: "5 contas para priorizar quando o salário é curto",
    excerpt: "Descubra quais contas pagar primeiro quando o dinheiro não dá pra tudo. Priorize certo e evite juros desnecessários.",
    content: `<p>O salário caiu na conta e você já sabe: não vai dar pra tudo. Essa situação é mais comum do que parece. O segredo não é entrar em desespero, mas sim saber o que pagar primeiro.</p>

<h2>1. Moradia</h2>
<p>Aluguel ou prestação do imóvel vem sempre em primeiro lugar. Se você perder o teto, todo o resto desmorona. Se estiver apertado, converse com o proprietário antes de atrasar. A maioria prefere negociar do que começar um processo.</p>

<h2>2. Energia elétrica</h2>
<p>Ficar sem luz afeta tudo: geladeira, comida, banho, carregamento do celular (que você precisa pra trabalhar). A conta de luz deve ser prioridade junto com a água.</p>

<h2>3. Alimentação</h2>
<p>Comida não é negociação. Planeje as refeições da semana, compre no atacadão e evite desperdício. Um planejamento simples de cardápio pode reduzir seus gastos com comida em até 30%.</p>

<h2>4. Transporte para o trabalho</h2>
<p>Se você precisa do transporte para chegar ao trabalho, essa conta garante sua renda. Sem ir trabalhar, as outras contas ficam ainda mais difíceis.</p>

<h2>5. Dívidas com juros altos</h2>
<p>Cartão de crédito rotativo e cheque especial cobram juros absurdos. Se sobrar qualquer valor, direcione para essas dívidas antes que elas virem uma bola de neve.</p>

<div class="highlight-alert"><strong>⚠️ O que pode esperar:</strong> Streaming, academia, assinaturas de revista, planos premium de apps. Tudo isso pode ser cancelado ou pausado temporariamente. Não tenha vergonha de cortar: é estratégia, não fraqueza.</div>

<h2>Regra de ouro</h2>
<p>Primeiro você garante o básico para sobreviver e manter a renda. Depois organiza o resto. E se precisar de ajuda, procure o PROCON da sua cidade ou o Serasa Limpa Nome — existem caminhos para sair dessa.</p>`,
    image: contasPriorizarImg,
    category: "Pagar as Contas",
    categorySlug: "pagar-as-contas",
    date: "7 Mar 2026",
    readTime: "5 min",
    author: "Equipe Tele Sena",
  },
  // ===== ARTIGO 08 — Concorrer a Prêmios =====
  {
    id: "8",
    slug: "calendario-sorteios-tele-sena-2026",
    title: "Calendário de sorteios Tele Sena 2026: todas as datas e prêmios",
    excerpt: "Confira o calendário completo de sorteios da Tele Sena 2026. Datas, prêmios e como participar de cada edição.",
    content: `<p>Se você gosta de acompanhar os sorteios da Tele Sena, este artigo é pra guardar nos favoritos. Aqui você encontra todas as edições de 2026, quando acontecem e quais são os prêmios.</p>

<h2>As 6 edições da Tele Sena em 2026</h2>
<p>Todo ano a Tele Sena lança 6 edições especiais, cada uma com sua própria campanha, prêmios e período de sorteios:</p>
<ul>
<li><strong>Tele Sena de Ano Novo:</strong> sorteios de janeiro a março</li>
<li><strong>Tele Sena de Carnaval:</strong> sorteios de março a abril</li>
<li><strong>Tele Sena de Dia das Mães:</strong> sorteios de maio a junho</li>
<li><strong>Tele Sena de São João:</strong> sorteios de junho a agosto</li>
<li><strong>Tele Sena de Dia dos Pais:</strong> sorteios de agosto a outubro</li>
<li><strong>Tele Sena de Natal:</strong> sorteios de outubro a dezembro</li>
</ul>

<h2>Quando acontecem os sorteios?</h2>
<p>Os sorteios acontecem aos domingos e são transmitidos ao vivo pela TV aberta. Os horários podem variar conforme a emissora, mas geralmente são no período da manhã.</p>

<h2>Quais são as modalidades de prêmio?</h2>
<ul>
<li><strong>Sorteio principal:</strong> o prêmio mais alto de cada edição</li>
<li><strong>Tele Sena Completa:</strong> você marca números a cada sorteio e ganha ao completar</li>
<li><strong>Na Mão:</strong> prêmio instantâneo na raspadinha do título</li>
</ul>

<h2>Como conferir o resultado?</h2>
<p>Você pode acompanhar pelo site oficial telesena.com.br, pelas redes sociais (@telesena no Instagram) ou ao vivo na TV. Os resultados também ficam disponíveis no app da Tele Sena.</p>

<div class="highlight-tip"><strong>💡 Dica importante:</strong> Não perca nenhum sorteio. Muitos prêmios deixam de ser resgatados porque as pessoas esquecem de conferir. Crie um lembrete no celular para todo domingo.</div>`,
    image: calendarioSorteiosImg,
    category: "Concorrer a Prêmios",
    categorySlug: "concorrer-a-premios",
    date: "6 Mar 2026",
    readTime: "5 min",
    author: "Equipe Tele Sena",
  },
  // ===== ARTIGO 09 — Realizar um Sonho =====
  {
    id: "9",
    slug: "historia-ganhadora-tele-sena-casa-propria",
    title: "Ela ganhou a Tele Sena e realizou o sonho da casa própria",
    excerpt: "Conheça a história de uma ganhadora da Tele Sena que usou o prêmio para realizar o sonho da casa própria. Uma história de esperança.",
    content: `<p>Todo mundo tem um sonho. Pra dona Marta, de 54 anos, moradora de uma cidade pequena no interior de Minas Gerais, o sonho era simples: ter a casa própria. Depois de 30 anos pagando aluguel, ela achava que nunca ia conseguir.</p>

<h2>A compra que mudou tudo</h2>
<p>Marta comprava a Tele Sena todo mês. Não era superstição, era hábito. Ela gostava de raspar os números, acompanhar o sorteio no domingo e sonhar com o que faria se ganhasse. Até que, em um domingo comum, os números dela saíram.</p>
<p><em>"Eu nem acreditei. Conferi três vezes, pedi pro meu filho conferir, liguei pra minha irmã. Quando caiu a ficha, chorei o dia inteiro"</em>, conta Marta.</p>

<h2>O que ela fez com o prêmio</h2>
<p>Ao invés de gastar tudo de uma vez, Marta foi estratégica. Primeiro, quitou uma dívida antiga do cartão de crédito. Depois, deu entrada em uma casa no mesmo bairro onde sempre morou, perto da escola dos netos.</p>
<p><em>"Não comprei uma mansão. Comprei a minha casa, do meu tamanho, no meu bairro. É isso que eu sempre quis"</em>, diz ela com orgulho.</p>

<h2>A lição da Marta</h2>
<p>O que mais chama atenção na história da Marta não é o prêmio em si, mas o que ela fez com ele. Muitos ganhadores gastam tudo rapidamente. Marta planejou, priorizou as dívidas e investiu no que realmente importava pra ela.</p>

<div class="highlight-info"><strong>ℹ️ Seu sonho também vale:</strong> A história da Marta é especial, mas não é única. A Tele Sena já premiou milhares de pessoas em todo o Brasil. E enquanto você concorre, pode ir planejando o que faria com o prêmio. Esse exercício de imaginar o futuro é o primeiro passo para construí-lo.</div>`,
    image: sonhoCasaImg,
    category: "Realizar um Sonho",
    categorySlug: "realizar-um-sonho",
    date: "5 Mar 2026",
    readTime: "6 min",
    author: "Equipe Tele Sena",
  },
  // ===== ARTIGO 10 — Planejar o Futuro =====
  {
    id: "10",
    slug: "planejar-aposentadoria-comecando-tarde",
    title: "Como planejar a aposentadoria mesmo começando tarde",
    excerpt: "Nunca é tarde para planejar a aposentadoria. Aprenda estratégias práticas para garantir um futuro tranquilo, mesmo começando aos 40 ou 50.",
    content: `<p>Se você já passou dos 40 e nunca pensou seriamente na aposentadoria, calma. Você não está sozinho e, mais importante, não está atrasado demais. O melhor momento pra começar era ontem. O segundo melhor é hoje.</p>

<h2>Primeiro passo: saiba onde você está</h2>
<p>Acesse o Meu INSS (meu.inss.gov.br) e confira seu extrato de contribuições. Lá você vê quantos anos já contribuiu, se tem períodos faltando e uma estimativa de quando pode se aposentar. É gratuito e online.</p>

<h2>Segundo passo: faça as contas</h2>
<p>Pergunte a si mesmo: quanto eu preciso por mês pra viver com tranquilidade? Considere moradia, alimentação, saúde e lazer. Esse valor é sua meta.</p>
<p>Se a conta do INSS não vai cobrir tudo (e pra maioria não cobre), você precisa de uma renda complementar. É aí que entra o investimento.</p>

<h2>Terceiro passo: comece a investir</h2>
<p>Não importa se é pouco. O <strong>Tesouro IPCA+</strong> é ideal para quem pensa em longo prazo porque protege seu dinheiro da inflação. Com R$ 100 por mês durante 15 anos, você pode acumular mais de R$ 30 mil (dependendo da taxa).</p>

<h2>Quarto passo: contribua para o INSS</h2>
<p>Se você trabalha como autônomo ou informal, pode contribuir para o INSS como contribuinte individual. O valor mínimo é de 11% sobre o salário mínimo (cerca de R$ 155 por mês em 2026). Isso garante acesso a aposentadoria, auxílio-doença e salário-maternidade.</p>

<h2>Quinto passo: corte o desnecessário</h2>
<p>Revise todos os seus gastos mensais. Streaming que você não assiste, plano de celular caro demais, compras por impulso. Cada R$ 50 que você economiza e investe faz diferença lá na frente.</p>

<div class="highlight-info"><strong>ℹ️ A verdade que ninguém fala:</strong> Começar tarde não é o ideal, mas é infinitamente melhor do que não começar. Cada real investido hoje é um real a menos de preocupação lá na frente. E você merece essa tranquilidade.</div>`,
    image: aposentadoriaImg,
    category: "Planejar o Futuro",
    categorySlug: "planejar-o-futuro",
    date: "4 Mar 2026",
    readTime: "7 min",
    author: "Equipe Tele Sena",
  },
  // ===== POSTS EXISTENTES ANTERIORES =====
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
