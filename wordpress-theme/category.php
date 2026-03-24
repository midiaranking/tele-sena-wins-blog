<?php get_header(); ?>

<?php $cat = get_queried_object(); ?>

<main>
  <section class="archive-header">
    <div class="container">
      <nav class="breadcrumb" style="margin-bottom:1rem;">
        <a href="<?php echo esc_url( home_url( '/' ) ); ?>">Home</a>
        <span style="margin:0 0.5rem;">›</span>
        <span style="color:var(--ts-dark);font-weight:500;"><?php echo esc_html( $cat->name ); ?></span>
      </nav>

      <h1><?php echo esc_html( $cat->name ); ?></h1>
      <?php if ( $cat->description ) : ?>
        <p><?php echo esc_html( $cat->description ); ?></p>
      <?php endif; ?>

      <!-- Subcategory pills -->
      <?php
      $children = get_categories( array( 'parent' => $cat->term_id, 'hide_empty' => false ) );
      if ( ! empty( $children ) ) :
      ?>
      <div class="subcategory-pills" style="margin-top:1.5rem;">
        <?php foreach ( $children as $child ) : ?>
          <a href="<?php echo esc_url( get_category_link( $child->term_id ) ); ?>">
            <?php echo esc_html( $child->name ); ?>
          </a>
        <?php endforeach; ?>
      </div>
      <?php endif; ?>
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
          <?php
          the_posts_pagination( array(
            'mid_size'  => 2,
            'prev_text' => '← Anterior',
            'next_text' => 'Próximo →',
          ) );
          ?>
        </div>
      <?php else : ?>
        <p style="text-align:center;color:var(--ts-text-light);padding:3rem 0;">
          Nenhum artigo encontrado nesta categoria.
        </p>
      <?php endif; ?>
    </div>
  </section>

  <!-- Newsletter -->
  <section style="padding:2.5rem 0;background:var(--ts-gray);">
    <div class="container" style="max-width:560px;">
      <?php get_template_part( 'template-parts/newsletter' ); ?>
    </div>
  </section>
</main>

<?php get_footer(); ?>
