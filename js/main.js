// nav logic (start)
$('nav li').mouseenter(function () {
  $('.sub-menu', this).show()
  $('.sub-menu .sub-menu', this).hide()
})

$('nav li').mouseleave(function () {
  $('.sub-menu', this).hide()
})

$('nav .sub-menu li').mouseenter(function () {
  $('.sub-menu', this).show()
})

$('nav .sub-menu li').mouseleave(function () {
  $('.sub-menu', this).hide()
})

$('#btnMobiMenu').click(function () {
  $('#mobiMenu').css({
    "right": "0px"
  })
})

$("#btnCloseMobiMenu").click(function () {
  $('#mobiMenu').css({
    "right": "-300px"
  })
})
// nav logic (end)


$(".crosscover").crosscover({
  inClass: 'fade-in',
  outClass: 'fade-out',
  interval: 5000,
  startIndex: 0,
  autoPlay: true,
  dotsNav: false,
  controller: true,
  controllerClass: 'crosscover-controller',
  prevClass: 'crosscover-prev',
  nextClass: 'crosscover-next',
  prevInnerHtml: '<span class="crosscover-icon-prev"></span>',
  nextInnerHtml: '<span class="crosscover-icon-next"></span>'
});
