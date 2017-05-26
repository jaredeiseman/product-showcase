$(document).ready(function() {
  var date = new Date();
  var numberOfDaysToAdd = 6;
  date.setDate(date.getDate() + 2);

  $('#date').text(date.toDateString());

  $('.alt-img').mouseover(function() {
    $('.featured-img').prop('src', $(this).prop('src'));
  }).mouseleave(function() {
    $('.featured-img').prop('src', 'img/promo.jpg');
  });

  $('.color').click(function() {
    $(this).siblings().removeClass('selected-color');
    $(this).addClass('selected-color');
  });

  $('form').submit(function(e) {
    e.preventDefault();
  });

  $('img').click(function() {
    $('.photo-box').prop('src', $(this).prop('src'));
    $('.photo-box, .backdrop').show();
  });

  $('.photo-box, .backdrop').click(function() {
    $('.photo-box, .backdrop').hide();
  });
});
