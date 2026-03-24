<?php
/**
 * Widget: Newsletter
 * Formulário de newsletter personalizável.
 */

if ( ! defined( 'ABSPATH' ) ) exit;

class Telesena_Newsletter_Widget extends \Elementor\Widget_Base {

    public function get_name() { return 'telesena_newsletter'; }
    public function get_title() { return __( 'Newsletter', 'blog-telesena' ); }
    public function get_icon() { return 'eicon-email-field'; }
    public function get_categories() { return [ 'telesena' ]; }

    protected function register_controls() {
        $this->start_controls_section( 'content_section', [
            'label' => __( 'Conteúdo', 'blog-telesena' ),
        ] );

        $this->add_control( 'title', [
            'label'   => __( 'Título', 'blog-telesena' ),
            'type'    => \Elementor\Controls_Manager::TEXT,
            'default' => '📬 Receba nossas dicas',
        ] );

        $this->add_control( 'description', [
            'label'   => __( 'Descrição', 'blog-telesena' ),
            'type'    => \Elementor\Controls_Manager::TEXTAREA,
            'default' => 'Cadastre-se e receba conteúdos exclusivos sobre educação financeira.',
        ] );

        $this->add_control( 'button_text', [
            'label'   => __( 'Texto do botão', 'blog-telesena' ),
            'type'    => \Elementor\Controls_Manager::TEXT,
            'default' => 'Quero receber',
        ] );

        $this->add_control( 'placeholder', [
            'label'   => __( 'Placeholder do e-mail', 'blog-telesena' ),
            'type'    => \Elementor\Controls_Manager::TEXT,
            'default' => 'Seu melhor e-mail',
        ] );

        $this->end_controls_section();

        // Style
        $this->start_controls_section( 'style_section', [
            'label' => __( 'Estilo', 'blog-telesena' ),
            'tab'   => \Elementor\Controls_Manager::TAB_STYLE,
        ] );

        $this->add_control( 'bg_color', [
            'label'   => __( 'Cor de fundo', 'blog-telesena' ),
            'type'    => \Elementor\Controls_Manager::COLOR,
            'default' => '#1A6FEF',
        ] );

        $this->add_control( 'btn_color', [
            'label'   => __( 'Cor do botão', 'blog-telesena' ),
            'type'    => \Elementor\Controls_Manager::COLOR,
            'default' => '#F5A623',
        ] );

        $this->end_controls_section();
    }

    protected function render() {
        $s = $this->get_settings_for_display();
        ?>
        <div class="newsletter-widget" style="background:<?php echo esc_attr( $s['bg_color'] ); ?>;">
            <h3><?php echo esc_html( $s['title'] ); ?></h3>
            <p><?php echo esc_html( $s['description'] ); ?></p>
            <form action="#" method="post">
                <input type="email" name="email" placeholder="<?php echo esc_attr( $s['placeholder'] ); ?>" required>
                <button type="submit" style="background:<?php echo esc_attr( $s['btn_color'] ); ?>;">
                    <?php echo esc_html( $s['button_text'] ); ?>
                </button>
            </form>
        </div>
        <?php
    }
}
