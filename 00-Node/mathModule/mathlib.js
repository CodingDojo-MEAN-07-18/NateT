module.exports = function(){
    return {
        add: function(a, b){            
            console.log(a+b);
        },
        multiply: function(a, b){
            console.log(a * b);
        },
        square: function(a){
            console.log(a * a);
        },
        random: function(a, b){
            var x = Math.floor((Math.random() * b) + a);
            console.log(x);
        }
    }
}