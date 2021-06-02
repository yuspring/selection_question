$(document).ready(function () {
  let response = 0;

  $(".not-selected").on("click", function (event) {
    if ($(event.target).is(".not-selected")) {
      $(".selected").addClass("not-selected");
      $(".selected").removeClass("selected");
      $(event.target).addClass("selected");
      $(event.target).removeClass("not-selected");

      for (let i = 1; i <= 4; i++) {
        if ($(event.target).is(`#select-${i}`)) response = i;
      }
    }
  });

  $("#button").on("click", function () {
    switch (response) {
      case 0:
        swal("", "你還未選取答案，請先選取答案", "error");
        break;
      case 1:
      case 2:
      case 3:
        swal("", "答案錯了喔", "error");
        break;
      case 4:
        swal("", "正確答案", "success");
        break;
    }
  });
});
