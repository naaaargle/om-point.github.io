    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyCuvy7TDrwbcKkf8ac1DaPUbbGT0aCqZZ0",
      authDomain: "om-point-1500675639817.firebaseapp.com",
      databaseURL: "https://om-point-1500675639817.firebaseio.com",
      projectId: "om-point-1500675639817",
      storageBucket: "",
      messagingSenderId: "856152782115"
    };
    firebase.initializeApp(config);

var database = firebase.database();


//Page loads
//Clickable: Logo, menu hamburger icon, "OPENING HOURS", "BOOK ONLINE", Social buttons
//function for hiding main menu in Side nav

function hideMainMenuSideNav () {

  $('#SidenavMenu').addClass('hide-menu-item');

}
//option 1.
//User clicks logo
//page refreshes
var logo = $('#logo').on('click', function (){
  location.reload(forceGet);
});

//Option 2.
//User clicks menu hamburger icon (#hamburger-icon)
//side nav (#sideNav) opens
//page contents (#main) moves to the left
//footer moves to the left
//hamburger icon (#hamburger-icon) transforms 'X'

var openSideNav = $('#hamburger-icon').on('click', function (e) {
  e.preventDefault();
  /* Set the width of the side navigation to 250px */
    $('#hamburger-icon div').addClass("change");

  var sideNavDisplay = function openNav() {

    document.getElementsByClassName("sidenav").removeClass("sidenav").addClass("open-sidenav");

      document.getElementById("#main").addClass("main-transform");

      document.getElementById("#bookings").addClass("main-transform");

      document.getElementById("#form").addClass("main-transform");

      document.getElementById("#location").addClass("main-transform");

      document.getElementById("#arrow-left").addClass("arrow-mainTransform");

      document.getElementById("arrow-right").addClass("arrow-mainTransform");

      $('footer').addClass("main-transform");
  }
/* Set the width of the side navigation to 0 */
  var sideNavHidden = function closeNav() {
    document.getElementsByClassName("sidenav").removeClass("open-sidenav").addClass("sidenav");

      document.getElementById("#main").removeClass("main-transform");

      document.getElementById("#bookings").removeClass("main-transform");

      document.getElementById("#form").removeClass("main-transform");

      document.getElementById("#location").removeClass("main-transform");

      document.getElementById("#arrow-left").removeClass("arrow-mainTransform");

      document.getElementById("arrow-right").removeClass("arrow-mainTransform");

      $('footer').removeClass("main-transform");
  }
});

//Option 3.
//User clicks menu hamburger icon (#hamburger-icon) again
//pages is restored to first load appearance
////side nav (#sideNav) closes
//page contents (#main) moves to the right (inital position)
//footer moves to the right (inital position)
//hamburger icon (#hamburger-icon) transforms back
var exitSideNav = $("#hamburger-icon").on('dblclick', function(){

    $('#hamburger-icon div').removeClass("change");
  }
    closeNav();
});


//Side nav open:
//user clicks 'ABOUT'
//side nav menu is hidden and about items are displayed in the side nav
//add class .hide-menu-item to #SidenavMenu
//add class .selected to #about

var aboutSelect = $('#about').on('click', function() {

    $('#about').addClass('selected');
  
  }

  hideMainMenuSideNav(); 

});

//user clicks 'ACCOMMODATION'
//side nav menu is hidden and accommodation items are displayed in the side nav
//add class .hide-menu-item to #SidenavMenu
//add class .selected to #accommodation

var accommodationSelect = $('#accommodation').on('click', function() {
  
    $('#accommodation').addClass('selected');

   }

  functionhideMainMenuSideNav(); 

});


//user clicks 'GALLERY'
//Side nav is hidden and video changes to white. Gallery items appear
//add class .hide-menu-item to #SidenavMenu and #nav-footer
//add class .navSlide-full
//remove class .fullscreen-bg and add class .fullscreen-bg-noColor to first body div where video is stored
//add class .fullscreen-bg_video-noColor to video
//add class .sidenav
//remove class .gallery-hide from #gallery
//user clicks either left or right arrows next to image. Image displaying slides left and new image slides into its place from the right
    //user clicks left arrow 
    //add class .img-slide-out to #gallery
    //add class .img-slide-in to #gallery-1
    //user clicks right arrow
    //add class .img-slide-out to #gallery-1
    //add class .img-slide-in to #gallery
    //etc.
