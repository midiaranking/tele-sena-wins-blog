<?php
/**
 * Widget: Hero Section
 * Exibe seção hero com post destaque + cards laterais.
 */

if ( ! defined( 'ABSPATH' ) ) exit;

class Telesena_Hero_Section_Widget extends \Elementor\Widget_Base {

    public function get_name() { return 'telesena_hero'; }
    public function get_title() { return __( 'Hero Section', 'blog-telesena' ); }
    public function get_icon() { return 'eicon-featured-image'; }
    public function get_categories() { return [ 'telesena' ]; }

    protected function register_controls() {
        $this->start_controls_section( 'content_section', [
            'label' => __( 'Conteúdo', 'blog-telesena' ),
        ] );

        $this->add_control( 'source', [
            'label'   => __( 'Fonte dos posts', 'blog-telesena' ),
            'type'    => \Elementor\Controls_Manager::SELECT,
            'options' => [
                'featured' => 'Posts em destaque (meta _is_featured)',
                'recent'   => 'Posts mais recentes',
            ],
            'default' => 'featured',
        ] );

        $this->add_control( 'min_height', [
            'label'   => __( 'Altura mínima', 'blog-telesena' ),
            'type'    => \Elementor\Controls_Manager::SLIDER,
            'range'   => [ 'px' => [ 'min' => 300, 'max' => 700 ] ],
            'default' => [ 'size' => 400 ],
        ] );

        $this->end_controls_section();
    }

    protected function render() {
        $s = $this->get_settings_for_display();
        $height = $s['min_height']['size'] ?? 400;

        $args = [
            'post_type'      => 'post',
            'posts_per_page' => 3,
            'post_status'    => 'publish',
        ];

        if ( $s['source'] === 'featured' ) {
            $args['meta_key']   = '_is_featured';
            $args['meta_value'] = '1';
        }

        $query = new WP_Query( $args );
        $posts = [];
        while ( $query->have_posts() ) { $query->the_post(); $posts[] = $query->post; }
        wp_reset_postdata();

        if ( empty( $posts ) ) { echo '<p>Nenhum post encontrado.</p>'; return; }

        echo '<section class="hero-section"><div class="container"><div class="hero-grid">';

        // Main
        $main = $posts[0];
        $cats = get_the_category( $main->ID );
        $cat  = ! empty( $cats ) ? $cats[0] : null;
        echo '<div class="hero-main" style="min-height:' . $height . 'px;">';
        echo '<a href="' . get_permalink( $main ) . '">';
        echo get_the_post_thumbnail( $main, 'telesena-hero' );
        echo '<div class="hero-overlay">';
        if ( $cat ) echo '<span class="category-badge">' . esc_html( $cat->name ) . '</span>';
        echo '<h2>' . esc_html( $main->post_title ) . '</h2>';
        echo '<p>' . get_the_excerpt( $main ) . '</p>';
        echo '</div></a></div>';

        // Side
        echo '<div class="hero-side">';
        for ( $i = 1; $i <= 2; $i++ ) {
            if ( ! isset( $posts[ $i ] ) ) break;
            $p = $posts[ $i ];
            $cats2 = get_the_category( $p->ID );
            $cat2  = ! empty( $cats2 ) ? $cats2[0] : null;
            echo '<div class="hero-side-card"><a href="' . get_permalink( $p ) . '">';
            echo get_the_post_thumbnail( $p, 'telesena-card' );
            echo '<div class="hero-overlay">';
            if ( $cat2 ) echo '<span class="category-badge">' . esc_html( $cat2->name ) . '</span>';
            echo '<h3>' . esc_html( $p->post_title ) . '</h3>';
            echo '</div></a></div>';
        }
        echo '</div>';

        echo '</div></div></section>';
    }
}
