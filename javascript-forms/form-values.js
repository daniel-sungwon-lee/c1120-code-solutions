var $contactForm = document.querySelector("#contact-form")

var object ={}

$contactForm.addEventListener("submit" ,function(event){
  event.preventDefault()
  object.name=$contactForm.elements.name.value
  object.email=$contactForm.elements.email.value
  object.message=$contactForm.elements.message.value
  console.log("message data:",object)
  $contactForm.reset()
})
