var wall,
  images = Array("../images/vertbkgd01.png",
    "../images/vertbkgd02.png",
    "../images/vertbkgd03.png"),
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
  ],
  galleryItemMargin = 5,
  scrollDownHeight = 70,
  widget,
  sendSafelyHost = "https://www.sendsafely.com",
  dropzoneId = "zAUuS0sCtdzQ_ptCXnjIwklxgZ3f4bigUt6ujSDkrbc",
  isMobile = false; //initiate as false

/**
 * update_fontsize function
 */
var update_fontsize = function () {
  $(".info-section").each(function () {
    var info_section = $(this);
      window_width = $(window).width(),
      window_height = $(window).height(),
      wrapper_top_gap = 60,
      heading_height = info_section.find('h1').outerHeight(true),
      top_gap = wrapper_top_gap + heading_height,
      sub_details = info_section.find('.sub-details'),
      sub_details_text = info_section.find('.sub-details .sub-detail-text'),
      sub_details_reference = info_section.find('.sub-details .sub-detail-text .reference'),
      sub_details_image = info_section.find('.sub-details .sub-detail-screenshots'),
      paragraph = info_section.find('.sub-details .sub-detail-text p'),
      sub_character = info_section.find('.sub-character'),
      testimonial_height = info_section.find('.testimonial-wrapper').outerHeight(true);

    if (window_width < 480) {
      // smallest screen
      if (window_height < 649) {
        sub_details.css("height", "calc(100vh - " + top_gap + "px)");
        sub_details_text.css("height", "46vh");
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
    var reference_height = sub_details_reference.outerHeight(true);
    var divHeight = sub_details_text.height();
    var current_lines = 0;
    var paragraph_count = paragraph.length;

    if (reference_height !== undefined) {
      divHeight -= reference_height;
    }
    info_section.find('.sub-details .sub-detail-text p').each(function () {
      var current_pHeight = $(this).outerHeight();
      var current_lineHeight = parseFloat($(this).css('line-height'));
      current_lines += Math.round(parseFloat(current_pHeight / current_lineHeight));
    });
    // calculate line height and margin bottom (=line-height/2)
    var expected_lineHeight = parseFloat(divHeight / (current_lines + ((paragraph_count - 1) / 2) ));
    paragraph.css("line-height", expected_lineHeight + "px");
    paragraph.css("margin-bottom", parseInt(expected_lineHeight / 2) + "px");
    if (paragraph_count > 1) {
      // remove the margin bottom of last paragraph
      info_section.find('.sub-details .sub-detail-text p').last().css("margin-bottom", "0px");
    }
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
        'width': 'calc(' + w + '% - ' + (galleryItemMargin * 2) + 'px)',
        'height': 'auto',
        'margin': galleryItemMargin + 'px',
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

  $('.grid-container').masonry({
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
 * device detection
 */
function isMobileScreen() {
  if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
    return true;
  }

  return false;
}
/**
 * return header height
 */
function getHeaderHeight() {
  return $(window).width() >= 768 ? 66 : 51;
}
/**
 * check if the dropzone form is valid
 */
function isDropZoneFormValid() {
  var isValid = true;
  if (!/(.+)@(.+){2,}\.(.+){2,}/.test($("#dropzone_email").val())) {
    alert("You did not provide a valid email address");
    isValid = false;
    return isValid;
  }
  $("#dropzone_form input[type=text]").each(function () {
    if (isValid && this.value.trim() == "") {
      alert("You must complete all input fields");
      isValid = false;
      return isValid;
    }
  });
  if (isValid && widget.nbrOfFilesAttached < 1) {
    alert("You did not attach a file");
    isValid = false;
    return isValid;
  }
  return isValid;
}
/**
 * Submit to dropzone
 * @param {*} url 
 */
function submitHostedDropzone(url) {
  var postData = {};
  postData["name"] = $("#dropzone_name").val();
  postData["email"] = $("#dropzone_email").val();
  postData["packageCode"] = widget.packageCode;
  postData["publicApiKey"] = dropzoneId;
  $.post(
    sendSafelyHost + "/auth/json/?action=submitHostedDropzone",
    postData,
    function (result) {
      if (result.integrationUrls !== undefined) {
        for (i = 0; i < result.integrationUrls.length; i++) {
          var integrationUrl = result.integrationUrls[i];
          //Third party form integration...do post to URL
          var postData = {};
          postData["digest"] = result.digest;
          postData["data"] = result.data;
          postData["secureLink"] = url;
          $.post(
            integrationUrl,
            postData,
            function (json) {
              if (json.error != undefined) {
                alert(json.error);
              } else {
                //success
                $("#dropzone_form").hide();
                $("#dropzone_submit_done").show();
              }
            },
            "json"
          );
        }
      }
    }
  );
}
/**
 * Submit dropzone form
 */
function submitDropZoneForm() {
  if (isDropZoneFormValid()) {
    $("#dropzone_form_spinner").show();
    widget.setUnconfirmedSender(
      $("#dropzone_email")
        .val()
        .toLowerCase()
    );
    widget.finalizePackage(
      function (url) {
        var threadRegex = new RegExp("thread=[A-Za-z0-9-]+");
        var threadId = threadRegex
          .exec(url)
          .toString()
          .substr(7);
        $("#dropzone-thread-id").text(threadId);
        submitHostedDropzone(url);
      },
      function () {
        $("#dropzone_form_spinner").hide();
      }
    );
  }
}
/**
 * document ready
 */
$(document).ready(function () {
  // device detection
  isMobile = isMobileScreen();

  if(isMobile) {
    // set background image from array
    $('#section0').css("background-image", "url(" + images[0] + ")");
    // set the scroll down button position
    $('.arrow-cont').css("top", ($(window).height() - scrollDownHeight) + "px");
  }
  // load Youtube video player
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
    sectionsColor: ['', '#D3D3D3', '#17ACD5', '#D3D3D3', '#000', ''],
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['Hero Video', 'Intense Engagement', 'Cutting Edge Curriculum', 'Vastly Higher Efficacy', 'Screenshots', 'Contact'],
    licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
    //events
    onLeave: function (origin, destination, direction) {
      // Adjust the top margin issue when scroll up
      var header_height = getHeaderHeight();

      if (origin && destination) {
        if (destination.index < origin.index) {
          // scroll up
          if (destination.index == 4) {
            $('.grid-container').css("margin-top", (header_height + galleryItemMargin) + "px");
          } else {
            $('#section' + destination.index + ' .parts-all').css("margin-top", isMobile ? header_height * 2 + "px" : header_height + "px");
          }
        } else {
          // scroll down
          if (destination.index == 4) {
            $('.grid-container').css("margin-top", galleryItemMargin + "px");
          } else {
            $('#section' + destination.index + ' .parts-all').css("margin-top", header_height + "px");
          }
        }

        // contact and footer section
        var section_height = $('#part_five').height(), form_height = $('.form-wrapper').outerHeight(true) - 20,
          footer_height = $('footer').height(), form_pos_y = parseInt((section_height - form_height - footer_height) / 2);
        // if section two change the navigation color to white
        if (destination.index == 2) {
          $('#fp-nav').addClass('white-color');
        } else {
          $('#fp-nav').removeClass('white-color');
        }
        
        if (destination.index == 5 && isMobile) {
          $('footer').css("position", "absolute");
          $('footer').css("top", ($(window).height() - footer_height) + "px");
          $('footer').css("transform", "translateY(-50%)");
          $('.form-wrapper').css("top", form_pos_y + "px");
          $('.form-wrapper').css("transform", "none");
        }
      }
    },
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

      if (origin && destination) {
        if (destination.index < origin.index) {
          // scroll up
          if (destination.index > 0 && destination.index != 4) {
            var header_height = getHeaderHeight();
            var section_offset = $('#section' + destination.index + ' .parts-all').offset();
            // exception for margin
            if (isMobile && (section_offset.top < 0 || section_offset.top > header_height)) {
              $('#section' + destination.index + ' .parts-all').css("margin-top", header_height * 2 + "px");
            }
          }
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

  // add margin to masonry wrapper
  $('.grid-container').css("margin-left", galleryItemMargin + "px");
  $('.grid-container').css("margin-right", galleryItemMargin + "px");
  $('.grid-container').css("margin-bottom", galleryItemMargin + "px");

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

  // dropzone widget
  var placeholderElement = $('#dropzone-placeholder-div');
  var formField = $('#sendsafely-link');
  widget = new SendSafelyDropzone(dropzoneId, placeholderElement, formField);
  widget.url = sendSafelyHost;
  widget.initialize();
});

/**
 * window resize event
 */
$(window).resize(function () {
  // device detection
  isMobile = isMobileScreen();
  var header_height = getHeaderHeight();

  update_fontsize();

  // if desktop screen, cancel background image
  if ($(window).width() >= 768) {
    $('#section0').css("background-image", "none");
  }
  $('.grid-container').css("margin-top", (header_height + galleryItemMargin) + "px");

  // if orientation is changed, update masonry grid
  if(isOrientationChanged()) {
    updateMasonryGrid();
  }

  // set the scroll down button position
  $('.arrow-cont').css("top", ($(window).height() - scrollDownHeight) + "px");

  // footer position
  var section_height = $('#part_five').height(), form_height = $('.form-wrapper').outerHeight(true) - 20,
    footer_height = $('footer').height(), form_pos_y = parseInt((section_height - form_height - footer_height) / 2);

  if (isMobile) {
    $('footer').css("position", "absolute");
    $('footer').css("top", ($(window).height() - footer_height) + "px");
    $('footer').css("transform", "translateY(-50%)");
    $('.form-wrapper').css("top", form_pos_y + "px");
    $('.form-wrapper').css("transform", "none");
  } else {
    $('footer').css("position", "fixed");
    $('footer').css("top", "inherit");
    $('footer').css("transform", "none");
    $('.form-wrapper').css("top", "calc(50% - " + header_height + "px)");
    $('.form-wrapper').css("transform", "translateY(-50%)");
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