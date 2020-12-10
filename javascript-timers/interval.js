var $h1=document.querySelector("h1")

setInterval(function(number){
  number=$h1.textContent
  if (number>1){
    number--
    $h1.textContent=number
  }else{
    $h1.textContent="~Earth Beeeelooowww Us~"
  }
},1000)
