<?php
/**
 * Blog Tele Sena — Customizer (Personalizar)
 * Todas as opções de cores, imagens e textos editáveis via Aparência > Personalizar
 */

if ( ! defined( 'ABSPATH' ) ) exit;

function telesena_customizer_register( $wp_customize ) {

    // ═══════════════════════════════════════
    // PAINEL: Identidade Tele Sena
    // ═══════════════════════════════════════
    $wp_customize->add_panel( 'telesena_panel', array(
        'title'    => __( '🎨 Blog Tele Sena', 'blog-telesena' ),
        'priority' => 25,
    ) );

    // ── Seção: Cores Principais ──
    $wp_customize->add_section( 'telesena_colors', array(
        'title' => __( 'Cores', 'blog-telesena' ),
        'panel' => 'telesena_panel',
    ) );

    $colors = array(
        'ts_blue'       => array( 'Azul Principal',       '#1A6FEF' ),
        'ts_blue_light' => array( 'Azul Claro',           '#3B85F5' ),
        'ts_gold'       => array( 'Dourado',              '#F5A623' ),
        'ts_yellow'     => array( 'Amarelo',              '#FFD600' ),
        'ts_dark'       => array( 'Texto Escuro',         '#1B1B3A' ),
        'ts_text'       => array( 'Texto Corpo',          '#2D3A4E' ),
        'ts_text_light' => array( 'Texto Claro',          '#5F6D7E' ),
        'ts_gray'       => array( 'Cinza Fundo',          '#E8E9EB' ),
        'ts_border'     => array( 'Borda',                '#E5E7EB' ),
        'ts_footer_bg'  => array( 'Fundo do Rodapé',      '#1A6FEF' ),
        'ts_header_bg'  => array( 'Fundo do Cabeçalho',   '#FFFFFF' ),
    );

    foreach ( $colors as $key => $data ) {
        $wp_customize->add_setting( $key, array(
            'default'           => $data[1],
            'sanitize_callback' => 'sanitize_hex_color',
            'transport'         => 'postMessage',
        ) );
        $wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, $key, array(
            'label'   => $data[0],
            'section' => 'telesena_colors',
        ) ) );
    }

    // ── Seção: Logos e Imagens ──
    $wp_customize->add_section( 'telesena_images', array(
        'title' => __( 'Logos e Imagens', 'blog-telesena' ),
        'panel' => 'telesena_panel',
    ) );

    $images = array(
        'ts_logo'            => 'Logo Principal (Cabeçalho)',
        'ts_logo_footer'     => 'Logo do Rodapé',
        'ts_favicon'         => 'Favicon',
        'ts_hero_fallback'   => 'Imagem padrão do Hero',
        'ts_newsletter_bg'   => 'Fundo da Newsletter',
        'ts_banner_oferta'   => 'Banner de Oferta (antes do rodapé)',
        'ts_logo_gss'        => 'Logo Grupo Silvio Santos',
        'ts_logo_lideranca'  => 'Logo Liderança Capitalização',
    );

    foreach ( $images as $key => $label ) {
        $wp_customize->add_setting( $key, array(
            'default'           => '',
            'sanitize_callback' => 'esc_url_raw',
        ) );
        $wp_customize->add_control( new WP_Customize_Image_Control( $wp_customize, $key, array(
            'label'   => $label,
            'section' => 'telesena_images',
        ) ) );
    }

    // ── Seção: Textos do Cabeçalho ──
    $wp_customize->add_section( 'telesena_header', array(
        'title' => __( 'Cabeçalho', 'blog-telesena' ),
        'panel' => 'telesena_panel',
    ) );

    $wp_customize->add_setting( 'ts_search_placeholder', array(
        'default'           => 'O que você quer aprender hoje?',
        'sanitize_callback' => 'sanitize_text_field',
    ) );
    $wp_customize->add_control( 'ts_search_placeholder', array(
        'label'   => 'Placeholder da busca',
        'section' => 'telesena_header',
        'type'    => 'text',
    ) );

    $wp_customize->add_setting( 'ts_cta_header_text', array(
        'default'           => 'Compre sua Tele Sena',
        'sanitize_callback' => 'sanitize_text_field',
    ) );
    $wp_customize->add_control( 'ts_cta_header_text', array(
        'label'   => 'Texto do botão CTA',
        'section' => 'telesena_header',
        'type'    => 'text',
    ) );

    $wp_customize->add_setting( 'ts_cta_header_url', array(
        'default'           => 'https://telesena.com.br',
        'sanitize_callback' => 'esc_url_raw',
    ) );
    $wp_customize->add_control( 'ts_cta_header_url', array(
        'label'   => 'URL do botão CTA',
        'section' => 'telesena_header',
        'type'    => 'url',
    ) );

    // ── Seção: Rodapé ──
    $wp_customize->add_section( 'telesena_footer', array(
        'title' => __( 'Rodapé', 'blog-telesena' ),
        'panel' => 'telesena_panel',
    ) );

    $wp_customize->add_setting( 'ts_footer_desc', array(
        'default'           => 'Educação financeira acessível para todos. Dicas práticas para organizar suas finanças e realizar seus sonhos.',
        'sanitize_callback' => 'sanitize_textarea_field',
    ) );
    $wp_customize->add_control( 'ts_footer_desc', array(
        'label'   => 'Descrição do rodapé',
        'section' => 'telesena_footer',
        'type'    => 'textarea',
    ) );

    $wp_customize->add_setting( 'ts_footer_cta_text', array(
        'default'           => 'Compre sua Tele Sena',
        'sanitize_callback' => 'sanitize_text_field',
    ) );
    $wp_customize->add_control( 'ts_footer_cta_text', array(
        'label'   => 'Texto do botão CTA do rodapé',
        'section' => 'telesena_footer',
        'type'    => 'text',
    ) );

    $wp_customize->add_setting( 'ts_footer_cta_url', array(
        'default'           => 'https://telesena.com.br',
        'sanitize_callback' => 'esc_url_raw',
    ) );
    $wp_customize->add_control( 'ts_footer_cta_url', array(
        'label'   => 'URL do botão CTA do rodapé',
        'section' => 'telesena_footer',
        'type'    => 'url',
    ) );

    $wp_customize->add_setting( 'ts_disclaimer_text', array(
        'default'           => 'A Tele Sena é um Título de Capitalização da modalidade Filantropia Premiável…',
        'sanitize_callback' => 'wp_kses_post',
    ) );
    $wp_customize->add_control( 'ts_disclaimer_text', array(
        'label'   => 'Texto legal / disclaimer',
        'section' => 'telesena_footer',
        'type'    => 'textarea',
    ) );

    // Redes sociais
    $socials = array(
        'ts_instagram' => array( 'Instagram URL', 'https://instagram.com/telesena' ),
        'ts_youtube'   => array( 'YouTube URL',   'https://youtube.com/telesena' ),
        'ts_facebook'  => array( 'Facebook URL',  'https://facebook.com/telesena' ),
        'ts_tiktok'    => array( 'TikTok URL',    '' ),
        'ts_twitter'   => array( 'X / Twitter URL', '' ),
    );

    foreach ( $socials as $key => $data ) {
        $wp_customize->add_setting( $key, array(
            'default'           => $data[1],
            'sanitize_callback' => 'esc_url_raw',
        ) );
        $wp_customize->add_control( $key, array(
            'label'   => $data[0],
            'section' => 'telesena_footer',
            'type'    => 'url',
        ) );
    }

    // ── Seção: Newsletter ──
    $wp_customize->add_section( 'telesena_newsletter', array(
        'title' => __( 'Newsletter', 'blog-telesena' ),
        'panel' => 'telesena_panel',
    ) );

    $wp_customize->add_setting( 'ts_newsletter_title', array(
        'default'           => '📬 Receba nossas dicas',
        'sanitize_callback' => 'sanitize_text_field',
    ) );
    $wp_customize->add_control( 'ts_newsletter_title', array(
        'label'   => 'Título da newsletter',
        'section' => 'telesena_newsletter',
        'type'    => 'text',
    ) );

    $wp_customize->add_setting( 'ts_newsletter_desc', array(
        'default'           => 'Cadastre-se e receba conteúdos exclusivos sobre educação financeira.',
        'sanitize_callback' => 'sanitize_text_field',
    ) );
    $wp_customize->add_control( 'ts_newsletter_desc', array(
        'label'   => 'Descrição da newsletter',
        'section' => 'telesena_newsletter',
        'type'    => 'text',
    ) );

    $wp_customize->add_setting( 'ts_newsletter_btn', array(
        'default'           => 'Quero receber',
        'sanitize_callback' => 'sanitize_text_field',
    ) );
    $wp_customize->add_control( 'ts_newsletter_btn', array(
        'label'   => 'Texto do botão',
        'section' => 'telesena_newsletter',
        'type'    => 'text',
    ) );

    // ── Seção: Banner de Oferta ──
    $wp_customize->add_section( 'telesena_banner', array(
        'title' => __( 'Banner de Oferta', 'blog-telesena' ),
        'panel' => 'telesena_panel',
    ) );

    $wp_customize->add_setting( 'ts_banner_title', array(
        'default'           => '🎉 Tele Sena Semanal',
        'sanitize_callback' => 'sanitize_text_field',
    ) );
    $wp_customize->add_control( 'ts_banner_title', array(
        'label'   => 'Título do banner',
        'section' => 'telesena_banner',
        'type'    => 'text',
    ) );

    $wp_customize->add_setting( 'ts_banner_desc', array(
        'default'           => 'Concorra a prêmios toda semana!',
        'sanitize_callback' => 'sanitize_text_field',
    ) );
    $wp_customize->add_control( 'ts_banner_desc', array(
        'label'   => 'Descrição do banner',
        'section' => 'telesena_banner',
        'type'    => 'text',
    ) );

    $wp_customize->add_setting( 'ts_banner_btn_text', array(
        'default'           => 'Compre agora',
        'sanitize_callback' => 'sanitize_text_field',
    ) );
    $wp_customize->add_control( 'ts_banner_btn_text', array(
        'label'   => 'Texto do botão',
        'section' => 'telesena_banner',
        'type'    => 'text',
    ) );

    $wp_customize->add_setting( 'ts_banner_btn_url', array(
        'default'           => 'https://telesena.com.br',
        'sanitize_callback' => 'esc_url_raw',
    ) );
    $wp_customize->add_control( 'ts_banner_btn_url', array(
        'label'   => 'URL do botão',
        'section' => 'telesena_banner',
        'type'    => 'url',
    ) );

    // ── Seção: SEO ──
    $wp_customize->add_section( 'telesena_seo', array(
        'title' => __( 'SEO', 'blog-telesena' ),
        'panel' => 'telesena_panel',
    ) );

    $wp_customize->add_setting( 'ts_home_title', array(
        'default'           => 'Blog Tele Sena — Educação Financeira Acessível',
        'sanitize_callback' => 'sanitize_text_field',
    ) );
    $wp_customize->add_control( 'ts_home_title', array(
        'label'   => 'Título H1 da home (SEO)',
        'section' => 'telesena_seo',
        'type'    => 'text',
    ) );

    $wp_customize->add_setting( 'ts_home_description', array(
        'default'           => 'Dicas de educação financeira, organização de finanças e como usar sua Tele Sena.',
        'sanitize_callback' => 'sanitize_text_field',
    ) );
    $wp_customize->add_control( 'ts_home_description', array(
        'label'   => 'Meta description da home',
        'section' => 'telesena_seo',
        'type'    => 'textarea',
    ) );
}
add_action( 'customize_register', 'telesena_customizer_register' );

