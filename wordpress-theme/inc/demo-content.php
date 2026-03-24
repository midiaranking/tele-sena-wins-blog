<?php
/**
 * Blog Tele Sena — Importador de Conteúdo Demo
 * 
 * Cria automaticamente categorias, subcategorias e todos os posts
 * com imagens destacadas ao ativar o tema ou via painel admin.
 */

if ( ! defined( 'ABSPATH' ) ) exit;

// ── Admin Menu ──
function telesena_demo_menu() {
    add_theme_page(
        'Importar Conteúdo Demo',
        'Importar Demo',
        'manage_options',
        'telesena-demo-import',
        'telesena_demo_page'
    );
}
add_action( 'admin_menu', 'telesena_demo_menu' );

function telesena_demo_page() {
    if ( isset( $_POST['telesena_import'] ) && check_admin_referer( 'telesena_demo_import' ) ) {
        $result = telesena_import_demo_content();
        echo '<div class="updated"><p>' . esc_html( $result ) . '</p></div>';
    }
    ?>
    <div class="wrap">
        <h1>Importar Conteúdo Demo — Blog Tele Sena</h1>
        <p>Clique no botão abaixo para importar automaticamente:</p>
        <ul style="list-style:disc;margin-left:20px;">
            <li>5 categorias com textos descritivos</li>
            <li>20 subcategorias</li>
            <li>23 artigos completos com imagens</li>
            <li>Página "Equipe Tele Sena"</li>
            <li>Página "Home" (front-page)</li>
        </ul>
        <form method="post">
            <?php wp_nonce_field( 'telesena_demo_import' ); ?>
            <p><input type="submit" name="telesena_import" class="button button-primary button-hero" value="Importar Conteúdo Demo"></p>
        </form>
    </div>
    <?php
}

