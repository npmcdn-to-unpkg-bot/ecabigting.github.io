$(document).ready(function() {
  $('#fullpage').fullpage({
    anchors: ['section1', 'section2', 'section3','section4'],
    sectionsColor: ['#fff', '#000', '#fff'],
    css3: true
  });
  $(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });
});
