$(document).ready(function() {
  $('.alt-img').mouseover(function() {
    $('.featured-img').prop('src', $(this).prop('src'));
  }).mouseleave(function() {
    $('.featured-img').prop('src', 'img/promo.jpg');
  });

  $('.color').click(function() {
    $(this).siblings().removeClass('selected-color');
    $(this).addClass('selected-color');
  });
});
