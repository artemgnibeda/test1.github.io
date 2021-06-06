$(document).ready(function(){
  $('.move-bg').each(function (index) {
    var $this = $(this);

    $this.find('li').each(function(index) {
      $(this).append('<img src="' + $(this).data("img-src") + '" alt="">')
      if(index === 0) {
        $(this).addClass('active');
      }
    })
    // var hImg1 = $this.find('li img').outerHeight(true);
    //  $this.find('ul').css('padding-top', hImg1)
  })


  $(window).scroll(function() {
    $('.move-bg').each(function (index) {
      var $this = $(this);
      var hBlock = $this.parent('.set').outerHeight(true) - 500;
      var valueImg = $this.find('li').length;

      var frequency = (hBlock/valueImg);
      var value = $this.parent('.set').offset().top;
      // console.log($(window).scrollTop());

      var activeImg = Math.round(($(window).scrollTop() - value)/frequency);
        $(this).find('li').removeClass('active');
        $(this).find('li:eq(' + activeImg + ')').addClass('active');
        if($(window).scrollTop() > value + hBlock  ) {
          $(this).find('li:last').addClass('active');
        } if($(window).scrollTop() < value  ) {
          $(this).find('li:first').addClass('active');
        }
        // console.log(frequency);
        // console.log($(window).scrollTop());
        // console.log(($(window).scrollTop() - value)/frequency);
    })
  });



  if($(window).scrollTop() > $('.menu-fish').offset().top) {
    console.log('x2');
    $('.menu-fish li').each(function(index) {
      console.log($('.menu-fish li')[index].getBoundingClientRect().top);
      if(($(window).scrollTop() + 100) > $(this).offset().top ) {
        console.log('x4');
        $('.menu-fish li').removeClass('active full-active');
        $(this).addClass('full-active');
        $(this).next().addClass('active');
        $(this).prev().addClass('active');
      }
    })
  }
});

$(window).resize(function(){
  var viewportHeight = $('.banner').outerHeight();
 $('.move-bg').css({ height: viewportHeight });
})
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG4gICQoJy5tb3ZlLWJnJykuZWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xuXG4gICAgJHRoaXMuZmluZCgnbGknKS5lYWNoKGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICAkKHRoaXMpLmFwcGVuZCgnPGltZyBzcmM9XCInICsgJCh0aGlzKS5kYXRhKFwiaW1nLXNyY1wiKSArICdcIiBhbHQ9XCJcIj4nKVxuICAgICAgaWYoaW5kZXggPT09IDApIHtcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICB9XG4gICAgfSlcbiAgICAvLyB2YXIgaEltZzEgPSAkdGhpcy5maW5kKCdsaSBpbWcnKS5vdXRlckhlaWdodCh0cnVlKTtcbiAgICAvLyAgJHRoaXMuZmluZCgndWwnKS5jc3MoJ3BhZGRpbmctdG9wJywgaEltZzEpXG4gIH0pXG5cblxuICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xuICAgICQoJy5tb3ZlLWJnJykuZWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XG4gICAgICB2YXIgaEJsb2NrID0gJHRoaXMucGFyZW50KCcuc2V0Jykub3V0ZXJIZWlnaHQodHJ1ZSkgLSA1MDA7XG4gICAgICB2YXIgdmFsdWVJbWcgPSAkdGhpcy5maW5kKCdsaScpLmxlbmd0aDtcblxuICAgICAgdmFyIGZyZXF1ZW5jeSA9IChoQmxvY2svdmFsdWVJbWcpO1xuICAgICAgdmFyIHZhbHVlID0gJHRoaXMucGFyZW50KCcuc2V0Jykub2Zmc2V0KCkudG9wO1xuICAgICAgLy8gY29uc29sZS5sb2coJCh3aW5kb3cpLnNjcm9sbFRvcCgpKTtcblxuICAgICAgdmFyIGFjdGl2ZUltZyA9IE1hdGgucm91bmQoKCQod2luZG93KS5zY3JvbGxUb3AoKSAtIHZhbHVlKS9mcmVxdWVuY3kpO1xuICAgICAgICAkKHRoaXMpLmZpbmQoJ2xpJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAkKHRoaXMpLmZpbmQoJ2xpOmVxKCcgKyBhY3RpdmVJbWcgKyAnKScpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgaWYoJCh3aW5kb3cpLnNjcm9sbFRvcCgpID4gdmFsdWUgKyBoQmxvY2sgICkge1xuICAgICAgICAgICQodGhpcykuZmluZCgnbGk6bGFzdCcpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgfSBpZigkKHdpbmRvdykuc2Nyb2xsVG9wKCkgPCB2YWx1ZSAgKSB7XG4gICAgICAgICAgJCh0aGlzKS5maW5kKCdsaTpmaXJzdCcpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhmcmVxdWVuY3kpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygkKHdpbmRvdykuc2Nyb2xsVG9wKCkpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygoJCh3aW5kb3cpLnNjcm9sbFRvcCgpIC0gdmFsdWUpL2ZyZXF1ZW5jeSk7XG4gICAgfSlcbiAgfSk7XG5cblxuXG4gIGlmKCQod2luZG93KS5zY3JvbGxUb3AoKSA+ICQoJy5tZW51LWZpc2gnKS5vZmZzZXQoKS50b3ApIHtcbiAgICBjb25zb2xlLmxvZygneDInKTtcbiAgICAkKCcubWVudS1maXNoIGxpJykuZWFjaChmdW5jdGlvbihpbmRleCkge1xuICAgICAgY29uc29sZS5sb2coJCgnLm1lbnUtZmlzaCBsaScpW2luZGV4XS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3ApO1xuICAgICAgaWYoKCQod2luZG93KS5zY3JvbGxUb3AoKSArIDEwMCkgPiAkKHRoaXMpLm9mZnNldCgpLnRvcCApIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3g0Jyk7XG4gICAgICAgICQoJy5tZW51LWZpc2ggbGknKS5yZW1vdmVDbGFzcygnYWN0aXZlIGZ1bGwtYWN0aXZlJyk7XG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2Z1bGwtYWN0aXZlJyk7XG4gICAgICAgICQodGhpcykubmV4dCgpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgJCh0aGlzKS5wcmV2KCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgfVxuICAgIH0pXG4gIH1cbn0pO1xuXG4kKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCl7XG4gIHZhciB2aWV3cG9ydEhlaWdodCA9ICQoJy5iYW5uZXInKS5vdXRlckhlaWdodCgpO1xuICQoJy5tb3ZlLWJnJykuY3NzKHsgaGVpZ2h0OiB2aWV3cG9ydEhlaWdodCB9KTtcbn0pIl0sImZpbGUiOiJtYWluLmpzIn0=
