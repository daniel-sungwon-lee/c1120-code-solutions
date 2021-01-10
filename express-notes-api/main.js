const $ul=document.querySelector("ul")

function getNotes(){
  const xhr = new XMLHttpRequest()
  xhr.open("GET","http://localhost:3000/api/notes/")
  xhr.setRequestHeader("Accept","*/*")
  xhr.addEventListener("load",()=>{
    const data= JSON.parse(xhr.response)
    let {notes}=data

    const notesArray=Object.values(notes)
    let contentArr=[]
    for (let i =0;i<notesArray.length;i++){
      contentArr.push(notesArray[i].content)
    }

    for (let i=0;i<contentArr.length;i++){
      const $li = document.createElement("li")
      $li.className="list-group-item"
      $li.textContent=contentArr[i]

      $ul.appendChild($li)
    }
  })
  xhr.send()
}

document.addEventListener("DOMContentLoaded",(event)=>{
  getNotes()
})
