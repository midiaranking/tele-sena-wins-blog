<?php get_header(); ?>

<main>
  <section class="archive-header">
    <div class="container">
      <h1>Resultados para: "<?php echo esc_html( get_search_query() ); ?>"</h1>
    </div>
  </section>

  <section style="padding:0 0 2.5rem;">
    <div class="container">
      <?php if ( have_posts() ) : ?>
        <div class="posts-grid">
          <?php while ( have_posts() ) : the_post(); ?>
            <?php get_template_part( 'template-parts/post-card' ); ?>
          <?php endwhile; ?>
        </div>

        <div style="text-align:center;margin-top:2rem;">
          <?php the_posts_pagination(); ?>
        </div>
      <?php else : ?>
        <p style="text-align:center;color:var(--ts-text-light);padding:3rem 0;">
          Nenhum resultado encontrado. Tente outra pesquisa.
        </p>
      <?php endif; ?>
    </div>
  </section>
</main>

<?php get_footer(); ?>
