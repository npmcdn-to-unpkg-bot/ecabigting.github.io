$(document).ready(function() {
  $('#fullpage').fullpage({
    anchors: ['home', 'projects', 'skills','qualifications'],
    menu: '#myMenu',
    verticalCentered: true,
  });
    $(".navbar-nav li a").click(function(event) {
      $(".navbar-collapse").collapse('hide');
    });
});
