;(function ($) {
    $('#main')
    .smoothState({
      prefetch: true,
      pageCacheSize: 4,
      onStart: {
        duration: 250,
        render: function (url, $container) {
          content.toggleAnimationClass('is-exiting');
          $body.animate({
            scrollTop: 0
          });
        }
      }
    })
    .data('smoothState');
})(jQuery);
