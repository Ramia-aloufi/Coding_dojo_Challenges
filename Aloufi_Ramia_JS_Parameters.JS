
var time = new Date().toLocaleTimeString()

function sayingHy(name){
    if(name == "Count Dooku"){
        console.log("I'm coming for you, Dooku!")
    }else{
        console.log("Good day,"+ name+"!")
    }
console.log("It's a "+time)
}

sayingHy("Ram")
sayingHy("Count Dooku")