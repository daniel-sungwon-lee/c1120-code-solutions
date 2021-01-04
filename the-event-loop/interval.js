let count =3

const countDown = setInterval(()=>{
  if (count>0){
    console.log(count)
    count--
  } else if (count===0){
    console.log("Blast off!")
    clearInterval(countDown)
  }
},1000)