// ── Import Function ──
function telesena_import_demo_content() {
    // Desabilita contagem de termos durante importação
    wp_defer_term_counting( true );

    $img_dir = get_template_directory() . '/assets/img/';
    $created = 0;

    // ═══════════════════════════════════════
    // CATEGORIAS E SUBCATEGORIAS
    // ═══════════════════════════════════════
    $categories_data = array(
        array(
            'name' => 'Entender a Tele Sena',
            'slug' => 'entender-a-tele-sena',
            'description' => 'A Tele Sena é um dos títulos de capitalização mais conhecidos do Brasil. Aqui você aprende como funciona, como participar, quais são as premiações e conhece histórias dos nossos ganhadores.',
            'subcategories' => array(
                array( 'name' => 'O que é?', 'slug' => 'o-que-e', 'description' => 'Saiba o que é a Tele Sena, como ela funciona e por que é diferente de uma loteria convencional.' ),
                array( 'name' => 'Como funciona?', 'slug' => 'como-funciona', 'description' => 'Entenda o funcionamento da Tele Sena: sorteios, prêmios, edições e como participar.' ),
                array( 'name' => 'Histórias de ganhadores', 'slug' => 'historias-de-ganhadores', 'description' => 'Conheça histórias reais de pessoas que ganharam prêmios da Tele Sena e mudaram de vida.' ),
            ),
        ),
        array(
            'name' => 'Organizar as finanças',
            'slug' => 'organizar-as-financas',
            'description' => 'Organizar seu dinheiro é o primeiro passo para ter mais tranquilidade financeira. Confira dicas práticas para controlar gastos, economizar no dia a dia, entender melhor suas finanças e tomar decisões mais inteligentes.',
            'subcategories' => array(
                array( 'name' => 'Pagamentos e contas', 'slug' => 'pagamentos-e-contas', 'description' => 'Dicas para organizar seus pagamentos, evitar atrasos e manter as contas em dia.' ),
                array( 'name' => 'Educação financeira', 'slug' => 'educacao-financeira', 'description' => 'Aprenda conceitos essenciais de educação financeira para tomar decisões mais inteligentes.' ),
                array( 'name' => 'Dicas para economizar', 'slug' => 'dicas-para-economizar', 'description' => 'Estratégias práticas para economizar dinheiro no dia a dia sem abrir mão da qualidade de vida.' ),
                array( 'name' => 'Consumo consciente', 'slug' => 'consumo-consciente', 'description' => 'Saiba como consumir de forma inteligente, evitando desperdícios e gastos desnecessários.' ),
            ),
        ),
        array(
            'name' => 'Sair das dívidas',
            'slug' => 'sair-das-dividas',
            'description' => 'Se as dívidas estão tirando seu sono, aprenda mais sobre elas e saiba como renegociar para limpar seu nome. Encontre caminhos para recuperar sua vida financeira com mais segurança.',
            'subcategories' => array(
                array( 'name' => 'Tipos de dívidas', 'slug' => 'tipos-de-dividas', 'description' => 'Conheça os diferentes tipos de dívidas e entenda quais são as mais urgentes para quitar.' ),
                array( 'name' => 'Dicas para renegociar', 'slug' => 'dicas-para-renegociar', 'description' => 'Aprenda técnicas e estratégias para renegociar suas dívidas com desconto.' ),
                array( 'name' => 'Empréstimos e financiamentos', 'slug' => 'emprestimos-e-financiamentos', 'description' => 'Entenda como funcionam empréstimos e financiamentos e quando vale a pena contratar.' ),
                array( 'name' => 'Nome sujo e negativação', 'slug' => 'nome-sujo-e-negativacao', 'description' => 'Saiba o que fazer quando seu nome está negativado e como limpar seu CPF.' ),
            ),
        ),
        array(
            'name' => 'Ganhar dinheiro',
            'slug' => 'ganhar-dinheiro',
            'description' => 'Quer aumentar sua renda? Encontre aqui ideias de renda extra, oportunidades de trabalho, pequenos negócios e diversas formas de ganhar dinheiro. São dicas práticas para quem quer melhorar de vida.',
            'subcategories' => array(
                array( 'name' => 'Renda extra', 'slug' => 'renda-extra', 'description' => 'Ideias práticas para ganhar dinheiro extra além do seu trabalho principal.' ),
                array( 'name' => 'Pequenos negócios', 'slug' => 'pequenos-negocios', 'description' => 'Dicas para montar e gerenciar um pequeno negócio com pouco investimento.' ),
                array( 'name' => 'Internet e redes sociais', 'slug' => 'internet-e-redes-sociais', 'description' => 'Aprenda a ganhar dinheiro usando a internet e as redes sociais.' ),
                array( 'name' => 'Título de capitalização', 'slug' => 'titulo-de-capitalizacao', 'description' => 'Entenda como títulos de capitalização podem ser uma forma de guardar dinheiro e concorrer a prêmios.' ),
                array( 'name' => 'Apps e plataformas', 'slug' => 'apps-e-plataformas', 'description' => 'Conheça aplicativos e plataformas que pagam por tarefas, pesquisas e cashback.' ),
            ),
        ),
        array(
            'name' => 'Planejar o futuro',
            'slug' => 'planejar-o-futuro',
            'description' => 'Planejar o futuro financeiro ajuda a transformar sonhos em realidade. Aprenda a guardar dinheiro, começar a investir, se preparar para grandes objetivos e construir seu futuro com mais segurança.',
            'subcategories' => array(
                array( 'name' => 'Como guardar dinheiro', 'slug' => 'como-guardar-dinheiro', 'description' => 'Métodos e desafios para começar a guardar dinheiro, mesmo com pouca renda.' ),
                array( 'name' => 'Pequenos investimentos', 'slug' => 'pequenos-investimentos', 'description' => 'Opções de investimento acessíveis para quem está começando com pouco dinheiro.' ),
                array( 'name' => 'Realização de sonhos', 'slug' => 'realizacao-de-sonhos', 'description' => 'Histórias inspiradoras e dicas para transformar seus sonhos em realidade.' ),
                array( 'name' => 'Aposentadoria', 'slug' => 'aposentadoria', 'description' => 'Planeje sua aposentadoria com estratégias práticas para garantir um futuro tranquilo.' ),
            ),
        ),
    );

    // Criar categorias e subcategorias
    $cat_ids = array();
    foreach ( $categories_data as $cat_data ) {
        $parent_id = telesena_create_category( $cat_data['name'], $cat_data['slug'], $cat_data['description'] );
        $cat_ids[ $cat_data['slug'] ] = $parent_id;

        foreach ( $cat_data['subcategories'] as $sub ) {
            $sub_id = telesena_create_category( $sub['name'], $sub['slug'], $sub['description'], $parent_id );
            $cat_ids[ $cat_data['slug'] . '/' . $sub['slug'] ] = $sub_id;
        }
    }

    // ═══════════════════════════════════════
    // POSTS
    // ═══════════════════════════════════════
    $posts_data = array(
        // ── ARTIGO 01 ──
        array(
            'title'    => 'Tele Sena: o que é, como funciona e como concorrer aos prêmios',
            'slug'     => 'tele-sena-o-que-e-como-funciona',
            'excerpt'  => 'Entenda tudo sobre a Tele Sena: como funciona, quais os prêmios, como participar dos sorteios e por que ela é diferente de uma loteria. Guia completo e atualizado.',
            'date'     => '2026-03-13 10:00:00',
            'image'    => 'post-tele-sena-guia.jpg',
            'cat_slug' => 'entender-a-tele-sena',
            'sub_slug' => 'o-que-e',
            'featured' => true,
            'content'  => '<p>Se você já ouviu falar da Tele Sena mas nunca entendeu direito como ela funciona, esse artigo é pra você. Vamos explicar tudo de um jeito simples, sem complicação.</p>

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

<h2>Como comprar sua Tele Sena?</h2>
<p>Você pode adquirir nos pontos de venda autorizados espalhados por todo o Brasil, como bancas de jornal, lotéricas e estabelecimentos parceiros. Também é possível comprar pelo site oficial telesena.com.br.</p>
<p>O valor varia de acordo com a edição, mas costuma ser acessível. É uma forma de concorrer a prêmios que cabem no bolso de qualquer pessoa.</p>

<h2>Dica final</h2>
<p>Guarde sempre o seu título em um lugar seguro e confira os resultados toda semana. Muita gente esquece de verificar e perde prêmios. Você pode acompanhar os resultados pelo site oficial, pelas redes sociais ou pela TV.</p>',
        ),
        // ── ARTIGO 02 ──
        array(
            'title'    => 'Como limpar seu nome em 2026: passo a passo para sair das dívidas',
            'slug'     => 'como-limpar-seu-nome-2026',
            'excerpt'  => 'Aprenda como negociar dívidas, limpar seu nome no SPC e Serasa e voltar a ter crédito. Guia prático com dicas que funcionam de verdade.',
            'date'     => '2026-03-12 10:00:00',
            'image'    => 'post-limpar-nome.jpg',
            'cat_slug' => 'sair-das-dividas',
            'sub_slug' => 'nome-sujo-e-negativacao',
            'featured' => true,
            'content'  => '<p>Estar com o nome sujo é uma situação que causa muito estresse. Você não consegue crédito, não consegue financiar e, às vezes, até alugar um imóvel fica difícil. Mas a boa notícia é: dá pra resolver. Vamos te mostrar como.</p>

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

<h2>Passo 3: Negocie com inteligência</h2>
<p>A maioria dos credores prefere receber com desconto do que não receber nada. Use isso a seu favor.</p>
<ul>
<li><strong>Serasa Limpa Nome:</strong> oferece descontos que podem chegar a 90%. Acesse pelo site ou app</li>
<li><strong>Desenrola Brasil:</strong> programa do governo federal para renegociar dívidas com condições especiais</li>
<li><strong>Direto com o credor:</strong> ligue, vá até a loja ou banco. Peça desconto à vista ou parcelamento sem juros</li>
</ul>

<h2>Passo 4: Formalize o acordo</h2>
<p>Nunca pague sem ter o acordo por escrito. Peça sempre o comprovante com: valor negociado, número de parcelas, data de vencimento e a confirmação de que o nome será limpo após o pagamento.</p>

<h2>Passo 5: Acompanhe a limpeza do nome</h2>
<p>Após o pagamento (ou da primeira parcela do acordo), o credor tem até 5 dias úteis para retirar seu nome dos órgãos de proteção ao crédito. Acompanhe pelo Serasa para confirmar.</p>

<h2>Como não voltar a se endividar</h2>
<p>Limpar o nome é só o primeiro passo. Para não cair na mesma situação, crie o hábito de anotar tudo que gasta, evite parcelamentos longos e comece a montar uma reserva de emergência, mesmo que seja com R$ 20 por mês.</p>',
        ),
        // ── ARTIGO 03 ──
        array(
            'title'    => '10 formas de ganhar renda extra sem sair de casa em 2026',
            'slug'     => 'renda-extra-sem-sair-de-casa-2026',
            'excerpt'  => 'Descubra 10 ideias práticas para ganhar dinheiro extra sem sair de casa. De revenda online a freelas, todas com baixo investimento.',
            'date'     => '2026-03-11 10:00:00',
            'image'    => 'post-renda-extra-casa.jpg',
            'cat_slug' => 'ganhar-dinheiro',
            'sub_slug' => 'renda-extra',
            'featured' => true,
            'content'  => '<p>Precisando de uma grana a mais no final do mês? Você não está sozinho. Segundo o Sebrae, mais de 15 milhões de brasileiros buscam renda extra além do emprego principal. E o melhor: muitas dessas atividades podem ser feitas de casa, com pouco ou nenhum investimento.</p>

<h2>1. Revenda de produtos</h2>
<p>Marcas de cosméticos, perfumes e utilidades domésticas oferecem catálogos para revenda sem custo inicial. Você vende pra amigos, família e vizinhos e ganha uma comissão que pode chegar a 30% sobre cada venda.</p>

<h2>2. Freelas online</h2>
<p>Se você sabe escrever, mexer com redes sociais, fazer planilhas ou traduzir textos, existem plataformas que conectam você a clientes. As mais usadas são 99Freelas, Workana e GetNinjas.</p>

<h2>3. Venda de doces e salgados</h2>
<p>Se você tem habilidade na cozinha, essa é uma das formas mais rápidas de gerar renda. Brigadeiros gourmet, bolos no pote, coxinhas e empadões têm procura alta.</p>

<h2>4. Aulas particulares online</h2>
<p>Se você domina matemática, português, inglês ou qualquer disciplina, pode dar aulas por vídeochamada. Plataformas como Superprof e Preply ajudam você a encontrar alunos.</p>

<h2>5. Motorista de aplicativo</h2>
<p>Se você tem carro ou moto, aplicativos como Uber, 99 e iFood permitem que você faça seus próprios horários.</p>

<h2>6. Artesanato</h2>
<p>Crochê, biscuit, velas decorativas, personalização de canecas. O artesanato tem um mercado enorme no Brasil. Venda pelo Instagram, em feiras do bairro ou no Elo7.</p>

<h2>7. Gestão de redes sociais</h2>
<p>Pequenos comércios e profissionais autônomos precisam de alguém para cuidar do Instagram e Facebook deles. Pode cobrar entre R$ 300 e R$ 1.000 por mês por cliente.</p>

<h2>8. Digitação e transcrição</h2>
<p>Empresas e profissionais precisam de alguém para digitar documentos ou transcrever áudios. É um trabalho simples que exige basicamente um computador e internet.</p>

<h2>9. Afiliados digitais</h2>
<p>Você divulga produtos de outras pessoas e ganha comissão a cada venda. Plataformas como Hotmart, Eduzz e Amazon Afiliados oferecem milhares de produtos.</p>

<h2>10. Cuidador de pets</h2>
<p>Passear com cães, hospedar animais durante viagens ou dar banho em domicílio. Plataformas como DogHero conectam você a donos de pets na sua região.</p>

<p>Escolha uma ou duas opções que combinem com suas habilidades e comece pequeno. O importante é dar o primeiro passo.</p>',
        ),
        // ── ARTIGO 04 ──
        array(
            'title'    => 'Método dos envelopes: organize suas finanças de forma simples',
            'slug'     => 'metodo-dos-envelopes-organizar-financas',
            'excerpt'  => 'Aprenda o método dos envelopes para controlar seus gastos sem planilha e sem app. Funciona com qualquer salário.',
            'date'     => '2026-03-10 10:00:00',
            'image'    => 'post-metodo-envelopes.jpg',
            'cat_slug' => 'organizar-as-financas',
            'sub_slug' => 'educacao-financeira',
            'featured' => true,
            'content'  => '<p>Se você já tentou usar planilhas ou aplicativos para controlar seus gastos e desistiu, o método dos envelopes pode ser a solução. Ele é tão simples que funciona até com dinheiro físico na mão.</p>

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
<p>Você pode adaptar o método usando contas digitais separadas ou até mesmo potes em casa com etiquetas. Alguns bancos digitais permitem criar "cofrinhos" dentro do app, o que funciona como envelopes virtuais.</p>

<h2>Por que esse método funciona tão bem?</h2>
<ul>
<li><strong>Dá visibilidade:</strong> você vê pra onde vai cada real</li>
<li><strong>Evita impulso:</strong> se acabou, acabou</li>
<li><strong>Não precisa de tecnologia:</strong> funciona com dinheiro físico</li>
<li><strong>É flexível:</strong> você ajusta os valores todo mês</li>
</ul>

<p>Crie um envelope chamado "Sonhos". Coloque nele nem que seja R$ 10 por mês. O importante é ter um objetivo que te motive a continuar.</p>',
        ),
        // ── ARTIGO 05 ──
        array(
            'title'    => 'Desafio das 52 semanas: como guardar mais de R$ 1.300 em um ano',
            'slug'     => 'desafio-52-semanas-guardar-dinheiro',
            'excerpt'  => 'Conheça o desafio das 52 semanas e aprenda a juntar R$ 1.378 em um ano guardando a partir de R$ 1. Tabela gratuita para acompanhar.',
            'date'     => '2026-03-09 10:00:00',
            'image'    => 'post-desafio-52-semanas.jpg',
            'cat_slug' => 'planejar-o-futuro',
            'sub_slug' => 'como-guardar-dinheiro',
            'featured' => true,
            'content'  => '<p>Guardar dinheiro parece difícil quando você olha o valor final. Mas e se você começasse guardando apenas R$ 1? É exatamente essa a proposta do desafio das 52 semanas.</p>

<h2>Como funciona o desafio?</h2>
<p>A regra é simples: na semana 1, guarde R$ 1. Na semana 2, guarde R$ 2. Na semana 3, R$ 3. E assim por diante até a semana 52.</p>

<h2>Quanto vou juntar?</h2>
<p>Se seguir o desafio completo, você terá <strong>R$ 1.378</strong> ao final do ano.</p>

<h2>Variações do desafio</h2>
<ul>
<li><strong>Ao contrário:</strong> comece pela semana 52 (R$ 52) e vá diminuindo</li>
<li><strong>Valor fixo:</strong> guarde R$ 27 por semana (dá o mesmo resultado)</li>
<li><strong>Multiplicado:</strong> multiplique tudo por 2 e junte R$ 2.756 no ano</li>
<li><strong>Versão mensal:</strong> guarde valores crescentes por mês</li>
</ul>

<h2>Onde guardar o dinheiro?</h2>
<p>Pode ser em um cofrinho físico, uma conta digital separada ou até em um "guardado" do Nubank ou PicPay.</p>

<p>Cole a tabela do desafio na geladeira ou no espelho do banheiro. Cada semana que você completar, risque com marca-texto. Ver o progresso visual te motiva a continuar.</p>',
        ),
        // ── ARTIGO 06 ──
        array(
            'title'    => 'Como começar a investir com R$ 30 por mês no Tesouro Direto',
            'slug'     => 'comecar-investir-tesouro-direto-30-reais',
            'excerpt'  => 'Aprenda a investir no Tesouro Direto com apenas R$ 30. Entenda os tipos de títulos, como abrir conta e quanto seu dinheiro pode render.',
            'date'     => '2026-03-08 10:00:00',
            'image'    => 'post-tesouro-direto.jpg',
            'cat_slug' => 'planejar-o-futuro',
            'sub_slug' => 'pequenos-investimentos',
            'content'  => '<p>Muita gente acha que investir é coisa de rico. Mas a verdade é que dá pra começar com menos de R$ 30 e fazer seu dinheiro render mais do que na poupança.</p>

<h2>O que é o Tesouro Direto?</h2>
<p>É um programa do governo federal que permite que qualquer pessoa compre títulos públicos. Na prática, você está emprestando dinheiro para o governo, e ele te paga de volta com juros. É o investimento mais seguro do Brasil.</p>

<h2>Quais títulos escolher?</h2>
<ul>
<li><strong>Tesouro Selic:</strong> ideal para reserva de emergência</li>
<li><strong>Tesouro IPCA+:</strong> protege seu dinheiro da inflação</li>
<li><strong>Tesouro Prefixado:</strong> você sabe exatamente quanto vai receber</li>
</ul>

<h2>Como abrir conta?</h2>
<p>Você precisa de uma conta em uma corretora ou banco que ofereça acesso ao Tesouro Direto. As mais populares são: Nubank, Inter, Rico, Clear e XP. A abertura é gratuita e 100% online.</p>

<h2>Quanto meu dinheiro vai render?</h2>
<p>Se você investir R$ 30 por mês no Tesouro Selic durante 5 anos, terá aproximadamente R$ 2.200. Na poupança, o mesmo valor renderia cerca de R$ 1.950.</p>

<p>Não espere ter "uma boa quantia" para começar. R$ 30 por mês, todo mês, sem parar. É assim que o seu dinheiro começa a trabalhar por você.</p>',
        ),
        // ── ARTIGO 07 ──
        array(
            'title'    => '5 contas para priorizar quando o salário é curto',
            'slug'     => 'contas-priorizar-salario-curto',
            'excerpt'  => 'Descubra quais contas pagar primeiro quando o dinheiro não dá pra tudo. Priorize certo e evite juros desnecessários.',
            'date'     => '2026-03-07 10:00:00',
            'image'    => 'post-contas-priorizar.jpg',
            'cat_slug' => 'organizar-as-financas',
            'sub_slug' => 'pagamentos-e-contas',
            'content'  => '<p>O salário caiu na conta e você já sabe: não vai dar pra tudo. Essa situação é mais comum do que parece. O segredo não é entrar em desespero, mas sim saber o que pagar primeiro.</p>

<h2>1. Moradia</h2>
<p>Aluguel ou prestação do imóvel vem sempre em primeiro lugar.</p>

<h2>2. Energia elétrica</h2>
<p>Ficar sem luz afeta tudo: geladeira, comida, banho, carregamento do celular.</p>

<h2>3. Alimentação</h2>
<p>Comida não é negociação. Planeje as refeições da semana, compre no atacadão e evite desperdício.</p>

<h2>4. Transporte para o trabalho</h2>
<p>Se você precisa do transporte para chegar ao trabalho, essa conta garante sua renda.</p>

<h2>5. Dívidas com juros altos</h2>
<p>Cartão de crédito rotativo e cheque especial cobram juros absurdos. Direcione qualquer valor extra para essas dívidas.</p>

<p>Primeiro você garante o básico para sobreviver e manter a renda. Depois organiza o resto.</p>',
        ),
        // ── ARTIGO 08 ──
        array(
            'title'    => 'Calendário de sorteios Tele Sena 2026: todas as datas e prêmios',
            'slug'     => 'calendario-sorteios-tele-sena-2026',
            'excerpt'  => 'Confira o calendário completo de sorteios da Tele Sena 2026. Datas, prêmios e como participar de cada edição.',
            'date'     => '2026-03-06 10:00:00',
            'image'    => 'post-calendario-sorteios.jpg',
            'cat_slug' => 'entender-a-tele-sena',
            'sub_slug' => 'como-funciona',
            'content'  => '<p>Se você gosta de acompanhar os sorteios da Tele Sena, este artigo é pra guardar nos favoritos.</p>

<h2>As 6 edições da Tele Sena em 2026</h2>
<ul>
<li><strong>Tele Sena de Ano Novo:</strong> sorteios de janeiro a março</li>
<li><strong>Tele Sena de Carnaval:</strong> sorteios de março a abril</li>
<li><strong>Tele Sena de Dia das Mães:</strong> sorteios de maio a junho</li>
<li><strong>Tele Sena de São João:</strong> sorteios de junho a agosto</li>
<li><strong>Tele Sena de Dia dos Pais:</strong> sorteios de agosto a outubro</li>
<li><strong>Tele Sena de Natal:</strong> sorteios de outubro a dezembro</li>
</ul>

<h2>Quando acontecem os sorteios?</h2>
<p>Os sorteios acontecem aos domingos e são transmitidos ao vivo pela TV aberta.</p>

<h2>Como conferir o resultado?</h2>
<p>Você pode acompanhar pelo site oficial telesena.com.br, pelas redes sociais (@telesena no Instagram) ou ao vivo na TV.</p>

<p>Não perca nenhum sorteio. Muitos prêmios deixam de ser resgatados porque as pessoas esquecem de conferir.</p>',
        ),
        // ── ARTIGO 09 ──
        array(
            'title'    => 'Ela ganhou a Tele Sena e realizou o sonho da casa própria',
            'slug'     => 'historia-ganhadora-tele-sena-casa-propria',
            'excerpt'  => 'Conheça a história de uma ganhadora da Tele Sena que usou o prêmio para realizar o sonho da casa própria.',
            'date'     => '2026-03-05 10:00:00',
            'image'    => 'post-sonho-casa-propria.jpg',
            'cat_slug' => 'entender-a-tele-sena',
            'sub_slug' => 'historias-de-ganhadores',
            'content'  => '<p>Todo mundo tem um sonho. Pra dona Marta, de 54 anos, moradora de uma cidade pequena no interior de Minas Gerais, o sonho era simples: ter a casa própria.</p>

<h2>A compra que mudou tudo</h2>
<p>Marta comprava a Tele Sena todo mês. Não era superstição, era hábito. Até que, em um domingo comum, os números dela saíram.</p>
<p><em>"Eu nem acreditei. Conferi três vezes, pedi pro meu filho conferir, liguei pra minha irmã. Quando caiu a ficha, chorei o dia inteiro"</em>, conta Marta.</p>

<h2>O que ela fez com o prêmio</h2>
<p>Ao invés de gastar tudo de uma vez, Marta foi estratégica. Primeiro, quitou uma dívida antiga do cartão de crédito. Depois, deu entrada em uma casa no mesmo bairro onde sempre morou.</p>
<p><em>"Não comprei uma mansão. Comprei a minha casa, do meu tamanho, no meu bairro. É isso que eu sempre quis"</em>, diz ela com orgulho.</p>

<h2>A lição da Marta</h2>
<p>O que mais chama atenção na história da Marta não é o prêmio em si, mas o que ela fez com ele. Muitos ganhadores gastam tudo rapidamente. Marta planejou, priorizou as dívidas e investiu no que realmente importava pra ela.</p>

<p>A Tele Sena já premiou milhares de pessoas em todo o Brasil. E enquanto você concorre, pode ir planejando o que faria com o prêmio.</p>',
        ),
        // ── ARTIGO 10 ──
        array(
            'title'    => 'Como planejar a aposentadoria mesmo começando tarde',
            'slug'     => 'planejar-aposentadoria-comecando-tarde',
            'excerpt'  => 'Nunca é tarde para planejar a aposentadoria. Aprenda estratégias práticas para garantir um futuro tranquilo, mesmo começando aos 40 ou 50.',
            'date'     => '2026-03-04 10:00:00',
            'image'    => 'post-aposentadoria.jpg',
            'cat_slug' => 'planejar-o-futuro',
            'sub_slug' => 'aposentadoria',
            'content'  => '<p>Se você já passou dos 40 e nunca pensou seriamente na aposentadoria, calma. Você não está sozinho e, mais importante, não está atrasado demais.</p>

<h2>Primeiro passo: saiba onde você está</h2>
<p>Acesse o Meu INSS (meu.inss.gov.br) e confira seu extrato de contribuições.</p>

<h2>Segundo passo: faça as contas</h2>
<p>Pergunte a si mesmo: quanto eu preciso por mês pra viver com tranquilidade?</p>

<h2>Terceiro passo: comece a investir</h2>
<p>O <strong>Tesouro IPCA+</strong> é ideal para quem pensa em longo prazo. Com R$ 100 por mês durante 15 anos, você pode acumular mais de R$ 30 mil.</p>

<h2>Quarto passo: contribua para o INSS</h2>
<p>Se você trabalha como autônomo ou informal, pode contribuir para o INSS como contribuinte individual. O valor mínimo é de 11% sobre o salário mínimo.</p>

<h2>Quinto passo: corte o desnecessário</h2>
<p>Revise todos os seus gastos mensais. Cada R$ 50 que você economiza e investe faz diferença lá na frente.</p>

<p>Começar tarde não é o ideal, mas é infinitamente melhor do que não começar.</p>',
        ),
        // ── ARTIGO 11 ──
        array(
            'title'    => 'Como funciona o orçamento 50-30-20 e como aplicar no seu dia a dia',
            'slug'     => 'como-funciona-orcamento-50-30-20',
            'excerpt'  => 'O método 50-30-20 é uma regra simples para dividir seu salário entre necessidades, desejos e investimentos.',
            'date'     => '2026-02-25 10:00:00',
            'image'    => 'post-financas.jpg',
            'cat_slug' => 'organizar-as-financas',
            'sub_slug' => 'educacao-financeira',
            'content'  => '<p>O método 50-30-20 é uma das formas mais populares de organizar o orçamento pessoal. Ele divide sua renda em três partes: 50% para necessidades, 30% para desejos e 20% para investimentos e reserva.</p>

<h2>Como aplicar na prática</h2>
<p>Se você ganha R$ 3.000 por mês:</p>
<ul>
<li><strong>50% (R$ 1.500):</strong> Moradia, alimentação, transporte, saúde</li>
<li><strong>30% (R$ 900):</strong> Lazer, roupas, streaming, restaurantes</li>
<li><strong>20% (R$ 600):</strong> Poupança, investimentos, quitação de dívidas</li>
</ul>

<p>Comece registrando todos os seus gastos por um mês e veja como está sua distribuição atual. Depois, ajuste gradualmente.</p>',
        ),
        // ── ARTIGO 12 ──
        array(
            'title'    => 'Como vender pelo Instagram e faturar de casa em 2026',
            'slug'     => 'como-vender-pelo-instagram',
            'excerpt'  => 'O Instagram é uma das maiores vitrines digitais do Brasil. Aprenda a montar sua loja e começar a vender hoje.',
            'date'     => '2026-02-24 10:00:00',
            'image'    => 'post-renda-extra.jpg',
            'cat_slug' => 'ganhar-dinheiro',
            'sub_slug' => 'internet-e-redes-sociais',
            'content'  => '<p>Vender pelo Instagram se tornou uma das formas mais acessíveis de empreender no Brasil.</p>
<h2>Monte seu perfil comercial</h2>
<p>O primeiro passo é converter sua conta para um perfil comercial. Isso libera recursos como métricas, botões de contato e a loja integrada.</p>
<h2>Estratégias de conteúdo</h2>
<p>Poste com regularidade, use Reels para alcançar mais pessoas e abuse dos Stories para criar conexão com seus seguidores.</p>
<h2>Meios de pagamento</h2>
<p>Ofereça Pix, cartão e boleto para facilitar a compra. Plataformas como Mercado Pago e PagSeguro ajudam na gestão.</p>',
        ),
        // ── ARTIGO 13 ──
        array(
            'title'    => '7 apps para ganhar dinheiro no celular em 2026',
            'slug'     => 'apps-para-ganhar-dinheiro',
            'excerpt'  => 'Conheça aplicativos confiáveis que pagam por tarefas simples, pesquisas e cashback nas compras do dia a dia.',
            'date'     => '2026-02-20 10:00:00',
            'image'    => 'post-financas.jpg',
            'cat_slug' => 'ganhar-dinheiro',
            'sub_slug' => 'apps-e-plataformas',
            'content'  => '<p>Seu celular pode ser uma ferramenta poderosa para gerar renda extra. Confira os melhores apps disponíveis.</p>
<h2>1. Kwai e TikTok</h2>
<p>Essas plataformas pagam por visualizações e engajamento em vídeos curtos.</p>
<h2>2. Méliuz e Picpay</h2>
<p>Receba cashback em compras online e em lojas físicas parceiras.</p>
<h2>3. 99Freelas</h2>
<p>Ideal para quem tem habilidades em redação, design, programação ou tradução.</p>',
        ),
        // ── ARTIGO 14 ──
        array(
            'title'    => 'Como conseguir renda extra nos fins de semana: 8 ideias práticas',
            'slug'     => 'renda-extra-fim-de-semana',
            'excerpt'  => 'Use seus fins de semana livres para ganhar um dinheiro extra com atividades simples e lucrativas.',
            'date'     => '2026-02-18 10:00:00',
            'image'    => 'post-guardar-dinheiro.jpg',
            'cat_slug' => 'ganhar-dinheiro',
            'sub_slug' => 'renda-extra',
            'content'  => '<p>Se você tem os fins de semana livres, existem várias formas de transformar esse tempo em dinheiro.</p>
<h2>Entregas por aplicativo</h2>
<p>Apps como iFood, Rappi e Uber Eats permitem que você trabalhe apenas nos horários que quiser.</p>
<h2>Brechó e vendas de garagem</h2>
<p>Reúna itens que você não usa mais e organize uma venda. O que sobrar pode ir para marketplaces online.</p>
<p>Comece vendendo o que você já tem em casa antes de investir em produtos novos!</p>',
        ),
        // ── ARTIGO 15 ──
        array(
            'title'    => 'Como sair do cheque especial: guia completo para se livrar dessa armadilha',
            'slug'     => 'como-sair-do-cheque-especial',
            'excerpt'  => 'O cheque especial cobra juros altíssimos. Veja estratégias para trocar essa dívida por opções mais baratas.',
            'date'     => '2026-02-22 10:00:00',
            'image'    => 'post-dividas.jpg',
            'cat_slug' => 'sair-das-dividas',
            'sub_slug' => 'tipos-de-dividas',
            'content'  => '<p>O cheque especial é uma das modalidades de crédito mais caras do Brasil, com juros que podem ultrapassar 300% ao ano.</p>
<h2>Por que o cheque especial é tão perigoso?</h2>
<p>Ele é fácil de acessar, mas os juros compostos fazem a dívida crescer rapidamente.</p>
<h2>Estratégias para sair</h2>
<p>1. Faça um empréstimo pessoal com juros menores para quitar o cheque especial.</p>
<p>2. Negocie diretamente com o banco — muitos oferecem condições especiais.</p>
<p>3. Use o Desenrola Brasil para conseguir descontos significativos.</p>',
        ),
        // ── ARTIGO 16 ──
        array(
            'title'    => 'Desenrola Brasil 2026: como funciona e quem pode participar',
            'slug'     => 'desenrola-brasil-como-funciona',
            'excerpt'  => 'O programa do governo federal ajuda milhões de brasileiros a renegociar dívidas com descontos. Saiba como participar.',
            'date'     => '2026-02-19 10:00:00',
            'image'    => 'post-contas.jpg',
            'cat_slug' => 'sair-das-dividas',
            'sub_slug' => 'dicas-para-renegociar',
            'content'  => '<p>O Desenrola Brasil é um programa federal criado para ajudar brasileiros endividados a renegociar suas dívidas com condições especiais.</p>
<h2>Quem pode participar?</h2>
<p>Pessoas com dívidas de até R$ 20.000 registradas em birôs de crédito como Serasa e SPC.</p>
<h2>Como aderir</h2>
<p>Acesse o site oficial do Desenrola ou vá a uma agência do Banco do Brasil com seus documentos.</p>
<h2>Dívidas que podem ser negociadas</h2>
<p>Cartão de crédito, empréstimos, financiamentos, contas de serviços e muito mais.</p>',
        ),
        // ── ARTIGO 17 ──
        array(
            'title'    => '5 erros comuns ao tentar sair das dívidas (e como evitá-los)',
            'slug'     => '5-erros-ao-tentar-sair-das-dividas',
            'excerpt'  => 'Muita gente tenta quitar dívidas mas acaba piorando a situação. Conheça os erros mais frequentes.',
            'date'     => '2026-02-15 10:00:00',
            'image'    => 'post-organizar.jpg',
            'cat_slug' => 'sair-das-dividas',
            'sub_slug' => 'dicas-para-renegociar',
            'content'  => '<p>Sair das dívidas exige planejamento. Sem ele, você pode cair em armadilhas que pioram sua situação financeira.</p>
<h2>1. Fazer novas dívidas para pagar as antigas</h2>
<p>Trocar uma dívida cara por outra mais barata faz sentido, mas acumular mais dívidas, não.</p>
<h2>2. Ignorar os juros</h2>
<p>Pagar apenas o mínimo do cartão faz a dívida crescer exponencialmente.</p>
<h2>3. Não ter um plano de pagamento</h2>
<p>Defina prioridades: quite primeiro as dívidas com juros mais altos.</p>',
        ),
        // ── ARTIGO 18 ──
        array(
            'title'    => '10 dicas para reduzir a conta de luz e economizar todo mês',
            'slug'     => 'como-reduzir-conta-de-luz',
            'excerpt'  => 'A conta de luz pesa no orçamento? Veja medidas simples que podem reduzir seu gasto em até 30%.',
            'date'     => '2026-02-21 10:00:00',
            'image'    => 'post-contas.jpg',
            'cat_slug' => 'organizar-as-financas',
            'sub_slug' => 'dicas-para-economizar',
            'content'  => '<p>A conta de energia elétrica é uma das maiores despesas fixas das famílias brasileiras. Mas com algumas mudanças simples, é possível economizar bastante.</p>
<h2>1. Troque lâmpadas por LED</h2>
<p>Lâmpadas LED consomem até 80% menos energia que as incandescentes.</p>
<h2>2. Desligue aparelhos da tomada</h2>
<p>Equipamentos em standby continuam consumindo energia.</p>
<h2>3. Use a tarifa social</h2>
<p>Famílias de baixa renda podem ter desconto de até 65% na conta de luz pelo programa Tarifa Social.</p>',
        ),
        // ── ARTIGO 19 ──
        array(
            'title'    => 'Contas atrasadas: o que fazer primeiro para não virar uma bola de neve',
            'slug'     => 'contas-atrasadas-o-que-fazer',
            'excerpt'  => 'Se suas contas estão atrasadas, saiba quais priorizar e como evitar que a situação saia do controle.',
            'date'     => '2026-02-17 10:00:00',
            'image'    => 'post-dividas.jpg',
            'cat_slug' => 'organizar-as-financas',
            'sub_slug' => 'pagamentos-e-contas',
            'content'  => '<p>Quando as contas começam a atrasar, é fácil entrar em pânico. Mas com organização, é possível retomar o controle.</p>
<h2>Priorize contas essenciais</h2>
<p>Aluguel, energia e água devem vir primeiro, pois podem gerar cortes de serviço.</p>
<h2>Negocie com credores</h2>
<p>Entre em contato com as empresas e peça parcelamento ou desconto para pagamento à vista.</p>
<h2>Monte um calendário de pagamentos</h2>
<p>Organize todas as datas de vencimento em uma planilha ou app para não esquecer nenhuma conta.</p>',
        ),
        // ── ARTIGO 20 ──
        array(
            'title'    => 'Como organizar seus boletos mensais e nunca mais pagar juros',
            'slug'     => 'como-organizar-boletos-mensais',
            'excerpt'  => 'Aprenda a criar um sistema simples para controlar todos os seus boletos e evitar multas por atraso.',
            'date'     => '2026-02-13 10:00:00',
            'image'    => 'post-organizar.jpg',
            'cat_slug' => 'organizar-as-financas',
            'sub_slug' => 'pagamentos-e-contas',
            'content'  => '<p>Pagar juros por atraso é jogar dinheiro fora. Com um sistema simples de organização, você evita esse problema.</p>
<h2>Use um app de controle financeiro</h2>
<p>Apps como Mobills, Organizze e Guiabolso ajudam a cadastrar contas e enviam lembretes de vencimento.</p>
<h2>Concentre vencimentos</h2>
<p>Ligue para as empresas e peça para alterar a data de vencimento para próximo ao dia do pagamento.</p>
<p>Tente concentrar todas as contas entre os dias 5 e 10 do mês, logo após o pagamento!</p>',
        ),
        // ── ARTIGO 21 ──
        array(
            'title'    => 'Quais são as diferenças entre as edições da Tele Sena?',
            'slug'     => 'diferencas-entre-edicoes-tele-sena',
            'excerpt'  => 'Carnaval, Páscoa, São João, Independência, Natal e Semanal: entenda o que muda entre cada edição.',
            'date'     => '2026-02-23 10:00:00',
            'image'    => 'post-premios.jpg',
            'cat_slug' => 'entender-a-tele-sena',
            'sub_slug' => 'como-funciona',
            'content'  => '<p>A Tele Sena lança diferentes edições ao longo do ano, cada uma com características únicas.</p>
<h2>Edições temáticas</h2>
<p>As edições de Carnaval, Páscoa, São João, Independência e Natal são lançadas em datas comemorativas e têm valores de prêmios diferenciados.</p>
<h2>Tele Sena Semanal</h2>
<p>A versão semanal custa menos e tem sorteios toda semana, ideal para quem quer concorrer com frequência.</p>
<h2>Qual escolher?</h2>
<p>As edições temáticas geralmente têm prêmios maiores, enquanto a semanal oferece mais chances de ganhar ao longo do mês.</p>',
        ),
        // ── ARTIGO 22 ──
        array(
            'title'    => 'Como conferir o resultado da Tele Sena: todas as formas disponíveis',
            'slug'     => 'como-conferir-resultado-tele-sena',
            'excerpt'  => 'Saiba onde e como verificar se sua Tele Sena foi sorteada, pelo site, app, TV ou telefone.',
            'date'     => '2026-02-16 10:00:00',
            'image'    => 'hero-1.jpg',
            'cat_slug' => 'entender-a-tele-sena',
            'sub_slug' => 'como-funciona',
            'content'  => '<p>Conferir o resultado da sua Tele Sena é simples e pode ser feito de diversas formas.</p>
<h2>Pelo site oficial</h2>
<p>Acesse telesena.com.br e digite o número do seu título para verificar se foi contemplado.</p>
<h2>Pelo app</h2>
<p>Baixe o aplicativo da Tele Sena, disponível para Android e iOS, e confira seus resultados a qualquer momento.</p>
<h2>Pela TV</h2>
<p>Os sorteios são transmitidos ao vivo durante o programa Silvio Santos, no SBT.</p>
<p>Ative as notificações do app para ser avisado sempre que houver um novo sorteio!</p>',
        ),
        // ── ARTIGO 23 ──
        array(
            'title'    => 'A Tele Sena é um título de capitalização: o que isso significa?',
            'slug'     => 'tele-sena-titulo-capitalizacao-explicado',
            'excerpt'  => 'Entenda o que é um título de capitalização, como funciona o resgate e por que a Tele Sena não é uma loteria.',
            'date'     => '2026-02-12 10:00:00',
            'image'    => 'post-sonho.jpg',
            'cat_slug' => 'entender-a-tele-sena',
            'sub_slug' => 'o-que-e',
            'content'  => '<p>Muita gente confunde a Tele Sena com uma loteria, mas ela é, na verdade, um título de capitalização.</p>
<h2>O que é capitalização?</h2>
<p>É uma forma de poupar dinheiro com a chance de concorrer a prêmios. Parte do valor pago é guardada e pode ser resgatada após o prazo de vigência.</p>
<h2>Diferença para loteria</h2>
<p>Na loteria, o valor do bilhete não é devolvido. Na Tele Sena, parte do valor é devolvida como resgate.</p>
<h2>Vale a pena?</h2>
<p>Se você gosta de concorrer a prêmios e quer guardar uma parte do dinheiro, a Tele Sena combina os dois benefícios.</p>',
        ),
    );

    // Criar cada post
    foreach ( $posts_data as $post_data ) {
        $existing = get_page_by_path( $post_data['slug'], OBJECT, 'post' );
        if ( $existing ) continue;

        // Determinar categorias
        $post_cats = array();
        if ( isset( $cat_ids[ $post_data['cat_slug'] ] ) ) {
            $post_cats[] = $cat_ids[ $post_data['cat_slug'] ];
        }
        if ( isset( $post_data['sub_slug'] ) && isset( $cat_ids[ $post_data['cat_slug'] . '/' . $post_data['sub_slug'] ] ) ) {
            $post_cats[] = $cat_ids[ $post_data['cat_slug'] . '/' . $post_data['sub_slug'] ];
        }

        $post_id = wp_insert_post( array(
            'post_title'   => $post_data['title'],
            'post_name'    => $post_data['slug'],
            'post_content' => $post_data['content'],
            'post_excerpt' => $post_data['excerpt'],
            'post_status'  => 'publish',
            'post_type'    => 'post',
            'post_date'    => $post_data['date'],
            'post_author'  => 1,
            'post_category' => $post_cats,
        ) );

        if ( ! is_wp_error( $post_id ) ) {
            // Marcar como featured se necessário
            if ( ! empty( $post_data['featured'] ) ) {
                update_post_meta( $post_id, '_is_featured', '1' );
            }

            // Importar imagem destacada
            if ( ! empty( $post_data['image'] ) ) {
                $image_path = $img_dir . $post_data['image'];
                if ( file_exists( $image_path ) ) {
                    telesena_set_featured_image( $post_id, $image_path, $post_data['title'] );
                }
            }

            $created++;
        }
    }

    // ═══════════════════════════════════════
    // PÁGINAS
    // ═══════════════════════════════════════

    // Página Home
    if ( ! get_page_by_path( 'home' ) ) {
        $home_id = wp_insert_post( array(
            'post_title'   => 'Home',
            'post_name'    => 'home',
            'post_content' => '',
            'post_status'  => 'publish',
            'post_type'    => 'page',
            'page_template' => 'front-page.php',
        ) );
        if ( ! is_wp_error( $home_id ) ) {
            update_option( 'show_on_front', 'page' );
            update_option( 'page_on_front', $home_id );
        }
    }

    // Página Equipe
    if ( ! get_page_by_path( 'equipe' ) ) {
        wp_insert_post( array(
            'post_title'   => 'Equipe Tele Sena',
            'post_name'    => 'equipe',
            'post_content' => '',
            'post_status'  => 'publish',
            'post_type'    => 'page',
            'page_template' => 'page-equipe.php',
        ) );
    }

    // Página Blog (lista de posts)
    if ( ! get_page_by_path( 'blog' ) ) {
        $blog_id = wp_insert_post( array(
            'post_title'   => 'Blog',
            'post_name'    => 'blog',
            'post_content' => '',
            'post_status'  => 'publish',
            'post_type'    => 'page',
        ) );
        if ( ! is_wp_error( $blog_id ) ) {
            update_option( 'page_for_posts', $blog_id );
        }
    }

    wp_defer_term_counting( false );

    return "Importação concluída! $created posts criados com sucesso. Categorias, subcategorias e páginas configuradas.";
}

