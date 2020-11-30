var $tabContainer=document.querySelector(".tab-container")
var $tabs = document.querySelectorAll(".tab")
var $views = document.querySelectorAll(".view")

$tabContainer.addEventListener("click", function(event){
  console.log(event.target)
  if (event.target.matches(".tab")){
    for (var i =0;i<$tabs.length;i++){
      if ($tabs[i]===event.target){
        $tabs[i].className="tab active"
      } else if ($tabs[i]!==event.target){
        $tabs[i].className="tab"
      }
    }
    var $dataViewValue=event.target.getAttribute("data-view")
    for (var i=0;i<$views.length;i++){
      if ($views[i].getAttribute("data-view")===$dataViewValue){
        $views[i].className="view"
      }else{
        $views[i].className="view hidden"
      }
    }
  }
})
