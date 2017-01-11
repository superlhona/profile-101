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

});