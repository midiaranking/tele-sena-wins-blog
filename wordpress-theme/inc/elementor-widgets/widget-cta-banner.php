<?php
/**
 * Widget: CTA Banner
 * Banner de chamada para ação personalizável.
 */

if ( ! defined( 'ABSPATH' ) ) exit;

class Telesena_CTA_Banner_Widget extends \Elementor\Widget_Base {

    public function get_name() { return 'telesena_cta_banner'; }
    public function get_title() { return __( 'CTA Banner', 'blog-telesena' ); }
    public function get_icon() { return 'eicon-call-to-action'; }
    public function get_categories() { return [ 'telesena' ]; }

    protected function register_controls() {
        $this->start_controls_section( 'content_section', [
            'label' => __( 'Conteúdo', 'blog-telesena' ),
        ] );

        $this->add_control( 'title', [
            'label'   => __( 'Título', 'blog-telesena' ),
            'type'    => \Elementor\Controls_Manager::TEXT,
            'default' => '🎉 Tele Sena Semanal',
        ] );

        $this->add_control( 'description', [
            'label'   => __( 'Descrição', 'blog-telesena' ),
            'type'    => \Elementor\Controls_Manager::TEXTAREA,
            'default' => 'Concorra a prêmios toda semana! Garanta já a sua.',
        ] );

        $this->add_control( 'button_text', [
            'label'   => __( 'Texto do botão', 'blog-telesena' ),
            'type'    => \Elementor\Controls_Manager::TEXT,
            'default' => 'Compre agora',
        ] );

        $this->add_control( 'button_url', [
            'label'   => __( 'URL do botão', 'blog-telesena' ),
            'type'    => \Elementor\Controls_Manager::URL,
            'default' => [ 'url' => 'https://telesena.com.br' ],
        ] );

        $this->add_control( 'image', [
            'label' => __( 'Imagem do banner', 'blog-telesena' ),
            'type'  => \Elementor\Controls_Manager::MEDIA,
        ] );

        $this->end_controls_section();

        // Style
        $this->start_controls_section( 'style_section', [
            'label' => __( 'Estilo', 'blog-telesena' ),
            'tab'   => \Elementor\Controls_Manager::TAB_STYLE,
        ] );

        $this->add_control( 'bg_type', [
            'label'   => __( 'Tipo de fundo', 'blog-telesena' ),
            'type'    => \Elementor\Controls_Manager::SELECT,
            'options' => [
                'gradient_gold' => 'Gradiente Dourado',
                'gradient_blue' => 'Gradiente Azul',
                'solid'         => 'Cor sólida',
            ],
            'default' => 'gradient_gold',
        ] );

        $this->add_control( 'bg_color', [
            'label'     => __( 'Cor de fundo', 'blog-telesena' ),
            'type'      => \Elementor\Controls_Manager::COLOR,
            'default'   => '#F5A623',
            'condition' => [ 'bg_type' => 'solid' ],
        ] );

        $this->end_controls_section();
    }

    protected function render() {
        $s = $this->get_settings_for_display();

        $bg = '';
        switch ( $s['bg_type'] ) {
            case 'gradient_gold': $bg = 'background:var(--ts-gradient-gold);'; break;
            case 'gradient_blue': $bg = 'background:var(--ts-gradient-blue);'; break;
            case 'solid': $bg = 'background:' . esc_attr( $s['bg_color'] ) . ';'; break;
        }

        $url = $s['button_url']['url'] ?? '#';
        ?>
        <div class="cta-banner" style="<?php echo $bg; ?>">
            <?php if ( ! empty( $s['image']['url'] ) ) : ?>
                <img src="<?php echo esc_url( $s['image']['url'] ); ?>" alt="" style="max-height:120px;margin:0 auto 1rem;">
            <?php endif; ?>
            <h3><?php echo esc_html( $s['title'] ); ?></h3>
            <p><?php echo esc_html( $s['description'] ); ?></p>
            <a href="<?php echo esc_url( $url ); ?>" class="btn-cta" target="_blank" rel="noopener">
                <?php echo esc_html( $s['button_text'] ); ?> →
            </a>
        </div>
        <?php
    }
}
