var wall,
  images = Array("../images/image13.png",
  "../images/image14.png",
  "../images/image15.png"),
  currimg = 0;

/**
 * update_fontsize function
 */
var update_fontsize = function () {
  $(".info-section").each(function () {
    var window_width = $(window).width(),
      window_height = $(window).height(),
      wrapper_top_gap = parseFloat($(this).find('.parts-all').css('padding-top')),
      heading_height = $(this).find('h1').outerHeight(true),
      top_gap = wrapper_top_gap + heading_height,
      sub_details = $(this).find('.sub-details'),
      sub_details_text = $(this).find('.sub-details .sub-detail-text'),
      sub_details_image = $(this).find('.sub-details .sub-detail-screenshots'),
      paragraph = $(this).find('.sub-details .sub-detail-text p'),
      sub_character = $(this).find('.sub-character'),
      testimonial_height = $(this).find('.testimonial-wrapper').outerHeight(true);

    if(window_width < 480) {
      // smallest screen
      if (window_height < 640) {
        sub_details.css("height", "calc(100vh - " + top_gap + "px)");
        sub_details_text.css("height", "45vh");
        sub_details_image.css("height", "calc(50vh - " + top_gap + "px)");
        sub_character.css("height", "0");
      } else if(window_height < 813) {
        sub_details.css("height", "calc(80vh - " + top_gap + "px)");
        sub_details_text.css("height", "40vh");
        sub_details_image.css("height", "calc(40vh - " + top_gap + "px)");
        sub_character.css("height", "20vh");
      }
    } else if(window_width < 768) {
      // mobile screen
      // text
      sub_details.css("height", "calc(62vh - " + top_gap + "px)");
      sub_details_text.css("height", "30vh");
      sub_details_image.css("height", "calc(30vh - " + top_gap + "px)");
      sub_character.css("height", "38vh");
    } else {
      // desktop screen
      sub_details.css("height", "calc(100vh - " + top_gap + "px)");
      sub_details_text.css("height", "calc(75vh - " + top_gap + "px)");
      sub_details_image.css("height", "25vh");
      sub_character.css("height", "calc(100vh - " + top_gap + "px)");
    }
    // character
    var img_w = parseInt(sub_character.find('img').css('width')),
        img_h = parseInt(sub_character.find('img').css('height')),
        character_gap = 30,
        container_w = sub_character.width(),
        container_h = sub_character.height(),
        character_height = sub_character.height() - testimonial_height - character_gap,
        character_width = img_w * character_height / img_h;
    // if character width is larger than container
    if (character_width > container_w) {
      character_width = container_w - character_gap;
      character_height = img_h * character_width / img_w;
    }
    sub_character.find('img').css('height', character_height + 'px');

    // text
    var divHeight = sub_details_text.height();
    var expected_pHeight = divHeight;
    var current_pHeight = paragraph.outerHeight(true);
    var current_lineHeight = parseFloat(paragraph.css('line-height'));
    var expected_lines = parseInt(expected_pHeight / current_lineHeight);
    var current_lines = parseInt(current_pHeight / current_lineHeight);
    var expected_lineHeight = parseFloat(expected_pHeight / (current_lines + 1));
    paragraph.css("line-height", expected_lineHeight + "px");
    // console.log('height:', divHeight);
    // console.log("p height: " + current_pHeight);
    // console.log('lineHeight:', current_lineHeight);
    // console.log("expected Lines: " + expected_lines);
    // console.log("current Lines: " + current_lines);
    // console.log("expected Line height: " + expected_lineHeight);
  });
};

/**
 * update background image every 3 seconds
 */
function updateMainBackgroundImage() {
  var window_width = $(window).width();
  if( window_width < 768 ) {
    // if screen is mobile, loop background image
    $('#section0').animate({ opacity: 1 }, 500, function () {
  
      //finished animating, minifade out and fade new back in           
      $('#section0').animate({ opacity: 0.7 }, 100, function () {
  
        currimg++;
  
        if (currimg > images.length - 1) {
          currimg = 0;
        }
  
        var newimage = images[currimg];
  
        //swap out bg src                
        $('#section0').css("background-image", "url(" + newimage + ")");
  
        //animate fully back in
        $('#section0').animate({ opacity: 1 }, 400, function () {
  
          //set timer for next
          setTimeout(updateMainBackgroundImage, 3000);
  
        });
  
      });
  
    });
  } else {
    // if screen is not mobile, cancel background image
    $('#section0').css("background-image", "none");

    //set timer for next
    setTimeout(updateMainBackgroundImage, 3000);
  }
}

/**
 * document ready
 */
