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

$('#btnCloseMobiMenu').click(function () {
  $('#mobiMenu').css({
    "right": "-300px"
  })
})
// nav logic (end)

// main slider logic(start)
var slider = [
  {
    img: '../img/parallax-4.jpg',
    title: 'spa',
    desc: 'lorem',
    link: '/news/new1',
  },
  {
    img: '../img/parallax-8-1.jpg',
    title: 'spa 2',
    desc: 'lorem',
    link: '/news/new1',
  },
]

$('#mainSlider').css({
  "background-image": "url('" + slider[0].img + "')"
})

$('#mainSlider').click(function () {
  var e = $("#count"), i = +e.val()

  $('#mainSlider').css({
    "background-image": "url('" + slider[i].img + "')"
  })

  if (i < (slider.length-1)) {
    e.val(++i)
  }
  else {
    e.val(0)
  }

})
// main slider logic(start)
