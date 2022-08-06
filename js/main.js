let wheat = {
    total:0,
    increment:1,
}

function load() {
        document.getElementById("wheat").innerHTML = prettify(wheat.total);  
};

window.onLoad = load();

function probability(n) {
    return Math.random() < n;
};

function prettify(input) {
    var output = Math.round(input * 1000000)/1000000;
        return output;
}

function earnWheat(){ 
        wheat.total = wheat.total + wheat.increment;
        document.getElementById("wheat").innerHTML = prettify(wheat.total);
};


// window.setInterval(function() {
//},1000);