$(document).ready(function () {
  // Youtube video player
  var heroVideo = $('#background-video').YTPlayer({
    ratio: 16 / 9,
    videoId: 'zC7j2-dkLS4',
    host: 'https://www.youtube.com',
    mute: true,
    repeat: true,
    width: $(window).width(),
    wrapperZIndex: 99,
    playButtonClass: 'YTPlayer-play',
    pauseButtonClass: 'YTPlayer-pause',
    muteButtonClass: 'YTPlayer-mute',
    volumeUpClass: 'YTPlayer-volume-up',
    volumeDownClass: 'YTPlayer-volume-down',
    increaseVolumeBy: 10,
    start: 0,
    fitToBackground: true
  });

  // hide characters in info sections
  $('.info-section .sub-character').addClass("invisible");

  // full page js
  var myFullpage = new fullpage('#fullpage', {
    verticalCentered: true,
    anchors: ['heroVideo', 'intenseEngagement', 'cuttingEdgeCurriculum', 'vastlyHigherEfficacy', 'screenshots', 'contact'],
    responsiveWidth: 1,
    responsiveHeight: 1,
    sectionsColor: ['', '', '', '', '#000', ''],
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['Hero Video', 'Intense Engagement', 'Cutting Edge Curriculum', 'Vastly Higher Efficacy', 'Screenshots', 'Contact'],
    licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
    //events
    afterLoad: function (origin, destination, direction) {
      if (origin) {
        var selected_character = $('#section' + origin.index + ' .sub-character');
        if (selected_character) {
          var animation = selected_character.data('animation');
          selected_character.addClass('invisible');
          selected_character.removeClass('animated');
          selected_character.removeClass(animation);
        }
      }
      if (destination) {
        var selected_character = $('#section' + destination.index + ' .sub-character');
        if (selected_character) {
          var animation = selected_character.data('animation');
          selected_character.removeClass('invisible');
          selected_character.addClass('animated');
          selected_character.addClass(animation);
        }
      }
    },
  });

  // fluid box
  $('a[data-fluidbox]').fluidbox();
  // fluid box key down
  document.onkeydown = function (evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
      if ($("a").hasClass("fluidbox--opened")) {
        $(".fluidbox--opened").trigger("click");
      }
    }
  };

  // light box video
  $(".lightbox-video").magnificPopup({
    closeOnBgClick: true,
    disableOn: 320,
    type: 'iframe',
    iframe: {
      patterns: {
        youtube: {
          index: 'youtube.com/',
          id: 'v=',
          src: 'https://www.youtube.com/embed/%id%?autoplay=1&rel=0&ecver=2&showinfo=0&iv_load_policy=3'
        },
        vimeo: {
          index: 'vimeo.com/',
          id: '/',
          src: 'https://player.vimeo.com/video/%id%?autoplay=1'
        }
      },
      srcAction: 'iframe_src',
      markup: '<div class="mfp-iframe-scaler">' +
        '<div class="mfp-close"></div>' +
        '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
        '<div class="mfp-title">Some caption</div>' +
        '</div>'
    },
    callbacks: {
      markupParse: function (template, values, item) {
        values.title = item.el.attr('title');
      }
    },
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });

  // update info section font size
  update_fontsize();

  // update main background image
  setTimeout(updateMainBackgroundImage, 3000);

  // free wall
  //calculate rate
  var window_width = $(window).width(), window_height = $(window).height(),
    brick_max_w = window_width / 3, brick_max_h = window_height / 4,
    brick_unit_w = parseInt(window_width / 12),
    rate = brick_max_w / brick_max_h;
  
  // $('#part_four .brick').each(function (e) {
  //   var h = 1 + 10 * Math.random() << 0,
  //       w = h * rate;
  //   var imageUrl = $(this).data('background');
  //   var r_w = w * brick_unit_w, r_h = h * brick_unit_w;

  //   $(this).css({
  //     'width': r_w + 'px',
  //     'height': r_h + 'px',
  //     'background-image': 'url(../' + imageUrl + ')'
  //   });

  //   $(this).magnificPopup({
  //     type: 'image',
  //     removalDelay: 500,
  //     callbacks: {
  //       beforeOpen: function () {
  //         this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
  //         this.st.mainClass = 'mfp-zoom-in';
  //       }
  //     },
  //     closeOnContentClick: true
  //   });
  // });

  // wall = new Freewall("#part_four");
  // var fix_step = 1, header_lg = 81, header_sm = 50, wall_gap = 15, cell_w = 200;
  // wall.reset({
  //   selector: '.brick',
  //   animate: true,
  //   cellW: function (width) {
  //     var cellWidth = width / 3;
  //     return cellWidth - 20;
  //   },
  //   cellH: function (height) {
  //     var cellHeight = height / 4;
  //     return cellHeight - 20;
  //   },
  //   delay: 30,
  //   onResize: function () {
  //     var window_width = $(window).width(), window_height = $(window).height(),
  //       header_h = window_height >= 768 ? header_lg : header_sm;

  //     wall.refresh(window_width - (wall_gap * 2), window_height - header_h - wall_gap);
  //   },
  //   onComplete: function() {
  //     if(fix_step > 0) {
  //       /**
  //        * to fix the masonry gap issue when scroll up and down
  //        */
  //       var window_width = $(window).width(), window_height = $(window).height(),
  //         header_h = window_height >= 768 ? header_lg : header_sm;
  //       switch(fix_step) {
  //         case 1:
  //           wall.refresh(600, window_height - header_h - wall_gap);
  //           fix_step = 2;
  //         break;
  //         case 2:
  //           wall.refresh(window_width - (wall_gap * 2), window_height - header_h - wall_gap);
  //           fix_step = 0;
  //         break;
  //       }
  //     }
  //   }
  // });
  // // caculator width and height for IE7;
  // var window_width = $(window).width(), window_height = $(window).height(),
  //   header_h = window_height >= 768 ? header_lg : header_sm;

  // wall.fitZone(window_width - (wall_gap * 2), window_height - header_h - wall_gap);

  $('#part_four').masonry({
    itemSelector: '.brick',
    columnWidth: '.grid-sizer',
    percentPosition: true
  });

  // form validate
  jQuery.validator.addMethod("validEmail", function (value, element) {
    if (value == '') return true;
    var temp1 = true;
    var ind = value.indexOf('@');
    var str2 = value.substr(ind + 1);
    var str3 = str2.substr(0, str2.indexOf('.'));

    if (str3.lastIndexOf('-') == (str3.length - 1) || (str3.indexOf('-') != str3.lastIndexOf('-')))
      return false;
    var str1 = value.substr(0, ind);

    if ((str1.lastIndexOf('_') == (str1.length - 1)) || (str1.lastIndexOf('.') == (str1.length - 1)) || (str1.lastIndexOf('-') == (str1.length - 1)))
      return false;

    var str = /(^[a-zA-Z0-9]+[\._-]{0,1})+([a-zA-Z0-9]+[_]{0,1})*@([a-zA-Z0-9]+[-]{0,1})+(\.[a-zA-Z0-9]+)*(\.[a-zA-Z]{2,3})$/;
    temp1 = str.test(value);
    return temp1;
  }, "Please enter valid email.");
  jQuery("#contact_form").validate({
    rules: {
      vname: "required",
      vemail: {
        required: true,
        email: true,
        validEmail: true
      },
      vre_email: {
        equalTo: '[name="vemail"]'
      },
      message: {
        required: true
      }
    },
    messages: {
      vname: "Please enter your name",
      vrole: "Please enter your role",
      vemail: {
        required: "Please enter your email",
        email: "Please enter valid email"
      },
      vre_email: "Please enter same email",
      message: "Please enter your message"
    },
    validClass: "has-success",
    errorClass: "has-error",
    highlight: function (element, errorClass, validClass) {
      $(element).addClass(errorClass).removeClass(validClass);
    },
    unhighlight: function (element, errorClass, validClass) {
      $(element).removeClass(errorClass).addClass(validClass);
    },
    success: function (jv_element) {
      jv_element.siblings('.form-control').removeClass('has-error').addClass('has-success');
    },
    submitHandler: function (form) {
      //form.submit();
      var vname = $("#vname").val();
      var vrole = $("#vrole").val();
      var vemail = $("#vemail").val();
      var message = $("#message").val();
      $.ajax({
        url: "/sendinblue_email.php",
        type: "POST",
        data: $(form).serialize(),
        success: function (response) {
          console.log(response);
          $("#contact_form")[0].reset();
          $(".message").removeClass("hidden-div")
          $(".bottom-from").html("<div class='col-md-12 message'>Your message has been sent successfully.</div>");
        }
      });
    },
    errorPlacement: function (error, element) {
      // element.val(error.text());
      var element_name = element.attr("name");
      console.log($("#" + element_name + "-error"));
      $("#" + element_name + "-error").text(error.text());
    }
  });
});

/**
 * window resize event
 */
$(window).resize(function () {
  update_fontsize();

  // if desktop screen, cancel background image
  if ($(window).width() >= 768) {
    $('#section0').css("background-image", "none");
  }
});

/**
 * Window scroll event
 */
$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  //>=, not <=
  if (scroll >= 500) {
    //clearHeader, not clearheader - caps H
    $(".scroll-old").addClass("scroll-new");
    $(".scroll-old").removeClass("scroll-old");
  }
  else {
    $(".scroll-new").addClass("scroll-old");
    $(".scroll-new").removeClass("scroll-new");

  }
});