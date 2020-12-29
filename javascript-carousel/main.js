var $section = document.querySelector(".container")

var imgArr = ["./images/004.png", "./images/007.png", "./images/001.png", "./images/025.png", "./images/039.png"]

function renderRow(imgArr){
  var $divRow = document.createElement("div")
  $divRow.setAttribute("class","row")

  var $divImg = document.createElement("div")
  $divRow.appendChild($divImg)

  var $img=document.createElement("img")
  $img.setAttribute("class","image")
  $img.setAttribute("src",imgArr)
  $divImg.appendChild($img)

  var $divDots=document.createElement("div")
  $divDots.setAttribute("class","dots")
  $divRow.appendChild($divDots)

  var $dot1=document.createElement("i")
  $dot1.setAttribute("class","far fa-circle")
  $dot1.setAttribute("id","dot-1")
  $divDots.appendChild($dot1)

  var $dot2 = document.createElement("i")
  $dot2.setAttribute("class", "far fa-circle")
  $dot2.setAttribute("id","dot-2")
  $divDots.appendChild($dot2)

  var $dot3 = document.createElement("i")
  $dot3.setAttribute("class", "far fa-circle")
  $dot3.setAttribute("id","dot-3")
  $divDots.appendChild($dot3)

  var $dot4 = document.createElement("i")
  $dot4.setAttribute("class", "far fa-circle")
  $dot4.setAttribute("id","dot-4")
  $divDots.appendChild($dot4)

  var $dot5 = document.createElement("i")
  $dot5.setAttribute("class", "far fa-circle")
  $dot5.setAttribute("id","dot-5")
  $divDots.appendChild($dot5)

  var $divLeftArrow=document.createElement("div")
  $divLeftArrow.setAttribute("class","left-arrow")
  $divRow.appendChild($divLeftArrow)

  var $arrowLeft=document.createElement("i")
  $arrowLeft.setAttribute("class","fas fa-caret-left")
  $arrowLeft.setAttribute("id","arrow-left")
  $divLeftArrow.appendChild($arrowLeft)

  var $divRightArrow=document.createElement("div")
  $divRightArrow.setAttribute("class","right-arrow")
  $divRow.appendChild($divRightArrow)

  var $arrowRight=document.createElement("i")
  $arrowRight.setAttribute("class","fas fa-caret-right")
  $arrowRight.setAttribute("id","arrow-right")
  $divRightArrow.appendChild($arrowRight)

  return $divRow
}

function carousel() {
  for (var i = 0; i < imgArr.length; i++) {
    if (document.querySelector("img").getAttribute("src") === imgArr[i]) {
      var num = i+1
    }
  }

  $section.firstElementChild.remove()

  if (num<imgArr.length){
    $section.appendChild(renderRow(imgArr[num]))

    var $dots = document.querySelectorAll(".fa-circle")
    $dots[num].className="fas fa-circle"
    num++
  } else {
    num=0
    $section.appendChild(renderRow(imgArr[num]))

    var $dots = document.querySelectorAll(".fa-circle")
    $dots[num].className="fas fa-circle"
    num++
  }
}

var carouselStart=setInterval(carousel,3000)

document.addEventListener("DOMContentLoaded",function(event){
  $section.appendChild(renderRow(imgArr[0]))

  var $dot = document.querySelector(".fa-circle")
  $dot.className="fas fa-circle"
})

document.addEventListener("click",function(event){
  if (event.target.matches("#arrow-left")){
    for (var i = 0; i < imgArr.length; i++) {
      if (document.querySelector("img").getAttribute("src") === imgArr[i]) {
        if (i>0){
          var num = i - 1
        }else if (i===0){
          var num =imgArr.length-1
        }
      }
    }

    $section.firstElementChild.remove()

    $section.appendChild(renderRow(imgArr[num]))

    var $dots = document.querySelectorAll(".fa-circle")
    $dots[num].className = "fas fa-circle"

  }else if (event.target.matches("#arrow-right")){
    for (var i = 0; i < imgArr.length; i++) {
      if (document.querySelector("img").getAttribute("src") === imgArr[i]) {
        if (i < imgArr.length-1) {
          var num = i + 1
        } else if (i >=imgArr.length-1) {
          var num = 0
        }
      }
    }

    $section.firstElementChild.remove()

    $section.appendChild(renderRow(imgArr[num]))

    var $dots = document.querySelectorAll(".fa-circle")
    $dots[num].className = "fas fa-circle"

  }else if (event.target.matches("#dot-1")){
    $section.firstElementChild.remove()
    $section.appendChild(renderRow(imgArr[0]))

    var $dots = document.querySelectorAll(".fa-circle")
    $dots[0].className = "fas fa-circle"

  }else if (event.target.matches("#dot-2")){
    $section.firstElementChild.remove()
    $section.appendChild(renderRow(imgArr[1]))

    var $dots = document.querySelectorAll(".fa-circle")
    $dots[1].className = "fas fa-circle"

  }else if (event.target.matches("#dot-3")){
    $section.firstElementChild.remove()
    $section.appendChild(renderRow(imgArr[2]))

    var $dots = document.querySelectorAll(".fa-circle")
    $dots[2].className = "fas fa-circle"

  }else if (event.target.matches("#dot-4")){
    $section.firstElementChild.remove()
    $section.appendChild(renderRow(imgArr[3]))

    var $dots = document.querySelectorAll(".fa-circle")
    $dots[3].className = "fas fa-circle"

  }else if (event.target.matches("#dot-5")){
    $section.firstElementChild.remove()
    $section.appendChild(renderRow(imgArr[4]))

    var $dots = document.querySelectorAll(".fa-circle")
    $dots[4].className = "fas fa-circle"
  }
})
