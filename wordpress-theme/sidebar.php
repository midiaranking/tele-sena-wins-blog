<aside class="content-sidebar">
  <!-- Mais Lidos -->
  <div class="sidebar-section">
    <h3>Mais Lidos</h3>
    <div class="sidebar-posts">
      <?php
      $popular = new WP_Query( array(
        'posts_per_page' => 5,
        'orderby'        => 'comment_count',
        'order'          => 'DESC',
      ) );

      while ( $popular->have_posts() ) : $popular->the_post();
      ?>
      <a href="<?php the_permalink(); ?>" class="post-card-small">
        <?php the_post_thumbnail( 'thumbnail' ); ?>
        <div>
          <h4 class="line-clamp-2"><?php the_title(); ?></h4>
          <span class="meta">🕐 <?php echo telesena_read_time(); ?> Leitura</span>
        </div>
      </a>
      <?php endwhile; wp_reset_postdata(); ?>
    </div>
  </div>

  <!-- CTA Banner -->
  <div class="cta-banner" style="margin-top:2rem;">
    <h3>Compre sua Tele Sena e concorra a prêmios toda semana!</h3>
    <p>Realize seus sonhos com a Tele Sena 2026</p>
    <a href="https://telesena.com.br" target="_blank" rel="noopener noreferrer" class="btn-cta">
      Comprar agora
    </a>
  </div>
</aside>
