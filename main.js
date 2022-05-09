var food = {
    total:0,
    increment:1,
    specialChance:0.1,
}

var skins = {
    total: 0,
}

/*
var wood = 0;
var stone = 0;

var skins = 0;
var herbs = 0;
var ore = 0;
var leather = 0;
var piety = 0;
var metal = 0;
*/

var tent = {
    total:0,
    require: {
        wood:2,
        skins:2,
    }
}

function probability(n) {
    return Math.random() < n;
};

function prettify(input) {
    var output = Math.round(input * 1000000)/1000000;
        return output;
}

function earnFood(){
    if(probability(food.specialChance)) {
        skins.total = skins.total + 1
        console.log("You got a skin")
    } else
        food.total = food.total + food.increment;
        document.getElementById("food").innerHTML = prettify(food.total);
};

function createBUilding

/*
function earnWood(number){
    wood = wood + number;
    document.getElementById("wood").innerHTML = prettify(wood);
};

function earnStone(number){
    stone = stone + number;
    document.getElementById("stone").innerHTML = prettify(stone);
};*/