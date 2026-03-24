<?php
/**
 * Blog Tele Sena - functions.php
 */

if ( ! defined( 'ABSPATH' ) ) exit;

// ── Theme Setup ──
function telesena_setup() {
    add_theme_support( 'title-tag' );
    add_theme_support( 'post-thumbnails' );
    add_theme_support( 'html5', array( 'search-form', 'comment-list', 'gallery', 'caption' ) );
    add_theme_support( 'custom-logo', array(
        'height'      => 64,
        'width'       => 200,
        'flex-height' => true,
        'flex-width'  => true,
    ) );

    register_nav_menus( array(
        'primary'   => __( 'Menu Principal', 'blog-telesena' ),
        'footer'    => __( 'Menu do Rodapé', 'blog-telesena' ),
    ) );

    set_post_thumbnail_size( 800, 450, true );
    add_image_size( 'telesena-hero', 1200, 600, true );
    add_image_size( 'telesena-card', 600, 340, true );
}
add_action( 'after_setup_theme', 'telesena_setup' );

// ── Elementor Support ──
function telesena_elementor_support() {
    // Registra suporte ao Elementor
    add_theme_support( 'elementor' );

    // Permite Elementor em páginas e posts
    if ( did_action( 'elementor/loaded' ) ) {
        // Registra locais do tema para o Elementor Theme Builder
        if ( function_exists( 'elementor_theme_do_location' ) ) {
            add_action( 'elementor/theme/register_locations', function( $elementor_theme_manager ) {
                $elementor_theme_manager->register_all_core_location();
            } );
        }
    }
}
add_action( 'after_setup_theme', 'telesena_elementor_support' );

// ── Elementor: Desabilitar cores e fontes padrão (usar as do tema) ──
add_action( 'elementor/editor/after_enqueue_styles', function() {
    wp_enqueue_style( 'telesena-style', get_stylesheet_uri(), array(), '1.0' );
} );

// ── Elementor: Registrar widget areas ──
function telesena_elementor_widgets_registered() {
    // Carrega estilos do tema no editor do Elementor
}
add_action( 'elementor/widgets/register', 'telesena_elementor_widgets_registered' );

// ── Enqueue Styles & Scripts ──
function telesena_scripts() {
    wp_enqueue_style( 'telesena-style', get_stylesheet_uri(), array(), '1.0' );
    wp_enqueue_script( 'telesena-mobile-menu', get_template_directory_uri() . '/js/mobile-menu.js', array(), '1.0', true );
}
add_action( 'wp_enqueue_scripts', 'telesena_scripts' );

// ── Sidebar / Widget Area ──
function telesena_widgets() {
    register_sidebar( array(
        'name'          => __( 'Sidebar do Blog', 'blog-telesena' ),
        'id'            => 'blog-sidebar',
        'before_widget' => '<div class="sidebar-section">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3>',
        'after_title'   => '</h3>',
    ) );
}
add_action( 'widgets_init', 'telesena_widgets' );

// ── Excerpt length ──
function telesena_excerpt_length( $length ) {
    return 20;
}
add_filter( 'excerpt_length', 'telesena_excerpt_length' );

function telesena_excerpt_more( $more ) {
    return '…';
}
add_filter( 'excerpt_more', 'telesena_excerpt_more' );

// ── JSON-LD BreadcrumbList ──
function telesena_breadcrumb_jsonld() {
    if ( is_singular( 'post' ) ) {
        global $post;
        $cats = get_the_category( $post->ID );
        $cat  = ! empty( $cats ) ? $cats[0] : null;

        $items = array(
            array( 'name' => 'Home', 'url' => home_url( '/' ) ),
        );
        if ( $cat ) {
            $items[] = array( 'name' => $cat->name, 'url' => get_category_link( $cat->term_id ) );
        }
        $items[] = array( 'name' => get_the_title(), 'url' => get_permalink() );
    } elseif ( is_category() ) {
        $cat   = get_queried_object();
        $items = array(
            array( 'name' => 'Home', 'url' => home_url( '/' ) ),
            array( 'name' => $cat->name, 'url' => get_category_link( $cat->term_id ) ),
        );
    } else {
        return;
    }

    $list = array();
    foreach ( $items as $i => $item ) {
        $list[] = array(
            '@type'    => 'ListItem',
            'position' => $i + 1,
            'name'     => $item['name'],
            'item'     => $item['url'],
        );
    }

    $schema = array(
        '@context'        => 'https://schema.org',
        '@type'           => 'BreadcrumbList',
        'itemListElement' => $list,
    );

    echo '<script type="application/ld+json">' . wp_json_encode( $schema, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE ) . '</script>' . "\n";
}
add_action( 'wp_head', 'telesena_breadcrumb_jsonld' );

// ── JSON-LD Article (single posts) ──
function telesena_article_jsonld() {
    if ( ! is_singular( 'post' ) ) return;

    global $post;
    $schema = array(
        '@context'      => 'https://schema.org',
        '@type'         => 'Article',
        'headline'      => get_the_title(),
        'datePublished' => get_the_date( 'c' ),
        'dateModified'  => get_the_modified_date( 'c' ),
        'author'        => array(
            '@type' => 'Organization',
            'name'  => 'Equipe Tele Sena',
            'url'   => home_url( '/equipe' ),
        ),
        'publisher'     => array(
            '@type' => 'Organization',
            'name'  => 'Tele Sena',
            'logo'  => array(
                '@type' => 'ImageObject',
                'url'   => get_template_directory_uri() . '/assets/logo-telesena.png',
            ),
        ),
        'mainEntityOfPage' => get_permalink(),
    );

    if ( has_post_thumbnail() ) {
        $schema['image'] = get_the_post_thumbnail_url( $post, 'telesena-hero' );
    }

    echo '<script type="application/ld+json">' . wp_json_encode( $schema, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE ) . '</script>' . "\n";
}
add_action( 'wp_head', 'telesena_article_jsonld' );

// ── Helper: read time ──
function telesena_read_time( $post_id = null ) {
    $content = get_post_field( 'post_content', $post_id ?: get_the_ID() );
    $words   = str_word_count( strip_tags( $content ) );
    $minutes = max( 1, ceil( $words / 200 ) );
    return $minutes . ' min';
}

// ── Customizer (Personalizar) ──
require_once get_template_directory() . '/inc/customizer.php';

// ── Elementor Widgets ──
if ( did_action( 'elementor/loaded' ) || defined( 'ELEMENTOR_VERSION' ) ) {
    require_once get_template_directory() . '/inc/elementor-widgets.php';
}

// ── Demo Content Importer ──
require_once get_template_directory() . '/inc/demo-content.php';
