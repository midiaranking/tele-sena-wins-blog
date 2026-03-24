<?php
/**
 * Template padrão para páginas estáticas.
 * Compatível com Elementor — quando editada com Elementor, usa the_content() que renderiza os widgets.
 */
get_header(); ?>

<main>
  <section style="padding:2.5rem 0;">
    <div class="container">
      <?php
      while ( have_posts() ) : the_post();
        // Se a página usa Elementor, the_content() renderiza o layout do Elementor
        the_content();
      endwhile;
      ?>
    </div>
  </section>
</main>

<?php get_footer(); ?>
