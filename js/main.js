$(".can-play").on("click", function () {
  $(".sub__can-play").toggleClass("show");
});
$(".how-will").on("click", function () {
  $(".sub__how-will").toggleClass("show");
});
$(".save-play").on("click", function () {
  $(".sub__save-play").toggleClass("show");
});
new WOW().init();
