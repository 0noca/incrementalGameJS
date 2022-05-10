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
};

var maxPopulationAmount = 1

function populationCalculator(){
    maxPopulationAmount = maxPopulationAmount + (tent.total * tent.maxPopulation)
};
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
    document.getElementById("workers").innerHTML = prettify(worker.total);
};

window.onLoad = load();

function probability(n) {
    return Math.random() < n;
};

function prettify(input) {
    var output = Math.round(input * 1000000)/1000000;
        return output;
}

function earnFood(){ // Loon funktsiooni, mida saab kutsuda tulevikus
    if(probability(food.specialChance)) { // Kui tõenaosus on 0.1, siis teeb midagi
        skins.total = skins.total + 1 // Teenid ühe naha, kui see juhtub
        console.log("You got a skin") // Kirjutab konsooli, et said naha
    } else // Kui tõenaosus ei ole veel 0.1, siis teeb hoopis seda
        food.total = food.total + food.increment; // Lisab toidule 1 toidu
        document.getElementById("food").innerHTML = prettify(food.total); // Kirjutab ekraanile toidu summa
};

function craftTent(){
    if (food.total && skins.total >= tent.require.food && tent.require.skins){
        tent.total = tent.total + 1
        skins.total = skins.total - tent.require.skins
        food.total = food.total - tent.require.food
        populationCalculator()

        console.log("Crafted a tent")
        document.getElementById("tent").innerHTML = prettify(tent.total);
        document.getElementById("food").innerHTML = prettify(food.total);
    } else
        console.log("You don't have enough materials to craft a tent");
};

function createWorker(){
    if (maxPopulationAmount > worker.total){
        if (food.total >= worker.require.food) {
            worker.total = worker.total + 1;
            food.total = food.total - 20;
            document.getElementById("food").innerHTML = prettify(food.total);
            document.getElementById("workers").innerHTML = prettify(worker.total);
        } else
        console.log("You don't have enough food! Go gather some more");
    } else 
    console.log("You don't have enough room to house these people");    
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