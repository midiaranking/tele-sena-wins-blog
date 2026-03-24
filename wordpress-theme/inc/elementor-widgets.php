<?php
/**
 * Blog Tele Sena — Custom Elementor Widgets
 * Widgets personalizados para usar no Elementor
 */

if ( ! defined( 'ABSPATH' ) ) exit;

// Registra a categoria de widgets do tema
function telesena_elementor_widget_categories( $elements_manager ) {
    $elements_manager->add_category( 'telesena', array(
        'title' => __( '🎯 Blog Tele Sena', 'blog-telesena' ),
        'icon'  => 'eicon-star',
    ) );
}
add_action( 'elementor/elements/categories_registered', 'telesena_elementor_widget_categories' );

// Registra todos os widgets
function telesena_register_elementor_widgets( $widgets_manager ) {
    require_once get_template_directory() . '/inc/elementor-widgets/widget-post-cards.php';
    require_once get_template_directory() . '/inc/elementor-widgets/widget-hero-section.php';
    require_once get_template_directory() . '/inc/elementor-widgets/widget-category-bar.php';
    require_once get_template_directory() . '/inc/elementor-widgets/widget-newsletter.php';
    require_once get_template_directory() . '/inc/elementor-widgets/widget-cta-banner.php';
    require_once get_template_directory() . '/inc/elementor-widgets/widget-sidebar-posts.php';

    $widgets_manager->register( new \Telesena_Post_Cards_Widget() );
    $widgets_manager->register( new \Telesena_Hero_Section_Widget() );
    $widgets_manager->register( new \Telesena_Category_Bar_Widget() );
    $widgets_manager->register( new \Telesena_Newsletter_Widget() );
    $widgets_manager->register( new \Telesena_CTA_Banner_Widget() );
    $widgets_manager->register( new \Telesena_Sidebar_Posts_Widget() );
}
add_action( 'elementor/widgets/register', 'telesena_register_elementor_widgets' );
