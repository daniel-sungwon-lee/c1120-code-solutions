var $userList = document.querySelector("#user-list")


var xhr = new XMLHttpRequest()
xhr.open("GET", "https://jsonplaceholder.typicode.com/users")
xhr.responseType = "JSON"
xhr.addEventListener("load", function () {
  console.log(xhr.status)
  console.log(xhr.response)
  var dataArr = JSON.parse(xhr.response)
  console.log(dataArr)
  for (var i = 0; i < dataArr.length; i++) {
    var $li = document.createElement("li")
    $li.textContent = dataArr[i].name
    $userList.append($li)
  }
})
xhr.send()
