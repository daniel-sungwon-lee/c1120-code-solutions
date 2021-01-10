const $ul=document.querySelector("ul")

function getNotes(){
  const xhr = new XMLHttpRequest()
  xhr.open("GET","http://localhost:3000/api/notes/")
  xhr.setRequestHeader("Accept","*/*")
  xhr.addEventListener("load",()=>{
    const data= JSON.parse(xhr.response)

    for (let i=0;i<data.length;i++){
      const $li = document.createElement("li")
      $li.className="list-group-item"
      $li.textContent=data[i].content

      $ul.appendChild($li)
    }
  })
  xhr.send()
}

document.addEventListener("DOMContentLoaded",(event)=>{
  getNotes()
})
