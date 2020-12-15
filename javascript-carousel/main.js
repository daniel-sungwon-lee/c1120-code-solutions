var $section = document.querySelector(".container")
var $rows = document.querySelectorAll(".row")
var $dots= document.querySelectorAll(".fa-circle")
var $leftArrows=document.querySelectorAll(".fa-caret-left")
var $rightArrows=document.querySelectorAll(".fa-caret-right")

var imgArr = ["./images/004.png", "./images/007.png", "./images/001.png", "./images/025.png", "./images/039.png"]

function renderRow(imgArr){
  $divRow = document.createElement("div")
  $divRow.setAttribute("class","row")

  $divImg = document.createElement("div")
  $divRow.appendChild($divImg)

  $img=document.createElement("img")
  $img.setAttribute("class","image")
  $img.setAttribute("src",imgArr)
  $divImg.appendChild($img)

  $divDots=document.createElement("div")
  $divDots.setAttribute("class","dots")
  $divRow.appendChild($divDots)

  $dot=document.createElement("i")
  $dot.setAttribute("class","far fa-circle")
  $divDots.appendChild($dot)

  $dot = document.createElement("i")
  $dot.setAttribute("class", "far fa-circle")
  $divDots.appendChild($dot)

  $dot = document.createElement("i")
  $dot.setAttribute("class", "far fa-circle")
  $divDots.appendChild($dot)

  $dot = document.createElement("i")
  $dot.setAttribute("class", "far fa-circle")
  $divDots.appendChild($dot)

  $dot = document.createElement("i")
  $dot.setAttribute("class", "far fa-circle")
  $divDots.appendChild($dot)

  $divLeftArrow=document.createElement("div")
  $divLeftArrow.setAttribute("class","left-arrow")
  $divRow.appendChild($divLeftArrow)

  $arrowLeft=document.createElement("i")
  $arrowLeft.setAttribute("class","fas fa-caret-left")
  $divLeftArrow.appendChild($arrowLeft)

  $divRightArrow=document.createElement("div")
  $divRightArrow.setAttribute("class","right-arrow")
  $divRow.appendChild($divRightArrow)

  $arrowRight=document.createElement("i")
  $arrowRight.setAttribute("class","fas fa-caret-right")
  $divRightArrow.appendChild($arrowRight)

  return $divRow
}

function newCarousel(){
  while (){

  }
}


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
