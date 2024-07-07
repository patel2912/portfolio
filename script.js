$(document).ready(function() {
    $('.navbar-menu a').on('click', function(e) {
        e.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000); // Duration of the scroll in milliseconds
    });
});


$(document).ready(function() {
    $('#nav-toggle').on('click', function() {
      $('.navbar-menu').slideToggle(function() {
        // Adjust the margin-top of the content based on the navbar visibility
        if ($('.navbar-menu').is(':visible')) {
          $('section').css('margin-top', $('.navbar').outerHeight() + $('.navbar-menu').outerHeight() + 'px');
        } else {
          $('section').css('margin-top', $('.navbar').outerHeight() + 'px');
        }
      });
    });
  
    // Ensure the navbar is always shown on larger screens and hidden on smaller screens
    $(window).resize(function() {
      if ($(window).width() > 768) {
        $('.navbar-menu').show();
        $('section').css('margin-top', '60px'); // Adjust this based on the height of your navbar on larger screens
      } else {
        $('.navbar-menu').hide();
        $('section').css('margin-top', $('.navbar').outerHeight() + 'px');
      }
    });
  
    // Initial adjustment for margin-top based on navbar visibility
    if ($(window).width() <= 768) {
      $('section').css('margin-top', $('.navbar').outerHeight() + 'px');
    }
  });
  



