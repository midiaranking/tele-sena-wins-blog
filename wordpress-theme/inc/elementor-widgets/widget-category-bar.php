<?php
/**
 * Widget: Category Bar
 * Barra de categorias com pills clicáveis.
 */

if ( ! defined( 'ABSPATH' ) ) exit;

class Telesena_Category_Bar_Widget extends \Elementor\Widget_Base {

    public function get_name() { return 'telesena_category_bar'; }
    public function get_title() { return __( 'Barra de Categorias', 'blog-telesena' ); }
    public function get_icon() { return 'eicon-tags'; }
    public function get_categories() { return [ 'telesena' ]; }

    protected function register_controls() {
        $this->start_controls_section( 'content_section', [
            'label' => __( 'Conteúdo', 'blog-telesena' ),
        ] );

        $this->add_control( 'show_all', [
            'label'   => __( 'Mostrar "Todos"', 'blog-telesena' ),
            'type'    => \Elementor\Controls_Manager::SWITCHER,
            'default' => 'yes',
        ] );

        $this->add_control( 'parent_only', [
            'label'   => __( 'Apenas categorias pai', 'blog-telesena' ),
            'type'    => \Elementor\Controls_Manager::SWITCHER,
            'default' => 'yes',
        ] );

        $this->add_control( 'active_color', [
            'label'   => __( 'Cor ativa', 'blog-telesena' ),
            'type'    => \Elementor\Controls_Manager::COLOR,
            'default' => '#1A6FEF',
        ] );

        $this->end_controls_section();
    }

    protected function render() {
        $s = $this->get_settings_for_display();
        $args = [ 'hide_empty' => false ];
        if ( $s['parent_only'] === 'yes' ) $args['parent'] = 0;
        $cats = get_categories( $args );

        echo '<nav class="category-bar"><div class="container"><ul>';

        if ( $s['show_all'] === 'yes' ) {
            $active = ! is_category() ? ' active' : '';
            echo '<li><a href="' . home_url( '/' ) . '" class="' . $active . '">Todos</a></li>';
        }

        foreach ( $cats as $cat ) {
            $active = is_category( $cat->term_id ) ? ' active' : '';
            echo '<li><a href="' . get_category_link( $cat->term_id ) . '" class="' . $active . '">' . esc_html( $cat->name ) . '</a></li>';
        }

        echo '</ul></div></nav>';
    }
}
