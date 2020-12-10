var $h1=document.querySelector("h1")

var countDownInt=setInterval(function(number){
  number=$h1.textContent
  if (number>1){
    number--
    $h1.textContent=number
  }else{
    $h1.textContent="~Earth Beeeelooowww Us~"
    clearInterval(countDownInt)
  }
},1000)
