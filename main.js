var milk = 0;
var cursors = 0;
var prestige = 0;

function milkClick(number){
    milk = milk + number;
    document.getElementById("milk").innerHTML = prettify(milk);
};

function prestigeCounter(number){
    cursors = cursors + number;
    document.getElementById("cursors").innerHTML = cursors;
};

function prettify(input) {
    var output = Math.round(input * 1000000)/1000000;
        return output;
}

function buyCursor() {
    var cursorCost = Math.floor(10 * Math.pow(1.01, cursors));

    if (milk >= cursorCost) {
        cursors = cursors + 1; // Increment cursors counter by 1
        milk = milk - cursorCost; // Decrements milks value by cursorCost
        document.getElementById("cursors").innerHTML = cursors; // Sets cursors element value as current cursors value
        document.getElementById("milk").innerHTML = prettify(milk); // Sets milks element value as current milks value    
    };

    var nextCost = Math.floor(10 * Math.pow(1.1, cursors));
    document.getElementById("cursorCost").innerHTML = nextCost;    
};

function buyPrestige() { // BuyPrestige Button function
    var prestigeCost = Math.floor(100 * Math.pow(1.1, prestige));

    if (milk >= prestigeCost) {
        prestige = prestige + 1;
        milk = milk - prestigeCost;
        document.getElementById("prestiges").innerHTML = prestige; 
        document.getElementById("milk").innerHTML = prettify(milk);  
    };

    var nextCostPrestige = Math.floor(100 * Math.pow(1.1, prestige));
    document.getElementById("prestigeCost").innerHTML = nextCostPrestige;    
};

window.setInterval(function() {
    milkClick(cursors);
},100);

window.setInterval(function() {
    prestigeCounter(prestige);
},1000);