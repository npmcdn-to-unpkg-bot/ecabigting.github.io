$(document).ready(function() {
      $('#fullpage').fullpage({
        anchors: ['home', 'projects', 'skills','qualifications'],
        menu: '#myMenu',
        verticalCentered: true,
        resize: true
      });
      $(".navbar-nav li a").click(function(event) {
        $(".navbar-collapse").collapse('hide');
      });

      setTimeout(function() {
        $('#bossContacts').addClass('animated fadeIn');
        $('#bossPic').addClass('animated fadeInDown');
        $('#bossName').addClass('animated fadeInRight');
        $('#bossTitle').addClass('animated fadeInLeft');
        $('#bossEmail').addClass('animated slideInUp');
        $('#bossPhone').addClass('animated slideInUp');
        $('#bossAddress').addClass('animated slideInUp');
      },800);
});
