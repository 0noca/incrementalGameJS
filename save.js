function save() {
    var save = {
        food: food,
        tent: tent,
    };

    localStorage.setItem("save", JSON.stringify(save));
};

function load() {
    var savegame = JSON.parse(localStorage.getItem("save"));
    if (typeof savegame.food !== "undefined") food.total = food.total;
    if (typeof savegame.tent !== "undefined") tent.total = tent.total;    
};

window.onLoad = load();

function deleteGameData() {
    localStorage.removeItem("save")
    console.log("Deleted save game data")
    document.location.reload()
}

window.setInterval(function() {
    save();
    console.log("Game has been saved successfully")
},500);
