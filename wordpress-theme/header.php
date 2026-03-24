<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="site-header">
  <div class="container">
    <div class="header-top">
      <!-- Logo -->
      <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="header-logo">
        <?php if ( has_custom_logo() ) : ?>
          <?php the_custom_logo(); ?>
        <?php else : ?>
          <img src="<?php echo esc_url( get_template_directory_uri() . '/assets/logo-telesena.png' ); ?>" alt="<?php bloginfo( 'name' ); ?>">
        <?php endif; ?>
      </a>

      <!-- Search -->
      <div class="header-search">
        <form role="search" method="get" action="<?php echo esc_url( home_url( '/' ) ); ?>">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          <input type="search" name="s" placeholder="O que você quer aprender hoje?" value="<?php echo esc_attr( get_search_query() ); ?>">
        </form>
      </div>

      <!-- CTA + mobile toggle -->
      <div style="display:flex;align-items:center;gap:0.75rem;">
        <a href="https://telesena.com.br" target="_blank" rel="noopener noreferrer" class="header-cta">
          Compre sua Tele Sena
        </a>
        <button class="menu-toggle" id="menu-toggle" aria-label="Menu">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        </button>
      </div>
    </div>
  </div>

  <!-- Desktop nav -->
  <div class="header-nav">
    <div class="container">
      <?php
      wp_nav_menu( array(
        'theme_location' => 'primary',
        'container'      => false,
        'fallback_cb'    => false,
        'depth'          => 2,
      ) );
      ?>
    </div>
  </div>

  <!-- Mobile menu -->
  <div class="mobile-menu" id="mobile-menu">
    <div class="container">
      <?php
      wp_nav_menu( array(
        'theme_location' => 'primary',
        'container'      => false,
        'fallback_cb'    => false,
        'depth'          => 2,
        'walker'         => null,
      ) );
      ?>
      <a href="https://telesena.com.br" target="_blank" rel="noopener noreferrer" class="header-cta" style="display:block;text-align:center;margin-top:1rem;">
        Compre sua Tele Sena
      </a>
    </div>
  </div>

  <div style="height:1px;background:var(--ts-border);box-shadow:0 1px 2px rgba(0,0,0,0.05);"></div>
</header>