// ── Helpers ──

function telesena_create_category( $name, $slug, $description = '', $parent = 0 ) {
    $existing = get_term_by( 'slug', $slug, 'category' );
    if ( $existing ) {
        // Atualizar descrição se necessário
        wp_update_term( $existing->term_id, 'category', array( 'description' => $description ) );
        return $existing->term_id;
    }

    $result = wp_insert_term( $name, 'category', array(
        'slug'        => $slug,
        'description' => $description,
        'parent'      => $parent,
    ) );

    return is_wp_error( $result ) ? 0 : $result['term_id'];
}

function telesena_set_featured_image( $post_id, $image_path, $title ) {
    $filetype = wp_check_filetype( basename( $image_path ), null );
    $upload_dir = wp_upload_dir();

    $filename = basename( $image_path );
    $dest = $upload_dir['path'] . '/' . $filename;

    // Copiar arquivo para uploads
    if ( ! file_exists( $dest ) ) {
        copy( $image_path, $dest );
    }

    $attachment = array(
        'guid'           => $upload_dir['url'] . '/' . $filename,
        'post_mime_type' => $filetype['type'],
        'post_title'     => sanitize_file_name( pathinfo( $filename, PATHINFO_FILENAME ) ),
        'post_content'   => '',
        'post_status'    => 'inherit',
    );

    // Verificar se attachment já existe
    $existing = get_posts( array(
        'post_type'  => 'attachment',
        'meta_key'   => '_wp_attached_file',
        'meta_value' => ltrim( str_replace( $upload_dir['basedir'], '', $dest ), '/' ),
        'numberposts' => 1,
    ) );

    if ( ! empty( $existing ) ) {
        $attach_id = $existing[0]->ID;
    } else {
        $attach_id = wp_insert_attachment( $attachment, $dest, $post_id );
        require_once( ABSPATH . 'wp-admin/includes/image.php' );
        $attach_data = wp_generate_attachment_metadata( $attach_id, $dest );
        wp_update_attachment_metadata( $attach_id, $attach_data );
    }

    set_post_thumbnail( $post_id, $attach_id );
}