var gallerySelect = $('#gallery').on('click', function() {

  hideMainMenuSideNav (); 

  $('#nav-footer').addClass('hide-menu-item').addClass('navSlide-full');

  $('#video').removeClass('fullscreen-bg').addClass('fullscreen-bg-noColor');

  $('video').addClass('fullscreen-bg_video-noColor');

  closeNav();

  $('#gallery').removeClass('#gallery-hide');

});

  //user clicks logo to leave 'GALLERY'
  //page restore to first load appearance
  //add class .gallery-hide to #gallery/#gallery-1/#gallery-2
  //remove class .fullscreen-bg-noColor from first body div where video is stored add class .fullscreen-bg
  //remove class .fullscreen-bg_video-noColor from video
var exitGalleryLogo = $('#logo').on('click', function() {

  $('#gallery').addClass('gallery-hide');
  $('#gallery-1').addClass('gallery-hide');
  $('#gallery-2').addClass('gallery-hide');

  $('#video').removeClass('ullscreen-bg-noColor').removeClass('fullscreen-bg');

  $('video').removeClass('fullscreen-bg_video-noColor');

});
  //user clicks menu hamburger icon to escape 'GALLERY'
  //page restore to first load appearance with side nav
  //Call option 2. function if user double clicks call option 3. function
  //remove class .fullscreen-bg-noColor from first body div where video is stored add class .fullscreen-bg
  //remove class .fullscreen-bg_video-noColor from video
var exitGalleryHamburger = $('#hamburger-icon').on('click', function() {

  $('#gallery').addClass('gallery-hide');
  $('#gallery-1').addClass('gallery-hide');
  $('#gallery-2').addClass('gallery-hide');

  $('#video').removeClass('ullscreen-bg-noColor').removeClass('fullscreen-bg');

  $('video').removeClass('fullscreen-bg_video-noColor');

  if (($('#hamburger-icon').ondblclick) === true) {
    console.log(exitSideNav);
  } else {
    openNav();
  }

});

//user clicks 'LOCATION'
//Side nav is hidden and video changes to white. Location items appear
//add class .hide-menu-item to #SidenavMenu and #nav-footer
//add class .navSlide-full
//remove class .fullscreen-bg and add class .fullscreen-bg-noColor to first body div where video is stored
//add class .fullscreen-bg_video-noColor to video
//add class .sidenav
//remove class .location-hide
//user clicks .sub-menu-nav items (TRANSPORT, ENTERTAINMENT, RECREATION, SURF-PICKS) map. Markers are displayed on the map.

  //user clicks logo to leave 'LOCATION'
  //page restore to first load appearance
  //add class .location-hide to #location
  //remove class .fullscreen-bg-noColor from first body div where video is stored add class .fullscreen-bg
  //remove class .fullscreen-bg_video-noColor from video

  //user clicks menu hamburger icon to escape 'LOCATION'
  //page restore to first load appearance with side nav
  //Call option 2. function if user double clicks call option 3. function
  //remove class .fullscreen-bg-noColor from first body div where video is stored add class .fullscreen-bg
  //remove class .fullscreen-bg_video-noColor from video

var styles = [
stylers: [
{ hue: '#8080ff' },
{ saturation: -20 }
]
}, {
  featureType: 'road',
  elementsType: 'geometry',
  stylers: [
  { lightness: 100 },
  {visibility: 'simplified' }
  ]
}, {
  featureType: 'road',
  elementsType: 'labels',
  stylers: [
  } visibility: 'off' }
  ]
   }
];

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -36.848629, lng: 174.737587},
    zoom: 8,
    zoomControl: false,
    fullScreenControl: true,
    styles: styles

    var marker = new google.mapsMarker ( {
      position: {lat: 40.8054491, lng: -73.9654415},
      map: map
    });
  });
}

