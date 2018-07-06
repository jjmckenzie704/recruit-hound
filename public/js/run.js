$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });


$(function() {
    //caches a jQuery object containing the header element
    let wrap = $(".wrap");
    let orangeBorder = $('#border-what');
    let message = $('#what-we-do-message');
    $(window).scroll(function() {
        let scroll = $(window).scrollTop();

        if (scroll >= 100) {
            console.log(" if - red")
            wrap.removeClass('fix-search-blue').addClass("fix-search-red");
        } else {
            console.log(" else - blue")
            wrap.removeClass("fix-search-red").addClass('fix-search-blue');
        }
        if (scroll >= 350) {
            console.log(" if - gone")
            orangeBorder.removeClass('what-we-do-bottom-border1').addClass("what-we-do-bottom-border2");
        } else {
            console.log(" else - orange")
            orangeBorder.removeClass("what-we-do-bottom-border2").addClass('what-we-do-bottom-border1');
        }
        if (scroll >= 450) {
            console.log(" if - gone")
            message.removeClass('what-we-do-message1').addClass("what-we-do-message2");
        } else {
            console.log(" else - orange")
            message.removeClass("what-we-do-message2").addClass('what-we-do-message1');
        }
    });
});


$.get("/api/users", function(data) {
    console.log('Begin displaying all users');
    console.log(data);
    for (key in data) {
        createNewRow(data[key]);
    }
    $('.content').html(createNewRow(data[key]));
});


function createNewRow(user) {
    console.log("success");
    let $newUserRow = $(
        [
            '<p class="user-block">',
            'First Name: ' + user.firstName + '<br />',
            'Last Name: ' + user.lastName + '<br />',
            'Email: ' + user.email + '<br />',
            'Skill: ' + user.skill + '<br />',
            '</p>'
        ].join('')
    );

    return $newUserRow;
}