// logic nav (start)
$(function () {
  $('nav li').hover(
    function () {
      $(this).find('ul').slideDown();
    }, function () {
      $(this).find('ul').slideUp('fast');
    });
});

// logic nav (end)
