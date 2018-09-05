var wall,
  images = Array("../images/image13.png",
    "../images/image14.png",
    "../images/image15.png"),
  currimg = 0, max_grid_items = 11,
  SCREEN_ORIENTATION_INIT = -1,
  SCREEN_ORIENTATION_PORTRAIT = 0,
  SCREEN_ORIENTATION_SQUARE = 1,
  SCREEN_ORIENTATION_LANDSCAPE = 2,
  current_screen_orientation = SCREEN_ORIENTATION_INIT,
  GRID_MAP = [
    // 1
    [
      // portrait
      [
        [100, 100]
      ],
      // square
      [
        [100, 100]
      ],
      // landscape
      [
        [100, 100]
      ]
    ],
    // 2
    [
      // portrait
      [
        [100, 50], [100, 50]
      ],
      // square
      [
        [50, 50], [50, 50]
      ],
      // landscape
      [
        [50, 50], [50, 50]
      ]
    ],
    // 3
    [
      // portrait
      [
        [100, 33.33], [50, 66.66], [50, 66.66]
      ],
      // square
      [
        [50, 100], [50, 50], [50, 50]
      ],
      // landscape
      [
        [33.33, 100], [66.66, 50], [66.66, 50]
      ],
    ],
    // 4
    [
      // portrait
      [
        [100, 25], [50, 50], [50, 50], [100, 25]
      ],
      // square
      [
        [50, 66.66], [50, 33.33], [50, 33.33], [100, 33.33]
      ],
      // landscape
      [
        [66.66, 50], [33.33, 100], [33.33, 50], [33.33, 50]
      ],
    ],
    // 5
    [
      // portrait
      [
        [50, 50], [50, 25], [50, 50], [50, 25], [100, 25]
      ],
      // square
      [
        [33.33, 66.66], [66.66, 33.33], [33.33, 33.33], [33.33, 33.33], [100, 33.33]
      ],
      // landscape
      [
        [25, 100], [50, 50], [25, 100], [25, 50], [25, 50]
      ],
    ],
    // 6
    [
      // portrait
      [
        [66.66, 33.33], [33.33, 66.66], [33.33, 33.33], [33.33, 33.33], [66.66, 33.33], [33.33, 33.33]
      ],
      // square
      [
        [33.33, 33.33], [66.66, 33.33], [66.66, 33.33], [33.33, 66.66], [33.33, 33.33], [33.33, 33.33]
      ],
      // landscape
      [
        [25, 50], [25, 100], [25, 50], [25, 100], [25, 50], [25, 50]
      ],
    ],
    // 7
    [
      // portrait
      [
        [100, 20], [50, 20], [50, 20], [50, 40], [50, 20], [50, 20], [100, 20]
      ],
      // square
      [
        [33.33, 66.66], [33.33, 33.33], [33.33, 33.33], [33.33, 66.66], [33.33, 33.33], [33.33, 33.33], [33.33, 33.33]
      ],
      // landscape
      [
        [25, 66.66], [50, 33.33], [25, 66.66], [25, 66.66], [25, 33.33], [25, 33.33], [50, 33.33]
      ],
    ],
    // 8
    [
      // portrait
      [
        [50, 25], [50, 25], [50, 25], [50, 25], [50, 25], [50, 25], [50, 25], [50, 25]
      ],
      // square
      [
        [25, 66.66], [25, 33.33], [25, 66.66], [25, 33.33], [25, 66.66], [25, 66.66], [25, 33.33], [25, 33.33]
      ],
      // landscape
      [
        [25, 66.66], [25, 33.33], [25, 66.66], [25, 33.33], [25, 66.66], [25, 66.66], [25, 33.33], [25, 33.33]
      ],
    ],
    // 9
    [
      // portrait
      [
        [66.66, 20], [33.33, 40], [33.33, 20], [33.33, 20], [33.33, 40], [66.66, 20], [33.33, 20], [33.33, 20], [100, 20]
      ],
      // square
      [
        [33.33, 50], [66.66, 25], [33.33, 25], [33.33, 25], [33.33, 25], [66.66, 25], [33.33, 25], [33.33, 25], [33.33, 25]
      ],
      // landscape
      [
        [20, 66.66], [40, 33.33], [20, 66.66], [20, 66.66], [20, 33.33], [20, 33.33], [40, 33.33], [20, 33.33], [40, 33.33]
      ],
    ],
    // 10
    [
      // portrait
      [
        [33.33, 40], [33.33, 20], [33.33, 40], [33.33, 20], [66.66, 20], [33.33, 20], [33.33, 20], [66.66, 20], [66.66, 20], [33.33, 20]
      ],
      // square
      [
        [50, 25], [25, 50], [25, 50], [25, 50], [25, 25], [25, 25], [25, 25], [25, 50], [50, 25], [25, 25]
      ],
      // landscape
      [
        [50, 25], [25, 25], [25, 50], [25, 25], [50, 25], [50, 25], [25, 50], [25, 25], [50, 25], [25, 25]
      ],
    ],
    // 11
    [
      // portrait
      [
        [33.33, 20], [33.33, 20], [33.33, 40], [33.33, 40], [33.33, 20], [33.33, 20], [33.33, 20], [66.66, 20], [33.33, 40], [33.33, 20], [33.33, 20]
      ],
      // square
      [
        [50, 25], [25, 50], [25, 25], [25, 25], [25, 25], [25, 25], [25, 50], [50, 25], [25, 50], [25, 25], [25, 25]
      ],
      // landscape
      [
        [40, 33.33], [20, 66.66], [40, 33.33], [20, 33.33], [20, 33.33], [20, 33.33], [20, 33.33], [40, 33.33], [20, 33.33], [20, 33.33], [20, 33.33]
      ],
    ],
  ],
  GRID_COL_WIDTH = [
    // 1
    [
      // portrait
      100,
      // square
      100,
      // landscape
      100,
    ],
    // 2
    [
      // portrait
      100,
      // square
      50,
      // landscape
      50,
    ],
    // 3
    [
      // portrait
      50,
      // square
      50,
      // landscape
      33.33,
    ],
    // 4
    [
      // portrait
      50,
      // square
      50,
      // landscape
      33.33,
    ],
    // 5
    [
      // portrait
      50,
      // square
      33.33,
      // landscape
      25,
    ],
    // 6
    [
      // portrait
      33.33,
      // square
      33.33,
      // landscape
      25,
    ],
    // 7
    [
      // portrait
      50,
      // square
      33.33,
      // landscape
      25,
    ],
    // 8
    [
      // portrait
      50,
      // square
      25,
      // landscape
      25,
    ],
    // 9
    [
      // portrait
      33.33,
      // square
      33.33,
      // landscape
      20,
    ],
    // 10
    [
      // portrait
      33.33,
      // square
      25,
      // landscape
      25,
    ],
    // 11
    [
      // portrait
      33.33,
      // square
      25,
      // landscape
      20,
    ],
  ];

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

    if (window_width < 480) {
      // smallest screen
      if (window_height < 640) {
        sub_details.css("height", "calc(100vh - " + top_gap + "px)");
        sub_details_text.css("height", "45vh");
        sub_details_image.css("height", "calc(50vh - " + top_gap + "px)");
        sub_character.css("height", "0");
      } else if (window_height < 813) {
        sub_details.css("height", "calc(80vh - " + top_gap + "px)");
        sub_details_text.css("height", "40vh");
        sub_details_image.css("height", "calc(40vh - " + top_gap + "px)");
        sub_character.css("height", "20vh");
      }
    } else if (window_width < 768) {
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
  if (window_width < 768) {
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
 * check if screen orientation is changed
 */
function isOrientationChanged() {
  var window_width = $(window).width(), window_height = $(window).height(),
    window_rate = window_width / window_height, window_orientation = SCREEN_ORIENTATION_SQUARE, is_changed = false;
  if (window_rate < 0.7) {
    // portrait
    window_orientation = SCREEN_ORIENTATION_PORTRAIT;
  } else if (window_rate > 1.4) {
    // landscape
    window_orientation = SCREEN_ORIENTATION_LANDSCAPE
  }

  if (current_screen_orientation != window_orientation) {
    is_changed = true;
  }
  // change the current orientation status
  current_screen_orientation = window_orientation;

  return is_changed;
}

function updateMasonryGrid() {
  // arrange grid item
  var grid_items = $('#part_four .grid-item').length, map = getGridMap(grid_items), map_len = map.length, grid_index = 0;
  $('#part_four .grid-item').each(function (e) {
    var grid_item = $(this), imageUrl = grid_item.find('img').attr('src');
    if (grid_index < map_len) {
      var w = map[grid_index][0], h = map[grid_index][1];
      grid_item.css({
        'width': w + '%',
        'height': h + '%',
        'background-image': 'url(../' + imageUrl + ')',
        'background-position': 'center',
        'cursor': 'pointer',
        'background-size': 'cover'
      });
    } else {
      console.log('out of index error');
    }
    grid_index++;
  });

  // adjust grid column width
  $('#part_four .grid-sizer').css('width', getGridColumnWidth(grid_items) + '%');

  $('#part_four').masonry({
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true
  });
}
/**
 * 
 * @param {*} items 
 */
function getGridMap(items) {
  if (items > max_grid_items) {
    items = max_grid_items;
  }
  
  return GRID_MAP[items - 1][current_screen_orientation];
}
/**
 * 
 * @param {*} items 
 */
function getGridColumnWidth(items) {
  if (items > max_grid_items) {
    items = max_grid_items;
  }
  
  return GRID_COL_WIDTH[items - 1][current_screen_orientation];
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
  $('a[data-fluidbox]').on('openstart.fluidbox', function (e) {
    if ($(this).parents('.grid-item').length) {
      $(this).css('opacity', '1');
    }
  }).on('closeend.fluidbox', function (e) {
    if ($(this).parents('.grid-item').length) {
      $(this).css('opacity', '0');
    }
  }).fluidbox();
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

  // masonry grid
  if (isOrientationChanged()) {
    updateMasonryGrid();
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

  // if orientation is changed, update masonry grid
  if(isOrientationChanged()) {
    updateMasonryGrid();
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