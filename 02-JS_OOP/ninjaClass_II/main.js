//Ninja Class
function Ninja(name){
    this.name = name;       //Public
    this.health = 100;      //Public with default 100
    const speed = 3;        //Private with default 3
    const strength = 3;     //Private with default 3

    this.showStats = function() { 
        console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + speed + ", Strength: " + strength); 
        return this; 
    } 
    
    this.kick = function(ninja) { 
        const damage = strength * 5; 
        ninja.health -= damage;             
        console.log(ninja.name + " was kicked by " + this.name + " and lost " + damage + " Health!"); 
        return this; 
    }
}

Ninja.prototype.punch = function(ninja) { 
    ninja.health -= 5; 
    console.log(ninja.name + " was punched by " + this.name + " and lost 5 Health!"); 
    return this; 
    } 

Ninja.prototype.sayName = function() { 
    console.log("My name is " + this.name); 
    return this; 
} 

Ninja.prototype.drinkSake = function() { 
    this.health += 10; 
    return this; 
} 

var blueNinja = new Ninja("Goemon");
var redNinja = new Ninja("Bill Gates");

blueNinja.sayName(); 
redNinja.sayName(); 

blueNinja.punch(redNinja); 
redNinja.kick(blueNinja); 

blueNinja.showStats(); 
redNinja.showStats();


