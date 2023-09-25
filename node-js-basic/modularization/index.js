const Tiger = require("./Tiger.js")
const Wolf = require("./Wolf.js")
 
const fighting = (tiger, wolf) => {
  console.log("Kekuatan Tiger",tiger.strength)
  console.log("Kekuatan Wolf",wolf.strength)  
  if(tiger.strength > wolf.strength) {
    tiger.growl();
    return;
  }
 
  if(wolf.strength > tiger.strength) {
    wolf.howl();
    return;
  }
 
  console.log('Tiger and Wolf have same strength');
}
 
const tiger = new Tiger();
const wolf = new Wolf();
 
fighting(tiger, wolf);