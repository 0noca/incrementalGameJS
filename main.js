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

var maxPopulationAmount
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
    document.getElementById("farmers").innerHTML = prettify(population.farmers);
    document.getElementById("skins").innerHTML = prettify(skins.total);
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
        document.getElementById("skins").innerHTML = prettify(skins.total);
    } else 
        food.total = food.total + food.increment;
        document.getElementById("food").innerHTML = prettify(food.total); // Kirjutab ekraanile toidu summa
};

function craftTent(){   
        if (food.total && skins.total >= tent.require.food && tent.require.skins){
            tent.total = tent.total + 1
            skins.total = skins.total - tent.require.skins
            food.total = food.total - tent.require.food

            console.log("Crafted a tent")
            document.getElementById("tent").innerHTML = prettify(tent.total);
            document.getElementById("food").innerHTML = prettify(food.total);
            document.getElementById("skins").innerHTML = prettify(skins.total);
            maxPopulationAmount = 1 + (tent.total * tent.maxPopulation)
            return maxPopulationAmount
        } else
            console.log("You don't have enough materials to craft a tent");
};

function createWorker(){
    var totalWorker = worker.total + population.farmers
        if (maxPopulationAmount > totalWorker){
            if (food.total >= worker.require.food) {
                worker.total = worker.total + 1;
                food.total = food.total - 20;
                document.getElementById("food").innerHTML = prettify(food.total);
                document.getElementById("workers").innerHTML = prettify(worker.total);
                document.getElementById("skins").innerHTML = prettify(skins.total);
            } else console.log("You don't have enough food! Go gather some more");
        } else console.log("You don't have enough room to house these people");    
};

function addFarmer(){
    if( worker.total >= 1 ){
        population.farmers = population.farmers + 1;
        worker.total = worker.total - 1;
        document.getElementById("farmers").innerHTML = prettify(population.farmers);
        document.getElementById("workers").innerHTML = prettify(worker.total)
    } else console.log("You don't have enough workers to assign a farmer");
};

function removeFarmer(){
    if( worker.total >= 1 ){
        population.farmers = population.farmers - 1;
        worker.total = worker.total + 1;
        document.getElementById("farmers").innerHTML = prettify(population.farmers);
        document.getElementById("workers").innerHTML = prettify(worker.total);
    } else console.log("You can't remove a farmer if you don't have any");
};

function doFarmer (){
    var specialChance = food.specialChance + (0.05 * population.farmers);

    if (population.farmers >= 1) {
        food.total = food.total + (0.1 * population.farmers)
        document.getElementById("food").innerHTML = prettify(food.total);
    };

    if(probability(specialChance)) {
        skins.total = skins.total + 1
        document.getElementById("skins").innerHTML = prettify(skins.total);
    };
};

window.setInterval(function() {
    if(population.farmers >=1) {
        doFarmer()
    };
},1000);

/*
function earnWood(number){
    wood = wood + number;
    document.getElementById("wood").innerHTML = prettify(wood);
};

function earnStone(number){
    stone = stone + number;
    document.getElementById("stone").innerHTML = prettify(stone);
}; */