var $rows = document.querySelectorAll(".row")
var $dots= document.querySelectorAll(".fa-circle")
var $leftArrows=document.querySelectorAll(".fa-caret-left")
var $rightArrows=document.querySelectorAll(".fa-caret-right")

function carousel(){
  for (var i =0;i<$rows.length;i++){
    if (!($rows[i].matches(".hidden"))){
      var number=i
    }
  }
  if (number >= 0 && number < $rows.length - 1) {
    $rows[number].className = "hidden"
    $rows[number + 1].className = "row"
    number++
  } else if (number = $rows.length - 1) {
    $rows[number].className = "hidden"
    $rows[0].className = "row"
    number = 0
  }
}

var carouselStart =setInterval(carousel,3000)

document.addEventListener("click",function(event){
  for (var i =0;i<$leftArrows.length;i++){
    if (event.target === $leftArrows[i]) {
      if (event.target.closest(".row") === $rows[0]) {
        $rows[0].className = "hidden"
        $rows[$rows.length - 1].className = "row"
      } else if (event.target.closest(".row") !== $rows[0]) {
        var clickedRow = event.target.closest(".row")
        for (var i = 0; i < $rows.length; i++) {
          if (clickedRow === $rows[i]) {
            clickedRow.className = "hidden"
            $rows[i - 1].className = "row"
          }
        }
      }
    }
  }
  for (var i =0;i<$rightArrows.length;i++){
    if (event.target === $rightArrows[i]) {
      if (event.target.closest(".row") === $rows[$rows.length - 1]) {
        $rows[$rows.length - 1].className = "hidden"
        $rows[0].className = "row"
      } else if (event.target.closest(".row")!==$rows[$rows.length-1]){
        var clickedRow=event.target.closest(".row")
        for (var i =0;i<$rows.length;i++){
          if (clickedRow===$rows[i]){
            clickedRow.className="hidden"
            $rows[i+1].className="row"
          }
        }
      }
    }
  }
  for (var i =0;i<$dots.length;i++){
    if (event.target===$dots[i]){
      event.target.closest(".row").className="hidden"
      var dataView =event.target.getAttribute("data-view")
      var $row=document.getElementById(dataView)
      $row.className="row"
    }
  }
})
