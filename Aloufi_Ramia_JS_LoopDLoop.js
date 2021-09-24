//How do we know we need a loop here? 
//cause there a limit to 6 and increment

//What's the starting point of the loop?
//while(mailes < 6){

//When should the loop stop?
//when mailes == 6

//What's the incrementing for each iteration of the loop?
//mailes += mailes

//What variables do we need?
//var mailes = 0;


var mailes = 0;
var date = new Date()

var nowTime = date.toLocaleTimeString('en-US', { hour12: false, 
    hour: "numeric", 
    minute: "numeric"})
var hour = date.getHours() + 1
var minute  = date.getMinutes()
var arriveTime = hour + ":" + minute






   while(mailes < 6){
       if(mailes == 2 || (mailes == 5.5 && nowTime == arriveTime)){
        console.log("Caandy");
       }
       mailes += 1

   }