// ── CSS dinâmico baseado no Customizer ──
function telesena_customizer_css() {
    $blue       = get_theme_mod( 'ts_blue', '#1A6FEF' );
    $blue_light = get_theme_mod( 'ts_blue_light', '#3B85F5' );
    $gold       = get_theme_mod( 'ts_gold', '#F5A623' );
    $yellow     = get_theme_mod( 'ts_yellow', '#FFD600' );
    $dark       = get_theme_mod( 'ts_dark', '#1B1B3A' );
    $text       = get_theme_mod( 'ts_text', '#2D3A4E' );
    $text_light = get_theme_mod( 'ts_text_light', '#5F6D7E' );
    $gray       = get_theme_mod( 'ts_gray', '#E8E9EB' );
    $border     = get_theme_mod( 'ts_border', '#E5E7EB' );
    $footer_bg  = get_theme_mod( 'ts_footer_bg', '#1A6FEF' );
    $header_bg  = get_theme_mod( 'ts_header_bg', '#FFFFFF' );

    echo '<style id="telesena-customizer-css">
    :root {
        --ts-blue: ' . esc_attr( $blue ) . ';
        --ts-blue-light: ' . esc_attr( $blue_light ) . ';
        --ts-gold: ' . esc_attr( $gold ) . ';
        --ts-yellow: ' . esc_attr( $yellow ) . ';
        --ts-dark: ' . esc_attr( $dark ) . ';
        --ts-text: ' . esc_attr( $text ) . ';
        --ts-text-light: ' . esc_attr( $text_light ) . ';
        --ts-gray: ' . esc_attr( $gray ) . ';
        --ts-border: ' . esc_attr( $border ) . ';
        --ts-gradient-gold: linear-gradient(135deg, ' . esc_attr( $gold ) . ', ' . esc_attr( $yellow ) . ');
        --ts-gradient-blue: linear-gradient(135deg, ' . esc_attr( $blue ) . ', ' . esc_attr( $blue_light ) . ');
    }
    .site-header { background: ' . esc_attr( $header_bg ) . '; }
    .site-footer { background: ' . esc_attr( $footer_bg ) . '; }
    </style>';
}
add_action( 'wp_head', 'telesena_customizer_css' );

// ── Live Preview JS ──
function telesena_customizer_preview_js() {
    wp_enqueue_script(
        'telesena-customizer-preview',
        get_template_directory_uri() . '/js/customizer-preview.js',
        array( 'customize-preview', 'jquery' ),
        '1.0',
        true
    );
}
add_action( 'customize_preview_init', 'telesena_customizer_preview_js' );

// ── Helper: get customizer image or fallback ──
function telesena_get_image( $mod_key, $fallback = '' ) {
    $url = get_theme_mod( $mod_key, '' );
    return $url ? $url : $fallback;
}
