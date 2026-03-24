<?php get_header(); ?>

<main class="single-post">
  <article style="padding:2rem 0;">
    <div class="container" style="max-width:56rem;">

      <?php while ( have_posts() ) : the_post(); ?>

      <!-- Breadcrumb -->
      <nav class="breadcrumb">
        <a href="<?php echo esc_url( home_url( '/' ) ); ?>">Home</a>
        <span>›</span>
        <?php
        $cats = get_the_category();
        if ( ! empty( $cats ) ) :
          $cat = $cats[0];
        ?>
          <a href="<?php echo esc_url( get_category_link( $cat->term_id ) ); ?>"><?php echo esc_html( $cat->name ); ?></a>
          <span>›</span>
        <?php endif; ?>
        <span style="color:var(--ts-dark);font-weight:500;" class="line-clamp-2"><?php the_title(); ?></span>
      </nav>

      <!-- Header -->
      <div class="post-header">
        <?php if ( ! empty( $cats ) ) : ?>
          <span class="category-badge"><?php echo esc_html( $cat->name ); ?></span>
        <?php endif; ?>

        <h1><?php the_title(); ?></h1>

        <div class="post-meta">
          <span>👤 <?php echo esc_html( get_the_author() ); ?></span>
          <span><?php echo get_the_date(); ?></span>
          <span>🕐 <?php echo telesena_read_time(); ?> de leitura</span>
        </div>
      </div>

      <!-- Featured image -->
      <?php if ( has_post_thumbnail() ) : ?>
        <?php the_post_thumbnail( 'telesena-hero', array( 'class' => 'featured-image' ) ); ?>
      <?php endif; ?>

      <!-- Content -->
      <div class="post-content">
        <?php the_content(); ?>
      </div>

      <!-- Author box -->
      <div class="author-box">
        <div class="author-avatar">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        </div>
        <div>
          <div class="author-name">
            <a href="<?php echo esc_url( home_url( '/equipe' ) ); ?>">Por Equipe Tele Sena</a>
          </div>
          <p class="author-bio">Conteúdo revisado e atualizado para te ajudar a cuidar melhor do seu dinheiro.</p>
        </div>
      </div>

      <!-- Inline CTA -->
      <div class="inline-cta">
        <h3>Compre sua Tele Sena e concorra a prêmios!</h3>
        <p>Não perca a chance de mudar sua vida. Adquira já a sua Tele Sena 2026.</p>
        <a href="https://telesena.com.br" target="_blank" rel="noopener noreferrer" class="btn-cta">
          Comprar agora
        </a>
      </div>

      <!-- Share buttons -->
      <div class="share-buttons">
        <span class="share-label">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>
          Compartilhar:
        </span>
        <a href="https://wa.me/?text=<?php echo urlencode( get_the_title() . ' ' . get_permalink() ); ?>" target="_blank" class="btn-share btn-whatsapp">WhatsApp</a>
        <a href="https://www.facebook.com/sharer/sharer.php?u=<?php echo urlencode( get_permalink() ); ?>" target="_blank" class="btn-share btn-facebook">Facebook</a>
        <a href="https://twitter.com/intent/tweet?text=<?php echo urlencode( get_the_title() ); ?>&url=<?php echo urlencode( get_permalink() ); ?>" target="_blank" class="btn-share btn-twitter">Twitter</a>
        <button class="btn-share btn-copy" onclick="navigator.clipboard.writeText('<?php echo esc_js( get_permalink() ); ?>')">Copiar link</button>
      </div>

      <!-- Back -->
      <a href="<?php echo esc_url( home_url( '/' ) ); ?>" style="display:inline-flex;align-items:center;gap:0.5rem;font-size:0.875rem;font-weight:600;color:var(--ts-blue);margin-bottom:2.5rem;">
        ← Voltar ao blog
      </a>

      <?php endwhile; ?>
    </div>
  </article>

  <!-- Related posts -->
  <?php
  $related = new WP_Query( array(
    'category__in'   => wp_get_post_categories( get_the_ID() ),
    'post__not_in'   => array( get_the_ID() ),
    'posts_per_page' => 3,
  ) );

  if ( $related->have_posts() ) :
  ?>
  <section class="related-posts">
    <div class="container" style="max-width:56rem;">
      <h2>Posts Relacionados</h2>
      <div class="posts-grid">
        <?php while ( $related->have_posts() ) : $related->the_post(); ?>
          <?php get_template_part( 'template-parts/post-card' ); ?>
        <?php endwhile; ?>
      </div>
    </div>
  </section>
  <?php wp_reset_postdata(); endif; ?>
</main>

<?php get_footer(); ?>