//$.ajax ( {
  //type: "GET",
  //url: 'http://magicseaweed.com/api/YOURAPIKEY/forecast/?Piha-Surf-Report/90/',
  //success: function (response){
    //console.log(response);
  //},
  //complete: function () {
  //$('#surf-report' 'div').html("As of " + 2017-07-07);
  //}
//});

//user clicks 'CONTACT'
//side nav menu is hidden and contact items are displayed in the side nav
//add class .hide-menu-item to #SidenavMenu
//add class .selected to #contact 
      //opening hours in the nav footer will be hidden
      //add class .nav-footerButtonOnly to #nav-footer h2
//user can email directly by clicking email address
  //user can click either menu hamburger-icon or logo to escape 'CONTACT'


//user clicks 'OPENING HOURS'
//side nav menu is hidden and contact items are displayed in the side nav
//add class .hide-menu-item to #SidenavMenu
//add class .selected to #contact 
      //opening hours in the nav footer will be hidden
      //add class .nav-footerButtonOnly to #nav-footer h2
//user can email directly by clicking email address
  //user can click either menu hamburger-icon or logo to escape 'CONTACT'


//user clicks 'BOOK ONLINE' button
//Side nav is hidden and video changes to an image. Booking form (#bookings) items appear
//add class .hide-menu-item to #SidenavMenu and #nav-footer
//add class .navSlide-full
//remove class .fullscreen-bg and add class .fullscreen-bg-Changeout to first body div where video is stored
//add class .fullscreen-bg_video-Changeout to video
//add class .sidenav
//remove class .bookings-hide from #bookings

$('#form').on('submit', function(e) {
e.preventDefault ();

  var userInput = {
      $('#firstName').val(),
      $('#lastName').val(),
      $('#phone').val(),
      $('#email').val(),
      $('#guests').val(),
      $('#room').val(),
      $('#date').val(),
      $('#time').val(), 
      $('#comments').val();
  }

      $('#firstName').val('')
  var firstNameReference = database.ref ('comments');
    commentsReference.push ({
      firstName: userInput,
  })
      $('#lastName').val('')
  var lastNameReference = database.ref ('comments');
    commentsReference.push ({
      lastName: userInput,
  })
      $('#phone').val('')
  var phoneReference = database.ref ('comments');
    phoneReference.push ({
      phone: userInput,
  })
      $('#email').val('')
  var emailReference = database.ref ('comments');
    emailReference.push ({
      email: userInput,
  })
      $('#guests').val(''),
  var guestsReference = database.ref ('comments');
    guestsReference.push ({
      guests: userInput,
  })
      $('#room').val('')
  var roomReference = database.ref ('comments');
    roomReference.push ({
      room: userInput,
  })
      $('#date').val('')
  var dateReference = database.ref ('comments');
    dateReference.push ({
      date: userInput,
  })
      $('#time').val('')
  var timeReference = database.ref ('comments');
    timeReference.push ({
      time: userInput,
  }) 
      $('#comments').val('');

  var commentsReference = database.ref ('comments');
    commentsReference.push ({
      comments: userInput,
  })
});

function getComments() {
  database.ref('comments').on('value', function (results) {
    var lastComment = results.val();
    var comment = [],
  for (var item in lastComment) {
    var context = {
      comments: lastcomment[item].comments,
      commentsId: item
     };
    }

    var source = $('#booking-template').html;
    var template = handlebars.compile(source);
    var bookingElement = template(context);
    comments.push(bookingElement)

    }
    $('.comments').empty();

  for (var i in comments) {
    $('.comments').append(comments[i])
    }
  }

getComments();



//Option 4.
//user clicks 'OPENING HOURS' on the main page
//side nav opens and contact items are displayed. Call contact function.



//Option 5.
//user clicks 'BOOK ONLINE' on the main page
//Video changes to an image. Booking form (#bookings) items appear
//remove class .fullscreen-bg and add class .fullscreen-bg-Changeout to first body div where video is stored
//add class .fullscreen-bg_video-Changeout to video
//remove class .bookings-hide from #bookings



//Option 6.
//user clicks social buttons. User is redirected to social pages by links


