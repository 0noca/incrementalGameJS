function save() {
    var save = {
        food: food,
    };

    localStorage.setItem("save", JSON.stringify(save));
};

function load() {
    var savegame = JSON.parse(localStorage.getItem("save"));
    if (typeof savegame.milk !== "undefined") milk = savegame.milk;
    if (typeof savegame.cursors !== "undefined") cursors = savegame.cursors;
    if (typeof savegame.prestige !== "undefined") prestige = savegame.prestige;
    if (typeof savegame.milkSpeed !== "undefined") milkSpeed = savegame.milkSpeed;
    if (typeof savegame.milkSpeedCounter !== "undefined") milkSpeedCounter = savegame.milkSpeedCounter;
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
