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
