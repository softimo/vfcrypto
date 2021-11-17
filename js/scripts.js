// navigation slide-in
$(window).load(function() {
  $('.nav_slide_button').click(function() {
    $('.pull').slideToggle();
  });
});
// first-flexslider
$(window).load(function() {
  $('#firstSlider').flexslider({
    animation: "slide",
    directionNav: false,
    controlNav: true,
    touch: false,
    start: function() {
      $.waypoints('refresh');
    }
  });
});
// second-flexslider
$(window).load(function() {
  $('#secondSlider').flexslider({
    animation: "slide",
    directionNav: false,
    controlNav: false,
    touch: false,
  });
});
$('.prev, .next').on('click', function() {
  var href = $(this).attr('href');
  $('#secondSlider').flexslider(href)
  return false;
})

//third-Slider

// second-flexslider
$(window).load(function() {
  $('#thirdSlider').flexslider({
    animation: "slide",
    directionNav: false,
    controlNav: false,
    touch: false,
  });
});
$('.prev, .next').on('click', function() {
  var href = $(this).attr('href');
  $('#thirdSlider').flexslider(href)
  return false;
})

// waypoints
$(document).ready(function() {

  $('.wp1').waypoint(function() {
    $('.wp1').addClass('animated fadeInUp');
  }, {
    offset: '75%'
  });

  $('.wp2').waypoint(function() {
    $('.wp2').addClass('animated fadeInUp');
  }, {
    offset: '75%'
  });

  $('.wp3').waypoint(function() {
    $('.wp3').addClass('animated fadeInUpD');
  }, {
    offset: '75%'
  });

});
// smooth scroll
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 2000);
        return false;
      }
    }
  });
});
// fancyBox
$(document).ready(function() {
  $(".various").fancybox({
    maxWidth: 800,
    maxHeight: 450,
    fitToView: false,
    width: '70%',
    height: '70%',
    autoSize: false,
    closeClick: false,
    openEffect: 'none',
    closeEffect: 'none'
  });
});


/* Contact Form */
$("#contactForm").validator().on("submit", function(event) {
  if (event.isDefaultPrevented()) {
        // handle the invalid form...
        cformError();
        csubmitMSG(false, "Por favor complete todos los campos!");
    } else {
        // everything looks good!
        event.preventDefault();
        csubmitForm();
    }
});

function csubmitForm() {
    // initiate variables with form content
var name = $("#cname").val();
var email = $("#cemail").val();
    var message = $("#cmessage").val();
   
    $.ajax({
        type: "POST",
        url: "contactform-process.php",
        data: "name=" + name + "&email=" + email + "&message=" + message, 
        success: function(text) {
            if (text == "success") {
                cformSuccess();
            } else {
                cformError();
                csubmitMSG(false, text);
            }
        }
    });

}

//Contact Form

function cformSuccess() {
    $("#contactForm")[0].reset();
    csubmitMSG(true, "Mensaje enviado!");
    $("input").removeClass('notEmpty'); // resets the field label after submission
    $("textarea").removeClass('notEmpty'); // resets the field label after submission
}

function cformError() {
    $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(this).removeClass();
    });
}

function csubmitMSG(valid, msg) {
    if (valid) {
        var msgClasses = "h3 text-center tada animated";
    } else {
        var msgClasses = "h3 text-center";
    }
    $("#cmsgSubmit").removeClass().addClass(msgClasses).text(msg);
}

