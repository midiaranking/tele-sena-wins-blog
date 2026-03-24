<?php
/**
 * Widget: Sidebar Posts (Mais Lidos)
 * Lista compacta de posts para sidebar ou qualquer área.
 */

if ( ! defined( 'ABSPATH' ) ) exit;

class Telesena_Sidebar_Posts_Widget extends \Elementor\Widget_Base {

    public function get_name() { return 'telesena_sidebar_posts'; }
    public function get_title() { return __( 'Posts Compactos', 'blog-telesena' ); }
    public function get_icon() { return 'eicon-post-list'; }
    public function get_categories() { return [ 'telesena' ]; }

    protected function register_controls() {
        $this->start_controls_section( 'content_section', [
            'label' => __( 'Conteúdo', 'blog-telesena' ),
        ] );

        $this->add_control( 'title', [
            'label'   => __( 'Título', 'blog-telesena' ),
            'type'    => \Elementor\Controls_Manager::TEXT,
            'default' => 'Mais Lidos',
        ] );

        $this->add_control( 'posts_count', [
            'label'   => __( 'Quantidade', 'blog-telesena' ),
            'type'    => \Elementor\Controls_Manager::NUMBER,
            'default' => 5,
            'min'     => 1,
            'max'     => 10,
        ] );

        $this->add_control( 'orderby', [
            'label'   => __( 'Ordenar por', 'blog-telesena' ),
            'type'    => \Elementor\Controls_Manager::SELECT,
            'options' => [
                'date'          => 'Data',
                'comment_count' => 'Comentários',
                'rand'          => 'Aleatório',
            ],
            'default' => 'comment_count',
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

        $this->end_controls_section();
    }

    protected function render() {
        $s = $this->get_settings_for_display();

        $args = [
            'post_type'      => 'post',
            'posts_per_page' => $s['posts_count'],
            'orderby'        => $s['orderby'],
            'post_status'    => 'publish',
        ];
        if ( ! empty( $s['category'] ) ) $args['cat'] = $s['category'];

        $query = new WP_Query( $args );

        echo '<div class="sidebar-section">';
        if ( ! empty( $s['title'] ) ) {
            echo '<h3>' . esc_html( $s['title'] ) . '</h3>';
        }
        echo '<div class="sidebar-posts">';

        while ( $query->have_posts() ) : $query->the_post();
            ?>
            <a href="<?php the_permalink(); ?>" class="post-card-small">
                <?php if ( has_post_thumbnail() ) : ?>
                    <?php the_post_thumbnail( 'thumbnail' ); ?>
                <?php endif; ?>
                <div>
                    <h4 class="line-clamp-2"><?php the_title(); ?></h4>
                    <span class="meta"><?php echo telesena_read_time(); ?> de leitura</span>
                </div>
            </a>
            <?php
        endwhile;
        wp_reset_postdata();

        echo '</div></div>';
    }
}
