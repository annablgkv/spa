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
    title: 'Beauty Centre Spa Wellness',
    desc: 'Lorem ipsum dolor amet, consectetur',
    link: '#',
  },
  {
    img: '../img/parallax-8-1.jpg',
    title: 'Beauty Centre Spa Wellness',
    desc: 'Lorem ipsum dolor amet, consectetur',
    link: '#',
  },
]


showSlide(slider[0].title, slider[0].desc, slider[0].link)

$('#mainSlider').css({
  "background-image": "url('" + slider[0].img + "')"
})


function showSlide(a, b, c) {
  $('#mainSlider #mainSliderShow').html(
    '<div class="mainSliderView animated fadeIn">' +
      '<p>' + b + '</p>' +
      '<h1>' + a + '</h1>' +
      '<a href="' + c + '">Read more</a>' +
    '</div>'
  )
}


$('#mainSlider #mainSliderPrev').click(function () {
  var e = $("#count"), i = +e.val()

  showSlide(slider[i].title, slider[i].desc, slider[i].link)

  $('#mainSlider').css({
    "background-image": "url('" + slider[i].img + "')"
  })

  if (i == 0) {
    e.val((slider.length - 1))
  }
  else if (i > 0) {
    e.val(--i)
  }
  else {
    e.val((slider.length - 1))
  }

})


$('#mainSlider #mainSliderNext').click(function () {
  var e = $("#count"), i = +e.val()

  showSlide(slider[i].title, slider[i].desc, slider[i].link)

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
// main slider logic(end)




// feedbackSlider logic (start)
$('.feedbackGoSlide1').click(function () {
  $('.feedbackSlide2').hide()
  $('.feedbackGoSlide2').removeClass('active')
  $('.feedbackGoSlide1').addClass('active')  
  $('.feedbackSlide1').show()
})

$('.feedbackGoSlide2').click(function () {
  $('.feedbackSlide1').hide()
  $('.feedbackGoSlide1').removeClass('active')
  $('.feedbackGoSlide2').addClass('active')
  $('.feedbackSlide2').show()
})
// feedbackSlider logic (end)





// blockServices dataset (start)
var dataServices = [
  {
    name: "Oil massages",
    price: "50,80",
    desc: "Lorem ipsum dolor sit amet ",
    classTag: "New1",
    tag: "new"
  },
  {
    name: "Nails art",
    price: "29,80",
    desc: "Lorem ipsum dolor sit amet ",
    classTag: "New2",
    tag: "new"
  },
  {
    name: "Face scrubs",
    price: "70,30",
    desc: "Lorem ipsum dolor sit amet ",
    classTag: "",
    tag: "1 hour"
  },
  {
    name: "Back massage",
    price: "50,80",
    desc: "Lorem ipsum dolor sit amet ",
    classTag: "",
    tag: "1 hour"
  },
  {
    name: "Sauna relax",
    price: "23,45",
    desc: "Lorem ipsum dolor sit amet ",
    classTag: "New2",
    tag: "new"
  },
  {
    name: "Aroma therapy",
    price: "50,80",
    desc: "Lorem ipsum dolor sit amet ",
    classTag: "New1",
    tag: "new"
  },
  {
    name: "Pedicure",
    price: "32,00",
    desc: "Lorem ipsum dolor sit amet ",
    classTag: "",
    tag: "1 hour"
  },
  {
    name: "Mug masks",
    price: "43,00",
    desc: "Lorem ipsum dolor sit amet ",
    classTag: "New1",
    tag: "new"
  },
]


for (var i=0; i < 4; i++) {
  document.getElementById('itemBlockServices1').innerHTML += ''+
    '<div class="itemBlockServies">'+
      '<div class="procLine"></div>'+
      '<div class="procName"><p>'+ dataServices[i].name +'</p></div>'+
      '<div class="procPrice"><p>$ '+ dataServices[i].price +'</p></div>'+
      '<div class="procDesc"><p>'+ dataServices[i].desc +'</p></div>'+
      '<div class="procTag' + dataServices[i].classTag + ' dontTouchMe"><p>'+ dataServices[i].tag +'</p></div>'+
    '</div>'
}

for (var i = 4; i < 8; i++) {
  document.getElementById('itemBlockServices2').innerHTML += '' +
    '<div class="itemBlockServies">' +
    '<div class="procLine"></div>' +
    '<div class="procName"><p>' + dataServices[i].name + '</p></div>' +
    '<div class="procPrice"><p>$ ' + dataServices[i].price + '</p></div>' +
    '<div class="procDesc"><p>' + dataServices[i].desc + '</p></div>' +
    '<div class="procTag' + dataServices[i].classTag + ' dontTouchMe"><p>' + dataServices[i].tag + '</p></div>' +
    '</div>'
}
// blockServices dataset (end)


// block Contact bg (start)
$('#blockContact').parallax({ imageSrc: './img/parallax-3.jpg', speed: 0.7 })
// block Contact bg (end)


// block about stuff page about (start)
$('#aboutStuffTop').parallax({ imageSrc: './img/parallax-2.jpg', speed: 0.4 })
// block about stuff page about (end)


