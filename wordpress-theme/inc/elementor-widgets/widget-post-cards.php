<?php
/**
 * Widget: Post Cards Grid
 * Exibe grid de posts com opções de categoria, quantidade e colunas.
 */

if ( ! defined( 'ABSPATH' ) ) exit;

class Telesena_Post_Cards_Widget extends \Elementor\Widget_Base {

    public function get_name() { return 'telesena_post_cards'; }
    public function get_title() { return __( 'Post Cards', 'blog-telesena' ); }
    public function get_icon() { return 'eicon-posts-grid'; }
    public function get_categories() { return [ 'telesena' ]; }

    protected function register_controls() {
        $this->start_controls_section( 'content_section', [
            'label' => __( 'Conteúdo', 'blog-telesena' ),
        ] );

        $cats = get_categories( [ 'hide_empty' => false ] );
        $options = [ '' => 'Todas' ];
        foreach ( $cats as $cat ) { $options[ $cat->term_id ] = $cat->name; }

        $this->add_control( 'category', [
            'label'   => __( 'Categoria', 'blog-telesena' ),
            'type'    => \Elementor\Controls_Manager::SELECT,
            'options' => $options,
            'default' => '',
        ] );

        $this->add_control( 'posts_count', [
            'label'   => __( 'Quantidade de posts', 'blog-telesena' ),
            'type'    => \Elementor\Controls_Manager::NUMBER,
            'default' => 6,
            'min'     => 1,
            'max'     => 24,
        ] );

        $this->add_control( 'columns', [
            'label'   => __( 'Colunas', 'blog-telesena' ),
            'type'    => \Elementor\Controls_Manager::SELECT,
            'options' => [ '1' => '1', '2' => '2', '3' => '3', '4' => '4' ],
            'default' => '3',
        ] );

        $this->add_control( 'show_excerpt', [
            'label'   => __( 'Mostrar resumo', 'blog-telesena' ),
            'type'    => \Elementor\Controls_Manager::SWITCHER,
            'default' => 'yes',
        ] );

        $this->add_control( 'show_category_badge', [
            'label'   => __( 'Mostrar badge de categoria', 'blog-telesena' ),
            'type'    => \Elementor\Controls_Manager::SWITCHER,
            'default' => 'yes',
        ] );

        $this->add_control( 'title', [
            'label'   => __( 'Título da seção', 'blog-telesena' ),
            'type'    => \Elementor\Controls_Manager::TEXT,
            'default' => '',
        ] );

        $this->add_control( 'view_all_url', [
            'label'   => __( 'URL "Ver todos"', 'blog-telesena' ),
            'type'    => \Elementor\Controls_Manager::URL,
            'default' => [ 'url' => '' ],
        ] );

        $this->end_controls_section();

        // Style section
        $this->start_controls_section( 'style_section', [
            'label' => __( 'Estilo', 'blog-telesena' ),
            'tab'   => \Elementor\Controls_Manager::TAB_STYLE,
        ] );

        $this->add_control( 'card_border_radius', [
            'label'   => __( 'Border Radius', 'blog-telesena' ),
            'type'    => \Elementor\Controls_Manager::SLIDER,
            'range'   => [ 'px' => [ 'min' => 0, 'max' => 30 ] ],
            'default' => [ 'size' => 12 ],
        ] );

        $this->add_control( 'gap', [
            'label'   => __( 'Espaçamento', 'blog-telesena' ),
            'type'    => \Elementor\Controls_Manager::SLIDER,
            'range'   => [ 'px' => [ 'min' => 8, 'max' => 48 ] ],
            'default' => [ 'size' => 24 ],
        ] );

        $this->end_controls_section();
    }

    protected function render() {
        $s = $this->get_settings_for_display();

        $args = [
            'post_type'      => 'post',
            'posts_per_page' => $s['posts_count'],
            'post_status'    => 'publish',
        ];
        if ( ! empty( $s['category'] ) ) {
            $args['cat'] = $s['category'];
        }

        $query = new WP_Query( $args );
        $cols  = intval( $s['columns'] );
        $gap   = $s['gap']['size'] ?? 24;
        $radius = $s['card_border_radius']['size'] ?? 12;

        if ( ! empty( $s['title'] ) ) {
            echo '<div class="section-header">';
            echo '<h2>' . esc_html( $s['title'] ) . '</h2>';
            if ( ! empty( $s['view_all_url']['url'] ) ) {
                echo '<a href="' . esc_url( $s['view_all_url']['url'] ) . '">Ver todos →</a>';
            }
            echo '</div>';
        }

        echo '<div class="posts-grid" style="grid-template-columns:repeat(' . $cols . ',1fr);gap:' . $gap . 'px;">';

        if ( $query->have_posts() ) :
            while ( $query->have_posts() ) : $query->the_post();
                $cats = get_the_category();
                $cat_name = ! empty( $cats ) ? $cats[0]->name : '';
                ?>
                <article class="post-card" style="border-radius:<?php echo $radius; ?>px;">
                    <a href="<?php the_permalink(); ?>" class="card-image">
                        <?php if ( has_post_thumbnail() ) : ?>
                            <?php the_post_thumbnail( 'telesena-card' ); ?>
                        <?php endif; ?>
                        <?php if ( $s['show_category_badge'] === 'yes' && $cat_name ) : ?>
                            <span class="category-badge"><?php echo esc_html( $cat_name ); ?></span>
                        <?php endif; ?>
                    </a>
                    <div class="card-body">
                        <h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
                        <?php if ( $s['show_excerpt'] === 'yes' ) : ?>
                            <p class="excerpt line-clamp-2"><?php echo get_the_excerpt(); ?></p>
                        <?php endif; ?>
                        <div class="card-meta">
                            <span><?php echo telesena_read_time(); ?> de leitura</span>
                            <a href="<?php the_permalink(); ?>" class="read-more">Ler mais →</a>
                        </div>
                    </div>
                </article>
                <?php
            endwhile;
            wp_reset_postdata();
        endif;

        echo '</div>';
    }
}
