<?php
/**
 * Template Name: Home
 * Description: Página inicial do Blog Tele Sena com layout principal organizado.
 */
get_header(); ?>

<main>
  <!-- Hero Section (posts destacados) -->
  <?php
  $featured = new WP_Query( array(
    'posts_per_page' => 3,
    'meta_key'       => '_is_featured',
    'meta_value'     => '1',
    'post_status'    => 'publish',
  ) );

  if ( $featured->have_posts() ) :
    $posts_arr = $featured->posts;
  ?>
  <section class="hero-section">
    <div class="container">
      <div class="hero-grid">
        <?php
        $main = $posts_arr[0];
        $cats = get_the_category( $main->ID );
        $cat  = ! empty( $cats ) ? $cats[0] : null;
        ?>
        <a href="<?php echo get_permalink( $main ); ?>" class="hero-main">
          <?php echo get_the_post_thumbnail( $main, 'telesena-hero' ); ?>
          <div class="hero-overlay">
            <?php if ( $cat ) : ?>
              <span class="category-badge"><?php echo esc_html( $cat->name ); ?></span>
            <?php endif; ?>
            <h2><?php echo esc_html( $main->post_title ); ?></h2>
            <p class="line-clamp-2"><?php echo esc_html( get_the_excerpt( $main ) ); ?></p>
          </div>
        </a>

        <div class="hero-side">
          <?php for ( $i = 1; $i < min( 3, count( $posts_arr ) ); $i++ ) :
            $p    = $posts_arr[ $i ];
            $cats = get_the_category( $p->ID );
            $cat  = ! empty( $cats ) ? $cats[0] : null;
          ?>
          <a href="<?php echo get_permalink( $p ); ?>" class="hero-side-card">
            <?php echo get_the_post_thumbnail( $p, 'telesena-card' ); ?>
            <div class="hero-overlay">
              <?php if ( $cat ) : ?>
                <span class="category-badge"><?php echo esc_html( $cat->name ); ?></span>
              <?php endif; ?>
              <h3><?php echo esc_html( $p->post_title ); ?></h3>
            </div>
          </a>
          <?php endfor; ?>
        </div>
      </div>
    </div>
  </section>
  <?php wp_reset_postdata(); endif; ?>

  <!-- Barra de categorias -->
  <section class="category-bar">
    <div class="container">
      <ul>
        <?php
        $top_cats = get_categories( array( 'parent' => 0, 'hide_empty' => false, 'orderby' => 'name' ) );
        foreach ( $top_cats as $cat ) :
        ?>
          <li><a href="<?php echo esc_url( get_category_link( $cat->term_id ) ); ?>"><?php echo esc_html( $cat->name ); ?></a></li>
        <?php endforeach; ?>
      </ul>
    </div>
  </section>

  <!-- H1 SEO + Mais Recentes -->
  <section style="padding:2.5rem 0;">
    <div class="container">
      <h1 style="font-size:1.875rem;font-weight:800;margin-bottom:2rem;line-height:1.2;">
        Dicas para organizar as finanças, ganhar dinheiro e realizar seus sonhos
      </h1>

      <div class="section-header" style="margin:1.875rem 0 1.5rem;">
        <h2>Mais Recentes</h2>
        <a href="<?php echo esc_url( get_permalink( get_option( 'page_for_posts' ) ) ); ?>">Ver todos os artigos →</a>
      </div>

      <div class="content-with-sidebar">
        <div class="content-main">
          <div class="posts-grid">
            <?php
            $recent = new WP_Query( array(
              'posts_per_page' => 6,
              'post_status'    => 'publish',
            ) );
            if ( $recent->have_posts() ) :
              while ( $recent->have_posts() ) : $recent->the_post();
                get_template_part( 'template-parts/post-card' );
              endwhile;
              wp_reset_postdata();
            endif;
            ?>
          </div>
        </div>
        <aside class="content-sidebar">
          <?php get_sidebar(); ?>
        </aside>
      </div>
    </div>
  </section>

  <!-- Seções temáticas por categoria -->
  <?php
  $theme_cats = get_categories( array( 'parent' => 0, 'hide_empty' => true, 'orderby' => 'name', 'number' => 5 ) );
  foreach ( $theme_cats as $tcat ) :
    $cat_posts = new WP_Query( array(
      'cat'            => $tcat->term_id,
      'posts_per_page' => 4,
      'post_status'    => 'publish',
    ) );
    if ( $cat_posts->have_posts() ) :
  ?>
  <section style="padding:2rem 0;">
    <div class="container">
      <div class="section-header">
        <h2><?php echo esc_html( $tcat->name ); ?></h2>
        <a href="<?php echo esc_url( get_category_link( $tcat->term_id ) ); ?>">Ver todos →</a>
      </div>
      <div class="posts-grid">
        <?php
        while ( $cat_posts->have_posts() ) : $cat_posts->the_post();
          get_template_part( 'template-parts/post-card' );
        endwhile;
        wp_reset_postdata();
        ?>
      </div>
    </div>
  </section>
  <?php endif; endforeach; ?>

  <!-- Banner CTA -->
  <section style="padding:2.5rem 0;">
    <div class="container">
      <div class="cta-banner">
        <div class="cta-content">
          <h2>Tele Sena Semanal</h2>
          <p>Concorra toda semana a prêmios incríveis por apenas R$ 5,00!</p>
          <a href="https://telesena.com.br" target="_blank" rel="noopener noreferrer" class="cta-button">Compre agora</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Newsletter -->
  <section style="padding:2.5rem 0;background:var(--ts-gray);">
    <div class="container" style="max-width:560px;">
      <?php get_template_part( 'template-parts/newsletter' ); ?>
    </div>
  </section>

  <!-- Banner Tele Sena Semanal -->
  <section style="padding:1.5rem 0;background:var(--ts-gray);">
    <div class="container">
      <a href="https://telesena.com.br" target="_blank" rel="noopener noreferrer" style="display:block;border-radius:1rem;overflow:hidden;transition:opacity .2s;">
        <img src="<?php echo esc_url( get_template_directory_uri() . '/assets/img/banner-semanal.png' ); ?>" alt="Tele Sena Semanal – Toda semana tem mais de R$ 1 milhão esperando por você!" style="width:100%;height:auto;display:block;">
      </a>
    </div>
  </section>
</main>

<?php get_footer(); ?>
