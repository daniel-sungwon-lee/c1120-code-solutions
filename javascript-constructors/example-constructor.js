function ExampleConstructor(){}
console.log("value of ExampleConstructor.prototype:",ExampleConstructor.prototype)

var newExampleConstructor = new ExampleConstructor()
console.log("value of newExampleConstructor:",newExampleConstructor)

var instanceofNewExampleConstructor =newExampleConstructor instanceof ExampleConstructor
console.log("value of instanceofNewExampleConstructor:", instanceofNewExampleConstructor)
