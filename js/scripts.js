$(document).ready(function() {
  console.log($("#hidden")[0].outerHTML)
  $(".clickable").click(function() {
    $("#hidden").toggle();
    $("#appear").toggle();
  });
});
