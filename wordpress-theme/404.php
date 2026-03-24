<?php get_header(); ?>

<main>
  <div class="container" style="padding:5rem 0;text-align:center;">
    <h1 style="font-size:2rem;margin-bottom:1rem;">Página não encontrada</h1>
    <p style="color:var(--ts-text-light);margin-bottom:2rem;">A página que você procura não existe ou foi removida.</p>
    <a href="<?php echo esc_url( home_url( '/' ) ); ?>" style="color:var(--ts-blue);font-weight:600;">
      ← Voltar ao blog
    </a>
  </div>
</main>

<?php get_footer(); ?>
