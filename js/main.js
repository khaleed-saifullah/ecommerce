
$(document).ready(function () {
  $("input[type='number']").inputSpinner();
  $('[data-toggle="tooltip"]').tooltip();

  $('.products-list .row').isotope({
    layoutMode: 'masonry',
    masonry: {
      columnWidth: '.col-md-3',
      horizontalOrder: false
    }
  });

  $('.products-filter li').on('click', function () {
    $('.products-filter li').removeClass('active');
    $(this).addClass('active');

    var filterValue = $(this).attr('data-filter');

    $('.products-list .row').isotope({
      filter: filterValue,
      layoutMode: 'masonry',
      masonry: {
        columnWidth: '.col-md-3',
        horizontalOrder: false
      }
    });
  });


  //-----JS for Price Range slider-----
  $(function () {
    $("#slider-range").slider({
      range: true,
      min: 130,
      max: 500,
      values: [130, 350],
      slide: function (event, ui) {
        $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
      }
    });
    $("#amount").val("$" + $("#slider-range").slider("values", 0) +
      " - $" + $("#slider-range").slider("values", 1));
  });


  $('#carousel').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    itemWidth: 110,
    itemMargin: 5,
    asNavFor: '#slider'
  });

  $('#slider').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    sync: "#carousel"
  });

  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 3
      }
    }
  });

});

