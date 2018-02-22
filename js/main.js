// nav logic (start)
$('nav li').mouseenter(function () {
  $('.sub-menu', this).show()
  $('.sub-menu .sub-menu', this).hide()
})

$('nav li').mouseleave(function () {
  $('.sub-menu', this).hide()
})

$('.sub-menu li').mouseenter(function () {
  $('.sub-menu', this).show()
})

$('.sub-menu li').mouseleave(function () {
  $('.sub-menu', this).hide()
})
// nav logic (end)
