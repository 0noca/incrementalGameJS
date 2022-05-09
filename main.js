var milk = 0;
var cursors = 0;
var prestige = 0;

function milkClick(number){
    milk = milk + number;
    document.getElementById("milk").innerHTML = prettify(milk);
};

function prestigeCounter(number){
    cursors = cursors + number;
    document.getElementById("cursors").innerHTML = prettify(cursors);
};

function prettify(input) {
    var output = Math.round(input * 1000000)/1000000;
        return output;
}

function buyCursor() {
    var cursorCost = Math.floor(10 * Math.pow(1.1, cursors));

    if (milk >= cursorCost) {
        cursors = cursors + 1;
        milk = milk - cursorCost;
        document.getElementById("cursors").innerHTML = prettify(cursors); // Sets cursors element value as current cursors value
        document.getElementById("milk").innerHTML = prettify(milk); // Sets milks element value as current milks value    
    };

    var nextCost = Math.floor(10 * Math.pow(1.1, cursors));
    document.getElementById("cursorCost").innerHTML = nextCost;    
};

function buyPrestige() {
    var prestigeCost = Math.floor(50 * Math.pow(1.2, prestige));

    if (cursors >= prestigeCost) {
        prestige = prestige + 0.1;
        cursors = cursors - prestigeCost;
        document.getElementById("prestiges").innerHTML = prettify(prestige); 
        document.getElementById("milk").innerHTML = prettify(milk);  
    };

    var nextCostPrestige = Math.floor(50 * Math.pow(1.2, prestige));
    document.getElementById("prestigeCost").innerHTML = nextCostPrestige;
};

window.setInterval(function() {
    milkClick(cursors);
},250);

window.setInterval(function() {
    prestigeCounter(prestige);
},2000);