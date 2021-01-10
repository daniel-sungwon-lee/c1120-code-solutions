const $ul=document.querySelector("ul")

function getNotes(){
  const xhr = new XMLHttpRequest()
  xhr.open("GET","http://localhost:3000/api/notes")
  xhr.setRequestHeader("Accept","*/*")
  xhr.addEventListener("load",()=>{
    const data= xhr.response

    for (let i=0;i<data.length;i++){

      const $divLi=document.createElement("div")
      $divLi.className="d-flex align-items-center"
      $ul.appendChild($divLi)

      const $li = document.createElement("li")
      $li.className="rounded-pill list-group-item text-center"
      $li.textContent=data[i].content
      $divLi.appendChild($li)

      const $editA = document.createElement("a")
      $editA.className="mx-2 ml-3 text-muted"
      $editA.setAttribute("href","#")
      $divLi.appendChild($editA)

      const $iconEdit=document.createElement("i")
      $iconEdit.className="fas fa-pen"
      $iconEdit.setAttribute("id","edit")
      $editA.appendChild($iconEdit)

      const $deleteA = document.createElement("a")
      $editA.className = "mx-1 text-danger"
      $editA.setAttribute("href", "#")
      $divLi.appendChild($deleteA)

      const $iconDel=document.createElement("i")
      $iconDel.className="far fa-times-circle"
      $iconDel.setAttribute("id","delete")
      $deleteA.appendChild($iconDel)
    }
  })
  xhr.send()
}

document.addEventListener("DOMContentLoaded",(event)=>{
  getNotes()
})

document.addEventListener("submit",(event)=>{

})

document.addEventListener("click",(event)=>{
  if (event.target.matches("#edit")){
    console.log("edit")
  }else if(event.target.matches("#delete")){
    console.log("del")
  }

})
