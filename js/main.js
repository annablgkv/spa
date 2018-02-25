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
// main slider logic(end)


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

