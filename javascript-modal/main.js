var $openButton = document.querySelector(".open-button")

var $noButton = document.querySelector(".no-button")

var $popUp = document.querySelector(".pop-up-content")

var $html = document.querySelector("html")

$openButton.addEventListener("click",function(){
  $popUp.className="pop-up"
  $html.className="dark"
  $openButton.className="open-button dark"
})

$noButton.addEventListener("click",function(){
  $popUp.className="pop-up-content"
  $html.className=""
  $openButton.className="open-button light"
})
