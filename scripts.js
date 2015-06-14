var map;
var ybfLoc = new google.maps.LatLng(-37.82397,144.991078);

function initialize() {

  // styling the map
  var styles = [
    {},
    {
      featureType: 'poi',
      elementType: 'labels',
      stylers: [
        { visibility: 'off' }
      ]
    }
  ];

  // map options
  var mapOptions = {
    zoom: 16,
    minZoom: 14,
    center: ybfLoc,
    disableDefaultUI: true,
    zoomControl: true,
    scrollwheel: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: styles,
  };

  // create map
  map = new google.maps.Map(document.getElementById("map-canvas"),
      mapOptions);

  // create marker
  var marker = new google.maps.Marker({
      position: ybfLoc,
      map: map,
      title: 'Inspire9'
  });

};

google.maps.event.addDomListener(window, "load", initialize);


$(function() {

  var b = "#unihack-nav-btn";
  var c = "#nav-list ul";

  $(b).click(function() {
    if(!$(b).hasClass("active")) {
      $(b).addClass("active");
      $(c).slideDown(100, function() {
        $(c).addClass("active");
      });
    } else {
      $(c).slideUp(100, function() {
        $(c).removeClass("active");
        $(b).removeClass("active");
      });
    }
    return false;
  });

  $("#nav-list ul li a[href^='#']").on('click', function(e) {
     e.preventDefault();
     var hash = this.hash;
     $('html, body').animate({
         scrollTop: $(hash).offset().top
       }, 300, function(){
         window.location.hash = hash;
       });

  });

  $('#accordion').on('show.bs.collapse', function () {
    if (active) $('#accordion .in').collapse('hide');
  });
});
