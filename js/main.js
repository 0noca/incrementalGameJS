let wheat = {
    total:0,
    increment:1,
    growthTime:1000,
}

// Probability of earning X item
function probability(n) {
    return Math.random() < n;
};

//Rounds the output value to 2 decimal places
function prettify(input) {
    var output = Math.round(input * 1000000)/1000000;
        return output;
}

function earnWheat(){ 
    wheat.total = wheat.total + wheat.increment;
    document.getElementById("wheat").innerHTML = prettify(wheat.total);
};

window.onload = function(){
    document.getElementById("wheat").innerHTML = prettify(wheat.total);
}

