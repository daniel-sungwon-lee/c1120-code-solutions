var $taskList = document.querySelector(".task-list")

$taskList.addEventListener("click",function(){
  console.log("event.target:",event.target)
  console.log("event.target.tagName:",event.target.tagName)
  if (event.target.matches("button")){
    var parent = event.target.closest(".task-list-item")
    console.log("closest .task-list-item:",parent)
    parent.remove()
  }
})
