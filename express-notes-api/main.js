const $ul=document.querySelector("ul")

document.addEventListener("DOMContentLoaded",(event)=>{
  getNotes()
})

document.addEventListener("submit",(event)=>{
  event.preventDefault()
  console.log(event.target.elements.search.value)
})

document.addEventListener("click",(event)=>{
  if (event.target.matches("#edit")){
    console.log("edit")
  }else if(event.target.matches("#delete")){
    console.log("del")
  }

})
