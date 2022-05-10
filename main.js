var food = {
    total:0,
    increment:1,
    specialChance:0.1,
}

var skins = {
    total: 0,
}

var tent = {
    total:0,
    maxPopulation:1,
    require: {
        food:2,
        skins:2,
    }
}

var population = {
    farmers:0,
    woodcutters:0,
    miners:0,    
}

var worker = {
    total:0,
    require: {
        food: 20,
    }
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

function load() {
    document.getElementById("tent").innerHTML = prettify(tent.total);
    document.getElementById("food").innerHTML = prettify(food.total);     
};

window.onLoad = load();

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

function craftTent(){
    if (food.total && skins.total >= tent.require.food && tent.require.skins){
        tent.total = tent.total + 1
        skins.total = skins.total - tent.require.skins
        food.total = food.total - tent.require.food

        console.log("Crafted a tent")
        document.getElementById("tent").innerHTML = prettify(tent.total);
        document.getElementById("food").innerHTML = prettify(food.total);
    } else
        console.log("You don't have enough materials to craft a tent");
};

function createWorker(){

};
/*
function earnWood(number){
    wood = wood + number;
    document.getElementById("wood").innerHTML = prettify(wood);
};

function earnStone(number){
    stone = stone + number;
    document.getElementById("stone").innerHTML = prettify(stone);
}; */