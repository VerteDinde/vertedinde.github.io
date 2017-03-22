'use strict';

blogView = {};

//Only show first p; Read more/Show less
blogView.setTeasers = function () {
  $('.blog-body *:nth-of-type(n+2)').hide();
  $('#blog').on('click', 'a.read-on', function (event) {
    event.preventDefault();
    $(this).parent().find('*').fadeIn('slow');
    $(this).hide();
    $('.show-less', this).show();
  });
  $('.show-less').on('click', function() {
    $(this).parent().find('*:nth-of-type(n+2)').fadeOut('slow');
    $(this).hide();
    $('.read-on').show();
  });
};

blogView.initIndexPage = function() {
  Project.all.forEach(a => $('#repo-list').before(a.toHtml()));
  menuAnimation();
  blogView.setTeasers();
};