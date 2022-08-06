function save() {
    localStorage.setItem("wheat", wheat.total);
}

window.setInterval(function() {
    save();
} ,1000);

function load() {
    wheat.total = localStorage.getItem("wheat");
    document.getElementById("wheat").innerHTML = prettify(wheat.total);
}

window.onLoad = load();



