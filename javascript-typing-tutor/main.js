var $letters = document.querySelectorAll("span")
var $button = document.querySelector(".button.hidden")
var $message = document.querySelector(".congrats")

var i =0

document.addEventListener("keydown", function (e){
  if ((e.key===$letters[i].textContent)&&($letters[i].textContent!==" ")) {
    $letters[i].className = "letter correct"
    i++
    if(($letters[i].textContent!==" ")&&(i<30)){
      $letters[i].className = "letter border"
    }else if (i>=30){
      $button.className="button"
      $message.className="congrats"
    }else if ($letters[i].textContent===" "){
      $letters[i].className = "letter-space border"
    }
  } else if ((e.key!==$letters[i].textContent)&&($letters[i].textContent!==" ")){
    $letters[i].className = "letter incorrect border-incorrect"
  } else if ((e.key===$letters[i].textContent)&&($letters[i].textContent===" ")){
    $letters[i].className="letter-space"
    i++
    $letters[i].className="letter border"
  } else if ((e.key!==$letters[i].textContent)&&($letters[i].textContent===" ")){
    $letters[i].className="letter-space border"
  }
})
