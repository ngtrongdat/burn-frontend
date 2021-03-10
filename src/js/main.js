// Your main script
$(document).ready(function () {

  $('#gif-click').hide();
  $('#click').click(function() {
    $('#click').hide();
    $('#gif-click').show();
    $('#pic-click').hide();
  });

  if ($('#click').data("clicked", true)) {
    $('#gif-click').click(function() {
      $('#click').show();
      $('#gif-click').hide();
      $('#pic-click').show();
    });
  };

  $(window).scroll(function() {
    var nav = $('#header');
    var top = 200;
    if ($(window).scrollTop() >= top) {
      nav.addClass('fixed');
    } else {
      nav.removeClass('fixed');
    }
  });
  
});