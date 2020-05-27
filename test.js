var Animal = function(name){
        this.name = name
    }

var objAnimal = new Animal('Mottu')

console.log(objAnimal.name)

var Rabbit = function(isRabit){	
    this.isRabit = isRabit
}

Rabbit.prototype = objAnimal
var objRabbit = new Rabbit(true)


console.log(JSON.stringify(objRabbit))

//objRabbit.name = "Meetu"
console.log(objRabbit.name)
var longEar = {hasLongEar:true}
longEar.__proto__ = objRabbit
console.log("obj:longear",longEar.name)
