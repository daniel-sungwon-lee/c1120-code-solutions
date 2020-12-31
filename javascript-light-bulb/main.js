var numOfClicks=1
var $lightBulb = document.querySelector(".light-bulb")
var $background = document.querySelector("body")

$lightBulb.addEventListener("click",function(){
  numOfClicks++
  if (numOfClicks%2===0) {
    $lightBulb.className="light-bulb off"
    $background.className="background off"
  } else{
    $lightBulb.className="light-bulb on"
    $background.className="background on"
  }
})
