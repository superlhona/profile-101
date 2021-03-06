 $(document).ready(function(){

  // navbar
  $(window).scroll(function(){
    if($(window).scrollTop() > 300 && $("nav").css("position") != "fixed"){
      $("nav").hide(function(){
        $("nav").css("position", "fixed");
        $("nav").css("background-color", "#9B6D5C");
        $("nav").css("width", "100%");
        $("nav").css("z-index", "1999");
        $("ul").css("float", "right");
        $("nav").slideDown('200');
      });
    } else if($(window).scrollTop() <= 300 ){
      $("nav").css("position", "initial");
      $("nav").css("background-color", "initial");
      $("nav").css("width", "initial");
    }
  });

  // flicker images
  var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";

  $.getJSON( flickerAPI, {
    tags: "illonafedora",
    tagmode: "any",
    format: "json"
  })

  .done(function( data ) {
    $.each( data.items, function( i, item ) {

      // gallery
      $( "<img>" ).attr( "src", item.media.m.replace('_m', '_n') ).addClass("flickrimage").appendTo("#images");

      // background page 1
      var randomPhoto = data.items[Math.floor(Math.random() * data.items.length)];  

        $("#page1").css({
          position: "relative",
          height: "100vh",
          backgroundImage: "url("+randomPhoto.media.m.replace('_m', '_b')+")",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        });
    });

    // max length photo
    var n = $(".flickrimage").length;
      if (n > 6 ) {
        $(".next").show();
      } else {
        $(".next").hide();
      }
  });

});