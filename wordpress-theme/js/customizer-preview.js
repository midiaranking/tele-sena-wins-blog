/**
 * Live preview para o Customizer do Blog Tele Sena
 */
(function ($) {
  var colorMap = {
    ts_blue: '--ts-blue',
    ts_blue_light: '--ts-blue-light',
    ts_gold: '--ts-gold',
    ts_yellow: '--ts-yellow',
    ts_dark: '--ts-dark',
    ts_text: '--ts-text',
    ts_text_light: '--ts-text-light',
    ts_gray: '--ts-gray',
    ts_border: '--ts-border',
  };

  $.each(colorMap, function (setting, cssVar) {
    wp.customize(setting, function (value) {
      value.bind(function (newVal) {
        document.documentElement.style.setProperty(cssVar, newVal);
      });
    });
  });

  wp.customize('ts_footer_bg', function (value) {
    value.bind(function (newVal) {
      $('.site-footer').css('background', newVal);
    });
  });

  wp.customize('ts_header_bg', function (value) {
    value.bind(function (newVal) {
      $('.site-header').css('background', newVal);
    });
  });
})(jQuery);
