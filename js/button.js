
$(document).ready(function () {
  let res = 0;
  $(".not-selected").on("click", function (event) {

    if ($(event.target).is(".not-selected")) {
      $(".selected").addClass("not-selected");
      $(".selected").removeClass("selected");
      $(event.target).addClass("selected");
      $(event.target).removeClass("not-selected");

      for (let i = 1; i <= 4; i++) {
        if ($(event.target).is(`#select-${i}`)) res = i;
      }
    }

  })

  $(".button").on("click", function () {
      
    if (res == 0) {
      swal.fire({
        title: '你還未選取答案，請先選取答案',
        icon: 'error',
        background: '#ECF5FF',
        backdrop: `rgba(255,255,255,0)`
      })
    }
    else if (res >= 1 && res <= 3) {
      swal.fire({
        title: '答案錯了喔',
        icon: 'error',
        background: '#ECF5FF',
        backdrop: `rgba(255,255,255,0)`
      })
    }
    else if (res == 4) {
      swal.fire({
        title: '正確答案',
        icon: 'success',
        background: '#ECF5FF',
        backdrop: `rgba(255,255,255,0)`
      })
    }
  })

})
