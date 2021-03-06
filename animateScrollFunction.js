function htmlAnimation(){
  function animasiWindowScroll(elemen, animasi) {
    function viewFunc() {
      var window_height = $(window).height();
      var window_top_scroll = $(window).scrollTop();
      var window_bottom_scroll = (window_height + window_top_scroll);
      $.each(elemen, function() {
        var element_height = $(this).outerHeight();
        var element_diatas_plus = $(this).offset().top + 125;
        var element_dilihat = ((element_height + element_diatas_plus) >= window_top_scroll) && (element_diatas_plus <= window_bottom_scroll);
        if (element_dilihat) {
          $(this).addClass(animasi);
        }
      });
    }
    // CALLBACK
    $(window).on('scroll resize', viewFunc);
    $(window).trigger('scroll');
  }
  animasiWindowScroll($('.animasi-scroll-opacity'), 'animasi-in-opacity');
  animasiWindowScroll($('.animasi-scroll-top'), 'animasi-in-top');
  animasiWindowScroll($('.animasi-scroll-right'), 'animasi-in-right');
  animasiWindowScroll($('.animasi-scroll-bottom'), 'animasi-in-bottom');
  animasiWindowScroll($('.animasi-scroll-left'), 'animasi-in-left');
  animasiWindowScroll($('.animasi-scroll-topleft'), 'animasi-in-topleft');
  animasiWindowScroll($('.animasi-scroll-topright'), 'animasi-in-topright');
  animasiWindowScroll($('.animasi-scroll-bottomleft'), 'animasi-in-bottomleft');
  animasiWindowScroll($('.animasi-scroll-bottomright'), 'animasi-in-bottomright');
  animasiWindowScroll($('.animasi-scroll-zoom'), 'animasi-in-zoom');
}
