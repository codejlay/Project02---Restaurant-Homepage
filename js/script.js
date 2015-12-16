// bxSlider

$(function() {

  $('.bxslider').bxSlider(
  {
  auto: true,
  controls: false,
  pager: false,
  minSlides: 1,
  maxSlides:3,
  slideWidth:0,
  moveSlides:3,   

	});


// Smooth Scroll

$(function() {
  $('a[href*=#]:not([href=#])').on('click', function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


// Business Hours

function openClosed() {
var today = Date().substring(0,3)
var daysWeek = [
   'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
  for (var i = 0; daysWeek[i].indexOf(today) < 0; i++) {};  
  if (i<5) {
    $('span#open').text('We\'re open!') }
  else    {
    $('span#open').text('We\'re closed!') }
    $('span#day').text('It\'s ' + daysWeek[i] + ',')
    };
  openClosed();
});

$(function() {
  $( "#datepicker" ).datepicker();
});
