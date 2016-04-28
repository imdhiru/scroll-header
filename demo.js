$(window).scroll(function(){
var distanceY = window.pageYOffset || document.documentElement.scrollTop,
shrinkOn = 300,
body = document.querySelector(".custom-header");
if ($(this).scrollTop() > 10){
$('.custom-header').addClass("smaller");
}
else{
$('.custom-header').removeClass("smaller");
}
});
