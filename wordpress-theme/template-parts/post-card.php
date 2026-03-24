<?php
/**
 * Template Part: Post Card
 */
$cats = get_the_category();
$cat  = ! empty( $cats ) ? $cats[0] : null;
?>
<article class="post-card">
  <a href="<?php the_permalink(); ?>">
    <div class="card-image">
      <?php if ( has_post_thumbnail() ) : ?>
        <?php the_post_thumbnail( 'telesena-card' ); ?>
      <?php endif; ?>
      <?php if ( $cat ) : ?>
        <span class="category-badge"><?php echo esc_html( $cat->name ); ?></span>
      <?php endif; ?>
    </div>
  </a>
  <div class="card-body">
    <h3 class="line-clamp-2">
      <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
    </h3>
    <p class="excerpt line-clamp-2"><?php echo get_the_excerpt(); ?></p>
    <div class="card-meta">
      <div>
        <span><?php echo get_the_date(); ?></span>
        <span style="margin-left:0.75rem;">🕐 <?php echo telesena_read_time(); ?></span>
      </div>
      <a href="<?php the_permalink(); ?>" class="read-more">Ler mais →</a>
    </div>
  </div>
</article>
