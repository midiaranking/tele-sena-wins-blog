<footer class="site-footer">
  <div class="container">
    <div class="footer-logo">
      <img src="<?php echo esc_url( get_template_directory_uri() . '/assets/logo-telesena.png' ); ?>" alt="Tele Sena">
    </div>

    <div class="footer-grid">
      <!-- About + social + CTA -->
      <div>
        <p style="font-size:0.875rem;opacity:0.8;line-height:1.6;">
          Blog da Tele Sena - Dicas e ideias para melhorar sua vida financeira, planejar o futuro e realizar seus sonhos.
        </p>
        <div class="footer-social">
          <a href="#" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </a>
          <a href="#" aria-label="YouTube">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
          </a>
          <a href="#" aria-label="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
        </div>
        <a href="https://telesena.com.br" target="_blank" rel="noopener noreferrer" class="footer-cta-btn">
          Compre sua Tele Sena
        </a>
      </div>

      <!-- Termos -->
      <div>
        <h3>Termos do Site</h3>
        <ul>
          <li><a href="#">Termos de Uso</a></li>
          <li><a href="#">Política de Privacidade</a></li>
          <li><a href="#">Política de Cookies</a></li>
          <li><a href="#">Termos Legais</a></li>
          <li><a href="#">Condições Gerais</a></li>
        </ul>
      </div>

      <!-- Institucional -->
      <div>
        <h3>Institucional</h3>
        <ul>
          <li><a href="#">As Tele Senas</a></li>
          <li><a href="#">Assessoria de Imprensa</a></li>
          <li><a href="<?php echo esc_url( home_url( '/equipe' ) ); ?>">Equipe Tele Sena</a></li>
        </ul>
        <h3 style="margin-top:1.5rem;">Precisa de Ajuda?</h3>
        <ul>
          <li><a href="https://atendimento.telesena.com.br/#/" target="_blank" rel="noopener noreferrer">Central de Atendimento</a></li>
        </ul>
      </div>

      <!-- Contato -->
      <div>
        <h3>Contato</h3>
        <ul style="opacity:0.8;font-size:0.875rem;">
          <li>SAC: 0800-7010319</li>
          <li>Ouvidoria: 0800-7715936</li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; <?php echo date( 'Y' ); ?> Tele Sena. Todos os direitos reservados.</p>
    </div>
  </div>
</footer>

<!-- Disclaimer legal -->
<div class="footer-disclaimer">
  <div class="container">
    <div class="logos">
      <img src="<?php echo esc_url( get_template_directory_uri() . '/assets/logo-gss.png' ); ?>" alt="Grupo Silvio Santos">
      <img src="<?php echo esc_url( get_template_directory_uri() . '/assets/logo-lideranca.png' ); ?>" alt="Liderança Capitalização S/A">
    </div>
    <div class="legal-text">
      <p>
        <strong>Liderança Capitalização S.A. CNPJ N° 60.853.264/0001-10</strong> | Títulos de Capitalização | Modalidade: Popular | Planos de Pagamento Único | Prazo de carência e de vigência: 12 meses | Não é permitido o resgate antecipado do título, exceto nas hipóteses estabelecidas nas Condições Gerais. Datas de sorteio conforme especificadas nos títulos. O titular sempre terá direito ao recebimento do prêmio em dinheiro. Antes de contratar, consulte previamente as Condições Gerais do título de capitalização. É proibida a venda de título de capitalização a menores de dezesseis anos. SAC 0800-7010319. Ouvidoria 0800-7715936. <strong>Se os valores não forem resgatados dentro do prazo prescricional, o titular do direito de resgate perderá esse direito.</strong>
      </p>
      <div class="legal-grid">
        <div>
          <p><strong>Tele Sena de Carnaval:</strong></p>
          <p>Valor R$ 16,00</p>
          <p>Aprovação Proc. SUSEP nº 15414.665722/2025-86.</p>
          <p>Percentuais de capitalização e sorteio são de 50,0000% e 10,3098%, respectivamente.</p>
        </div>
        <div>
          <p><strong>Tele Sena Semanal Edição 95:</strong></p>
          <p>Valor R$ 5,00</p>
          <p>Aprovação Proc. SUSEP nº 15414.625712/2025-16.</p>
          <p>Percentuais de capitalização e sorteio são de 50,0000% e 12,8381%, respectivamente.</p>
        </div>
      </div>
    </div>
  </div>
</div>

<?php wp_footer(); ?>
</body>
</html>
