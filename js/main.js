// nav logic (start)
$('nav li').mouseenter(function () {
  $('nav .sub-menu', this).show()
  $('nav .sub-menu .sub-menu', this).hide()
})

$('nav li').mouseleave(function () {
  $('nav .sub-menu', this).hide()
})

$('nav .sub-menu li').mouseenter(function () {
  $('nav .sub-menu', this).show()
})

$('nav .sub-menu li').mouseleave(function () {
  $('nav .sub-menu', this).hide()
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
