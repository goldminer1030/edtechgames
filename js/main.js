/**
 * update_fontsize function
 */
var update_fontsize = function () {
  $(".info-section .sub-details .sub-detail-text").each(function () {
    var divHeight = $(this).height();
    var h1Height = $(this).children('h1').outerHeight(true);
    var h2Height = $(this).children('h2').outerHeight(true);
    var expected_pHeight = divHeight - h1Height - h2Height;
    var current_pHeight = $(this).children('p').outerHeight(true);
    var current_lineHeight = parseFloat($(this).children('p').css('line-height'));
    var expected_lines = parseInt(expected_pHeight / current_lineHeight);
    var current_lines = parseInt(current_pHeight / current_lineHeight);
    var expected_lineHeight = parseFloat(expected_pHeight / current_lines);
    $(this).children('p').css("line-height", expected_lineHeight + "px");
    // console.log('height:', divHeight);
    // console.log("h1 height: " + h1Height);
    // console.log("h2 height: " + h2Height);
    // console.log("p height: " + current_pHeight);
    // console.log('lineHeight:', current_lineHeight);
    // console.log("expected Lines: " + expected_lines);
    // console.log("current Lines: " + current_lines);
    // console.log("expected Line height: " + expected_lineHeight);
  });
};

/**
 * document ready
 */
$(document).ready(function () {
  // Youtube video player
  $('#background-video').YTPlayer({
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
  $('.sub-detail-screenshots .screenshot').fluidbox();
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

  // free wall
  $('#part_four .brick').each(function(e) {
    var h = 1 + 5 * Math.random() << 0;
    var w = 1 + 6 * Math.random() << 0;
    var imageUrl = $(this).data('background');
    var r_w = w * 200, r_h = h * 200;

    $(this).css({
      'width': r_w + 'px',
      'height': r_h + 'px',
      'background-image': 'url(../' + imageUrl + ')'
    });

    $(this).magnificPopup({
      type: 'image',
      removalDelay: 500,
      callbacks: {
        beforeOpen: function () {
          this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
          this.st.mainClass = 'mfp-zoom-in';
        }
      },
      closeOnContentClick: true
    });
  });

  var wall = new Freewall("#part_four");
  wall.reset({
    selector: '.brick',
    animate: true,
    cellW: 200,
    cellH: 200,
    delay: 30,
    onResize: function () {
      var window_width = $(window).width(), window_height = $(window).height();
      if (window_height >= 768) {
        // if desktop screen
        // subtract desktop header height
        wall.refresh(window_width - 30, window_height - 96);
      } else {
        // if mobile screen
        // subtract mobile header height
        wall.refresh(window_width - 30, window_height - 65);
      }
    }
  });
  // caculator width and height for IE7;
  var window_width = $(window).width(), window_height = $(window).height();
  if (window_height >= 768) {
    // if desktop screen
    // subtract desktop header height
    wall.fitZone(window_width - 30, window_height - 96);
  } else {
    // if mobile screen
    // subtract mobile header height
    wall.fitZone(window_width - 30, window_height - 65);
  }

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
      vrole: "required",
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
    highlight: function (jv_element) {
      jQuery(jv_element).closest('.form-control').removeClass('has-success').addClass('has-error');
    },
    success: function (jv_element) {
      jv_element.closest('.form-control').removeClass('has-error').addClass('has-success');
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